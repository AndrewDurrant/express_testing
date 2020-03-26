/* eslint-disable quotes */
const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('Express App', () => {
  it('should return a message from GET /', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Greetings Express!');
  });
});

describe('GET /sum', () => {
  it('8/4 should be 2', () => {
    return supertest(app)
      .get('/sum')
      .query({ a: 8, b: 4 })
      .expect(200, '8 divided by 4 is 2');
  });

  it(`should return 400 if 'a' is missing`, () => {
    return supertest(app)
      .get('/sum')
      .query({ b: 4 })
      .expect(400, 'Value for a is needed');
  });

  it(`should return 400 if 'b' is missing`, () => {
    return supertest(app)
      .get('/sum')
      .query({ a: 8 })
      .expect(400, 'Value for b  is needed');
  });
  
  // it('should return 400 if a is not numeric', () => {
  //   return supertest(app)
  //     .get('/sum')
  //     .query({ a: 'string', b: 4 })
  //     .expect(400, 'Number is needed for a');
  // });
  // it('should return 400 if b is not numeric', () => {
  //   return supertest(app)
  //     .get('/sum')
  //     .query({ a: 8, b: 'string' })
  //     .expect(400, 'Number is needed for b');
  // });
  // it('should return 400 if b is divided by zero', () => {
  //   return supertest(app)
  //     .get('/sum')
  //     .query({ b: 0})
  //     .expect(400, 'B cannot be zero');
  // });

});
