export default class SwaggerDefinitions {
  definitions = {
    CommonApiFailed: {
      properties: {
        code: {
          type: "integer",
        },
        message: {
          type: "string",
        },
      },
    },
    components: {
      securitySchemes: {
        apiKeyAuth: {
          type: "apiKey",
          description: "Bearer token for authentication",
          name: "authorization",
          in: "header",
        },
      },
    },
      // Customer Request
      CreateCustomerRequestModel: {
        type: "object",
        properties: {
          fullName: {
            type: "string",
            default: ""
          },
          phoneNo: {
            type: "integer",
            default: ""
          },
          email: {
            type: "string",
            format: "email",
            default: ""
          },
          password: {
            type: "string",
            format: "password",
            default: ""
          },

        },
      },
      FileUploadCustomerRequestModel: {
        type: "object",
        properties: {
          fullName: {
            type: "string",
            default: ""
          },

          file: {
            type: "file",
            format: "file",
            default: ""
          },
          phoneNo: {
            type: "integer",
            default: ""
          },
          email: {
            type: "string",
            format: "email",
            default: ""
          },
          password: {
            type: "string",
            format: "password",
            default: ""
          },

        },
      },

      
      LoginCustomerRequestModel: {
        type: "object",
        properties: {
          email: {
            type: "string",
            format: "email",
            default: ""
          },
          password: {
            type: "string",
            format: "password",
            default: ""
          },

        },
      },


      UpdateCustomerRequestModel: {
        type: "object",
        properties: {
          fullName: {
            type: "string",
            example: "fullName",
            default: ""
          },
          phoneNo: {
            type: "string",
            example: "phoneNo",
            default: ""
          },
     
          securitySchemes: {
            auth: {
              type: "http",
              scheme: "authorization",
            },
          }

        },
      },
    }
  }

