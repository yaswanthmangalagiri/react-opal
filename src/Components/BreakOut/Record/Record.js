import React from 'react';
import Section1 from './Section1'
import Section2 from './Section2'

class Record extends React.Component{

	constructor(props){
		super(props)
		this.state = { selectedRecord: {}, 
			records: [{id: 1, name: "TemplateA",
				data: {user: "UserA", form_data: [{ field: "Name", value: "User 1"}] }
			}],
			showForm: false
		}
	}

	findIndex = (id) => {
		let tabsArr = this.state.records
		for(let t = 0; t < tabsArr.length; t++)
		{
			if(tabsArr[t].id == id){
				return t
			}
		}
	}

	onRecordSelected = (id) => {
		this.setState({ showForm: true, selectedRecord: this.state.records[this.findIndex(id)]  })
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
				<Section1 records = {this.state.records} createForm = {this.createForm} onRecordSelected = {this.onRecordSelected} />
				<Section2 showForm = {this.state.showForm} data = {this.state.data} selectedRecord = {this.state.selectedRecord} submitForm = {this.submitForm} cancelForm = {this.cancelForm} />
			</div>
		)
	}
}

export default Record;