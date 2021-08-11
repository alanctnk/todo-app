import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const baseURL = 'http://localhost:3003/api/todos'
export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${baseURL}?sort=-createdAt${search}`)
            .then((resp) => this.setState({...this.state, description, list: resp.data}))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        axios.post(baseURL, {description})
            .then(() => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${baseURL}/${todo._id}`)
            .then(() => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        axios.put(`${baseURL}/${todo._id}`, {...todo, done: true})
            .then(() => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${baseURL}/${todo._id}`, {...todo, done: false})
            .then(() => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas"  small="Cadastro"/>
                <TodoForm
                description={this.state.description}
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
                handleClear={this.handleClear}
                handleAdd={this.handleAdd}/>
                <TodoList
                handleRemove={this.handleRemove}
                handleMarkAsDone={this.handleMarkAsDone}
                handleMarkAsPending={this.handleMarkAsPending}
                list={this.state.list}/>
            </div>
        )
    }
}
