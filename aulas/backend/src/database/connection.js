/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV  === 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;