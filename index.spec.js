const supertest = require("supertest")
const server = require("./index")

test("welecom", async () => {
 const res = await supertest(server).get("/api/auth/register")
 expect(res.status).toBe(201)
 expect(res.type).toBe("application/json")
 expect(res.body.message).toBe("Welcome")
 console.log(res)

})