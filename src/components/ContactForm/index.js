import React, { Component } from 'react'
import axios from 'axios'
import FormInput from '../FormInput'
import FormMessage from '../FormMessage'
import Textarea from '../Textarea'
import Button from '../Button'
import './index.css'

export default class extends Component {
  state = {
    'name': '',
    'email': '',
    'message': '',
    'status': 'init'
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
        'name': this.state.name,
        'email': this.state.email,
        'message': this.state.message
      })
     this.setStatus('success')
    } catch (err) {
      this.setStatus('fail')
    }
  }

  setStatus = (status) => {
    this.setState({
      status: status,
    }, this.restartForm())
  }

  restartForm = () => {
    setTimeout(() => this.setState({
      'name': '',
      'email': '',
      'message': '',
      'status': 'init'
    }), 4000)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.status !== 'init' &&
          <FormMessage status={this.state.status}/>
        }
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
        <Textarea 
          name='message'
          value={this.state.message}
          onChange={this.handleInputChange}
          label='Message' />
        <Button
          action={this.handleSubmit}
          value={'Send'} />
      </form>
    )
  }
}