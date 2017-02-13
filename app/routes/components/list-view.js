import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import * as utils from '../../common/utils'

export default class ListView extends Component {
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
      <div className='list-view'>
        {this.mapMonster(monsters, (monster, stats) => (
          <Link to={`/monster/${monster}`} className="list-view__monster" key={monster}>
             <div className="list-view__name"> { monster } </div>
             <div className="list-view__image-box">
               <img className="list-view__image" src={ utils.nameToImagePath(monster) } />
             </div>
             <div className="list-view__stat">
               <div className="list-view__label">lvl</div>
               <div className='list-view__value'>{ stats.ml }</div>
             </div>
             <div className="list-view__stat">
               <div className="list-view__label">hp</div>
               <div className='list-view__value'>{ stats.hp }</div>
             </div>
             <div className="list-view__stat">
               <div className="list-view__label">mp</div>
               <div className='list-view__value'>{ stats.mp }</div>
             </div>
             <div className="list-view__stat">
               <div className="list-view__label">atk</div>
               <div className='list-view__value'>{ stats.at }</div>
             </div>
             <div className="list-view__stat">
               <div className="list-view__label">def</div>
               <div className='list-view__value'>{ stats.df }</div>
             </div>
             <div className="list-view__stat">
               <div className="list-view__label">agi</div>
               <div className='list-view__value'>{ stats.ag }</div>
             </div>
             <div className="list-view__stat">
               <div className="list-view__label">int</div>
               <div className='list-view__value'>{ stats.it }</div>
             </div>
          </Link>
        ))}
      </div>
    )
  }
}
