import React, { Component } from "react"
import container from "../../components/campaigns"

// componenets import
import CampaignList from "../campaignList"

class App extends Component {
  componentDidMount(){
    this.props.fetchCampaigns();
  }
  render() {
    console.log(this.props.data)
    return(
    <div className="wrapper">
     {
       this.props.loading ?
        (<div className="overlay">
           <div className="loader"><p>loading ...</p></div>
        </div>) : ''
     }
     <CampaignList campaigns={this.props.data}/>
    </div>
    )
  }
}

export default container(App)
  