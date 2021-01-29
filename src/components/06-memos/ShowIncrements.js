import React from 'react'

export const ShowIncrements = React.memo(({increment}) => {

    console.log("me volve a generar :(");

        return (
            <button
            className="btn btn-primary"
            onClick={()=> {
                increment(5)
            }}
            >
                incrementar
            </button>
        )
}
)