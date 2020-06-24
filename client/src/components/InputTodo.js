import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

import './InputTodo.css';

export default class InputTodo extends Component {
	render() {
		const { AddTask, ChangeValue } = this.props;
		return (
			<div>
				<Form onSubmit={AddTask} className="formContainer">
					<FormGroup className="formContainer__form">
						<Input
							type="text"
							name="title"
							placeholder="Add todo task"
							onChange={ChangeValue}
						/>
					</FormGroup>
					<Button
						color="primary"
						className="formContainer__button"
						title="Add Task"
					>
						Add Todo
					</Button>
				</Form>
			</div>
		);
	}
}
