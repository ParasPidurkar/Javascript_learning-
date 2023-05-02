import {fetchUserData} from "./second.js"
function processUserData(data) {
    console.log('User data received:', data);
  }
  
  // Call fetchUserData and pass processUserData as its callback
  fetchUserData(processUserData);