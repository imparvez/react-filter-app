import React from 'react';
import List from './list.jsx';

export default class FilterList extends React.Component {
	constructor(){
		super();

		this.state = {
			filterBy: ''
		};
	}

	updateFilter(ev){
		this.setState({
			filterBy: ev.target.value
		});
	}



	render(){
		const frameworks = ['React', 'Angular', 'Vue', 'Ember'];
		const filterBy = this.state.filterBy;
		return(
			<div>
		        <input type="text" onChange={(ev) => this.updateFilter(ev) }/>
		        <List items={frameworks} filterBy={filterBy} />
		    </div>
		)
	}
}