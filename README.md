# 2022-01-17-Rgame

### BDD Assertions
https://docs.cypress.io/guides/references/assertions#Chai

## 어려웠던 점


### 1. 차 이름을 화면에 출력
처음에는 innerHTML에 배열 인덱스값을 참조해서 출력을하게 만들었습니다.<br>
하지만 이렇게하면 3개를 입력했을때 마지막값이 undefined가 나오게 되서 코드를 다시 수정하게 되었습니다.<br>
입력이 문자열로 받아지니깐 이값을 쉼표기준으로 분리를해서 한개씩 참조하게 하면 되겠다라고 생각을 하게 되었습니다.

### 해결방안
map을 사용해서 값을 참조

```javascript

const carTemplate =(carName)=>{

    carName=carName.trim();

    carNameLength(carName);
    carNameisDuplicate(carName);
    caramePatternSpc(carName);

        return `<div>
            <div class="car-player mr-2">${carName}</div>
        </div>`;


};

export const carTemplateStart=()=>{
    const nameScreen =$('#game-process-screen');

    const carInput = $('#car-name');

    const totalCarNames = carInput.value.split(",");


    nameScreen.innerHTML = totalCarNames.map(car=>carTemplate(car)).join("");
};

```
