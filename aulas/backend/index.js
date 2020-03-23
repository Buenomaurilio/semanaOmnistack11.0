/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

const express = require ('express');

const app = express();

app.get('/', (request, response) =>{
    return response.json({
        event: 'Semana Omnistack 11.0',
        aluno: 'Maurilio Bueno' 
    });
});

app.listen(3333);

