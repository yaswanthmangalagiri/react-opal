import React from 'react';
import Slot from './Slot'
import SlotDetails from './SlotDetails'

class Home extends React.Component{

	constructor(props){
		super(props)
		this.state = {slots: [], showSlotDetails: false, slotId: 1}
	}

	parseSlots = () => {
		let slotArr = []
		if(localStorage.length === 0) {
			localStorage.setItem(1, JSON.stringify({id: 1, name: "9 am - 10 am", isBooked: false, details: {} }))
			localStorage.setItem(2, JSON.stringify({id: 2, name: "10 am - 11 am", isBooked: false, details: {} }))
			localStorage.setItem(3, JSON.stringify({id: 3, name: "11 am - 12 am", isBooked: false, details: {} }))
			localStorage.setItem(4, JSON.stringify({id: 4, name: "12 am - 1 pm", isBooked: false, details: {} }))
			localStorage.setItem(5, JSON.stringify({id: 5, name: "1 pm - 2 pm", isBooked: false, details: {} }))
			localStorage.setItem(6, JSON.stringify({id: 6, name: "2 pm - 3 pm", isBooked: false, details: {} }))
			localStorage.setItem(7, JSON.stringify({id: 7, name: "3 pm - 4 pm", isBooked: false, details: {} }))
			localStorage.setItem(8, JSON.stringify({id: 8, name: "4 pm - 5 pm", isBooked: false, details: {} }))
		}

		for(let i=0;i<localStorage.length;i++){
			slotArr.push(<Slot data = { JSON.parse(localStorage.getItem(i+1)) } updateComponent = {this.updateComponent} />)
		}
		return slotArr
	}
	
	updateComponent = () => {
		console.log(this.queryParams("id"))
		if(this.queryParams("id")){
			this.setState({showSlotDetails: true, slotId: this.queryParams("id")})
		}
		else{
			this.setState({showSlotDetails: false})
		}
	}

	componentDidMount(){

		window.addEventListener("popstate", this.updateComponent)
	}

	queryParams = (keyword) => {
	  let keyWords = window.location.search.substring(1).split("&")
	  for(let i=0;i<keyWords.length;i++){
	    let paramIndex = keyWords[i].indexOf("=")
	      if(keyWords[i].substring(0,paramIndex) === keyword){
	        return keyWords[i].substring(paramIndex+1)
	      }
	    }
	    return false
	  }

	render(){
		return(
			<div>
				
			{
				this.state.showSlotDetails ? <SlotDetails data = { JSON.parse(localStorage.getItem(this.state.slotId)) } /> : <div><div className = "heading ver-padding ver-margin" >Slot Booking</div><ul className="col-45 margin-auto">{this.parseSlots()}</ul></div>
			}
			</div>
		) 
	}
}

export default Home;