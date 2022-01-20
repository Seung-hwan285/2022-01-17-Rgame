// TODO step 1
// -[x] 자동차 이름은 쉼표 기준으로 구분 5자 이하만 가능하다.
// -[x] 자동차 이름을 화면에 출력한다.

// TODO step 2
// -[x] 횟수 버튼 입력하면 각 자동차 이름에 랜덤으로 값 들어가고 조건에 맞게 화살표 추가

// TODO step 3
// -[] 리셋 버튼 클릭하면 처음부터 다시 시작


import {carTemplateStart, resetStartGame} from "./src/carTemplate.js";
import {carUserCount} from "./src/carUserCount.js";

const $=(s)=>document.querySelector(s);


const nameBtn =$('#btn-submit');
const numberBtn = $('#btn-submit-count');
const resetBtn = $('#btn-submit-reset');



nameBtn.addEventListener("click",carTemplateStart);
numberBtn.addEventListener("click",carUserCount);
resetBtn.addEventListener("click",resetStartGame);
