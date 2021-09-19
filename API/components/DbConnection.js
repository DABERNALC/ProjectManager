var mysql = require('mysql');
class DbConnection {
    constructor()
    {
        //singleton implementation
        const instance = this.constructor.instance;
        if (instance) {
          return instance;
        }
        this.constructor.instance = this;

        //connectuion poool initialization
        this.conectionPool = mysql.createPool({
            connectionLimit : 10,
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
          });
    }
    async makeQuery(query)
    {
        return new Promise((resolve, reject) => {
            this.conectionPool.query(query, (err,rows) => {
             if (err) {
              return reject(err)
             }
             return resolve(rows)
            })
           })
    }

} 
module.exports = DbConnection