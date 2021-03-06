import React from 'react';
import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

const App = () => {

	 const data = [
			{name: 'Alex D.', salary: 800, increase: true, id:1},
			{name: 'Felix C.', salary: 5000, increase: false, id:2},
			{name: 'Michael F', salary: 4500, increase: true, id:3},
	 ]

	 return (
			 <div className="app">
					<AppInfo />

					<div className="search-panel">
						<SearchPanel />
						<AppFilter />
					</div>

					<EmployersList data={data}/>
					<EmployersAddForm />
			 </div>
	 );
};

export default App;