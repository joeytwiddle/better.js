#!/usr/bin/env node

var assertWhichStop	= require('../src/assertwhichstop.js');

// overload console.assert
assertWhichStop.onConsoleAPI();

console.log('before assert');

console.assert( false );
//assertWhichStop(false)

console.log('after assert - this message should never show up');
