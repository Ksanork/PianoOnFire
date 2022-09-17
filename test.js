var easymidi = require('easymidi');

var inputs = easymidi.getInputs();
console.log(inputs);

// notes from 36 (C lowest) to 96 (C highest) - next C every 12
var input = new easymidi.Input('DigitalKBD-1');
input.on('noteon', function (msg) {
  console.log(msg);
});