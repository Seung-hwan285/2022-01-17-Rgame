import {radom} from "./carRandom.js";
import {setTimeoutArrow} from "./view/carGameview.js";

export const arrowTemplate = () => {
    return `<div class="forward-icon mt-2">⬇️️</div>`;
};

//자동차 게임 턴이 진행될때마다 각 자동차 전진은 텀이 생김
// 버퍼링이 돌다가 값이 나오면 화살표로 추가
// 화살표 추가되면 버퍼링 지우기



export const updateRacingArrow =(cars)=>{

    cars.forEach(car=>{
        car.parentNode.insertAdjacentHTML('beforeend',setTimeoutArrow());
        if(radom() > 4){

        // 랜덤값이 4보다 크면
            car.dataset.forward = Number(car.dataset.forward)+1;

            const carStart =()=>{
              return  car.parentNode.insertAdjacentHTML('beforeend', arrowTemplate());

            }
            setTimeout(function (){

                carStart();
            },2000);
        }
        const meterial =document.querySelector('.spinner-container');
        meterial.remove();

    });

}
