class Color {
    constructor(_this) {
        this.r = Math.floor(_this.random() * 200);
        this.g = Math.floor(_this.random() * 200);
        this.b = Math.floor(_this.random() * 200);
        this.t = 1;
    }

    rgba() {
        return `rgba(${this.r},${this.g},${this.b},${this.t})`;
    }
}

/*
  @param {Number}  width of the image
  @param {Number}  height of the image

  Properties:
    fillStyle {css colour}  color of the generated image
*/

class GIXI {
    constructor(w = 60, seed = Math.random()) {
        this.w = w;
        this.h = w; //h;

        this.PARTITIONS = 3;
        this.LESS_SEED = 6;

        this.BASE_SEED = 5;
        this.SEED_H = this.h / this.BASE_SEED;
        this.SEED_W = this.w / this.BASE_SEED;

        this.random_seed = 0;
        seed = seed.toString();
        for(let i=0; i<seed.length; i++)
            this.random_seed += seed.charCodeAt(i);
    }

    random() {
        this.random_seed = Math.sin(this.random_seed * 34812 + 0.3);
        return Math.abs(this.random_seed);
    }

    getImage() {
        let element = document.createElement('canvas');
        let imageData = null;
        element.width = this.w;
        element.height = this.h;

        if (!element && !element.getContext)
            throw new Error('Canvas does not supported');

        this.drw = element.getContext('2d');
        this.drw.fillStyle = this.fillStyle || new Color(this).rgba();
        this.map(this.grid());

        imageData = element.toDataURL();

        element = null;
        return imageData;
    }

    draw() {
        this.drw.fillRect.apply(this.drw, arguments);
    }

    map(grid) {
        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[y].length; x++) {

                if (grid[y][x] === true) {
                    this.draw(this.SEED_H * y, this.SEED_W * x, this.SEED_W, this.SEED_H);
                    if (y < (this.PARTITIONS - 1)) {
                        this.draw(this.SEED_H * ((this.PARTITIONS + 1) - y), this.SEED_W * x, this.SEED_W, this.SEED_H);
                    }
                }

            }
        }
    }

    grid() {
        let makeMap = () => {
            let map = [];

            for (let y = 0; y < this.PARTITIONS; y++) {
                map[y] = [];
                for (let x = 0; x < this.BASE_SEED; x++) {
                    map[y][x] = !!Math.floor(this.random() * 2);
                }
            }

            map[this.PARTITIONS - 1] = map[this.PARTITIONS - 1].map((i, c) => map[this.PARTITIONS - 2][c] === i
                ? false
                : !!Math.floor(this.random() * 2));

            return {
                map: map,
                dots: () => {
                    return map.map(i => i.reduce((p, c) => c
                        ? p + c
                        : p)).reduce((p, c) => c + p);
                },
                isFilledTop: () => {
                    return map.map(i => i[0]).reduce((p, c) => p || c
                        ? true
                        : false);
                },
                isFilledBottom: () => {
                    return map.map(i => i[i.length - 1]).reduce((p, c) => p || c
                        ? true
                        : false);
                }
            }
        }

        let result = makeMap();

        while (result.dots() < this.LESS_SEED || !result.isFilledTop() || !result.isFilledBottom()) {
            result = makeMap();
        }

        return result.map;
    }
}

export default GIXI;
