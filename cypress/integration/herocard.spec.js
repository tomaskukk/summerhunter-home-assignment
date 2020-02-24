context("Herocard", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  describe("Herocard information", () => {
    it("Finds heroes in the main page", () => {
      cy.contains("Gideon");
      cy.contains("Lisa");
      cy.contains("Porcu");
    });
    it("Porcu only has first sentence of description", () => {
      cy.contains(
        "Using his wit and engineering skills, Porcu has created an awesome suit which shoots Plasma lazers and uses immense strength to overcome his opponents"
      );
      cy.should("not.contain", "City of Delareum");
    });

    it("Redirects to correct url on show more click", () => {
      cy.get(".Porcu-herolink").click();
      cy.location("pathname").should("include", "heroes/Porcu");
    });

    describe("query: getHeroNames()", () => {
      const GetHeroNames = () => `{
            heroes {
                name
            }
        }`;

      let responseData;
      before(() => {
        cy.postGQL(GetHeroNames()).then(res => (responseData = res.body.data));
      });
      it("returns an array of correct names", () => {
        assert.isArray(responseData.heroes);
      });
    });

    describe("query: lifepowers()", () => {
      const GetHeroLifepowers = () => `{
              heroes {
                  lifepowers {
                    healthpoints
                  }
              }
          }`;

      let responseData;
      before(() => {
        cy.postGQL(GetHeroLifepowers()).then(
          res => (responseData = res.body.data)
        );
      });
      it("returns number inside lifepower object", () => {
        assert.isNumber(responseData.heroes[0].lifepowers.healthpoints);
      });
    });
  });
});
