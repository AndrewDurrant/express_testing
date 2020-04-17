const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('GET /frequency endpoint', () => {
  it('should count the frequency of each character in string', () => {
    const query = {
      s: 'aaBBAAbbaa'
    };

    const expected = {
      'a': 6,
      'b': 4
    };

    return supertest(app)
      .get('/frequency')
      .query(query)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.include(expected);
      });
  });
  it('should count the total number of distinct characters', () => {
    const query = {
      s: 'aaBBAAbbaa'
    };

    const expected = {
      unique: 2
    };

    return supertest(app)
      .get('/frequency')
      .query(query)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.include(expected);
      });
  });
  it('should return the average frequency of characters', () => {
    const query = {
      s: 'aaBBAAbbaa'
    };

    const expected = {
      average: 5
    };

    return supertest(app)
      .get('/frequency')
      .query(query)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.include(expected);
      });
  });
  it('should return the character with the highest frequency', () => {
    const query = {
      s: 'aaBBAAbbaa'
    };

    const expected = {
      highest: 'a'
    };

    return supertest(app)
      .get('/frequency')
      .query(query)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.include(expected);
      });
  });
  it('should return 400 if no string is provided', () => {
    const query = {
      s: ''
    };

    return supertest(app)
      .get('/frequency')
      .query(query)
      .expect(400);
  });
});