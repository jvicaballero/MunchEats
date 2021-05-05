describe('Login Form', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    //1.We should be able to detect a form element in Login Page
    it('it has a form html component', () => {
        cy.get('form').should('have.class', 'loginform')
    })

    //2.The form has a 'Email' input element with email type
    it('has an email input', () => {
        cy.get('form').find('input#email').should('have.attr', 'type', 'email')
    })

    //3.The form has a 'password' input element with password type
    it('has an password input', () => {
        cy.get('form').find('input#password').should('have.attr', 'type', 'password')
    })

    //4.The form has a submit button element with submit type
    it('has an submit button', () => {
        cy.get('form').find('button#submitbtn').should('have.attr', 'type', 'submit')
    })

    //5.The form has a signup link that when pressed should redirect to signup page
    it('has a signup link and pressed redirects to signup page', () => {
        cy.get('form').find('a#signupLink').contains('Sign Up')
        cy.get('form').find('a#signupLink').click()
        cy.contains("Signup")
    })

    //6.The form accepts Email input
    it('accepts Email input', () => {
        const input = "eappenalan123@gmail.com"
        cy.get('#email')
            .type(input)
            .should('have.value', input)
    })

    //7.The form accepts Password input
    it('accepts Password input', () => {
        const input = "muncheats"
        cy.get('#password')
            .type(input)
            .should('have.value', input)
    })

    //8. Login Successfully
    it('Logs in the User successfully with correct credentials', () => {
        const email = "eappenalan123@gmail.com"
        const password = "muncheats"
        cy.get('#email').type(email).should('have.value', email)
        cy.get('#password').type(password).should('have.value', password)
        cy.get('form').submit();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.wait(1000)
        cy.contains('Successfully signed in')
        cy.contains('Account').click()
        cy.contains('Sign Out').click()
    })
})
