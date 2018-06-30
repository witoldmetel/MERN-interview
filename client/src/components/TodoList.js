import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodos, addTodo, deleteTodo, toggleTodo } from '../actions/index';
import './TodoList.css';

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

    onDeleteClick = (id) => {
        this.props.deleteTodo(id);
    }

    onToggleClick = (id) => {
        this.props.toggleTodo(id);
    }

    render() {
        const { todos } = this.props.todo;
        return (
        <div>
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="todo">Todo</Label>
                        <Input
                            type="text"
                            name="title"
                            id="todo"
                            placeholder="Add todo task"
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <Button
                        color="primary"
                    >
                        Add Todo
                    </Button>
                </Form>
                <ListGroup>
                    {todos.map(({ id, title, completed }) => (
                        <ListGroupItem key={id} className="todoItem">
                            <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</p>
                            <div className="todoItem__controls">
                                <label className="container">
                                    <input type="checkbox" onClick={this.onToggleClick.bind(this, id)}/>
                                    <span className="checkmark"></span>
                                </label>
                                <Button
                                    color="danger"
                                    onClick={this.onDeleteClick.bind(this, id)}
                                >
                                    X
                                </Button>
                            </div>
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
    getTodos: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    todo: state.todo
})

export default connect(mapStateToProps, { getTodos, addTodo, deleteTodo, toggleTodo })(TodoList)