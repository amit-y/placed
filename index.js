#!/usr/bin/env node

var us_states = require('./us_states.json');
var us_zip = /(\b\d{5}\b)/g;
var args = process.argv.slice(2);

if (args.length<1) process.exit(1);

var str = args.join(' ');
var matches = [];

var zipMatches = str.match(us_zip);
if (zipMatches) matches.push(zipMatches);

Object.keys(us_states).forEach(function(key) {
  var keyMatches = str.match(new RegExp('\\b'+key+'\\b', 'gi'));
  if (keyMatches) matches.push(keyMatches);
  var valMatches = str.match(new RegExp('\\b'+us_states[key]+'\\b', 'gi'));
  if (valMatches) matches.push(valMatches);
});

console.log(matches);
process.exit(0);