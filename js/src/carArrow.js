import {radom} from "./carRandom.js";

export const arrowTemplate = () => {
    return `<div class="forward-icon mt-2">⬇️️</div>`;
};

export const updateRacingArrow =(cars)=>{

    cars.forEach(car=>{
        // 랜덤값이 4보다 크면
        if(radom() > 4){

            car.dataset.forward = Number(car.dataset.forward)+1;
            car.parentNode.insertAdjacentHTML('beforeend', arrowTemplate());
        }
    });


}
