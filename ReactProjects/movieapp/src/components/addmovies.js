
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
class AddMovie extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            description:'',
            type:''
        }
        this.setMovieName=this.setMovieName.bind(this);
        this.setMovieDescription=this.setMovieDescription.bind(this);
        this.setMovieType=this.setMovieType.bind(this);
    }
    setMovieName(e){
        //how to change state property value
        this.setState({name:e.target.value});

    }
    setMovieDescription(e){
        //how to change state property value
        this.setState({description:e.target.value});

    }
    setMovieType(e){
        //how to change state property value
        this.setState({type:e.target.value});

    }
  render(){
    return(
        <div>
            <h2>Movie Entry</h2><hr/>
            <form>
                <div className="form-group">
                    <label>Movie Name</label>
                    <input type="text" value={this.state.name} className="form-control" onChange={this.setMovieName} />

                </div>
                <div className="form-group">
                    <label>Movie Description</label>
                    <input type="text" value={this.state.description} className="form-control" onChange={this.setMovieDescription} />

                </div>
                 
                <div className="form-group">
                    <label>Movie Type</label>
                    <input type="text" value={this.state.type} className="form-control" onChange={this.setMovieType} />

                </div>
                <input type="button" value="Save" className="btn btn-primary" />
                <input type="button" value="Reset" className="btn btn-primary" />
            </form>
        </div>
    );
  }
}

export default AddMovie;