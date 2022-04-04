import React, { useState } from 'react'
import { Container,Button, Form, FormGroup, Input, InputGroup } from 'reactstrap'

import {v4} from "uuid";

//redux
import {connect} from "react-redux"
import { addTodo } from "../action/todo"

const TodoForm = ({addTodo}) => {
    
    const [title, setTitle] = useState('')
  
    const handleSubmit = e => {
        e.preventDefault();
        if(title === ''){
            return alert("Please add a todo")
        }

        const todo = {
            title,
            id : v4()
        }

        addTodo(todo);

        setTitle("");
    }


    return (
    <Form onSubmit={handleSubmit}>
        <FormGroup>
            <InputGroup>
                <Input 
                type='text'
                name='todo'
                id='todo'
                placeholder='Your next todo'
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
            </InputGroup>
            <Button color='primary' onClick={handleSubmit}>ADD</Button>
        </FormGroup>
    </Form>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    addTodo : todo => {
        dispatch(addTodo(todo))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)