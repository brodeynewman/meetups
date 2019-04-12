console.log('Invocation: 1');

setTimeout(() => {
 console.log('Invocation: 2');
}, 0);

setImmediate(() => {
  console.log('Setting Immediate');
});

console.log('Invocation: 3');

process.nextTick(() => {
 console.log('Invocation: 4');
});