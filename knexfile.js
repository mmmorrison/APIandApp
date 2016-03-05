module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/resources'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
