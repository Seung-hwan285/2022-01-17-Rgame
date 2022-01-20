// TODO 자동차 화면에 출력되는지 테스트
// -[x] 자동차 이름 쉼표 기준으로 입력되서 출력되는지 테스트
// -[x] 자동차 이름 5자리 제한인지 테스트
// -[x] 공백만 입력된 경우 경고 테스트
// -[x] 특수문자 입력된 경우 경고 테스트


// TODO 시도횟수 테스트
// -[x] 정수만 입력가능하게 (음수 X) 테스트
// -[x] 공백 입력안되게 테스트

// TODO 자동차 경주 테스트
// -[x] random 값이 0~9 정수를 반환하는지 테스트
// -[x] 자동차에 4이상이 들어오면 화살표 추가 (전진)
// -[x] 자동차에 3이하 들어오면 화살표 제거  (멈춤)
// -[] 우승자 테스트

// TODO 다시시작 테스트
// -[x] 다시시작 버튼 누르면 값 전부 초기화



import {getWinner, radom} from "../../../../js/src/carTemplate.js";

describe('My First Test', () => {
    beforeEach('접속', () => {
        cy.visit('http://localhost:63342/RGame/index.html?_ijt=qc6kqdfci258c7fhodhkfi6oa&_ij_reload=RELOAD_ON_SAVE');
    });


    //
    //
    // it('5자리 제한 테스트',()=>{
    //     const stub = cy.stub();
    //
    //     cy.on('window:alert',stub);
    //     cy.get('#car-name')
    //         .type('EASTSEX')
    //     cy.get('#btn-submit').click()
    //         .then(()=>{
    //             expect(stub.getCall(0)).to.be.calledWith('5자 이하만 입력가능');
    //         });
    // });
    //
    // it('이름에 공백 문자 테스트',()=>{
    //     const stub = cy.stub();
    //     cy.on('window:alert',stub);
    //
    //     cy.get('#car-name').type('EA ST');
    //
    //
    //     cy.get('#btn-submit').click()
    //         .then(()=>{
    //             expect(stub.getCall(0)).to.be.calledWith('공백이 존재합니다');
    //         });
    // });
    //
    // it('이름에 특수문자 테스트',()=>{
    //    const stub = cy.stub();
    //
    //    cy.on('window:alert',stub);
    //
    //    cy.get('#car-name').type('!EAST');
    //
    //    cy.get('#btn-submit').click()
    //        .then(()=>{
    //           expect(stub.getCall(0)).to.be.calledWith('특수문자가 존재합니다');
    //        });
    // });
    //
    //
    // it('횟수가 양의 정수,공백인지 테스트',()=>{
    //    const stub = cy.stub();
    //
    //    cy.on('window:alert',stub);
    //
    //    cy.get('#car-count').type('-1');
    //    cy.get('#btn-submit-count').click()
    //        .then(()=>{
    //           expect(stub.getCall(0)).to.be.calledWith('양의 정수 입력해주세요');
    //        });
    //
    //
    //    cy.get('#car-count').type(' ');
    //     cy.get('#btn-submit-count').click()
    //         .then(()=>{
    //             expect(stub.getCall(0)).to.be.calledWith('양의 정수 입력해주세요');
    //         });
    // });
    //
    //
    // it('각 자동차 random 0~9값 반환 테스트',()=>{
    //     cy.get('#car-name')
    //         .type('EAST, WEST, SOUTH, NORTH');
    //
    //     cy.get('#btn-submit').click();
    //
    //     // 리스트 0~9까지 생성
    //     const possible  =  Array.from({length:10}).map((v,i)=>i+0);
    //
    //
    //
    //     for(let i =0; i < 10; i++){
    //         expect(possible).to.include(radom());
    //     }
    //
    // });
    //
    //
    //
    // it('자동차 경주가 정상적으로 진행되는지 테스트',()=>{
    //     const possible = Array.from({length:10}).map((v,i)=>i+0);
    //     for(let i =0; i < 10; i++){
    //         expect(possible).to.include(radom());
    //     }
    //     const carName=['EAST','WEST','SOUTH','NORTH'];
    //
    //     cy.get('#car-name').type(carName.join(','));
    //
    //     cy.get('#car-count')
    //         .type(1);
    //
    //     cy.get('#btn-submit-count').click();
    //     cy.get('#btn-submit').click();
    //
    //
    //     cy.get('.car-player')
    //         .each(($div,index)=>{
    //             cy.get($div).should('have.text',carName[index]);
    //         });
    //
    // });

    it('최종 우승자 나오는지 테스트',()=>{
        const carName=['EAST','WEST','SOUTH','NORTH'];

        cy.get('#car-name').type(carName.join(','));

        cy.get('#car-count')
            .type(1);

        cy.get('#btn-submit-count').click();
        cy.get('#btn-submit').click();

        // 위에서 이름 버튼 확인 클릭하면 최종우승자가 바뀜
        cy.get('.car').then((cars) => {

            const counts  = [...cars].map(car=>car.querySelectorAll('.forward-icon').length);
            const maxCount = Math.max(...counts);


            const winnerList =[];
            counts.forEach((carCounts , index) =>{


                    if(carCounts === maxCount){
                        winnerList.push(carName[index]);
                    }
            });



            cy.get('#game-winner').should('have.text',`🏆 최종 우승자: ${winnerList.join(',')}🏆`);
        });

});





    // it('자동차 다시시작 버튼누르면 진행되는지 테스트',()=>{
    //    cy.get('#car-name').type('EAST,WEST,SOUTH');
    //    cy.get('#car-count').type(1);
    //
    //
    //
    //    cy.get('#btn-submit-count').click();
    //    cy.get('#btn-submit').click();
    //
    //    cy.get('#btn-submit-reset').click();
    //
    //
    //    cy.get('#car-name').should('have.text',"");
    //    cy.get('#car-count').should('have.text',"");
    //    cy.get('#game-winner').should('have.text',"");
    //    cy.get('#game-process-screen').should('have.text',"");
    // });

});