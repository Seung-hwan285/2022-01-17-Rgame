const $=(s)=>document.querySelector(s);
export const resetStartGame=()=>{

    const carInput = $('#car-name');

    const carCount =$('#car-count');
    const gameScreen = $('#game-process-screen');
    const gameWinner =$('#game-winner');

    carInput.value = "";
    carCount.value = "";
    gameScreen.innerText ="";
    gameWinner.innerText="";


};
