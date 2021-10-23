import { DbConnection } from "./DbConnection";

export interface IDbConection 
{
    makeQuery(query:String):Promise<String>;
   
}