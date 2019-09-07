import React, { Component } from 'react'
import Search from './Search'
import Calculate from './Calculate'
import axios from 'axios'
import Portfolio from './Portfolio'

class PortfolioContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      porffolio: [],
      search_results: [],
      active_currency: null,
      amount: '' 
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleChange(e){
    axios.post('http://localhost:3000/search', {
      search: e.target.value
    })
    .then((data) => {
      this.setState({
        search_results: [...data.data.currencies]
      })
    })
    .catch((data) => {
      debugger
    })
  }

  handleSelect(e){
    e.preventDefault()
    debugger
  }

  render(){
    return(
      <div>
        <Search handleSelect={this.props.handleSelect} searchResults={this.state.search_results} handleChange={this.handleChange}/>
        <Calculate/>
      </div>
    )
  }
}

export default PortfolioContainer