import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {MessageActions, UserActions} from '../../store'
import styles from '../../index.css'
import * as consts from '../../store/constants.js'

// const {sendMessage, listen} = MessageActions
// const {getUser} = UserActions

class HomeScreen extends Component {
//   componentDidMount() {
//     const {user} = null
//     // if (user)
//     //   listen()
//     // else
//     //   getUser()
//   }
   render() {

//     if (user != null) {
//       requestAnimationFrame(()=>hashHistory.push('/login'))
//       return null
//     }

//     // let textInput = null

//     // const submit = (e)=>{
//     //   e.preventDefault()
//     //   sendMessage({value: textInput.value})
//     //   textInput.value = ''
//     // }

  return (
  <div style={styles.container}>
    <div>
    <div>
      <div>
        <blockquote style={styles.blockquote}>
        <span style={styles.quoteText}> I'm quoted for the thousandth time! </span>
        </blockquote>
        <p style={styles.quoteAuthor}>- Reuben Ellis</p>
      </div>
    </div>
      <a href="https://twitter.com/share" style={styles.twitterButton} data-show-count="false"></a>
      <input style={styles.quoteButton} type="submit" value="Inspire"></input>
    <footer>
        <div style={styles.footerText}><a href={consts.Github_URL} target="blank">Reuben Ellis</a> &copy; <span id={styles.currentYear}></span> . All Rights Reserved</div>
    </footer>
    </div>
  </div>
  )
   }
}

export default connect(
  state=>({
    // user: state.user,
    // messages: state.messages
  })
)(HomeScreen)
