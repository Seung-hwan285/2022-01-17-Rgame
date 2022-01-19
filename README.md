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

### 2. 각 조건에 맞게 랜덤값 부여하기
처음에는  랜덤값을 받아서 if ~else문으로 비교를해서 화살표를 추가하는 방식으로 코드를 짰습니다.<br>
하지만 이렇게하면 계속 값이 하나씩만 추가가되고, 화살표가 추가가되질 않았습니다.
```javascript
export const randomNum=()=>{
    const  rating = Math.floor(Math.random()*10);

    if(rating > 4){
        //return `<div class="forward-icon mt-2">⬇️️</div>`;
        return rating;
    }
    else{
        //return `<div class="forward-icon mt-2"></div>`;
        return rating;
    }


}
```

### 해결방안
querySelectorAll 생성해서 .car-player 리스트를 만들어주고, <br>
forEach를 돌려서 각 리스트 값마다 화살표를 추가하는 방식으로 리펙토링을 진행했습니다.

```javascript
const upadateArrow = (cars)=>{
    cars.forEach(car=>{
    if(radom() > 4){
           car.parentNode.insertAdjacentHTML('beforeend',arrowTemplate());
    }


    });
}


export const randomNum=()=>{

    // 쿼리셀렉터ALL 로 자동차 이름 값들 가져오기
    const cars = document.querySelectorAll('.car-player');

    for(let i=0; i<carUserCount(); i++){
        upadateArrow(cars);
    }

}

```





### 3. 화살표 동일하게 나오는 증상
계속 화살표가 동일하게 나오는 증상이 생겼던 코드입니다.<br>
입력 횟수까지 반복해주고, random값이 4이상이면 화살표를 각 이름에 추가를 해주는데<br>
여기서 forEach로 전부 자동차 이름에 넣어주고 있어서 증상이 생겼습니다.


```javascript

export const randomNum=()=>{

    // 쿼리셀렉터ALL 로 자동차 이름 값들 가져오기
    const cars = document.querySelectorAll('.car-player');

    for(let i=0; i<carUserCount(); i++){


        if(radom() > 4){
            cars.forEach(car=>{
                car.parentNode.insertAdjacentHTML('beforeend',arrowTemplate());
            });
        }

    }

}

```

### 해결방안
원인은 cars.forEach가 if조건문 밑에 있어서 발생하였습니다.
각 자동차 이름을 하나씩 들어가게 <br>
즉 forEach 부분을 모듈로 분리해서 자동차 이름을 하나씩 추가해서 화살표를 추가해줍니다.

```javascript
const upadateArrow = (car)=>{
  cars.forEach(car=>{
    if(radom() > 4){

           car.parentNode.insertAdjacentHTML('beforeend',arrowTemplate());
     
    }
   });
}
```


