import swPaths from './paths';
import swDefinitions from './definitions';

const { paths } = new swPaths();
const { definitions } = new swDefinitions();

let host = 'http://localhost:' + process.env.PORT + '/';
if (process.env.NODE_ENV !== 'development') {
  host = process.env.HOST;
}

module.exports = {
  openapi: '3.0.3',
  info: {
    title: 'My Teksun',
    version: '1.0.0',
    // description: "Secret Key : - "+process.env.APISECRETKEY+" \n\n" +
    // "Private Key : - "+process.env.APIPRIVATEKEY
  },
  servers: [
    {
      url: host + 'api',
      description: 'The base URL for performing all Curd API operations.',
    },
  ],
  components: {
    securitySchemes: {
      apiKeyAuth: {
        type: "apiKey",
         name: "authorization",
        description: "Bearer token for authentication",
        in: "header",
      },
    },
  },
  // token add krava aa rakhvu padse
  tags: [],
  paths: paths,
  definitions : definitions,
  responses: {},
  parameters: {},
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      description: "Authorization can be used to verify a user.",
      name: "authorization",
      in: "header"
    } 
  },
};
// import swPaths from './paths';
// import swDefinitions from './definitions';
// import SwaggerHeaders from './header'
// const token = new SwaggerHeaders()
// const { paths } = new swPaths();
// const definition = new swDefinitions();

// let host = 'localhost:' + process.env.PORT

// if (process.env.NODE_ENV != 'development') {
//   host = process.env.HOST;
// }

// module.exports = {
//   "openapi": "3.0.0",
//   "info": {
//     "title": "My Teksun",
//     "version": "1.0.0",
//     //   "description": "Secret Key : - "+process.env.APISECRETKEY+" \n\n" +
//     //   "Private Key : - "+process.env.APIPRIVATEKEY
//   },
//   "host": host,
//   "basePath": "/api",
//   "paths": paths,
//   "definitions": definition.definitions,
//   "responses": {},
//   "parameters": {},
//   "securityDefinitions": token,
//   "tags": []
// }
