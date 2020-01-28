const supertest = require("supertest")
const server = require("./index")
describe("endpoints", () => {

  test("register user", async () => {
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({ username: "nnsnffs", password: "1234" });
    expect(res.status).toBe(201);
  });

  test("register user returns username", async () => {
   const res = await supertest(server)
     .post("/api/auth/register")
     .send({ username: "nefns", password: "1234" });
     expect(res.body.username).toBe("nefns")

 });

 test("login user", async () => {
  const res = await supertest(server)
    .post("/api/auth/login")
    .send({ username: "nefnss", password: "1234" });
    const token = res.body.token
    expect(token)

});
test("login user response", async () => {
 const res = await supertest(server)
   .post("/api/auth/login")
   .send({ username: "nefnas", password: "1234" });
   expect(res.type).toBe("application/json")

});
test("jokes res type ", async () => {
 const res = await supertest(server)
   .get("/api/jokes")
      expect(res.type).toBe("application/json")

});
test("jokes ", async () => {
 const res = await supertest(server)
   .get("/api/jokes")
      expect(res.body.you).toBe("shall not pass!")

});
}); 