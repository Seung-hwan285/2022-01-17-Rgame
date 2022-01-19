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
    console.log(carName);
    return`<div >
            <div class="car-player mr-2" >${carName}</div>
        
          </div>`;


};
const arrowTemplate = () => {
    return `<div class="forward-icon mt-2">⬇️️</div>`;
};

const updateRacingArrow =(cars)=>{
    cars.forEach(car=>{

        // 4이상이면 화살표 추가
        if(radom() > 4){
            car.parentNode.insertAdjacentHTML('beforeend', arrowTemplate());
        }


    });
}

export const randomNum=()=>{

    // 쿼리셀렉터ALL 로 자동차 이름 값들 가져오기
    //
    const cars = document.querySelectorAll('.car-player');
    console.log(cars);

    for(let i=0; i<carUserCount(); i++){
        updateRacingArrow(cars);
    }

}


export const carTemplateStart=()=>{


    const carInput = $('#car-name');

    const totalCarNames = carInput.value.split(",");


    nameScreen.innerHTML = totalCarNames.map(car=>carTemplate(car)).join("");
    randomNum();
};