import React from 'react'
import { Link } from 'react-router-dom'

export default function ResumeLink() {
    return (
        <Link to="/resume" >
            <h3 style={{padding: '5px'}} > &lt; Resume /&gt;</h3>
        </Link>
    )
}
