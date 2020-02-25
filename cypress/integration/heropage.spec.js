context("Gideon's heropage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
    cy.get(".Gideon-herolink").click();
  });

  describe("Heading", () => {
    it("Shows the correct name on heropage", () => {
      cy.get(".heropage-heading").contains("Gideon");
    });

    it("Should have 300 health and 20000 mana", () => {
      cy.get(".hero-lifepowers").contains("Health: 300 • Mana: 20000");
    });
  });

  describe("Progressbar", () => {
    it("Agility should have width of 20", () => {
      cy.get(".progressbar-agility")
        .its("width")
        .should("be", 20);
    });
  });

  describe("Herostory", () => {
    it("Should render description", () => {
      cy.get(".herostory").contains("Even though he might look soft and calm");
    });

    it("Should NOT render backstory", () => {
      cy.get(".herostory").should(
        "not.contain",
        "Little did he know of his future before awakening his powers"
      );
    });

    it("Should show backstory after clicking show more and hide it when clicking again", async () => {
      const backStoryButton = cy.get(".backstory-button");
      const heroStory = cy.get(".herostory");
      await backStoryButton.click();
      heroStory.contains(
        "Little did he know of his future before awakening his powers"
      );
      await backStoryButton.click();
      heroStory.should(
        "not.contain",
        "Little did he know of his future before awakening his powers"
      );
    });
  });

  describe("Skills", () => {
    it("Will show two skills, telekinesis and psybeam", () => {
      cy.contains("Telekinesis");
      cy.contains("Psybeam");
    });
    it("Psybeam can be clicked and damage will be 150", () => {
      cy.get(".Psybeam-button").click();
      cy.get(".skill-damage").contains("150");
    });
    it("Psybeam can be clicked and element will be psychic", () => {
      cy.get(".Psybeam-button").click();
      cy.get(".skill-element").contains("Psychic");
    });
    it("Psybeam can be clicked and text will be correct", () => {
      cy.get(".Psybeam-button").click();
      cy.get(".skill-description").contains("Shoots a psychic beam.");
    });
  });

  describe("Traits", () => {
    it("Resistance should contain 🌪️", () => {
      cy.get(".traits-resistance").contains("🌪️");
    });
    it("Weakness should contain 🔥", () => {
      cy.get(".traits-weakness").contains("🔥");
    });
  });
});
