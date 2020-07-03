import{getDataAPI,saveNewtrip} from './api'
import{validate} from './validation'
import { toggleTripCreateSection } from '../../../../../travel-planner imp/src/client/js/helpers';

//this array will contaib multi-object Destinations

let ArrTrip = [];

const creatTripBlock = (data)=>{
    //get the DOM
    const tripBlock = document.getElementById('');
    tripBlock.innerHTML='';

    //dispaly the tripblock in the browser
    //tripBlock.appendChild();
}


/* ========= */
/* =========== START EXECUTION PART ============= */
/* ========= */

document.addEventListener('DOMContentLoaded',()=>{
    //get the DOM
    const searchBtn = document.getElementById('search')

   // Event Listener: Click => on search button;
   searchBtn.addEventListener('click', ()=>{
       //check if the btn is not disabled
       if(!searchBtn.classList.contains('disabled')){
           let userData = validate()

           if(userData){
               console.log(userData)
                 getDataAPI(userData)
                 .then(DestinationTrip =>{
                    if(DestinationTrip.error){
                        alert('There is an error in Destination trip')
                        // make the search btn enable   
                        document.getElementById('search').classList.remove('disabled')
  
                    }else{
                        ArrTrip.push(DestinationTrip)
                        console.log(ArrTrip)
                    }

                 });
           }

       }
   });
})