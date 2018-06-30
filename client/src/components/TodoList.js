import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

export default class TodoList extends Component {
    state = {
        todos: [
            { id: 1, title: 'Buy books' },
            { id: 2, title: 'Buy cars' },
            { id: 3, title: 'Buy milk' },
            { id: 4, title: 'Buy apples' }
        ]
    }

    AddTodo = () => {
        const title = prompt('Add new todo');
        if (title) {
            this.setState(state => ({
                todos: [...state.todos, { id: 5, title }]
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
