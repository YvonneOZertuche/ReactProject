import React, { Component } from "react"
import DisplayName from "./components/DisplayName"

class App extends Component {
	render() {
		return (
			<div>
				<h1> Hello React!</h1>
				<button>Click Me</button>
				<DisplayName name='Mary Doe' />
				<DisplayName name='John Doe' />
			</div>
		)
	}
}

export default App
