/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;