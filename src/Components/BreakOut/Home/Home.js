import React from 'react';
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

class Home extends React.Component{

	constructor(props){
		super(props)
		this.state = {elements:[], activeTab: 1, formTemplates: [{id: 1, name: "TemplateName", elements: [{type: 1, placeholder: ""}] } ], showForm: false}
		this.draggedIndex = 0
		this.overIndex = 0
	}

	createForm = () => {
		this.setState({newForm: true, showForm: true})
	}

	findIndex = (id) => {
		let tabsArr = this.state.formTemplates
		for(let t = 0; t < tabsArr.length; t++)
		{
			if(tabsArr[t].id == id){
				return t
			}
		}
	}

	formSelected = (id) => {
		this.setState({showForm: true, newForm: false, elements: this.state.formTemplates[this.findIndex(id)].elements, formTemplate: this.state.formTemplates[this.findIndex(id)] })
	}

	saveFormTemplate = () =>{
		console.log(this.state.formData)
		this.setState({newForm: false})
	}

	updateFormTemplate = () => {

	}

	cancelFormTemplate = () => {
		this.setState({newForm: false, showForm: false, elements: []})
	}

	deleteForm = (id) => {
		let templates = this.state.formTemplates
		templates.splice(this.findIndex(id),1)
		this.setState({newForm: false})
	}

	addElement = (id) => {
		let elements = this.state.elements
		elements.push({type: id })
		this.setState({formData: elements})
	}

	render(){
		return(
			<div className= "align-left flex">
				<Section1 formTemplates = {this.state.formTemplates} createForm = {this.createForm} formSelected = {this.formSelected} />
				<Section2 showForm = {this.state.showForm} newForm = {this.state.newForm} deleteForm = {this.deleteForm} elements = {this.state.elements} formTemplate = {this.state.formTemplate} updateFormTemplate = {this.updateFormTemplate} saveFormTemplate = {this.saveFormTemplate} cancelFormTemplate = {this.cancelFormTemplate} />
				<Section3 addElement = {this.addElement} />
			</div>
		)
	}
}

export default Home;