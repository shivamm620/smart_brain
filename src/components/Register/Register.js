import React, { Component } from 'react';

class Register extends Component /* ({onChangeRoute})=> */{
  constructor(props){
    super(props);
    this.state={
      Email:'',
      Password:'',
      name:''
    }
  }
  onNameChange = (event) =>{
    this.setState({name:event.target.value})
  }
  onEmailChange = (event) =>{
    this.setState({Email:event.target.value})
  }
  onPasswordChange = (event) =>{
    this.setState({Password:event.target.value})
  }
  onSubmitSingIn = () =>{
    fetch('http://localhost:6000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.Email,
        password: this.state.Password,
        name: this.state.name
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user){
        this.props.loadUser(user)
        this.props.onChangeRoute('home');
      }
    })
  }
  render(){
    return(
        <div>
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">         
               <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                 <legend className="f1 fw6 ph0 mh0">Register</legend>
                 <div className="mt3">
                   <label className="db fw6 lh-copy f6" htmlFor="name">Username</label>
                   <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    onChange={this.onNameChange} 
                    name="name"  
                    id='name'/>
                 </div>
                 <div className="mt3">
                   <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                   <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    onChange={this.onEmailChange}
                    id="email-address"/>
                 </div>
                 <div className="mv3">
                   <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                   <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password" 
                    name="password" 
                    id="password"
                      onChange={this.onPasswordChange}
                     />
                 </div>

               </fieldset>
               <div className="">
                 <input onClick={this.onSubmitSingIn} 
                 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit" value="Register"/>
               </div>
            </main>
            </article>

        </div>
    )
  }
}

export default Register ;



