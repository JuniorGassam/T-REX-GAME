export class Environment {
    env;

    constructor(_env) {
        this.env = _env;
    }
}

export class Floor extends Environment {
    stylesFloorEvolve = {
        background: "url('Assets/Images/floor.jpeg')",
        marginTop: "300px",
        height: "25px",
        display: "flex",
    };

    constructor(_floor) {
        super(_floor);
    }

    evolve() {
        Object.assign(this.env.style, this.stylesFloorEvolve);
        let position_x = 0;

        setInterval(() => {
            position_x -= 2;
            this.env.style["background-position"] = position_x + "px";
        }, 50);
    }

    change() {

    };

    stop() {

    }
}

export class Sky extends Environment {
    stylesCloudEvolve = {
        background: "url('Assets/Images/cloud.png')",
        marginTop: "50px",
        marginRight: "650px",
        height: "23px",
        width: "70px",
        backgroundSize: "70px",
        display: "flex-end",
        position: "absolute",
    };

    constructor(_sky) {
        super(_sky);
    }

    evolve() {
        Object.assign(this.env.style, this.stylesCloudEvolve);

        var position_x = -1 * parseInt(((this.env.style.marginRight).split("px"))[0]);
        var position_x_save = position_x;

        setInterval(() => {
            if (position_x != 649) {
                this.env.style["margin-right"] = position_x + "px";
                position_x += 1;
            } else if (position_x == 649) {
                // random position_y of cloud
                var position_y = Math.floor(Math.random() * (131)) + (-100);
                this.env.style["margin-top"] = position_y + "px";
                position_x = position_x_save;
            }
        }, 10);


    }

    change() {

    };

    stop() {

    }
}

export class Score extends Environment {
    constructor(_score) {
        super(_score);
    }

    evolve() {

    }

    change() {

    };

    stop() {

    }
}