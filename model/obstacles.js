import { Environment } from "./environment.js";

class Obstacle extends Environment {
    obs;

    constructor(_obs) {
        super(_obs);
    }
}

export class Cactus extends Obstacle {
    styles = [
        {
            background: "url('Assets/Images/c1.png')",
            backgroundSize: "40px",
            marginTop: "250px",
            marginRight: "650px",
            height: "35px",
            width: "25px",
            position: "absolute",
        },
        {
            background: "url('Assets/Images/c2.png')",
            backgroundSize: "40px",
            marginTop: "250px",
            marginRight: "650px",
            height: "35px",
            width: "40px",
            position: "absolute",
        },
        {
            background: "url('Assets/Images/c3.png')",
            backgroundSize: "40px",
            marginTop: "250px",
            marginRight: "650px",
            height: "35px",
            width: "40px",
            position: "absolute",
        }
    ]


    constructor(_cac) {
        super(_cac);
    }

    evolve() {
        var type = Math.floor(Math.random() * 3);
        Object.assign(this.env.style, this.styles[type]);
        var position_x = -1 * parseInt(((this.env.style.marginRight).split("px"))[0]);
        var position_x_save = position_x;

        setInterval(() => {
            if (position_x != 650) {
                this.env.style["margin-right"] = position_x + "px";
                position_x += 2;
            } else if (position_x == 650) {
                this.env.remove();
            }
        }, 25);
    };

    kill() {

    };

    disappears() {

    };

    stop() {

    };

}

export class Ptero extends Obstacle {
    styles = [
        {
            background: "url('Assets/Images/ptero1.png')",
            // marginTop: "50px",
            // marginRight: "650px",
            height: "24px",
            width: "40px",
            backgroundSize: "40px",
            display: "flex-end",
            position: "absolute",
        },
        {
            background: "url('Assets/Images/ptero2.png')",
            // marginTop: "50px",
            // marginRight: "650px",
            height: "29px",
            width: "40px",
            backgroundSize: "40px",
            display: "flex-end",
            position: "absolute",
        },
    ]

    constructor(_pte) {
        super(_pte);
    }

    evolve() {
        // random position_y of cloud
        var position_y = Math.floor(Math.random() * (131)) + (-100);


        setInterval(() => {
            Object.assign(this.env.style, this.styles[0]);
            this.env.style["margin-top"] = position_y + "px";
        }, 700);
        setInterval(() => {
            Object.assign(this.env.style, this.styles[1]);
            this.env.style["margin-top"] = position_y + "px";
        }, 1400);

        var position_x = -650;

        setInterval(() => {
            if (position_x != 649) {
                this.env.style["margin-right"] = position_x + "px";
                position_x += 1;
            } else if (position_x == 649) {
                this.env.remove();
            }
        }, 10);

    };

    kill() {

    };

    stop() {

    };

}