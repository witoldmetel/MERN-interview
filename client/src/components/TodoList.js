import React, { Component } from 'react';
import uuid from 'uuid';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodos } from '../actions/index';

class TodoList extends Component {
    componentDidMount() {
        this.props.getTodos();
    }

    AddTodo = () => {
        const title = prompt('Add new todo');
        if (title) {
            this.setState(state => ({
                todos: [...state.todos, { id: uuid(), title }]
            }));
        }
    }

    RemoveTodo = () => {
        const { id } = this.state.todos;
        this.setState(state => ({
                todos: state.todos.filter(todo => todo.id !== id)
            }));
    }

    render() {
        const { todos } = this.props.todo;
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
                            <Button
                                color="danger"
                                className="ml-5"
                                onClick={this.RemoveTodo}
                            >
                                X
                            </Button>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        </div>
        )
    }
}

TodoList.propTypes = {
    todo: PropTypes.object.isRequired,
    getTodos: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    todo: state.todo
})

export default connect(mapStateToProps, { getTodos })(TodoList)