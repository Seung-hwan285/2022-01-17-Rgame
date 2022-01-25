import {caramePatternSpc, carNameisDuplicate, carNameLength} from "../../Exception/carNameExcpetion.js";
const $=(s)=>document.querySelector(s);


export const setTimeoutArrow=()=>{
    return `<div  class="relative spinner-container">
            <span class="material spinner"></span>
    </div>`;
}



export  const setTimeClear =()=>{
    return setTimeout(function () {
        alert('축하합니다 게임이 정상적으로 실행되었습니다.');
    },2000);
}



export const carTemplate =(carName)=>{

    carName=carName.trim();
    carName=carName.replace(/\n/g, "");

    carNameLength(carName);
    carNameisDuplicate(carName);
    caramePatternSpc(carName);

    return`<div class="car">
              
            <div class="car-player mr-2" data-forward="0">${carName}</div>
          </div>`;
};


export const resetStartGame=()=>{

    const carInput = $('#car-name');

    const carCount =$('#car-count');
    const gameScreen = $('#game-process-screen');
    const gameWinner =$('#game-winner');

    carInput.value = "";
    carCount.value = "";
    gameScreen.innerText ="";
    gameWinner.innerText="";


};
const nameScreen =$('#game-process-screen');

export const carTemplateStart=()=>{
    const carInput = $('#car-name');

    const carCount = $('#car-count');

    const totalCar =carInput.value.split(',');


    nameScreen.innerHTML = totalCar.map(car=>carTemplate(car)).join("");


};

