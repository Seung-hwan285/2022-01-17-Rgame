import {PATTERN, PATTERN_SPC} from "../utils/constant.js";


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


// -[x] 1. 시도할 횟수 만큼 입력
// -[x] 2. 랜덤값을 자동차마다  생성
// -[x] 3. 4이상이면 화살표추가 3이하이면 빈값

const carTemplate =(carName)=>{

    carName.trim();

    carNameLength(carName);
    carNameisDuplicate(carName);
    caramePatternSpc(carName);

        return `<div>
            <div  class="car-player mr-2">${carName}</div>
            <div  id="rating">${randomNum()}</div>
        </div>`;


};


export const randomNum=()=>{
    const  rating = Math.floor(Math.random()*10);

    if(rating > 4){
        //return `<div class="forward-icon mt-2">⬇️️</div>`;
        return rating;
    }
    else{
        //return `<div class="forward-icon mt-2"></div>`;
        return rating;
    }


}
export const carTemplateStart=()=>{


    const carInput = $('#car-name');

    const totalCarNames = carInput.value.split(",");

    nameScreen.innerHTML = totalCarNames.map(car=>carTemplate(car)).join("");
};
