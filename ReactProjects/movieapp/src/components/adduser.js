
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
class AddUser extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            password:'',
            email:'',
            phone:''
        }
        this.setName=this.setName.bind(this);
        this.setPassword=this.setPassword.bind(this);
        this.setEmail=this.setEmail.bind(this);
        this.setPhone=this.setPhone.bind(this);
        this.saveUser=this.saveUser.bind(this);
    }
    setName(e){
        //how to change state property value
        this.setState({name:e.target.value});

    }
    setPassword(e){
        //how to change state property value
        this.setState({password:e.target.value});

    }
    setEmail(e){
        //how to change state property value
        this.setState({email:e.target.value});

    }
    setPhone(e){
        //how to change state property value
        this.setState({phone:e.target.value});

    }
    saveUser(){
        alert('User Added:' +this.state.name+','+this.state.password);
       // fetch('.net core api service url')
    }

  render(){
    return(
        <div>
            <h2>Add user</h2><hr/>
            <form>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" value={this.state.name} className="form-control" onChange={this.setName} />

                </div>
                <div className="form-group">
                    <label>User Password</label>
                    <input type="text" value={this.state.password} className="form-control" onChange={this.setPassword} />

                </div>
                 
                <div className="form-group">
                    <label>User email</label>
                    <input type="text" value={this.state.email} className="form-control" onChange={this.setEmail} />

                </div>
                <div className="form-group">
                    <label>User Phone</label>
                    <input type="text" value={this.state.phone} className="form-control" onChange={this.setPhone} />

                </div>
                <input type="button" onClick={this.saveUser} value="Save" className="btn btn-primary" />
                <input type="button" value="Reset" className="btn btn-primary" />
            </form>
        </div>
    );
  }
}

export default AddUser;