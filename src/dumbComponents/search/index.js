import React, { Component } from "react"
import container from "../../components/campaigns"

class Search extends Component {
  handleChange = (event) => this.props.setSearchString(event.target.value)
  
  render() {
    
    return(
    <div>
     <input className="search_1" type="text" onChange={this.handleChange}/>
     <br/>
     <br/>
    </div>
    )
  }
}

export default container(Search)
  