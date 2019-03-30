import { connect } from "react-redux"
import * as campaignActions from "../../actions/campaign_action" 
import { bindActionCreators } from "redux"
import * as _ from 'lodash'

function filterData (campaigns, searchString) {
	return _.filter(campaigns,function(campaign){
   		return campaign.name.toLowerCase().indexOf(searchString.toLowerCase())>-1;
   	});
}

function mapStateToProps(state){
	return {
		data: filterData(state.campaigns.data, state.campaigns.searchString),
		loading: state.loader.loading,
		error: state.campaigns.error,
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...campaignActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
