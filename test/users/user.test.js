import { app } from "../../server";
import chai from "chai";
import chaiHttp from "chai-http";

//Assertion Style
const should = chai.should();
chai.use(chaiHttp);

describe("USERS", () => {
  describe("Get users /users", () => {
    it("It should get all users", (done) => {
      chai
        .request(app)
        .get("/users")
        .end((err, res) => {
          res.should.have.status(200);
        });
    });
  });
});
