// TODO step 1
// -[x] 자동차 이름은 쉼표 기준으로 구분 5자 이하만 가능하다.
// -[x] 자동차 이름을 화면에 출력한다.


import {carTemplateStart} from "./src/carTemplate.js";

const $=(s)=>document.querySelector(s);


const Namebtn =$('#btn-submit');




Namebtn.addEventListener("click",carTemplateStart);