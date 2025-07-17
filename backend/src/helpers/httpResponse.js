
export const ok=(body)=> {
    return{
        success :true,
        statusCode:200,
        body

    }}
export const notFound =()=>{ 
    return{
        success :false,
        statusCode:400,
        body: {
            text: "Not Found"
        }

    }}
export const serverError = (error)=>{
    return{
        success :false,
        statusCode:500,
        error

}

}