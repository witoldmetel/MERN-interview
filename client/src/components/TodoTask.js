import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, Collapse } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions/index';
import './TodoTask.css'

import InputTodoSubtask from './InputTodoSubtask';

class TodoTask extends Component {
    state = {
        collapse: false
    }

    onDeleteClick = (id) => {
        this.props.deleteTodo(id);
    }

    onToggleClick = (id) => {
        this.props.toggleTodo(id);
    }

    onCollapse = () => {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
    const { id, title, completed, subtasks } = this.props;
    let subtasksContent;
    if (subtasks) {
        subtasksContent = (
            <div>
                {subtasks.map(({ id, title, completed }) => (
                    <ListGroupItem key={id} className="subtask__list--item">
                        <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</p>
                        <div className="todoItem__controls">
                            <label className="checkbox">
                                <input type="checkbox" onClick={this.onToggleClick.bind(this, id)}/>
                                <span className="checkmark"></span>
                            </label>
                            <Button onClick={this.onDeleteClick.bind(this, id)} color="danger">
                                <i className="far fa-trash-alt"></i>
                            </Button>
                        </div>
                    </ListGroupItem>
                ))}
            </div>
        )
    } else {
        subtasksContent = null
    }
    return (
        <div>
            <ListGroupItem key={id} className="todoItem">
                <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</p>
                <div className="todoItem__controls">
                    <label className="checkbox">
                        <input type="checkbox" onClick={this.onToggleClick.bind(this, id)}/>
                        <span className="checkmark"></span>
                    </label>
                    <Button onClick={this.onDeleteClick.bind(this, id)} color="danger">
                        <i className="far fa-trash-alt"></i>
                    </Button>
                    <Button
                        color="primary"
                        onClick={this.onCollapse}
                        hidden
                    >
                        {this.state.collapse ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}
                    </Button>
                </div>
            </ListGroupItem>
            <Collapse isOpen={this.state.collapse}>
                <InputTodoSubtask id={id}/>
                <ListGroup className="subtask__list">
                    {subtasksContent}
                </ListGroup>
            </Collapse>
        </div>
    )
    }
}

TodoTask.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    todo: state.todo
})

export default connect(mapStateToProps, { deleteTodo, toggleTodo })(TodoTask)