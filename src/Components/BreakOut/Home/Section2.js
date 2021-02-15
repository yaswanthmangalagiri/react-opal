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
			<div className="col-33 hor-ver-padding" style = {{borderLeft: '1px solid lightgrey', borderRight: '1px solid lightgrey'}} >
				
			{
				this.props.showForm ? 
					this.props.newForm ? <div>
					<div className="x-large bold">New Form Template
						<div>
							{this.parseFormElements(this.props.elements)}
						</div>
						<div>
							<button onClick = {() => this.props.saveFormTemplate()} >Save</button>
							<button onClick = {() => this.props.cancelFormTemplate()} >Cancel</button>
						</div>
					</div>
					</div>:
					<div>
						<div className="x-large bold margin-bottom">Edit Form</div>
						{
							this.props.formTemplate?
							(
								<div> 
									<div>
										<span className = 'large bold margin-bottom'>{this.props.formTemplate.name}</span>
										<button className='float-right' onClick = {() => this.props.deleteForm(this.props.formTemplate.id)} >Delete</button>
									</div>
									<div className="ver-margin">{this.parseFormElements(this.props.elements)} </div>
									<button className="margin-right" onClick = {() => this.props.updateFormTemplate(this.props.formTemplate.id)} >Update</button>
									<button onClick = {() => this.props.cancelFormTemplate()} >Cancel</button>
								</div>
							)
						: null
						}
					</div>
					:
					<div className="medium bold faded-text">Select a form to show it here</div>
			}
			</div>
		)
	}
}

export default Section2;