import React from 'react';
// import './App.css';
import Button from'./../Examples/Button.js';
import NameForm from './../TextInputClass'
import ExClass from './../Examples/exClass.js'
import ExFunc from './../Examples/exFunc.js'
import Form from './../Examples/form.js'

function Home() {
	return (
		<div
			style={{
				textAlign: "center",
				margin: "auto",
			}}
		>

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