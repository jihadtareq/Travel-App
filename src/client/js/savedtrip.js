import { createTripListBlock } from './UI';

export const savedTrip = () => {

    //get the Saved Trip from local storage, if exist.
    let getSavedTrip = localStorage.getItem('tp_capstone');

    //hide the section when no Saved Trips 
    document.getElementById('trip-list').classList.remove('active');
    //hide the navigation
    document.querySelector('li.nav-list').classList.remove('active');

    if(getSavedTrip && JSON.parse(getSavedTrip).length > 0) {

        const tripListContent = document.getElementById('trips-list-content');

        //enable navigation
        document.querySelector('li.nav-list').classList.add('active');

        tripListContent.innerHTML = '';
        tripListContent.appendChild(createTripListBlock(JSON.parse(getSavedTrip)));
        document.getElementById('trip-list').classList.add('active');

    }
}

const removeTrip = (index) => {
    const savedTrip = JSON.parse(localStorage.getItem('tp_capstone'));
    let filterTrip = savedTrip.filter((item, i) => i != index);
    localStorage.setItem('tp_capstone', JSON.stringify(filterTrip));
}


document.addEventListener('DOMContentLoaded', () => {

    //display all the saved trips if exist
    savedTrip()
    
    //get the DOM
    const tripListContent = document.getElementById('trips-list-content');
    const navLink = document.getElementById('nav-list');

    // Event Listener: Click => Remove a Trip
    tripListContent.addEventListener('click',function(event){

        if(event.target.classList.contains('remove-trip')) {
            removeTrip(event.target.dataset.tripNr);
            savedTrip();
        }
        
    },true);

})

