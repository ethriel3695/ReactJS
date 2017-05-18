import React from 'react'
import {connect} from 'react-redux'
import {Link, hashHistory} from 'react-router'
import {UserActions} from '../../store'
const {register} = UserActions

function RegisterScreen({user}){
  if (user) {
    requestAnimationFrame(()=>hashHistory.push('/'))
    return null
  }

  let usernameInput = null
  let passwordInput = null
  let emailInput = null

  const submit = (e)=>{
    e.preventDefault()
    register(usernameInput.value, passwordInput.value, emailInput.value, ()=>{
      hashHistory.push('/')
    })
  }

  return (
    <div class="container">
      <div class="jumbotron">
      <div class="row">
        <div class="col-md-12 text-center">
          <blockquote class="blockquote">
          <i class="fa fa-quote-left quoteIcon"></i><span class="quoteText"> I'm quoted for the thousandth time! </span><i class="fa fa-quote-right quoteIcon"></i>
          </blockquote>
          <p class="pull-right quoteAuthor">- Reuben Ellis</p>
        </div>
      </div>
        <a href="https://twitter.com/share" class="twitterButton" data-show-count="false"><i class="fa fa-twitter fa-lg"></i></a>
        <input class="btn btn-primary pull-right quoteButton" type="submit" value="Inspire"></input>

      <footer class="text-center">
          <div class="footerText"><a href="https://github.com/ethriel3695" target="blank">Reuben Ellis</a> &copy; <span id="currentYear"></span> . All Rights Reserved</div>
      </footer>
      <Link to="/">Login</Link>
      </div>
    </div>
  )
}

export default connect(
  state=>({user: state.user})
)(RegisterScreen)
