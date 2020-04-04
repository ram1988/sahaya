import { combineReducers } from 'redux';
import { CAPTURE_PHOTO } from '../actions/capturePhotoAction';
import { SAVE_REPORTS } from '../actions/saveReportsAction';


function cameraActionReducers(state = {}, action) {
  switch (action.type) {
    case CAPTURE_PHOTO:
      return {...state, photoURI: action.payload.photoURI, locDetails: action.payload.locDetails};
    default:
      return state;
  }
}

function saveReports(state = { }, action) {
  switch (action.type) {
    case SAVE_REPORTS:
      const report = action.payload.report;
      return {...state, report: report};
    default:
      return state;
  }
}

const AppReducers = combineReducers({
    cameraActionReducers,
    saveReports
});
  
  
export default AppReducers;
