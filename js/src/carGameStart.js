import {getWinner} from "./getWinner.js";
import {carTemplateStart} from "./carTemplate.js";
import {randomNum} from "./carRandom.js";

const $=(s)=>document.querySelector(s);

export const carGameStart=()=>{
    carTemplateStart();
    randomNum();

    // 최종 우승자
    // 최종 우승자가 같은 사람이 있으면 먼저 도착한 사람이 일등이 됌
    let win = getWinner();


    $('#game-winner').innerHTML=`🏆 최종 우승자:${win} 🏆`;
}