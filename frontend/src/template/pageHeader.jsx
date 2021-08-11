import React from 'react'

export default function pageHeader(props) {
    return (
        <header>
            <h2>{props.name} {'>'} <small className="text-muted">{props.small}</small></h2><hr />
        </header>
    )
}
