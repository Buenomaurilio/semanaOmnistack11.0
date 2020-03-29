/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
const crypto = require('crypto');

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}
