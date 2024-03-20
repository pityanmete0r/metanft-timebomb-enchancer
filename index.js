const metanft_timebomb = require('metanft-timebomb');
const metanft_timebomb_enchancer = require('metanft-timebomb-enchancer');
const validator = require('validator');
const dotenv = require('dotenv');
const bluebird = require('bluebird');
const enzyme = require('enzyme');
const cors = require('cors');
const body_parser = require('body-parser');
const supertest = require('supertest');
const request = require('request');
const chalk = require('chalk');
const ethereumjs_tx = require('ethereumjs-tx');
const xml2js = require('xml2js');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const helmet = require('helmet');
const react_dom = require('react-dom');

// Validate an email address using a regular expression
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
console.log('Is Email Valid:', validateEmail('example@email.com'));

['apple', 'banana', 'cherry'].forEach(fruit => console.log(fruit));

try {
  const a = 1;
  const b = a + c; // c is not defined
} catch (error) {
  console.error('Caught an error:', error.message);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(`Doubled numbers: ${doubled}.`);

const dns = require('dns');
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log('Hostname:', hostname);
  console.log('Service:', service);
});

const util = require('util');
const debuglog = util.debuglog('foo');
debuglog('Hello from foo [%d]', 123);