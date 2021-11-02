import { IDbConection } from "./IDbConection";

var mysql = require("mysql");

export class DbConnection implements IDbConection {
  instance: any;
  conectionPool: any;
  private static instance: DbConnection;
  private constructor() {
    //connectuion poool initialization
    this.conectionPool = mysql.createPool({
      connectionLimit: 2000,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }
  
  
  public static getInstance(): DbConnection {
    if (!DbConnection.instance) {
      DbConnection.instance = new DbConnection();
    }
    return DbConnection.instance;
  }

  async makeQuery(query: any): Promise<String> {
    return new Promise((resolve, reject) => {
      this.conectionPool.query(query, (err: any, rows: string) => {
        if (err) {
          return reject(err);
        }

        return resolve(rows);
      });
    });
  }
}
