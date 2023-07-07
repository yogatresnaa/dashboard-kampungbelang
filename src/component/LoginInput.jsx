import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class LoginInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onUserNameChange(event) {
    this.setState(() => {
      return {
        username: event.target.value,
      };
    });
  }

  onPasswordChange(event) {
    this.setState(() => {
      return {
        password: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.login({
      username: this.state.username,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div className='form-container'>
        <h1>Silahkan Login</h1>
        <Form onSubmit={this.onSubmitHandler}>
          <Form.Group className='mb-3' controlId='formBasicUsername'>
            <Form.Label>Username</Form.Label>
            <Form.Control type='text' placeholder='Enter Username' value={this.state.username} onChange={this.onUserNameChange} />
            <Form.Text className='text-muted'>We'll never share your username with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='text' placeholder='Password' value={this.state.password} onChange={this.onPasswordChange} />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginInput;
