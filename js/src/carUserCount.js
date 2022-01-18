const $=(s)=>document.querySelector(s);



export const carUserCount=()=>{
    const userNumber = $('#car-count');

    console.log(userNumber.value);
    if(userNumber.value <= 0 || userNumber.value ===''){
        alert('양의 정수 입력해주세요');
    }






}