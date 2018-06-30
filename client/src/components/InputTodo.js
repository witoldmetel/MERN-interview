import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class InputTodo extends Component {
  render() {
    const { AddTask, ChangeValue } = this.props;
    return (
    <div>
        <Form onSubmit={AddTask}>
            <FormGroup>
                <Label for="todo">Todo</Label>
                <Input
                    type="text"
                    name="title"
                    id="todo"
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
