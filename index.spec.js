const supertest = require("supertest")
const server = require("./index")
describe("endpoints", () => {
 //  test("register user", async () => {
 //    const res = await supertest(server)
 //      .post("/api/auth/register")
 //      .send({ username: "nnsnff", password: "1234" });
 //    expect(res.status).toBe(201);
 //  });

 //  test("register user returns username", async () => {
 //   const res = await supertest(server)
 //     .post("/api/auth/register")
 //     .send({ username: "nefn", password: "1234" });
 //     expect(res.body.username).toBe("nefn")

 // });

 test("login user", async () => {
  const res = await supertest(server)
    .post("/api/auth/login")
    .send({ username: "nefn", password: "1234" });
    const token = res.body.token
    expect(token)

});
test("login user response", async () => {
 const res = await supertest(server)
   .post("/api/auth/login")
   .send({ username: "nefn", password: "1234" });
   expect(res.type).toBe("application/json")

});
test("login user response", async () => {
 const res = await supertest(server)
   .get("/api/jokes")
      expect(res.type).toBe("application/json")

});
test("login user response", async () => {
 const res = await supertest(server)
   .get("/api/jokes")
      expect(res.body.you).toBe("shall not pass!")

});
}); 