import app from '../server.js';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';

import { catsList, sharksList } from '../data/api.data.js';
import { randomizeArray } from '../utils/api.utils.js';

chai.use(chaiHttp);

describe('Unit Test: Randomize Array', () => {

    const MOCK_DATA = [...catsList, ...sharksList];
    const output = randomizeArray(MOCK_DATA);
    const MOCK_DATA_LENGTH = MOCK_DATA.length;

    it('should return array', () => {
        
        expect(output).to.be.an('array');
    });

    it('should return array', () => {
        expect(output).to.have.lengthOf(MOCK_DATA_LENGTH);
    })
});


describe('Unit Test: Ping Endpoint', () => {

    const expected = {"success": 'Welcome to Ownr Developer Candidate Coding Test'};

    it('should send GET request to / endpoint', (done) => {
        chai
        .request(app)
        .get('/')
        .end((_err, res) => {
            expect(res.status).to.be.eql(200);
            expect(res.body).to.deep.equal(expected);
          done();
        });
    });

});


describe('Unit Test: Ping Cats Endpoint', () => {

    const expected = catsList;

    it('should send GET request to /api/cats endpoint', (done) => {
        chai
        .request(app)
        .get('/api/cats')
        .end((_err, res) => {
            expect(res.status).to.be.eql(200);
            expect(res.body).to.deep.equal(expected);
          done();
        });
    });

});

describe('Unit Test: Ping Sharks Endpoint', () => {

    const expected = sharksList;

    it('should send GET request to /api/sharks endpoint', (done) => {
        chai
        .request(app)
        .get('/api/sharks')
        .end((_err, res) => {
            expect(res.status).to.be.eql(200);
            expect(res.body).to.deep.equal(expected);
          done();
        });
    });

});

describe('Unit Test: Ping Both Endpoint', () => {

    it('should send GET request to /api/both endpoint', (done) => {
        chai
        .request(app)
        .get('/api/both')
        .end((_err, res) => {
            expect(res.status).to.be.eql(200);
          done();
        });
    });

});