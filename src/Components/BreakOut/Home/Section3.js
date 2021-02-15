import React from 'react';

class Section3 extends React.Component{

	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="col-33 hor-ver-padding">
				<div className="x-large bold margin-bottom">Form Elements</div>
				<div className="flex col-80">
					<input placeholder = "Input Name" />
					<button onClick = {() => this.props.addElement(1)} >Add</button>
				</div>
				<div className="flex col-80">
					<input placeholder = "Input Email" />
					<button onClick = {() => this.props.addElement(2)} >Add</button>
				</div>
				<div className="flex col-80">
					<select placeholder = "Input Name"><option>Option1</option><option>Option1</option> </select>
					<button onClick = {() => this.props.addElement(3)} >Add</button>
				</div>
				<div className="flex col-80">
					<input placeholder = "Input Name" type = "checkbox" />
					<button onClick = {() => this.props.addElement(4)} >Add</button>
				</div>
			</div>
		)
	}
}

export default Section3;