/*********************************
  DEPENDENCIES
*********************************/
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

/*********************************
  DEV
*********************************/
const log = console.log // eslint-disable-line no-unused-vars

/*********************************
  LOCAL API
*********************************/

/*********************************
  COMPONENTS
*********************************/

/*********************************
  LOCAL STYLE
 ********************************/

/*********************************
  HOMEPAGE
*********************************/
class HomePage extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      cal: 'par'
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='app-component-wrapper'>
          <p style={{textAlign: 'center', width: '95%', paddingTop: '150px'}} > 
            <i className="fa fa-star" style={{fontSize: '40px'}} />
          </p>
          <p style={{textAlign: 'center', width: '100%', paddingTop: '20px'}} > 
            <i className="fa fa-cube" style={{fontSize: '60px'}} />
          </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sys_state: state
})

HomePage.propTypes = {
  sys_state: PropTypes.object
}

export default connect(mapStateToProps)(HomePage)