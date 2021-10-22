export interface IDbConection 
{
    makeQuery(query:String):Promise<String>;
}