import {carUserCount} from "./carUserCount.js";
import {updateRacingArrow} from "./carArrow.js";

export const radom =()=>{
    return Math.floor(Math.random()*10);
}

export const randomNum=()=>{

    // 쿼리셀렉터ALL 로 자동차 이름 값들 가져오기
    const cars = document.querySelectorAll('.car-player');

    for(let i=0; i<carUserCount(); i++){

        updateRacingArrow(cars);
    }

}