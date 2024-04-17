import React from 'react';
// import './App.css';
import Button from'./../Button';
import NameForm from './../TextInputClass'
import ExClass from './../exClass'
import ExFunc from './../exFunc'
import Form from './../form'
import Header from './../Header.js'
// import Navbar from './Navbar.js'


function Home() {
	return (
		<div
			style={{
				textAlign: "center",
				margin: "auto",
			}}
		>

      		<Header></Header>

			<h1 style={{ color: "green" }}>
				GeeksforGeeks blows
			</h1>

			<h3>take a sip</h3>

			<Button bg="cyan"> sip </Button>
			<Button bg="green"> no sip </Button>
      
			<NameForm></NameForm>

			<ExClass name="take a sip from a class"></ExClass>
			<ExFunc name="take a sip from a func" />

      		<Form></Form>



		</div>
	);
}
export default Home;