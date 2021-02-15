import React from 'react';

class Section2 extends React.Component{

	constructor(props){
		super(props)
	}
	parseRecords = (data) =>{
		let formData = []
		data.form_data.map((fe) => {
			formData.push(<div className="medium">
					<span className="small margin-right">{fe.field}</span>
					<span className="bold medium" type = "name ">{fe.value}</span>
					</div>)
		
		})
		return formData
	}

	render(){
		return(
			<div className="col-45 hor-ver-padding" style = {{borderLeft: '1px solid lightgrey', borderRight: '1px solid lightgrey'}} >
				
			{
				this.props.showForm ? 
					<div>
						<div className="x-large ver-margin">
							<div className="bold">{this.props.selectedRecord.name}</div>
							<span className="medium">submitted by {this.props.selectedRecord.data.user}</span>
						</div>
						<div className="ver-margin ">
							<div className="medium bold ver-padding ver-margin">Form Data</div>
							{this.parseRecords(this.props.selectedRecord.data)}
						</div>
						<div>
							<button onClick = {() => this.props.cancelForm()} >Cancel</button>
						</div>
					</div>
					:
					<div className="medium bold faded-text">Select a form to show it here</div>
			}
			</div>
		)
	}
}

export default Section2;