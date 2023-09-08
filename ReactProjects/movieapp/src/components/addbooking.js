
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
class AddBooking extends React.Component{
    constructor(){
        super();
        this.state={
            bookingdate:'',
            userid:'',
            movieid:'',
            bookingstatus:''
        }
        this.setDate=this.setDate.bind(this);
        this.setUserId=this.setUserId.bind(this);
        this.setMovieId=this.setMovieId.bind(this);
        this.setBookingStatus=this.setBookingStatus.bind(this);
        this.saveBooking=this.saveBooking.bind(this);
    }
    setDate(e){
        //how to change state property value
        this.setState({bookingdate:e.target.value});

    }
    setUserId(e){
        //how to change state property value
        this.setState({userid:e.target.value});

    }
    setMovieId(e){
        //how to change state property value
        this.setState({movieid:e.target.value});

    }
    setBookingStatus(e){
        //how to change state property value
        this.setState({bookingstatus:e.target.value});

    }

    saveBooking(){
        alert('Booking added:' +this.state.bookingdate+','+this.state.userid);
       // fetch('.net core api service url')
    }

  render(){
    return(
        <div>
            <h2>Add Booking</h2><hr/>
            <form>
                <div className="form-group">
                    <label>Date</label>
                    <input type="date" value={this.state.bookingdate} className="form-control" onChange={this.setDate} />

                </div>
                <div className="form-group">
                    <label>UserId</label>
                    <input type="text" value={this.state.userid} className="form-control" onChange={this.setUserId} />

                </div>
                 
                <div className="form-group">
                    <label>MovieID</label>
                    <input type="text" value={this.state.movieid} className="form-control" onChange={this.setMovieId} />

                </div>
                <div className="form-group">
                    <label>Booking Status</label>
                    <input type="text" value={this.state.bookingstatus} className="form-control" onChange={this.setBookingStatus} />

                </div>
                <input type="button" onClick={this.saveBooking} value="Save" className="btn btn-primary" />
                <input type="button" value="Reset" className="btn btn-primary" />
            </form>
        </div>
    );
  }
}

export default AddBooking;