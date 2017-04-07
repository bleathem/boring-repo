function remoteMathService(cb) {
  var one;
  var two;
  var oneComplete = false;
  var twoComplete = false;
  
  callOneService(function(err, num) {
    one = num;
    oneComplete = true;
    if (twoComplete) {
      return cb(undefined, one + two);
    }
  });
  callTwoService(function(err, num) {
    two = num;
    twoComplete = true;
    if (oneComplete) {
      return cb(undefined, one + two);
    }
  });
}

function callOneService(cb) {
  setTimeout(function() {
    return cb(undefined, 1);
  }, 1000);
}

function callTwoService(cb) {
  setTimeout(function() {
    return cb(undefined, 2);
  }, 1500);
}

// remoteMathService(function(err, answer) {
//   if (err) console.log("error ", err);
//   if (answer !== 3) {
//     console.log("wrong answer", answer);
//   } else {
//     console.log("correct");
//   }
// });

module.exports = {
  remoteMathService: remoteMathService
};