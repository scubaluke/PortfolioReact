import React from 'react'

export default function Service({title, body}) {
    return (
        <div className="service" style={{maxWidth: '500px', margin: '0 auto'}}>
        <h3>{title}</h3>
        <p>{body}</p>
     </div> 
    )
}
