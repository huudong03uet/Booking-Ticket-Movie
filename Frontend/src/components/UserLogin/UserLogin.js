import React, { Component } from 'react';
import '../UserLogin/UserLogin.scss';
import { connect } from 'react-redux';

import firebase from 'firebase'

import toggleLogInStatus from '../../actions/authenticationActions/toggleLogInStatus';
class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: this.props.logInStatus,
      photo: null,
      displayName: null,
      username: '',
      password: '',
      isIncorrect: false,
      loginState: true
    }
  }


  // authenticate = provider => {
  //   const authProvider = new firebase.auth[`${provider}AuthProvider`]();
  //   firebaseConfig
  //     .auth()
  //     .signInWithPopup(authProvider)
  //     .then(this.authHandler);
  // };


  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.authHandler(user)
  //     }
  //   });
  // }
  authHandler = async authData => {
    const user = await authData.user;
    if (user !== null) {
      localStorage.setItem('displayName', user.displayName)
      localStorage.setItem('photo', user.photoURL)
      localStorage.setItem('uid', user.uid)
    }
    this.setState({
      isLogin: true,

    });
    if (this.state.isLogin === true) {
      const db = await firebase.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      db.collection("user").doc(user.uid).set(
        {}
      )
      this.props.toggleLogInStatus({ status: 'APPROVE' })
      this.props.history.push({ pathname: '/profile', state: { isLogin: this.state.isLogin, photo: this.state.photo, displayName: this.state.displayName } })
    }
  };

  handleOnChangeUN = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleOnChangePW = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  //Chuyen sang Log In
  handleLogIn = () => {
    this.setState({
      loginState: true,
    })
  }
  //Chuyen sang Sign Up
  handleSignUp = () => {
    this.setState({
      loginState: false,
      isIncorrect: false
    })
  }

  //username = password = guest thi moi vao duoc nhe
  checkAccount = (username, password) => {
    if (username == "guest" && password == "guest") {
      return true;
    }
    return false;
  }

  // click login has data default
  clickLogin = () => {
    this.handleLogIn();
    localStorage.setItem('displayName', 'Guest')
    localStorage.setItem('photo', 'https://firebasestorage.googleapis.com/v0/b/filmcloud-1.appspot.com/o/avt.png?alt=media&token=8b8b5b0f-8b5f-4b1f-9b1f-8b5f4b1f9b1f')
    localStorage.setItem('uid', 'guest')
    //Dang nhap thanh cong
    if (this.checkAccount(this.state.username, this.state.password)) {
      this.setState({
        isLogin: true,
      })
    } else if (this.state.username === '' && this.state.password === '') {

    } else {
      this.setState({
        isIncorrect: true,
      })
    }

    if (this.state.isLogin === true) {
      const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      db.collection("user").doc('guest').set(
        {}
      )
      this.props.toggleLogInStatus({ status: 'APPROVE' })
      this.props.history.push({ pathname: '/profile', state: { isLogin: this.state.isLogin, photo: this.state.photo, displayName: this.state.displayName } })

    }
  }





  render() {
    return (
      <div className="user-log-in">

        <div className="user-log-in-container">

          <header className="user-log-in-container-header">
            <img className="user-log-in-container-header__logo" src="http://www.demo.gloriathemes.com/wp/themovie/wp-content/themes/themovie/assets/img/logo-alternative.png" alt="logo" />
            <h1 className="user-log-in-container-header__title">Log In</h1>
            <h2 className="user-log-in-container-header__name">Film Cloud</h2>
          </header>

          <div className="user-log-in-container-content">

            {this.state.loginState === true ?
              <form action="facebook.com" method="post">
                <label for="username">Username</label>
                <input id='username' name='username' type='text' onChange={(event) => this.handleOnChangeUN(event)}></input>
                <label for="password">Password</label>
                <input id='password' name='password' type='text' onChange={(event) => this.handleOnChangePW(event)}></input>
                {this.state.isIncorrect && <div>Username/password incorrect</div>}
              </form>
              :
              <form>
                <label for="username">Username</label>
                <input id='username' name='username' type='text' onChange={(event) => this.handleOnChangeUN(event)}></input>
                <label for="password">Password</label>
                <input id='password' name='password' type='text' onChange={(event) => this.handleOnChangePW(event)}></input>
                <label for="cpassword">Confirm Password</label>
                <input id='cpassword' name='cpassword' type='text' onChange={(event) => this.handleOnChangePW(event)}></input>
                {this.state.isIncorrect && <div>Incorrect</div>}
              </form>
            }
            <a href="#">
              {/*<button onClick={() => { this.authenticate("Facebook") }} className="user-log-in-container-content__button">Log In</button>*/}
              <button onClick={this.clickLogin} className="user-log-in-container-content__button">Log In</button>
              <button onClick={this.handleSignUp} className="user-log-in-container-content__button">Sign Up</button>
            </a>
          </div>

          <p className="user-log-in-container-content__warning">Log In now to have access to limited features</p>

        </div>

        <div className="user-log-in-side-image">
          <h2 className="user-log-in-side-image__title">Browse and rate your favorite shows</h2>
        </div>

      </div>
    )
  }
}
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  toggleLogInStatus: status => dispatch(toggleLogInStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
