// TODO 자동차 화면에 출력되는지 테스트
// -[x] 자동차 이름 쉼표 기준으로 입력되서 출력되는지 테스트
// -[x] 자동차 이름 5자리 제한인지 테스트
// -[x] 공백만 입력된 경우 경고 테스트
// -[x] 특수문자 입력된 경우 경고 테스트


// TODO 시도횟수 테스트
// -[x] 정수만 입력가능하게 (음수 X) 테스트
// -[x] 공백 입력안되게 테스트

// TODO 자동차 시도횟수만큼 나오게



describe('My First Test', () => {
    beforeEach('접속', () => {
        cy.visit('http://localhost:63342/RGame/index.html?_ijt=qc6kqdfci258c7fhodhkfi6oa&_ij_reload=RELOAD_ON_SAVE');
    });




    it('자동차 이름 쉼표 기준으로 입력 화면 테스트',()=>{
       const carName = ['EAST', 'WEST', 'SOUTH', 'NORTH'];



       cy.get('#car-name')
           .type('EAST, WEST, SOUTH, NORTH');

       cy.get('#btn-submit').click();


       cy.get('.car-player')
           .each(($div,index)=>{
               cy.get($div).should('have.text',carName[index]);
           });
    });


    it('5자리 제한 테스트',()=>{
        const stub = cy.stub();

        cy.on('window:alert',stub);
        cy.get('#car-name')
            .type('EASTSEX')
        cy.get('#btn-submit').click()
            .then(()=>{
                expect(stub.getCall(0)).to.be.calledWith('5자 이하만 입력가능');
            });
    });

    it('이름에 공백 문자 테스트',()=>{
        const stub = cy.stub();
        cy.on('window:alert',stub);

        cy.get('#car-name').type('EA ST');


        cy.get('#btn-submit').click()
            .then(()=>{
                expect(stub.getCall(0)).to.be.calledWith('공백이 존재합니다');
            });
    });

    it('이름에 특수문자 테스트',()=>{
       const stub = cy.stub();

       cy.on('window:alert',stub);

       cy.get('#car-name').type('!EAST');

       cy.get('#btn-submit').click()
           .then(()=>{
              expect(stub.getCall(0)).to.be.calledWith('특수문자가 존재합니다');
           });
    });


    it('횟수가 양의 정수,공백인지 테스트',()=>{
       const stub = cy.stub();

       cy.on('window:alert',stub);

       cy.get('#car-count').type('-1');
       cy.get('#btn-submit-count').click()
           .then(()=>{
              expect(stub.getCall(0)).to.be.calledWith('양의 정수 입력해주세요');
           });


       cy.get('#car-count').type(' ');
        cy.get('#btn-submit-count').click()
            .then(()=>{
                expect(stub.getCall(0)).to.be.calledWith('양의 정수 입력해주세요');
            });
    });


});