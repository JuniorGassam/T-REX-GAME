import { Sky, Floor, Score } from "./model/environment.js";
import {Trex} from "./model/t-rex.js";
import { Cactus, Ptero } from "./model/obstacles.js";


export let gameSpace = document.getElementById("gameSpace");
export let sky = document.getElementById("sky");
let sky1 = document.getElementById("sky1");
let sky2 = document.getElementById("sky2");
let floor = document.getElementById("floor");
let trex = document.getElementById("trex");
export let cactus = document.getElementById("cactus");
export let ptero = document.getElementById("ptero");
let score = document.getElementById("score");


export const SKY = new Sky(sky);
export const SKY1 = new Sky(sky1);
export const SKY2 = new Sky(sky2);
export const FLOOR = new Floor(floor);
export const TREX = new Trex(trex);
export const CACTUS = new Cactus(cactus);
export const PTERO = new Ptero(ptero);
export const SCORE = new Score(score);