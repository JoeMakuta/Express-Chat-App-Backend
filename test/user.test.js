const app = require("../server").app;
const chaiHttp = require("chai-http");
const chai = require("chai");

//Assertion Style
const should = chai.should();
chai.use(chaiHttp);

const user_login = {
  userEmail: "makutajosue@gmail.com",
  passWord: "0108joemak",
};

const user_registration = {
  userEmail: "makutajosue@gmail.com",
  userName: "Joe Makuta",
  passWord: "0108joemak",
};

let token = "";

describe("USERS", () => {
  describe("Authentification", () => {
    it("It should register a new user", (done) => {
      chai
        .request(app)
        .post("/signup")
        .send(user_registration)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it("It should login", (done) => {
      chai
        .request(app)
        .post("/login")
        .send(user_login)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("token");
          token = res.body.token;
          done();
        });
    });
  });

  describe("Get users /users", () => {
    it("It should get unauthorized with 401 /users", (done) => {
      chai
        .request(app)
        .get("/users")
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });

    it("It should get users /users", (done) => {
      chai
        .request(app)
        .get("/users")
        .auth(token, { type: "bearer" })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
