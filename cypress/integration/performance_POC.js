describe("REST API Tests", () => {
    it("Verify request 'users with delay 3' response time", () => {
      cy.request('https://reqres.in/api/users?delay=3')
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.duration).to.below(4000)                 // <----------------------------- clue response time 
          expect(response.body).to.have.property('total', 12)
        })
    })


    it("Vefiry that there are 12 elements in total", () => {
      cy.request('https://reqres.in/api/users?delay=3')
        .then((response) => {
          expect(response.body).to.have.property('total', 12)
        })
    })
  })