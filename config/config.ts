module.exports = {
  development: {
      username: process.env.DBUSERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      host: process.env.DBHOST,
      dialect: process.env.DIALECT,
      Key: process.env.JWT_SECRET_KEY
  },
  staging: {
      username: process.env.DBUSERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      host: process.env.DBHOST,
      dialect: process.env.DIALECT,
      Key: process.env.JWT_SECRET_KEY
  },
  production: {
      username: process.env.DBUSERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      host: process.env.DBHOST,
      dialect: process.env.DIALECT,
      Key: process.env.JWT_SECRET_KEY
  }
};