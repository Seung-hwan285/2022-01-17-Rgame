import {carRacing} from "../model/carRacing.js";

export const carArrowController =(cars)=>{

    const carRacingCOmponent= new carRacing();

    carRacingCOmponent.getCarToArrow(cars);

}


