/// <reference types="cypress" />

describe('Validacao', () => {
    it('Realize o login na landing page', () => {
        cy.visit('http://saucedemo.com/');
        // busca um elemento que contenha o texto 
        cy.get('[data-test="username"]').type('standard_user');

        // busca um elemento que contenha o texto 
        cy.get('[data-test="password"]').type('secret_sauce');


        // routing
        // start server com cy.server
        // criar uma rota com cy.router()
        // atribuir rota a um alias
        // esperar com cy.wait e fazer uma validação

        // start server com cy.server
        //cy.server();

        //cy.route('POST','').as('');

        //cy.wait('@').then((xhr)=>{
        //expect(xhr.status).be.eq(200);
        //})

        // logar
        cy.get('#login-button').click();

    });

    it('devem poder realizar um login no sistema', () => {

        // carregar pagina
        cy.visit('https://www.saucedemo.com/inventory.html');

        // Verificar se um item é exibido
        cy.get('#item_1_title_link > .inventory_item_name').contains('Sauce Labs Bolt T-Shirt')

        //verificar se o titulo da pagina está correto
        cy.get('.product_label').contains('Products')


    });

    it('devem poder adicionar item ao carrinho', () => {

        // carregar pagina
        cy.visit('https://www.saucedemo.com/inventory.html');

        // verificar se é possivel adicionar um item ao carrinho
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click();

        // remover ítem adicionado ao carrinho
        cy.get('.btn_secondary').click();


    });

    it('Ordenar produtos por valores crescente', () => {

        const doc = cy.visit('https://www.saucedemo.com/inventory.html');

        // seleciona a opção de preco baixo para alto
        cy.get('.product_sort_container').select('Price (low to high)')

        // outra forma de selecionar a opção de preco baixo para alto
        cy.get('.product_sort_container').should('have.value', 'lohi')

    })


});
