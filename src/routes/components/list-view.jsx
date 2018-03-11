import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import * as utils from '../../common/utils'
import { ListViewWrapper, Name, Image, ImageBox, Label, Value, Stat, Monster } from './list-view.styles'

export default class ListView extends React.Component {
  static propTypes = {
    monsters: PropTypes.arrayOf(PropTypes.string).isRequired,
    stats: PropTypes.object.isRequired,
  }

  /*
  valueLevel (value) {
    if (value < 10) {
      return ' list-view__value--low'
    } else if (value >= 20) {
      return ' list-view__value--high'
    } else {
      return ''
    }
  }
  */

  mapMonster (monsters, forEach) {
    let mapped = _(this.props.monsters)
      .map((monster) => {
        if (!this.props.stats[monster]) throw new Error(`can't find stats for ${monster}`)
        return forEach(monster, this.props.stats[monster])
      }).value()
    return mapped
  }

  render() {
    let { monsters } = this.props
    return (
      <ListViewWrapper>
        {this.mapMonster(monsters, (monster, stats) => (
          <Monster to={`/monster/${monster}`} key={monster}>
             <Name>{ monster }</Name>
             <ImageBox>
               <Image src={ utils.nameToImagePath(monster) } />
             </ImageBox>
             <Stat>
               <Label>lvl</Label>
               <Value>{ stats.ml }</Value>
             </Stat>
             <Stat>
               <Label>hp</Label>
               <Value>{ stats.hp }</Value>
             </Stat>
             <Stat>
               <Label>mp</Label>
               <Value>{ stats.mp }</Value>
             </Stat>
             <Stat>
               <Label>atk</Label>
               <Value>{ stats.at }</Value>
             </Stat>
             <Stat>
               <Label>def</Label>
               <Value>{ stats.df }</Value>
             </Stat>
             <Stat>
               <Label>agi</Label>
               <Value>{ stats.ag }</Value>
             </Stat>
             <Stat>
               <Label>int</Label>
               <Value>{ stats.it }</Value>
             </Stat>
          </Monster>
        ))}
      </ListViewWrapper>
    )
  }
}