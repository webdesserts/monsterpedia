import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import _ from 'lodash'
import * as utils from '../../common/utils'

class Skill extends Component {

  render () {
  let { store } = this.props
  let { skill } = this.props.params

  return (
    <div className="page">
      <div className="skill">
        <div>{skill}</div>
        <div>{store.skills.info[skill].mp}</div>
        <div>{store.skills.info[skill].description}</div>
      </div>
    </div>
  )
  }
}

export default connect((state) => ({
  store: state
}))(Skill)
