import {caramePatternSpc, carNameisDuplicate, carNameLength} from "../Exception/carNameExcpetion.js";
import {randomNum} from "./carRandom.js";
import {getWinner} from "./getWinner.js";


const $=(s)=>document.querySelector(s);

const nameScreen =$('#game-process-screen');


const carTemplate =(carName)=>{

    carName=carName.trim();
    carName=carName.replace(/\n/g, "");

    carNameLength(carName);
    carNameisDuplicate(carName);
    caramePatternSpc(carName);

    return`<div class="car">
            <div class="car-player mr-2" data-forward="0">${carName}</div>
          </div>`;
};





export const carTemplateStart=()=>{
    const carInput = $('#car-name');

    const carCount = $('#car-count');

    const totalCar =carInput.value.split(',');


    nameScreen.innerHTML = totalCar.map(car=>carTemplate(car)).join("");


};

