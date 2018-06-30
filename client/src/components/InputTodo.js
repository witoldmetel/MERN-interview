import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class InputTodo extends Component {
  render() {
    const { AddTask, ChangeValue } = this.props;
    return (
    <div>
        <Form onSubmit={AddTask}>
            <FormGroup>
                <Input
                    type="text"
                    name="title"
                    placeholder="Add todo task"
                    onChange={ChangeValue}
                />
            </FormGroup>
            <Button
                color="primary"
            >
                Add Todo
            </Button>
        </Form>
    </div>
    )
  }
}
