const expect = require('chai').expect;
const sinon = require('sinon');
const fn_avg_from_db = require('../statics').fn_avg_from_db;
describe('positive test', () => {
  let db = {};;
  before(() => {
     db.findNumbers = sinon.fake.returns([0, 1, 2, 3, 4, 5, 6]);
  });
  it('test result should be 12', () => {
    expect(fn_avg_from_db(db)).to.equal(12);
  });
});
