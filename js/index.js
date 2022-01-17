// TODO step 1
// -[x] 자동차 이름은 쉼표 기준으로 구분 5자 이하만 가능하다.
// -[x] 자동차 이름을 화면에 출력한다.

import {PATTERN} from "./utils/constant.js";
import {PATTERN_SPC} from "./utils/constant.js";

const $=(s)=>document.querySelector(s);


const Namebtn =$('#btn-submit');


const carTemplate =(carName)=>{

    carName=carName.trim();
    console.log(carName.length);
    if(carName.length > 5){
        alert('5자 이하만 입력가능');
    }
    else if(carName.match(PATTERN)){
        alert('공백이 존재합니다');
    }
    else if(carName.match(PATTERN_SPC)){
        alert('특수문자가 존재합니다');
    }
    else{
        return `<div>
            <div class="car-player mr-2">${carName}</div>
        </div>`;
    }

}


Namebtn.addEventListener("click",()=>{

    const nameScreen =$('#game-process-screen');

    const carInput = $('#car-name');

    const totalCarNames = carInput.value.split(",");


    nameScreen.innerHTML =totalCarNames.map(car=>carTemplate(car)).join("");

});