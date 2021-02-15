import React from 'react';
import Section1 from './Section1'
import Section2 from './Section2'

class Form extends React.Component{

	constructor(props){
		super(props)
		this.state = {selectedForm: {}, forms: [{id: 1, name: "TemplateA", elements: [{type: 1, placeholder: "Name"}] } ], showForm: false}
	}

	findIndex = (id) => {
		let tabsArr = this.state.forms
		for(let t = 0; t < tabsArr.length; t++)
		{
			if(tabsArr[t].id == id){
				return t
			}
		}
	}

	formSelected = (id) => {
		this.setState({showForm: true, elements: this.state.forms[this.findIndex(id)].elements, selectedForm: this.state.forms[this.findIndex(id)] })
	}

	submitForm = () =>{
		console.log(this.state.formData)
		this.setState({ showForm: false})
	}

	cancelForm = () => {
		this.setState({ showForm: false})
	}

	render(){
		return(
			<div className= "align-left flex">
				<Section1 forms = {this.state.forms} createForm = {this.createForm} formSelected = {this.formSelected} />
				<Section2 showForm = {this.state.showForm} elements = {this.state.elements} selectedForm = {this.state.selectedForm} submitForm = {this.submitForm} cancelForm = {this.cancelForm} />
			</div>
		)
	}
}

export default Form;