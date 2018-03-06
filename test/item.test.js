const request = require('supertest');
const app = require('../server');

describe('GET /',()=>{
    test('it should response the GET method',async ()=> {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
})

describe('POST /item',()=>{
    test('it should response the POST method',async ()=> {
        const response = await request(app).post('/item')
        .set('Accept', 'application/json')
        .send({item: 'macbook'})
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    });

   
})