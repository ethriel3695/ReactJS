import React from 'react'
import {connect} from 'react-redux'
import {Link, hashHistory} from 'react-router'

function LoginScreen({}){
    // requestAnimationFrame(()=>hashHistory.push('/'))
    // return null

  return (
  <div>
    <Link to="/quoteApp">Register</Link>
  </div>
  )
}

export default connect(
  state=>({user: state.user})
)(LoginScreen)
