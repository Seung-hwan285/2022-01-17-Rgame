# 2022-01-17-Rgame

## 개요
자바스크립트 연습을 하기 위해서 소스를 찾아보다 우테코 커리큘림이 잘나와있어서 복기를 해본 프로젝트입니다.

### BDD Assertions
https://docs.cypress.io/guides/references/assertions#Chai

## 회고록


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


### 4. 자동차 경주가 정상적으로 진행되는지 테스트 빈값 오류
carTemplate.js에서 줄바꿈 , 공백 제거를 걸어두었지만 에러가 계속 나오는 현상.

### 해결방안
https://stackoverflow.com/questions/65309568/cypress-check-for-an-empty-element

처음에 줄바꿈이랑 공백제거를 추가하면 되겠지? 라고 생각을 했지만 테스트는 계속 빈값을 나타나고 있었습니다.

하지만 좀더 찾아보니 스텍오버플로우에  cypress는 테스트 주체가 되는 .js파일에 줄바꿈을 인식한다는 것을 보고 
기존 코드에서 리펙토링을 진행하였습니다.

#### 원인 코드
```javascript
    return`<div >
            <div class="car-player mr-2" >
              ${carName}
            </div>
        
          </div>`;
```

#### 수정
```javascript
    return`<div >
            <div class="car-player mr-2" >${carName}</div>
        
          </div>`;
```

<br>

### 5. 전진횟수 dataset으로 관리
처음에 max값을 어떻게 추출하지라는 생각을 했습니다.
div 태그를 따로 추가해서 hidden로 만들고 값을 추가할려했지만, 원치 않는 에러들이 계속 발생하였습니다.

### 해결방안
dataset으로 관리를하면 좀더 쉽게 값을 굳이 hidden처리 안해도 관리를 할 수 있습니다.

<br>

### 6. dataset undefined 에러
dataset에 값을 확인하기 위해 log를 찍으면 undeined 값이 나오는것을 볼 수 있었습니다.


### 해결방안
카멜표기법으로 이름을 수정해도 변함이 없었습니다.
원인을 잘몰라서 이름을 축약하게 되었고, 값이 정상적으로 들어가는걸 확인할 수 있었습니다.

```javascript
const carTemplate =(carName)=>{

    carName=carName.trim();
    carName=carName.replace(/\n/g, "");

    carNameLength(carName);
    carNameisDuplicate(carName);
    caramePatternSpc(carName);

    return`<div >
            <div class="car-player mr-2" data-forward="0">${carName}</div>
          </div>`;
};

const updateRacingArrow =(cars)=>{
    cars.forEach(car=>{
        // 4이상이면 화살표 추가
        if(radom() > 4){

            car.dataset.forward = Number(car.dataset.forward)+1;


            car.parentNode.insertAdjacentHTML('beforeend', arrowTemplate());
        }
    });
}

```

### 7. car.spec.js 우승자 테스트
우승자 테스트를 하는 도중 많은 시간을 투자했습니다.
간단하게 getWinner() 함수를 호출하고 그값을 호출하면 테스트가 성공할 줄 알았지만, getWinner()에는 빈값이  계속 나오는 현상이 발생하였습니다.



### 해결방안
getWinner()함수를 직접 호출하는 것이 아니라  getWinner() 코드를 테스트코드로 비슷하게 짜주었습니다.
그리고 carName을 호출하는 div 태그 부모태그에 car class를 추가해줌으로써 값을 받아주었습니다.
이렇게 만들지 않고, car-player로 값을 받게되면 계속 동일한 값이 나오게 되는 현상이 발생합니다.

```javascript
cy.get('.car').then(cars=>{
            console.log(cars);
            const counts = [...cars].map(car => {
                // car class에 요소중 foward-icon에 값을 길이를 전부체크 해서 노드리스트로 반환
               return car.querySelectorAll('.forward-icon').length;
            });

            console.log(counts);
            const maxCount = Math.max(...counts);

            const winnerList = [];

            counts.forEach((carCount,index)=>{

                if(carCount === maxCount){
                    winnerList.push(carName[index]);
                }
            });

            cy.get('#game-winner').should('have.text',`🏆 최종 우승자:${winnerList[0]} 🏆`);
```

    
