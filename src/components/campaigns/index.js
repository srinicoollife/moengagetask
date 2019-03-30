import { connect } from "react-redux"
import * as campaignActions from "../../actions/campaign_action" 
import { bindActionCreators } from "redux"

function mapStateToProps(state){
	console.log(state)
	return {
		data: state.campaigns.data,
		loading: state.loader.loading,
		error: state.campaigns.error,
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...campaignActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
