'use strict';
const { app } = require('../src/server'); 
const supertest = require('supertest');
const mockRequest = supertest(app);


const { db } = require('../src/models/index');


beforeAll(async () => {
    await db.sync();
});

describe('Web server', () => {

    it('Should respond with 404 status on an invalid route', async () => {
        const response = await mockRequest.get('/clo');
        expect(response.status).toBe(404);
    });

    // test if can create a person
    it('can add a ckothes', async () => {
        const response = await mockRequest.post('/clothes').send({
            firstName: 'sara',
            lastName: 'altayeh'
        });
        expect(response.status).toBe(201);
    });

    // test if can read
    it('can get all people', async () => {
        const response = await mockRequest.get('/clothes');
        expect(response.status).toBe(200);

    });


    // test if can update a person
    it('can update a record', async () => {
        const response = await mockRequest.put('/clothes/1');
        expect(response.status).toBe(201);
    });
    // test if can delete a person
    it('can delete a record', async () => {
        const response = await mockRequest.delete('/clothes/1');
        expect(response.status).toBe(204);
    });
});

// after all the tests are done
afterAll(async () => {
    await db.drop();
});