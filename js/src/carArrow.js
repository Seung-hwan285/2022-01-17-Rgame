import {radom} from "./carRandom.js";

export const arrowTemplate = () => {
    return `<div class="forward-icon mt-2">⬇️️</div>`;
};

export const updateRacingArrow =(cars)=>{
    cars.forEach(car=>{
        // 4이상이면 화살표 추가
        if(radom() > 4){

            car.dataset.forward = Number(car.dataset.forward)+1;


            car.parentNode.insertAdjacentHTML('beforeend', arrowTemplate());
        }
    });
}
