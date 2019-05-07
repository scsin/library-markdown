let chai = require( "chai");
let expect = chai.expect;
let lib = require("../lib/index");

describe ("library_markdown", () => {
    describe("getLinksFromMd",() => {
        describe("when there is no url in the text", () => {
            it("should return an empty object", () => {
                expect(lib.getLinksFromMd("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")).to.equal("{}");
            });
        });
        describe("when there is url in the text", () => {
            it("should return an array with objects", () => {
                expect(lib.getLinksFromMd("PS C:\Users\Sin\Documents\Laboratória\Bloco Programação Básica https://www.google.com \ projeto_library2> www.yahoo.com.br node_modules/.bin/mocha")).to.deep.equal([{"href": "https://www.google.com"}, {"href": "www.yahoo.com.br"}]);
            });
        });
    });
});