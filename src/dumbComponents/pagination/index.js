import React, { Component } from "react"
import container from "../../components/campaigns"

class Pagination extends Component {
  state = {
    perPage : 10
  }

  constructor(props){
    super(props)
  }
  render() {
   
    const {total} = this.props
    const {perPage} = this.state
   
     console.log(total)
      console.log(perPage)

    return(
    <div>
     
    </div>
    )
  }
}

export default container(Pagination)
  