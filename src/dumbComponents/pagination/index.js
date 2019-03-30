import React, { Component } from "react"
import container from "../../components/campaigns"
import * as _ from 'lodash';

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
   
    let pages = [];
    for(let i=1; i<=total/perPage;i++){
      pages.push(i)
    }
    // console.log(pages)


    return(
    <div className="pagination" style = {{margin:'10px'}}>
     {
      pages.map((page, index) => {
       return (<button key={index} onClick={() => this.props.navigate(index+1)} >{page}</button>)
      })      
     }
    </div>
    )
  }
}

export default container(Pagination)
  