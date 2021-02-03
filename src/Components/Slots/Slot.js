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
			<li id = {this.props.data.id} className="hor-ver-margin pointer">
				<div className = {"align-center border-style " + (this.props.data.isBooked ?  "booked" : "free" )} style = {{height: '30px', padding: '10px'}} onClick = {() => this.handleBooking() } >
					<span className="vertical-middle">{this.props.data.name}</span>
				</div>
			</li>
		)
	}
}

export default Slot;