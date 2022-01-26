import {carArrowController} from "../controller/carController.js";


const $=(s)=>document.querySelector(s);


export class carInput{

    constructor() {

    }

    static getRandomGenerator(){
        return Math.floor(Math.random()*10);
    }

    getRandomNumber(){

        const cars = document.querySelectorAll('.car-player');

        for(let i=0; i<this.getUserCount(); i++){

            carArrowController(cars);
        }

    }

    getUserCount(){
        const userNumber =$('#car-count');

        if(userNumber.value <= 0 || userNumber.value ===''){
            alert('양의 정수 입력해주세요');
        }

        return userNumber.value;
    }

}