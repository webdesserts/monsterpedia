import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import _ from 'lodash'
import * as utils from '../../common/utils'

class SkillsList extends Component {

  render () {
  let { store } = this.props

  return (
    <div className="page">
      <div className="skills-list">
        {store.skills.names.map((skill) => {
          let info = store.skills.info[skill]
          return (
            <Link key={skill} to={`/skills/${skill}`} className="skills-list__skill">
              <div className="skills-list__mp">{info.mp === -1 ? 'all' : info.mp}</div>
              <div className="skills-list__name">{skill}</div>
              <div className="skills-list__description">{info.description}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
  }
}

export default connect((state) => ({
  store: state
}))(SkillsList)
