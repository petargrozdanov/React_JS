import React from "react"

const Error = () => {
    return <div>
        Oops, something went wrong.
        Try going back or refreshing the page.
        <button id='go_back' onClick={() => window.history.back()}>Go Back</button>
    </div>
}

export default Error