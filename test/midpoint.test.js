const app = require('../app');
const expect = require('chai').expect;
const supertest = require('supertest');

describe('GET /midpoint endpoint', () => {
  it('should find midpoint between NY and LA', () => {
    const query = {
      lat1: 40.6976701, //NY
      lon1: -74.2598674, //NY
      lat2: 34.0207305, //LA
      lon2: -118.6919221 //LA
    };
    // somewhere near Aurora, Kansas
    const expected = {
      lat: 39.50597300917347,
      lon: -97.51789156106972
    };

    return supertest(app)
      .get('/midpoint')
      .query(query)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.have.all.keys('lat', 'lon');
        expect(res.body).to.eql(expected);
      });
  });
  it('should return 400 if lat is greater than 90', () => {
    const query = {
      lat1: 94.6976701,
      lon1: -74.2598674,
      lat2: 200.0207305,
      lon2: -118.6919221
    };

    return supertest(app)
      .get('/midpoint')
      .query(query)
      .expect(400, 'latitude must be 90 or lower');
  });
  // this does not handle negative coordinates - figure that out.
  // it('should return 400 if lon is greater than 180', () => {
  //   const query = {
  //     lat1: 77.6976701,
  //     lon1: -183.2598674,
  //     lat2: 40.0207305,
  //     lon2: -191.6919221
  //   };

  //   return supertest(app)
  //     .get('/midpoint')
  //     .query(query)
  //     .expect(400, 'longitude must be 180 or lower');
  // });
});