import {radom} from "./carRandom.js";

export const arrowTemplate = () => {
    return `<div class="forward-icon mt-2">⬇️️</div>`;
};

//자동차 게임 턴이 진행될때마다 각 자동차 전진은 텀이 생김
// 버퍼링이 돌다가 값이 나오면 화살표로 추가

export const setTimeoutArrow=()=>{
    return `<div  class="relative spinner-container">
            <span class="material spinner"></span>
    </div>`;
}

export  const setTimeClear =()=>{
    return setTimeout(function () {
        alert('축하합니다 게임이 정상적으로 실행되었습니다.');
    },2000)
}

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
    });


}