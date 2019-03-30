import React, { Component } from "react"
import container from "../../components/campaigns"

class CampaignList extends Component {
  componentDidMount(){
  }

  render() {
    const {campaigns} = this.props
    console.log(campaigns);
    // campaigns.map(campaign => console.log(campaign.name))
    return(
      <div class="container">
        <table class="table table-striped" style={{width: '100%'}}>
          <thead>
            <tr>
              <th>NAME</th>
              <th>TYPE</th>
              <th>COMPANY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>

            {campaigns.map((campaign) => {
              return (
                <tr>
                  <td>{campaign.name}</td>
                  <td>{campaign.type}</td>
                  <td>{campaign.company}</td>
                  <td><button onClick={() => this.props.campaignDelete(campaign._id) }> delete</button></td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default container(CampaignList)