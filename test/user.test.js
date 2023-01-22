const app = require("../server");
const chaiHttp = require("chai-http");
const chai = require("chai");

//Assertion Style
const should = chai.should();
chai.use(chaiHttp);

describe("USERS", () => {
  describe("Get users /users", () => {
    it("It should get all users", (done) => {
      chai
        .request(app.app)
        .get("/users")
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });
});
