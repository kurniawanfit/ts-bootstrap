import { describe, it } from 'mocha';

process.env.NODE_ENV = 'local';
const chaiHttp = require('chai-http');
const chai = require('chai');
const App = require('../App');

chai.use(chaiHttp);

describe('API Request Test', () => {
  it('Positive return 200', (done) => {
    return chai.request(App).post('/loan/get/all')
      .end(res => {
        chai.expect(res).to.have.status(200);
        chai.expect(res).to.be.json();
        done();
      });
  });
});
