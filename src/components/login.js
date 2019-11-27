import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			conf_password:''
		}

		this.submitForm = this.submitForm.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	submitForm(e){
		e.preventDefault()
		console.log("succeess", this.state)
		this.data = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		}
		axios.post('https://deployementfirebase.firebaseio.com/users.json',this.data).then(res=>{
			console.log(res, "----------")
		})
	}
	handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }


render(){
	return(
		<div>
			<p>Signup Page</p>
			<form onSubmit = {this.submitForm}>
				<label>Name</label>
				<input type="text" name="name" onChange={this.handleChange} required /><br/><br/>
				<label>Email</label>
				<input type="email" name="email" onChange={this.handleChange} required /><br/><br/>
				<label>Password</label>
				<input type="password" name="password" onChange={this.handleChange} required /><br/><br/>
				<label>C.Password</label>
				<input type="password" name="conf_password" onChange={this.handleChange} required /><br/><br/>
				<input type="submit" name="" value="SUBMIT" />
			</form>
		</div>
	)
	}
}