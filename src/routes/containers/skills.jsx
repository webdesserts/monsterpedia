import React from 'react'
import { connect } from 'react-redux'
import * as El from './skills.styles'

class SkillsList extends React.Component {
  render () {
    let { store } = this.props

    return (
      <El.Page>
        <El.SkillList>
          {store.skills.names.map((skill) => {
            let info = store.skills.info[skill]
            return (
              <El.SkillLink key={skill} to={`/skills/${skill}`}>
                <El.Mp>{info.mp === -1 ? 'all' : info.mp}</El.Mp>
                <El.Name>{skill}</El.Name>
                <El.Description>{info.description}</El.Description>
              </El.SkillLink>
            )
          })}
        </El.SkillList>
      </El.Page>
    )
  }
}

export default connect((state) => ({
  store: state
}))(SkillsList)
