import React, { Component } from 'react';
import uuid from 'uuid';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

export default class TodoList extends Component {
    state = {
        todos: [
            { id: uuid(), title: 'Buy books' },
            { id: uuid(), title: 'Buy cars' },
            { id: uuid(), title: 'Buy milk' },
            { id: uuid(), title: 'Buy apples' }
        ]
    }

    AddTodo = () => {
        const title = prompt('Add new todo');
        if (title) {
            this.setState(state => ({
                todos: [...state.todos, { id: uuid(), title }]
            }));
        }
    }

    render() {
        const { todos } = this.state;
        return (
        <div>
            <Container>
                <Button 
                    color="primary"
                    onClick={this.AddTodo}
                >Add todo
                </Button>
                <ListGroup>
                    {todos.map(({ id, title }) => (
                        <ListGroupItem key={id}>
                            {title}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        </div>
        )
    }
}
