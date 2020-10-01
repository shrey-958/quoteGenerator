import React from "react"

class QuoteMachine extends React.Component {
	constructor() {
		super()
		this.state = {
			quoteLine: "Take an adrenaline shot and kickstart your life!",
			author: "Go Get it",
			allQuotes: []
		}
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
			.then(response => response.json())
			.then(data => {
				this.setState({
					allQuotes: data.quotes

				})
			})

	}
	handleChange(event) {
		event.preventDefault()
		const randNum = Math.floor(Math.random() * this.state.allQuotes.length)

		const randQuote = this.state.allQuotes[randNum].quote
		const randAuthor = this.state.allQuotes[randNum].author

		this.setState({
			quoteLine: randQuote,
			author: randAuthor
		})
	}

	render() {
		var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#ff351f", "#77B1A9", "#73A857", "#fc4e03", "#d203fc", "#035afc", "#03fc5e", "#52fa23", "#f20039"]
		var colorrr = Math.floor(Math.random() * colors.length)

		const bgrang = { backgroundColor: colors[colorrr] }

		return (
			<div id = "quote-box" style={bgrang}>
            <br/>
            <div id= "text" >
           <b>"</b>{this.state.quoteLine}
           </div>
           <br/>
           <div id = "author" >
           <b>-</b>{this.state.author}
           </div>
           <br />
           <button id="new-quote" onClick={this.handleChange}><b>Quote</b></button>
           
            </div>
		)
	}
}


export default QuoteMachine