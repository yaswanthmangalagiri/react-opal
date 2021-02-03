import React from 'react';

class Slot extends React.Component{

	componentDidMount(){
		window.accountObj = this
	}

	handleBooking = () => {
		window.history.pushState(this.state,"", window.location.origin+"?id="+this.props.data.id)
		this.props.updateComponent()
	}

	render(){
		return(
			<li id = {this.props.data.id} className="flex-center hor-ver-margin pointer align-center">
				<div className="timings margin-right medium">{this.props.data.name}</div>
				<div className = {"col-80 border-style " + (this.props.data.isBooked ?  "booked" : "free" )} style = {{height: '30px'}} onClick = {() => this.handleBooking() } > </div>
			</li>
		)
	}
}

export default Slot;