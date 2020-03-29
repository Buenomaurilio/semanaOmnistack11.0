/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
const generateUniqueId = require('../../src/uttils/generateUniqueId');


describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();

        expect( id ).toHaveLength( 8 );
    });
});