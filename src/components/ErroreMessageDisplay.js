import React from 'react'

const ErroreMessageDisplay = ({errorMeassage}) => {
    return (
        <div>
            <p className='text-red-600 text-center'> {errorMeassage} </p>
        </div>
    )
}

export default ErroreMessageDisplay