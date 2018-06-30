import React, { Component } from 'react';
import { ListGroupItem, Button, Collapse } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions/index';
import './TodoTask.css'

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
                    <label className="checkbox">
                        <input type="checkbox" onClick={this.onToggleClick.bind(this, id)}/>
                        <span class="checkmark"></span>
                    </label>
                    <Button onClick={this.onDeleteClick.bind(this, id)} color="danger">
                        <i class="far fa-trash-alt"></i>
                    </Button>
                    <Button
                        color="primary"
                        onClick={this.onCollapse}
                    >
                        {this.state.collapse ? <i class="fas fa-caret-up"></i> : <i class="fas fa-caret-down"></i>}
                    </Button>
                </div>
            </ListGroupItem>
            <Collapse isOpen={this.state.collapse}>
                Test
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