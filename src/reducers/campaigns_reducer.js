import _ from "lodash"

const initialState={
  error: null,
  data: [],
  searchString : "",
  currentPage: 1
}

export default function campaigns(state = initialState, action){
  switch (action.type) {
    case "FETCHING_CAMPAIGNS_SUCCESS":
    	return {...state, error: null, data: action.data };
    case "FETCHING_CAMPAIGNS_FAILURE":
      return { ...state, error: "something went wrong" };
    case "CAMPAIGN_DELETE":
      console.log(action.data);
      console.log(state.data.length)
      let data = _.filter(state.data, function(campaign) {
         return campaign._id != action.data; 
      });
      console.log(data.length)
      return {...state, error: null, data: data };
    case "SET_SEARCH_STRING":
      return {...state, searchString: action.data, currentPage: 1}
    case "SET_CURRENT_PAGE":
      return {...state, currentPage: action.data}
    default:
      return state;
  }
}
