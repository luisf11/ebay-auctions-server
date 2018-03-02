const request = require('supertest');
const  app = require('../server');
const assert = require('chai').assert;

describe("GET /", function(){
    it("home route return ok",function(done){
        request(app).get("/")
            .expect(200)
            .expect(/hello api/,done)
    })
})

describe("POST /item", function(){
    it("brings items list",function(done){
        request(app).post("/item")
            .send({item:"macbook"})
            .set('Accept', 'application/json')
            .expect(200)
            .expect([],done)
    })
})