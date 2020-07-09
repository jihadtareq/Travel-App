import{getDataAPI,saveNewtrip} from './api'
import{validate} from './validation'
import { toggleTripCreateSection,scrollToSection } from './handler';
import{createTripHtml} from './UI'

//this array will contaib multi-object Destinations

let ArrTrip = [];

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
    const popupCloseBtn = document.querySelectorAll('.js-popup-close');
    const saveToDoBtn = document.querySelector('.save-to-do');
    const navLink = document.querySelector('nav a');


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
                        creatTripBlock(ArrTrip);
                        toggleTripCreateSection('active'); //show the content
                    }

                 });
           }

       }
   });

   // Event Listener: Click
   newTripBlock.addEventListener('click', (event) => {

        
    // Click => Add More Destinations;
         if(event.target.getAttribute('id') == 'add-more-destination') { 
             addMoreDestinations(ArrTrip);
          }

    // Click => Save New Trip;
          if(event.target.getAttribute('id') == 'save-new-trip') { 
             if(saveNewTrip(ArrTrip)) ArrTrip = [];
           }

    //Click => Open To Do List Popup
          if(event.target.classList.contains('add-to-do')) {
        
        //get the Dest index in newTrip array
              const tripDestNr = event.target.closest('.new-dest-actions').getAttribute('data-dest-nr');
              showToDoListPopup(tripDestNr);
          }
   
    }, true)


      // Event Listener: Click => Close Pop up Message Block 
      popupCloseBtn.forEach(element => {
           element.addEventListener('click',function(event){
               element.closest('.full-screen').classList.remove('active');
        
        },true);
      });

      // Event Listener: Click => Navigation link and scoll to All trips
      navLink.addEventListener('click', (event) => {
    
      event.preventDefault();
      scrollToSection(event.target.dataset.nav);
      });

    // Event Listener: Click => Save To DO List
     saveToDoBtn.addEventListener('click',function(event){
          ArrTrip = saveToDoList(ArrTrip);
         createNewTripBlock(ArrTrip);
      },true);
})



          

const saveToDoList = (data) => {
    
    const toDoListText = document.querySelector('input[name="to-do-list"]').value;
    const tripDestNr = document.querySelector('input[name="trip-dest-nr"]').value;
    
    if(toDoListText.length > 3) {
        
        data[tripDestNr].toDoList.push(toDoListText);
        document.getElementById('to-do-list').classList.remove('active');
        
    }

    //return modified newTripHolder
    return data;
    

    
}
