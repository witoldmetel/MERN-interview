import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, Collapse } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions/index';


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
    const { id, title, completed } = this.props;
    return (
        <div>
            <ListGroupItem key={id} className="todoItem">
                <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</p>
                <div className="todoItem__controls">
                    <label className="container">
                        <input type="checkbox" onClick={this.onToggleClick.bind(this, id)}/>
                        <span className="checkmark"></span>
                    </label>
                    <label class="btn-subtask">
                        <input type="text" placeholder="add subtask"/>
                    </label>
                    <Button
                        color="danger"
                        onClick={this.onDeleteClick.bind(this, id)}
                    >
                        X
                    </Button>
                    <Button
                        color="primary"
                        onClick={this.onCollapse}
                    >
                        Open
                    </Button>
                </div>
                <Collapse isOpen={this.state.collapse}>
                    <ListGroup>Test</ListGroup>
                </Collapse>
            </ListGroupItem>
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