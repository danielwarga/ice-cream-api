const request = require("supertest");

const app = require("../app.js");

describe("API", () => {

    let api;

    beforeAll (() => {
        api = app.listen(3030);
    })

    afterAll((done) => {
        api.close(done);
    })

    it("Response to a GET request at / with a 200 status", (done) => {
        request(api).get("/").expect(200, done);
    })
})
