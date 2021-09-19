var mysql = require('mysql');
export  class DbConnection {
  instance: any;
  conectionPool: any;
    constructor()
    {
        //singleton implementation
        const instance = this.instance;
        if (instance) {
          return instance;
        }
        this.instance = this;

        //connectuion poool initialization
        this.conectionPool = mysql.createPool({
            connectionLimit : 10,
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
          });
    }
    async makeQuery(query: any)
    {
        return new Promise((resolve, reject) => {
            this.conectionPool.query(query, (err: any,rows: unknown) => {
             if (err) {
              return reject(err)
             }
             return resolve(rows)
            })
           })
    }

} 
