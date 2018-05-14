import React, { Component } from 'react'
import FormInput from '../FormInput'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      'name': '',
      'email': '',
      'message': ''
    }
  }

  handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    this.setState({ [name]: value }, () => console.log(this.state))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('on Submit')
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormInput
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleInputChange}
          label='Nombre' />
        <FormInput
          type='text'
          name='email'
          value={this.state.email}
          onChange={this.handleInputChange}
          label='E-mail' />
        <FormInput
          type='text'
          name='message'
          value={this.state.message}
          onChange={this.handleInputChange}
          label='Message' />
          <input type='submit' value='Send' />
      </form>
    )
  }
}