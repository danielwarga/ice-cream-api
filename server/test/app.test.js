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

    it("Response to a GET request at /flavours with a 200 status", (done) => {
        request(api).get("/flavours").expect(200, done);
    })

    it("Response to a GET request at /flavours with a JSON object", (done) => {
        request(api).get("/flavours").expect('Content-Type', /json/, done);
    })

    // it("Response to a GET request at /flavours with a JSON object that has a 'flavours' key", (done) => {
    //     request(api).get("/flavours").end((err, res) => {
    //         try {
    //             expect.assertions(2);
    //             const data = res.body;
    //             expect("flavours" in data);
    //             expect(data["flavours"] instanceof Array);
    //             done();
    //         }catch (err){
    //             done(err);
    //         }
    //     })
    // })
})

{ flavours: ["strawberry"]}
