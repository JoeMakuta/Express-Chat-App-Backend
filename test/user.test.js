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

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mzg3MDdiNjliMTlkM2RmYzliYzNjZGYiLCJpYXQiOjE2NzQ0NjUxOTIsImV4cCI6MTY3NDU1MTU5Mn0.qD_n-keBi_BTXd9tRiUXZ11gzGi-nJ0hfVTZADGcdnU";

describe("USERS", () => {
  describe("Authentification", () => {
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
        .set("authorization", token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
