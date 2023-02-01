
// You should implement your task here.

module.exports = function towelSort (matrix) {
 let res = [].concat(...matrix);
 res.sort((a,b)=>a-b);
  return res;
}
