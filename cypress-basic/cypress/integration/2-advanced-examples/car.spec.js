// TODO 자동차 화면에 출력되는지 테스트
// -[x] 자동차 이름 쉼표 기준으로 입력되서 출력되는지 테스트
// -[x] 자동차 이름 5자리 제한인지 테스트
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
                expect(stub.getCall(0)).to.be.calledWith("5자 이하만 입력가능");
            });





    });
});