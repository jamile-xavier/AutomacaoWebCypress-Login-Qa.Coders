//hooks
//before - antes de todos os testes
//beforeEach - antes de cada teste
//after - depois de todos os testes
//afterEache - depois de cada teste

beforeEach(() => {
  cy.visit("https://automacao.qacoders-academy.com.br/login");
});

describe("Login", () => {
  it("Login com sucesso", () => {
    cy.get("#email").type("sysadmin@qacoders.com");
    cy.get("#password").type("1234@Test");
    cy.get("#login").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.equal("/login");
    });

    cy.get("body > nav > button").should("be.visible");
  });

  it("Login com e-mail válido e a senha inválida", () => {
    cy.get("#email").type("sysadmin@qacoders.com");
    cy.get("#password").type("1234@");
    cy.get("#login").click();

    cy.get('[class="MuiAlert-message css-1xsto0d" ]').should("be.visible");
    cy.get('[class="MuiAlert-message css-1xsto0d" ]').should("have.text", "E");
  });

  it("Login com e-mail inválido e a senha válida", () => {
    cy.get("#email").type("testet13@qacoders.com");
    cy.get("#password").type("1234@Test");
    cy.get("#login").click();

    cy.get('[class="MuiAlert-message css-1xsto0d" ]').should("be.visible");
    cy.get('[class="MuiAlert-message css-1xsto0d" ]').should("have.text", "E");
  });
});
