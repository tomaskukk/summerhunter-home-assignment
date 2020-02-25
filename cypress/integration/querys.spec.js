context("Herocard", () => {
  describe("query: getHeroNames()", () => {
    const GetHeroNames = () => `{
          heroes {
              name
          }
      }`;
    it("query will be succesfull with statuscode 200", () => {
      cy.postGQL(GetHeroNames()).then(res => {
        expect(res.status).to.eq(200);
        expect(res);
      });
    });
  });

  describe("query: getHeroByName()", () => {
    const GetHeroLifepowers = () => `{
            heroByName(name: "Gideon") {
                lifepowers {
                  healthpoints
                }
            }
        }`;

    const GetHeroSkills = () => `{
            heroByName(name: "Gideon") {
                skills {
                    name
                    description
                    damage
                    element
                }
            }
        }`;

    it("returns correct number on gideon's lifepower", () => {
      cy.postGQL(GetHeroLifepowers()).then(res => {
        expect(res.body, "response body").to.deep.equal({
          data: {
            heroByName: {
              lifepowers: {
                healthpoints: 300
              }
            }
          }
        });
      });
    });

    it("returns correct skills on gideon's skills", () => {
      cy.postGQL(GetHeroSkills()).then(res => {
        expect(res.body.data, "response body data").to.deep.equal({
          heroByName: {
            skills: [
              {
                name: "Telekinesis",
                description: "Gideon telepathically grasps of its target.",
                damage: 0,
                element: "Psychic"
              },
              {
                name: "Psybeam",
                description: "Shoots a psychic beam.",
                damage: 150,
                element: "Psychic"
              }
            ]
          }
        });
      });
    });
  });
});
