import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default function todoForm(props) {
    const keyHandler = (e) => {
        if(e.key == 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(e.key == 'Escape') {
            props.handleClear()
        }
    }
    return (
        <div role="form" className="todoForm d-flex">
            <Grid cols="12 9 10">
                <input
                type="text"
                id="description"
                placeholder="Adicione uma tarefa"
                value={props.description}
                onChange={props.handleChange}
                onKeyUp={keyHandler}
                className="form-control"/>
            </Grid>
            <Grid cols="12 3 2">
                <IconButton
                style="primary"
                onClick={props.handleAdd}
                icon="plus"></IconButton>
                <IconButton
                style="info"
                onClick={props.handleSearch}
                icon="search"></IconButton>
                <IconButton
                style="default"
                onClick={props.handleClear}
                icon="close"></IconButton>
                
            </Grid>
        </div>
    )
}
