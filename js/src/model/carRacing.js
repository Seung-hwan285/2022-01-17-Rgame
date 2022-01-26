import {setTimeoutArrow} from "../view/carGameview.js";
import {carInput} from "./carInput.js";
import {arrowTemplate} from "../carGameStart.js";

export class carRacing{


    getCarToArrow(cars){
        cars.forEach((car)=>{

            car.parentNode.insertAdjacentHTML('beforeend',setTimeoutArrow());

            if(carInput.getRandomGenerator() > 4){

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
}



