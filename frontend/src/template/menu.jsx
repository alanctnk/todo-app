import React from 'react'

export default function menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-4">
            <a className="navbar-brand" href="#"><i className="fa fa-calendar-check-o"></i> TodoApp</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link text-info" href="#/todos">Tarefas<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-info" href="#/about">Sobre</a>
                </li>
                </ul>
            </div>
        </nav>    
    )
}
