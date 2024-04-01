import { gameSpace, SKY, SKY1, SKY2, FLOOR, TREX, CACTUS, cactus, PTERO, ptero, SCORE } from "./instanciation.js";
import { environment } from "./functions/functions.js";
import { Cactus, Ptero } from "./model/obstacles.js";


TREX.run();

FLOOR.evolve();

environment(SKY, SKY1, SKY2);

CACTUS.evolve();
setInterval(() => {
    var c = new Cactus(cactus.cloneNode());
    gameSpace.append(c.env)
    c.evolve()
}, 10200);

PTERO.evolve();
setInterval(() => {
    var p = new Ptero(ptero.cloneNode());
    gameSpace.append(p.env)
    p.evolve()
}, 30000);

document.addEventListener('keydown', function (event) {
    if (event.code == "Space" && !TREX.isJump) {
        TREX.jump();
    }
})

document.addEventListener('keydown', function (event) {
    if (event.code == "ArrowDown" && TREX.isDown) {
        TREX.down();
    }
})

document.addEventListener('keyup', function (event) {
    if (event.code == "ArrowDown" && TREX.isDown) {
        TREX.run();
    }
})