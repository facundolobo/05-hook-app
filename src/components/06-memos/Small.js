import React from 'react'

export const Small = React.memo(( {value} ) => {

    console.log("me volvi a llmar :( ")
    return (
        <small> { value } </small>
    )
})
