
export const getWinner =()=>{
    const cars = document.querySelectorAll('.car-player');

    const scores = [...cars].map((car)=>Number(car.dataset.forward));

    const maxScore =Math.max(...scores);


    return [...cars]
        .filter((car)=>Number(car.dataset.forward)===maxScore)
        .map((car) => car.innerHTML);
}

