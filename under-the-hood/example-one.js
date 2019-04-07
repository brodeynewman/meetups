console.log('Invocation: 1');

setTimeout(() => {
 console.log('Invocation: 2');
}, 0);

console.log('Invocation: 3');

process.nextTick(() => {
 console.log('Invocation: 4');
});