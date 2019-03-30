import { startLoader, stoptLoader } from './loader_action';
import {campaigns_data} from '../globals/data';

export function fetchedCampaigns(campaigns) {
	return { type:"FETCHING_CAMPAIGNS_SUCCESS", data: campaigns}
}

export function campaignDelete(campaignId) {
	console.log(campaignId)
	return { type:"CAMPAIGN_DELETE", data: campaignId}	
}

export function fetchCampaigns() {
	return (dispatch) => {
		dispatch(startLoader())
			dispatch(fetchedCampaigns(campaigns_data.campaigns))
			dispatch(stoptLoader())
		
	}
}