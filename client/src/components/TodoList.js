import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Form, FormGroup, Label, Input, Collapse } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodos, addTodo, deleteTodo, toggleTodo } from '../actions/index';
import './TodoList.css';
import InputTodo from './InputTodo';
import TodoTask from './TodoTask';

class TodoList extends Component {
    componentDidMount() {
        this.props.getTodos();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: 122,
            title: this.state.title
        }
        this.props.addTodo(newTask)
    }

    render() {
        const { todos } = this.props.todo;
        return (
        <div>
            <Container>
                <InputTodo
                    AddTask={this.onSubmit}
                    ChangeValue={this.onChange}
                >
                </InputTodo>
                <ListGroup>
                    {todos.map(({ id, title, completed }) => (
                        <TodoTask
                            key={id}
                            id={id}
                            title={title}
                            completed={completed}
                        >
                        </TodoTask>
                    ))}
                </ListGroup>
            </Container>
        </div>
        )
    }
}

TodoList.propTypes = {
    todo: PropTypes.object.isRequired,
    getTodos: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    todo: state.todo
})

export default connect(mapStateToProps, { getTodos, addTodo, deleteTodo, toggleTodo })(TodoList)