export const getWinner =()=>{


    const cars = document.querySelectorAll('.car-player');

    // 자동차 이름 dataset 값 가져오기
    const counts = [...cars].map(car=>Number(car.dataset.forward));


    // 젤 큰값 추출
    const maxCount = Math.max(...counts);


    // return 자동차이름에서 가장 큰값 추출해서 보냄
    return [...cars]
        .filter(car => Number(car.dataset.forward) === maxCount)
        .map(car => car.innerHTML);
}

