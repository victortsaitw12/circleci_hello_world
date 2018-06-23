const expect = require('chai').expect;
const fn_avg = require('../statics').fn_avg;
describe('positive test', () => {
  it('test result should be 6', () => {
    expect(fn_avg([0, 1, 2, 3, 4, 5])).to.equal(6);
  }); 
});
