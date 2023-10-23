import swheaders from "./header";
const header = new swheaders();
export default class SwaggerPaths {
  paths = {
    // "parameters": [
    //   {
    //     "in": "header",
    //     "name": "Authorization",
    //     "required": true,
    //     "description": "An authorization token for authentication.",
    //     "schema": {
    //       "type": "string"
    //     }
    //   }
    // ],
    /// Customer
    "/customer/v1/create-customer/": {
      post: {
        tags: ['Customer'],
        summary: "Adds a new customer.",
        security: [
          {
            apiKeyAuth: []
          }
        ],
        
      requestBody: {
        description: "Create a new Customer.",
        content: {
          ["application/json"]: {
            schema: {
              $ref: "#/definitions/CreateCustomerRequestModel"
            }
          }
        }
      },
        responses: {
          "201": {
            description: "Customer Created Successfully.",
            content: {
              ["application/json"]: {
                schema: {
                  $ref: "#/definitions/CreateCustomerRequestModel"
                }
              }
            }
          },
          "400": {
            description: "Customer Created field. Please try again.",
            content: {
              ["application/json"]: {
                schema: {
                  $ref: "#/definitions/CreateCustomerRequestModel"
                }
              }
            }
          }
        }
      }
    },


    "/customer/v1/get-customer/{id}": {
      get: {
        tags: ['Customer'],
        summary: "Gets one or more cities.",
        security: [
          {
            apiKeyAuth: []
          }
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: 'integer'
            }
          }
        ],
        responses: {
          "200": {
            description: "Customer data has been received.",
            content: {
              ["application/json"]: {
                schema: {
                  $ref: "#/definitions/CreateCustomerRequestModel"
                }
              }
            },
            "403": {
              description: "Customer is not found.",
              content: {
                ["application/json"]: {
                  schema: {
                    $ref: "#/definitions/CreateCustomerRequestModel"
                  }
                }
              }
            },
            "400": {
              description: "Sorry! We have not received cities data.",
              content: {
                ["application/json"]: {
                  schema: {
                    $ref: "#/definitions/CreateCustomerRequestModel"
                  }
                }
              }
            }
          }
        }
      },
    },


    "/customer/v1/get-customer": {
      get: {
        tags: ['Customer'],
        summary: "Gets one or more categories.",
        security: [
          {
            apiKeyAuth: []
          }
        ],
        responses: {
          "200": {
            description: "Customer data has been received.",
            content: {
              ["application/json"]: {
                schema: {
                  $ref: "#/definitions/CreateCustomerRequestModel"
                }
              }
            }
          },
          "403": {
            description: "Customer is not found.",
            content: {
              ["application/json"]: {
                schema: {
                  $ref: "#/definitions/CreateCustomerRequestModel"
                }
              }
            }
          },
          "400": {
            description: "Sorry! We have no Record.",
            content: {
              ["application/json"]: {
                schema: {
                  $ref: "#/definitions/CreateCustomerRequestModel"
                }
              }
            }
          }
        }
      }
    },


    "/customer/v1/update-customer/{id}": {
      patch: {
        tags: ['Customer'],
        summary: "Updates an existing user with the specified id.",
        security: [
          {
            apiKeyAuth: []
          }
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Update the customer with the specified id.",
            required: true,
            schema: {
              type: 'string'
            }
          }
        ],
        requestBody: {
          description: "Create a new Customer.",
          content: {
            ["application/json"]: {
              schema: {
                $ref: "#/definitions/CreateCustomerRequestModel"
              }
            }
          }
        },
        // requestBody: {
        //   description: "Updates an existing user with the specified id.",
        //   content: {
        //     ["multipart/form-data"]: {
              
        //       schema: {
        //         type: 'object',
        //         properties: {
        //           fullName: {
        //             type: 'string',
        //           },
        //           phoneNo: {
        //             type: 'integer',
        //           },
        //           email: {
        //             type: 'string',
        //           },
        //           passWord: {
        //             type: 'string',
        //           },
        //         },
        //       },
        //     }
        //   }
        // },
        responses: {
          "200": {
            description: "Customer has been updated successfully.",
            content: {
              ["application/json"]: {
                schema: {
                  $ref: "#/definitions/UpdateCustomerRequestModel"
                }
              }
            }
          },
          "403": {
            description: "Customer is not found.",
            content: {
              ["application/json"]: {
                schema: {
                  $ref: "#/definitions/UpdateCustomerRequestModel"
                }
              }
            }
          },

          "400": {
            description: "Customer updation failed. Please try again.",
            content: {
              ["application/json"]: {
                schema: {
                  $ref: "#/definitions/UpdateCustomerRequestModel"
                }
              }
            }
          }
        }
      }
    },



    "/customer/v1/delete-customer/{id}": {
      patch: {
        tags: ['Customer'],
        summary: "Deletes the customer with the specified id.",
        security: [
          {
            apiKeyAuth: []
          }
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Deletes the customer with the specified id.",
            required: true,
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          "200": {
            description: "Customer has been deleted successfully.",
            content: {
              ["application/json"]: {
                schema: {
                  $ref: "#/definitions/CreateCustomerRequestModel"
                }
              }
            }
          },
          "400": {
            description: "Customer deletion failed. Please try again.",
            content: {
              ["application/json"]: {
                schema: {
                  $ref: "#/definitions/CreateCustomerRequestModel"
                }
              }
            }
          }
        }
      }
    },


    "/customer/v1/login-customer": {
      post: {
        tags: ['Customer'],
        summary: "Login.",
        security: [
          {
            apiKeyAuth: []
          }
        ],
        parameters: [
        ],
        requestBody: {
          description: "Create a new Customer.",
          content: {
            ["application/json"]: {
              schema: {
                $ref: "#/definitions/LoginCustomerRequestModel"
              }
            }
          }
        },
        responses: {
          "200": {
            description: "Customer Login successfully.",
            content: {
              ["application/json"]: {
                schema: {
                  $ref: "#/definitions/LoginCustomerRequestModel"
                }
              }
            }
          },
          "400": {
            description: "Customer Lodin failed. Please try again.",
            content: {
              ["application/json"]: {
                schema: {
                  $ref: "#/definitions/LoginCustomerRequestModel"
                }
              }
            }
          }
        }
      }
    },

    "/customer/v1/AddFile": {
      post: {
        tags: ['Customer'],
        summary: "File Upload.",
        security: [
          {
            apiKeyAuth: []
          }
        ],
        parameters: [
        ],
        requestBody: {
          description: "File Upload.",
          content: {
            ["multipart/form-data"]: {
              schema: {
                $ref: "#/definitions/FileUploadCustomerRequestModel",

                properties: {
                  file: {
                    type: "file",
                    //contentType: image/png, image/jpeg,
                  },
          //         encoding:{
          //           profileImage: File,
          // contentType: Image/png, Image/jpeg
          //         },
              }
              }
            }
          }
        },
        // requestBody: {
        //   description: "Create a new Customer.",
        //   content: {
        //     ["application/json"]: {
        //       schema: {
        //         $ref: "#/definitions/FileUploadCustomerRequestModel"
        //       }
        //     }
        //   }
        // },
        responses: {
          "200": {
            description: "Customer Login successfully.",
            content: {
              ["application/json"]: {
                schema: {
                  $ref: "#/definitions/FileUploadCustomerRequestModel"
                }
              }
            }
          },
          "400": {
            description: "Customer Lodin failed. Please try again.",
            content: {
              ["application/json"]: {
                schema: {
                  $ref: "#/definitions/FileUploadCustomerRequestModel"
                }
              }
            }
          }
        }
      }
    },
  }
}