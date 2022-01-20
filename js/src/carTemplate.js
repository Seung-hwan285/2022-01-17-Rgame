import {PATTERN, PATTERN_SPC} from "../utils/constant.js";
import {carUserCount} from "./carUserCount.js";


const $=(s)=>document.querySelector(s);

const nameScreen =$('#game-process-screen');


const carNameLength =(carName)=>{
    if(carName.length > 5){
        alert('5자 이하만 입력가능');
    }
};

const carNameisDuplicate =(carName)=>{
    if(carName.match(PATTERN)) {
        alert('공백이 존재합니다');
    }
};

const caramePatternSpc =(carName)=>{
    if(carName.match(PATTERN_SPC)){
        alert('특수문자가 존재합니다');
    }
}

export const radom =()=>{
    return Math.floor(Math.random()*10);
}
const carTemplate =(carName)=>{

    carName=carName.trim();
    carName=carName.replace(/\n/g, "");

    carNameLength(carName);
    carNameisDuplicate(carName);
    caramePatternSpc(carName);

    return`<div >
            <div class="car-player mr-2" data-forward="0">${carName}</div>
          </div>`;
};

// 1. scoreTemplate 값 증가하게
const arrowTemplate = () => {
    return `<div class="forward-icon mt-2">⬇️️</div>`;
};

const updateRacingArrow =(cars)=>{
    cars.forEach(car=>{
        // 4이상이면 화살표 추가
        if(radom() > 4){

            car.dataset.forward = Number(car.dataset.forward)+1;


            car.parentNode.insertAdjacentHTML('beforeend', arrowTemplate());
        }
    });
}


const getWinner =()=>{
    const cars = document.querySelectorAll('.car-player');


    // is not a function 발생중
    // NodeList에 map으로 받아주고있어서 발생하는듯함.
    // -> [...cars] 배열로변환
    // const maxScore = Math.max(
    //     cars.map((car)=>Number(car.dataset.forwardCount)));

    const scores = [...cars].map((car)=>Number(car.dataset.forward));

    const maxScore =Math.max(...scores);


    return [...cars]
        .filter((car)=>Number(car.dataset.forward)===maxScore)
        .map((car) => car.innerText);
}

export const randomNum=()=>{

    // 쿼리셀렉터ALL 로 자동차 이름 값들 가져오기
    const cars = document.querySelectorAll('.car-player');

    for(let i=0; i<carUserCount(); i++){
        updateRacingArrow(cars);
    }
}


export const resetStartGame=()=>{

    const carInput = $('#car-name');

    const carCount =$('#car-count');


    carInput.value = "";
    carCount.value = "";

};


export const carTemplateStart=()=>{

    const carInput = $('#car-name');

    const totalCarNames = carInput.value.split(",");

    nameScreen.innerHTML = totalCarNames.map(car=>carTemplate(car)).join("");
    randomNum();

    const win = $('#winner');
    win.innerHTML=`🏆 최종 우승자: ${getWinner()}🏆`;
};
