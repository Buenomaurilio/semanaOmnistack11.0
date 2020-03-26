/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;
