// import the various modules that willl help herer
import { multi } from './air-port-codes-node';
import{UI, ui} from './ui';
// search for the airport now ghear we have linked the input to the function
const searchAirport = document.getElementById('search');

//  event listerner
searchAirport.addEventListener('keyup',e => {
  // get the user input being tyed

  ui.inputSpinner();
  const term = e.target.value;
  if (term !== ""){
    // mke a call to the airport finder api
  const api = multi({
    key : 'eff4fd4b63', 
    secret : 'ccbebaccefdc457',  //the necesary keys and configurations
    limit : 20
  });
  api.request(term);

  // SUCCESS we found some airports
  api.onSuccess = (data) => {
    // console.log('data', data)
    ui.showResults(data);

  };

  // FAIL no airports found
  api.onError = (data) => {
    ui.showAlert(data.message)
  };

}else{
  // do sth else
}
console.log(term);

})
