import React from 'react'
import { connect } from 'react-redux'
import * as el from './skills.styles'

class Skill extends React.Component {
  render () {
    let { store } = this.props
    let { skill } = this.props.params

    return (
      <el.Page>
        <el.Skill>
          <el.Mp>{store.skills.info[skill].mp}</el.Mp>
          <el.Name>{skill}</el.Name>
          <el.Description>{store.skills.info[skill].description}</el.Description>
        </el.Skill>
      </el.Page>
    )
  }
}

export default connect((state) => ({
  store: state
}))(Skill)
