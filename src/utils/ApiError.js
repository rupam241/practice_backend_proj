class ApiError extends Error{
    constructor(
        statusCode,
        message="something went wrong",
        error=[],
        Statck=""
    ){
        super(message)
        this. statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=error
        if(Statck){
            this.stack=Statck

        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }


    }
}

export {ApiError}