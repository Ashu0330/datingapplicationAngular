export class ApiResponse<T>
{
    responseCode:number;
    isSuccess:boolean;
    message:string;
    data:T

}