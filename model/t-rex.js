export class Trex {
    trex;
    isDown;
    isJump;
    stylesJump = {
        background: "url('Assets/Images/trexstatic.png')",
        backgroundSize: "cover",
        height: "90px",
        width: "90px",
        marginTop: "230px",
        marginLeft: "-470px",
    };

    stylesRun = {
        background: "url('Assets/Images/trexmove.gif')",
        backgroundSize: "165px",
        backgroundRepeat: "no-repeat",
        height: "100px",
        width: "100px",
        marginTop: "230px",
        marginLeft: "-500px",
        position: "absolute",
        paddingLeft: "20px",
    };

    stylesDown = {
        background: "url('Assets/Images/trexdown.png')",
        backgroundSize: "52px",
        backgroundRepeat: "no-repeat",
        height: "25px",
        width: "30px",
        marginTop: "260px",
        marginLeft: "-500px",
        position: "absolute",
        paddingLeft: "20px",
    };

    constructor(_trex) {
        this.trex = _trex;
    }


    // functions

    run() {
        Object.assign(this.trex.style, this.stylesRun);
    }

    jump() {
        Object.assign(this.trex.style, this.stylesJump);
        var h = parseInt(((this.trex.style.marginTop).split('px'))[0]);
        var isJump = false;
        this.isDown = false;

        var jump = setInterval(() => {
            this.isJump = true;
            if (h > (230 - 200) && !isJump) {
                this.trex.style.marginTop = h + "px";
                h -= 10;
            } else if (h == (230 - 200)) {
                isJump = true;
            }

            if (isJump && h != 240) {
                this.trex.style.marginTop = h + "px";
                h += 10;
            }

            if (h == 240) {
                Object.assign(this.trex.style, this.stylesRun);
            }
        }, 30);

        setTimeout(() => {
            clearInterval(jump);
            this.isJump = false;
            this.isDown = true
        }, 1300)
    }

    down() {
        Object.assign(this.trex.style, this.stylesDown);
        this.isDown = true;
    }

    die() {

    }

}