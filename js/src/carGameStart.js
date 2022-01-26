import {getWinner} from "./getWinner.js";


import {carTemplateStart, setTimeClear} from "./view/carGameview.js";
import {carInput} from "./model/carInput.js";


const $=(s)=>document.querySelector(s);


const spinner = document.querySelectorAll('.material');




export const carGameStart=()=>{
    const carCompoent = new carInput();
    carTemplateStart();

    carCompoent.getRandomNumber();
    // 최종 우승자
    // 최종 우승자가 같은 사람이 있으면 맨 앞에 있는 사람이 일등이 됌
    let win = getWinner();
    const winner = win.map(person=>{
        return person;
    });

    $('#game-winner').innerHTML=`🏆 최종 우승자:${winner[0]} 🏆`;

    setTimeClear();
}


export const arrowTemplate = () => {
    return `<div class="forward-icon mt-2">⬇️️</div>`;
};