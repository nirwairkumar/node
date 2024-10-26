const sum = (a,b) => a+b;
const mul = (a, b) => a*b;
const g = 9.81;
const Pi = 3.14;

let obj = {
    sum:sum,
    mul: mul,
    g: g,
    Pi: Pi,
};
module.exports= obj;

//   <<<<  other ways >>>>    //
// module.exports.sum = (a,b) => a + b;
// exports.sum = (a,b) => a + b;