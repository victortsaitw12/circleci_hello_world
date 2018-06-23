module.exports = {
  fn_avg: (arr) => {
    return arr.reduce((acc, x) => {
      return acc + (x % 2 == 0 ? x : 0);  
    });
  },
  fn_avg_from_db:(db) => {
    const arr = db.findNumbers();
    return arr.reduce((acc, x) => {
      return acc + (x % 2 == 0 ? x : 0);  
    });
  },
  fn_avg_from_db_promise:(db) => {
    return db.findNumbers().then(arr => {
      return arr.reduce((acc, x) => {
        return acc + (x % 2 == 0 ? x : 0);  
      });
    });
  },
}
