

import React, {Component} from 'react';
import {connect} from 'react-redux'
import {authActions} from '../../actions'



class AppContainer extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  }

  componentDidMount(email, password){
    console.log("sssssssss");
    //  this.props.login(email, password)

  }
  handleSubmit = async(e) =>{
  e.preventDefault()
  this.setState({submitted: false})
  const {email, password} = this.state;
  console.log("this.state", this.state);
  await this.props.login(email, password)
  }


    render () {
      const {logginIn} =this.props;
      const {email, password, submitted} = this.state;
        return (
          <div>
            <input name="email" value={email} onChange={this.handleChange}/>
            <input name="password" type="password" value={password} onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Submit</button>
          </div>
        );
    };
}
function mapState(state) {
  const {alert} = state;
  const {loggingIn, user} = state.authentication;
  console.log("authentication",state.authentication);
  console.log("loggingIn, user",loggingIn, user);
  return {user, loggingIn, alert};
}

const actionCreators = {
  login: authActions.login,

};
const connectedApp = connect(mapState, actionCreators)(AppContainer);
export {connectedApp as App};

