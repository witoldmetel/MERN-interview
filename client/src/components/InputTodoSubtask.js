import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addSubtask } from '../actions/index';

class InputTodoSubtask extends Component {
    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    onSubmit = (e) => {
      e.preventDefault();
      const { id } = this.props;
      const newTask = {
        id: 122,
        title: this.state.title
      }
      this.props.addSubtask(newTask, id)
    }

    render() {
      return (
        <div>
          <Form onSubmit={this.onSubmit}>
              <FormGroup>
                  <Input
                      type="text"
                      name="title"
                      placeholder="Add subtask"
                      onChange={this.onChange}
                  />
                  </FormGroup>
                  <Button color="primary" title="Add Subtask">
                      Add Todo
                  </Button>
          </Form>
        </div>
      )
    }
}

InputTodoSubtask.propTypes = {
  todo: PropTypes.object.isRequired,
  addSubtask: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  todo: state.todo
})

export default connect(mapStateToProps, { addSubtask })(InputTodoSubtask)