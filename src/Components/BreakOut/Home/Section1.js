import React from 'react';

class Section1 extends React.Component{

	constructor(props){
		super(props)
	}

	closeTab = (e,id) =>{
		e.stopPropagation()
		let tabsArr = this.state.tabs
		for(let t = 0; t < tabsArr.length; t++)
		{
			if(tabsArr[t].id == id){
				tabsArr.splice(t,1)
				break;
			}
		}
		this.setState({tabs: tabsArr})
		this.scrollTabs()
	}

	parseFormTemplates = () =>{
		return this.props.formTemplates.map((ft) => <li id = {ft.id} className="border-style ver-margin pointer" onClick = {()=> this.props.formSelected(ft.id)} ><div className="hor-ver-padding">{ft.name}</div></li>)
	}

	render(){
		return(
			<div className="col-33 hor-ver-padding">
				<div className="x-large bold margin-bottom"> Forms Templates</div>
				<button onClick = {() => this.props.createForm()} >Create a Form</button>
				<ul className= "margin-bottom">{this.parseFormTemplates()}</ul>
			</div>
		)
	}
}

export default Section1;