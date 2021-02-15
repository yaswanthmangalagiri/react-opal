import React from 'react';
import Form from './Form/Form'
import Home from './Home/Home'
import Record from './Record/Record'

class Dashboard extends React.Component{

	constructor(props){
		super(props)
		this.state = {id: 1}
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

	parseComponent = () => {
		switch(this.state.id){
			case 1:
				return <Home />
				break;
			case 2:
				return <Form />
				break;
			case 3:
				return <Record />
				break;
			default:
				<Home />
				break;
		}
	}

	navClicked = (id)=> {
		this.setState({id: id})
	}

	render(){
		return(
			<div className= "align-left flex">
				<div className="col-10 inline">
					<ul className="bold" style = {{height: '100vh', background: 'grey', color: 'white'}} >
						<li className= 'hor-ver-padding pointer' onClick = {() => this.navClicked(1)} >Home</li>
						<li className= 'hor-ver-padding pointer' onClick = {() => this.navClicked(2)}>Forms</li>
						<li className= 'hor-ver-padding pointer' onClick = {() => this.navClicked(3)}>Records</li>
					</ul>
				</div>
				<div className="col-80 inline">
					{this.parseComponent()}
				</div>
			</div>
		)
	}
}

export default Dashboard;