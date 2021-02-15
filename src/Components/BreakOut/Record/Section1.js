import React from 'react';

class Section1 extends React.Component{

	constructor(props){
		super(props)
	}

	parseRecords = () =>{
		return this.props.records.map((ft) => <li id = {ft.id} className="border-style hor-ver-padding ver-margin pointer" onClick = {()=> this.props.onRecordSelected(ft.id)} ><div className="medium bold">{ft.name}</div>
			<div>submitted by {ft.data.user}</div></li>)
	}

	render(){
		return(
			<div className="col-45 hor-ver-padding">
				<div className="x-large bold margin-bottom"> Form Records </div>
				<ul className= "margin-bottom">{this.parseRecords()}</ul>
			</div>
		)
	}
}

export default Section1;