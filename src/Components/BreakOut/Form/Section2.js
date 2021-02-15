import React from 'react';

class Section2 extends React.Component{

	constructor(props){
		super(props)
	}
	parseFormElements = (elements) =>{
		let formElements = []
		elements.map((fe) => {
			if(fe.type === 1){
				formElements.push(<div><input type = "name"/></div>)
			}
			else if(fe.type === 2)  {
				formElements.push(<div><input type = "email"/></div>)
			}
			else if(fe.type === 3)  {
				formElements.push(<div><select type = "email"><option></option></select></div>)
			}
			else if(fe.type === 4)  {
				formElements.push(<div><input type = "checkbox"/></div>)
			}
		})
		return formElements
	}

	render(){
		return(
			<div className="col-45 hor-ver-padding" style = {{borderLeft: '1px solid lightgrey', borderRight: '1px solid lightgrey'}} >
				
			{
				this.props.showForm ? 
					<div>
					<div className="x-large bold">{this.props.selectedForm.name}
						<div>
							{this.parseFormElements(this.props.elements)}
						</div>
						<div>
							<button className="margin-right" onClick = {() => this.props.submitForm()} >Submit</button>
							<button onClick = {() => this.props.cancelForm()} >Cancel</button>
						</div>
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