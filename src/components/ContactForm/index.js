import React, { Component } from 'react'
import axios from 'axios'
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
    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('https://flor-api.now.sh/mailer', {
        'headers': {
          'Access-Control-Allow-Origin': '*'
        }
      })
      console.log(res)
    } catch (err) {
      console.error(err)
    }
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