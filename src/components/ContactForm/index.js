import React, { Component } from 'react'

export default class extends Component () {
  constructor (props) {
    super(props)
    this.state = {
      'name': '',
      'email': '',
      'message': ''
    }
  }

  render () {
    return (
      <form>
      </form>
    )
  }
}