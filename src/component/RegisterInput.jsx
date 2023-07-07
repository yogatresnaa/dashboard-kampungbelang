import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import PropTypes from 'prop-types';

class RegisterInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      fullname: '',
    };

    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onFullNameChange = this.onFullNameChange.bind(this);
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

  onFullNameChange(event) {
    this.setState(() => {
      return {
        fullname: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.register({
      username: this.state.username,
      password: this.state.password,
      fullname: this.state.fullname,
    });
  }

  render() {
    return (
      <div className='form-container'>
        <h1>Silahkan Registrasi</h1>
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

          <Form.Group className='mb-3' controlId='formBasicFullname'>
            <Form.Label>Fullname</Form.Label>
            <Form.Control type='text' placeholder='Fullname' value={this.state.fullname} onChange={this.onFullNameChange} />
          </Form.Group>

          {/* <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group> */}
          <Button variant='primary' type='submit'>
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

export default RegisterInput;
