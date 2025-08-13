
export const ok=(body)=> {
    return{
        success :true,
        statusCode:200,
        body

    }}
export const created = (body) => {
<<<<<<< HEAD
    return{
        success: true,
        statusCode: 201,
        body,
}}
export const notFound =()=>{ 
=======
>>>>>>> origin/main
    return{
        success: true,
        statusCode: 201,
        body,
}}
export const notFound = (message) => { 
    return {
        success: false,
        statusCode: 404,
        body: { message: message } 
    }
}
export const serverError = (error)=>{
    return{
        success :false,
        statusCode:500,
        error

}

}