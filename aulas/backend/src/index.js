/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

const express = require ('express');
const express = require('cors');
const routes = require('./routes');
const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);




app.listen(3333);

/*
Rota / Recurso
Métodos HTTP:
GET: Buscar uma informação do back-end
POST: Criar uma informação no back-end
PUT: alterar uma informação no back-end
DELETE: Deletar uma informação no back-end

Query Params: Paramentros nomeados enviados na rota após "?" (filtros, paginação)
Rout Params: paramentros utilizados para identificar recursos
Request Body: corpo da requisição utilizado para criar ou alterar recursos
*/



