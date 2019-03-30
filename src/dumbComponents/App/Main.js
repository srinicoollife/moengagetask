import React, { Component } from "react"
import container from "../../components/campaigns"

// componenets import
import CampaignList from "../campaignList"
import Search from "../search"
import Pagination from "../pagination"

class App extends Component {
  componentDidMount(){
    this.props.fetchCampaigns();
  }
  render() {
    // console.log(this.props.data)
    return(
    <div className="wrapper">
     {
       this.props.loading ?
        (<div className="overlay">
           <div className="loader"><p>loading ...</p></div>
        </div>) : ''
     }
     <Search/>
     <CampaignList campaigns={this.props.displayData}/>
     <Pagination total={this.props.filterData ? this.props.filterData.length : 0}/>
    </div>
    )
  }
}

export default container(App)
  