import { startLoader, stoptLoader } from './loader_action';
import {campaigns_data} from '../globals/data';

export function fetchedCampaigns(campaigns) {
	return { type:"FETCHING_CAMPAIGNS_SUCCESS", data: campaigns}
}

export function campaignDelete(campaignId) {
	// console.log(campaignId)
	return { type:"CAMPAIGN_DELETE", data: campaignId}	
}

export function setSearchString(searchString) {
	return { type:"SET_SEARCH_STRING", data: searchString}
}

export function navigate(pagenNo){
	return { type:"SET_CURRENT_PAGE", data: pagenNo}
}

export function fetchCampaigns() {
	return (dispatch) => {
		dispatch(startLoader())
			dispatch(fetchedCampaigns(campaigns_data.campaigns))
			dispatch(stoptLoader())
		
	}
}