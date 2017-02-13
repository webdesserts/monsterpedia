import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

export default class ButtonGroup extends Component {

  selectedClass(option) {
    let className = ['button-group__button']
    if (option === this.props.selected) className.push('button-group__button--selected');
    return className.join(' ')
  }

  generateButtons () {
    let { options, onSelect } = this.props
    return options.map((option) => (
      <button key={option} className={this.selectedClass(option)} onClick={onSelect.bind(null, option)}>
        {option}
      </button>
    ))
  }

  render () {
    return (
      <div className="button-group">
        {this.generateButtons()}
      </div>
    )
  }
}
