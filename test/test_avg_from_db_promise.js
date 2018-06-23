const expect = require('chai').expect;
const sinon = require('sinon');
const fn_avg_from_db_promise = require('../statics').fn_avg_from_db_promise;
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
