var pingPong = function(number) {
  var results = [];
  for (var i=1;i<=number;i++) {
    if (i % 15 === 0) {
      results.push("pingpong");
    } else if (i % 5 === 0) {
      results.push("pong");
    } else if (i % 3 === 0) {
      results.push("ping");
    } else {
    results.push(i);
    }
  }
  return results;
}
