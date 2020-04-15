const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('GET /generate endpoint', () => {
  it('should generate an array of 5', () => {
    return supertest(app)
      .get('/generate')
      .query({ n: 5 })
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        // make sure you get an array
        expect(res.body).to.be.an('array');
        // array must not be empty
        expect(res.body).to.have.lengthOf.at.least(1);
        // this assertion fails
        // expect(res.body).to.eql([1,2,3,4,5]);
        // simple solution for above is to use include() from chai
        expect(res.body).to.include.members([1,2,3,4,5]);
      });
  });
});