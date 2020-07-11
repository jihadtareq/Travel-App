import{getDataAPI,saveNewTrip} from './api'
import{validate} from './validation'
import { tripCreateSection,scrollToSection } from './handler';
import{createTripHtml} from './UI'

//this array will contaib multi-object Destinations

let newTripHolder = [];

const creatTripBlock = (data)=>{
    //get the DOM
    const tripBlock = document.getElementById('new-trip');
    tripBlock.innerHTML='';

   // dispaly the tripblock in the browser
   tripBlock.appendChild(createTripHtml(data));
}

/* ========= */
/* =========== START EXECUTION PART ============= */
/* ========= */

document.addEventListener('DOMContentLoaded',()=>{
    //get the DOM
    const searchBtn = document.getElementById('search')
    const newTripBlock = document.getElementById('new-trip');
    const navLink = document.querySelector('nav a');


   // Event Listener: Click => on search button;
   searchBtn.addEventListener('click', ()=>{
       //check if the btn is not disabled
       if(!searchBtn.classList.contains('disabled')){
           let userData = validate()

           if(userData){
                 getDataAPI(userData)
                 .then(DestinationTrip =>{
                    if(DestinationTrip.error){
                        alert('There is an error in Destination trip')
                        tripCreateSection() //hide the section
                        scrollToSection('trip-form'); //scroll back to form

                        // make the search btn enable   
                        document.getElementById('search').classList.remove('disabled')
  
                    }else{
                        newTripHolder.push(DestinationTrip)
                      
                        creatTripBlock(newTripHolder);
                        tripCreateSection('active'); //show the content
                    }

                 });
           }

       }
   });

   // Event Listener: Click
   newTripBlock.addEventListener('click', (event) => {

    // Click => Save New Trip;
          if(event.target.getAttribute('id') == 'save-new-trip') { 
             if(saveNewTrip(newTripHolder)) newTripHolder = [];
           }
   
    }, true)


      // Event Listener: Click => Navigation link and scoll to All trips
      navLink.addEventListener('click', (event) => {
    
      event.preventDefault();
      scrollToSection(event.target.dataset.nav);
      });
})