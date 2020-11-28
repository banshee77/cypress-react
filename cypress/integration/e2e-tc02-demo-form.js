const { wait } = require("@testing-library/react");

describe("Demo app - form testing", () => {
  it("Can fill the form", () => {

    // expected values
    const expHomePageMessage = "Happy Hacking !"
    const expTeamPageTeam1 = "User1"
    const expMessagePageMessage = "Message has been sent successfully.Greetings from TeamQoQ !"

    // form text
    const name = 'TeamQoQ'
    const email = 'teamqoq@sabre.com'
    const phone = '+48 12 682 33 22'
    const website = 'www.sabre.com'
    const subject = 'Hackathon 2020'
    const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus, ex at tincidunt tristique, metus lorem porttitor mi, eget convallis dui enim vehicula purus. Lorem ipsum dolor sit amet, consectetur."

    //----------------------------------------------------------------------------//
    // Test scenario:
    // 1. Open url and verify message on the home page
    // 2. Select menu item 'TeamQoQ', verify url and one team member name 
    // 3. Select menu item 'Hackathon2020', verify url and fill in the form
    // 4. Verify url and message Text
    // 3. Select menu item 'Home', verify url and verify message on the home page
    //----------------------------------------------------------------------------//
       
    cy.visit("/")
    
    VerifyHomePage(false) 
    VerifyTeamPage()
    VerifyHackathonPage()
    VerifyMessagePage()
    VerifyHomePage(true)

    //-------------//
    //  FUNCTIONS  //
    //-------------//
   
    function VerifyHomePage(isMenuItem) {
      if (isMenuItem)
        cy.get('#home-link').click()
      
      cy.url().should('include', '/')
      cy.get("#message")
        .should("have.text", expHomePageMessage);
      
      cy.wait(3000)
    }

    function VerifyTeamPage() {
      cy.get('#team-link').click()
      cy.url().should('include', '/teamqoq')    
      cy.get('#team1 > h2')
        .should("have.text", expTeamPageTeam1)
      
      cy.wait(3000)
    }

    function VerifyHackathonPage() {
      cy.get('#hackathon-link').click()
      cy.url().should('include', '/hackathon2020') 
      
      cy.get("form");

      cy.get('input[name="field1"]')
        .type(name)
        .should("have.value", name);
  
      cy.get('input[name="field2"]')
        .type(email)
        .should("have.value", email);
  
      cy.get('input[name="field3"]')
        .type(phone)
        .should("have.value", phone);
  
      cy.get('input[name="field4"]')
        .type(website)
        .should("have.value", website);
  
      cy.get('input[name="field5"]')
        .type(subject)
        .should("have.value", subject);      
  
      cy.get('textarea[name="field6"]')
        .type(message)
        .should("have.value", message);      
  
      cy.get("#field7")
        .should("have.text", "Send message")
        .click()

      cy.wait(3000)
    }
       
    function VerifyMessagePage() {
      cy.url().should('include', '/message')
      cy.get("#message")
        .should("have.text", expMessagePageMessage);
    }
  });
});