const expect = require('chai').expect;
const sinon = require('sinon');
const fn_avg = require('../statics').fn_avg;
const fn_avg_from_db = require('../statics').fn_avg_from_db;
const fn_avg_from_db_promise = require('../statics').fn_avg_from_db_promise;
describe('positive test', () => {
  it('test result should be 6', () => {
    expect(fn_avg([0, 1, 2, 3, 4, 5])).to.equal(6);
  }); 
});
describe('positive test', () => {
  let db = {};;
  before(() => {
     db.findNumbers = sinon.fake.returns([0, 1, 2, 3, 4, 5, 6]);
  });
  it('test result should be 12', () => {
    expect(fn_avg_from_db(db)).to.equal(12);
  });
});
describe('positive test', () => {
  let db = {};;
  before(() => {
     db.findNumbers = sinon.fake.resolves([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it('test result should be 20', (done) => {
    fn_avg_from_db_promise(db).then(result => {
      expect(result).to.equal(20);
    }).then(done, done);
  }); 
});
