import React, { Component } from 'react';
import { Container, ListGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodos, addTodo } from '../actions/index';
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
            title: this.state.title
        }
        this.props.addTodo(newTask)
        }

    render() {
        let todoListContent;
        const { todos } = this.props.todo;
        if(todos) {
            todoListContent = (
                <ListGroup>
                    {todos.map(({ _id, title, completed, subtasks }) => (
                        <TodoTask
                            key={_id}
                            id={_id}
                            title={title}
                            completed={completed}
                            subtasks={subtasks}
                        >
                        </TodoTask>
                    ))}
                </ListGroup>
            )
        } else {
            todoListContent = null;
        }
        return (
        <div>
            <Container className="conteinerr">
                <InputTodo
                    AddTask={this.onSubmit}
                    ChangeValue={this.onChange}
                >
                </InputTodo>
                {todoListContent}
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

export default connect(mapStateToProps, { getTodos, addTodo })(TodoList)