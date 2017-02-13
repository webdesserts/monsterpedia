import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

export default class MonsterTile extends Component {
  render () {
    let { monster, families } = this.props
    let isFamily = _.isNumber(monster)

    let name = isFamily ? families[monster] : monster
    let img_path = isFamily ? `/assets/img/icon-${name}.png` : `/assets/img/${monster}.png`
    let link_path = isFamily ? `/families/${name}` : `/monster/${name}`
    let description = isFamily ? `Any ${name}` : name
    let img_className = isFamily ? 'monster-tile__img monster-tile__img--family' : 'monster-tile__img'
    return (
      <a href={link_path} className="monster-tile">
        <img className={img_className} src={img_path} alt={description}/>
        {/*<label className="monster-tile__description">{description}</label>*/}
      </a>
    )
  }
}
