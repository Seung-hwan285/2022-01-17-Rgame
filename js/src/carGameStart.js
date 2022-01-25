import {getWinner} from "./getWinner.js";
import {randomNum} from "./carRandom.js";

import {carTemplateStart, setTimeClear} from "./view/carGameview.js";


const $=(s)=>document.querySelector(s);


const spinner = document.querySelectorAll('.material');


export const carGameStart=()=>{
    carTemplateStart();
    randomNum();

    // 최종 우승자
    // 최종 우승자가 같은 사람이 있으면 맨 앞에 있는 사람이 일등이 됌
    let win = getWinner();
    const winner = win.map(person=>{
        return person;
    });

    $('#game-winner').innerHTML=`🏆 최종 우승자:${winner[0]} 🏆`;
    console.log(spinner);
    setTimeClear();
}


function start ( subject ,person){
    alert(subject);
    person();
}


function person(){
    alert('man');
}

start('math',person);