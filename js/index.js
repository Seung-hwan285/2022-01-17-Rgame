// TODO step 1
// -[x] 자동차 이름은 쉼표 기준으로 구분 5자 이하만 가능하다.
// -[x] 자동차 이름을 화면에 출력한다.


import {carTemplateStart} from "./src/carTemplate.js";

const $=(s)=>document.querySelector(s);


const nameBtn =$('#btn-submit');
const numberBtn = $('#btn-submit-count');



nameBtn.addEventListener("click",carTemplateStart);


numberBtn.addEventListener("click",(e)=>{

    const userNumber = $('#car-count');

    console.log(userNumber.value);
    if(userNumber.value <= 0 || userNumber.value ===''){
        alert('양의 정수 입력해주세요');
    }

});