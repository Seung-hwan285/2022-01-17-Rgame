import {PATTERN, PATTERN_SPC} from "../utils/constant.js";

export const carNameLength =(carName)=>{
    if(carName.length > 5){
        alert('5자 이하만 입력가능');
    }
};

export const carNameisDuplicate =(carName)=>{
    if(carName.match(PATTERN)) {
        alert('공백이 존재합니다');
    }
};

export const caramePatternSpc =(carName)=>{
    if(carName.match(PATTERN_SPC)){
        alert('특수문자가 존재합니다');
    }
}
