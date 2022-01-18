// TODO step 1
// -[x] 자동차 이름은 쉼표 기준으로 구분 5자 이하만 가능하다.
// -[x] 자동차 이름을 화면에 출력한다.


import {carTemplateStart} from "./src/carTemplate.js";
import {carUserCount} from "./src/carUserCount.js";

const $=(s)=>document.querySelector(s);


const nameBtn =$('#btn-submit');
const numberBtn = $('#btn-submit-count');



nameBtn.addEventListener("click",carTemplateStart);
numberBtn.addEventListener("click",carUserCount);