import React from 'react'

const ErrorMessage = ({errorMess}) => {
  return (
    <div className='container mt-5'>
        <div className="row">
            <div className="col-12" style={{height:'40vh'}}>
            <div className="alert alert-danger" role="alert">
    {errorMess}
</div>
            </div>
        </div>
      
    </div>
  )
}

export default ErrorMessage
