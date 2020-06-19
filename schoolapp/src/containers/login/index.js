import React, {Component} from 'react';
import { withRouter, Redirect } from "react-router";
import axios from 'axios';
import './login.css';

class LoginComponent extends Component {

  constructor(props){
    super(props);
    this.state= {
      userName: "",
      password: "",
      loginResponse: "",
      isLoginError: false,
    }
  }

  loginAction = async (e) => {
    try {
      const loginResponse = await axios.post(`http://localhost:8080/api/login/userCheck`, 
      {
        userName : this.state.userName,
        password : this.state.password
      });
      if(loginResponse.status === 200) {
        this.setState({isLoginError: false, loginResponse: loginResponse.data});
        this.props.updateUserDetails(loginResponse.data, true);
      } else {
        this.setState({isLoginError: true});
        console.error("Login failed due to invalid request");
      }
      
    }catch(error){
      this.setState({isLoginError: true});
      console.error(error);
    }
  }

  render() {
    const { userName, password,isLoginError, loginResponse} = this.state;
    return (
      <div>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">School App</h1>
          <p>Basic Information About the App</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
        </div>
      </div>
      <div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
            <input type="text" className="form-control" value={userName} 
                  onChange={e => this.setState({userName: e.target.value})} placeholder="username" />
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
            <input type="password" className="form-control" value={password} 
                onChange={e => this.setState({password: e.target.value})} 
             placeholder="password" />
					</div>
					<div className="row align-items-center remember">
						<input type="checkbox" />Remember Me
					</div>
					<div className="form-group">
            {isLoginError && 
            <div class="control-group error">
            <label class="control-label" for="inputError">
              Sorry, Unable to validate your details right now, Please contact Us!
            </label>
            </div>
            }
						<input type="button" value="Login" onClick={e => this.loginAction(e)} className="btn float-right login_btn" />
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
    </div>
    <hr />
    </div> 
    { loginResponse && loginResponse.firstName && <Redirect to="/dashboard" />}
    </div>
    );
  }
 
}

export default withRouter(LoginComponent); 
