import { connect } from "react-redux"
import * as campaignActions from "../../actions/campaign_action" 
import { bindActionCreators } from "redux"
import * as _ from 'lodash'

function filterData (campaigns, searchString, currentPage) {
	let results = _.filter(campaigns,function(campaign){
   		return campaign.name.toLowerCase().indexOf(searchString.toLowerCase())>-1;
   	});
   	let data =_.chunk(results,10);
   	console.log(currentPage-1)
   	return data[currentPage-1];
}

function mapStateToProps(state){
	return {
		data : state.campaigns.data,
		filterdata: filterData(state.campaigns.data, state.campaigns.searchString, state.campaigns.currentPage),
		loading: state.loader.loading,
		error: state.campaigns.error,
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...campaignActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
