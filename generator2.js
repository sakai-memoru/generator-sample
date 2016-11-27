var co = require('co');

function puts(str) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(str);
    }, 1000);
  });
}

console.log('start');

co(function* () {
	console.log('co start');

	const res1 = yield puts('1');
  console.log(res1);

  const res2 = yield puts('2');
  console.log(res2);

  const res3 = yield puts('3');
  console.log(res3);

	console.log('co end');
});

console.log('end');

