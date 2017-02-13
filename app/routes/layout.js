import React, { PropTypes, Component} from 'react'
import { Link } from 'react-router'

export default class ReactDashboard extends Component {
  render () {
    return (
      <div className="layout">
        <header className="layout__header">
          <Link className="layout__link" to="/">
            <h1 className="layout__title">Monsterpedia</h1>
          </Link>
          <Link className="layout__link" to="/families">monsters</Link>
          <Link className="layout__link" to="/skills">skills</Link>
        </header>
        {this.props.children}
      </div>
    )
  }
}
