/*const daysDifference = (startDate,endDate)=>{
    let substract = Math.abs(new Date(endDate) - new Date(startDate))

    let divide = Math.ceil(substract/1000 * 60 *60 * 24)

    return divide
}*/
const daysDifference = (startDate,endDate)=>Math.ceil(Math.abs(new Date(endDate)-new Date(startDate))/(1000*60*60*24));
const scrollToSection = sectionId => document.getElementById(sectionId).scrollIntoView({  behavior: 'smooth' });
const isFutureDate = date => Math.ceil((new Date(date) - Date.now()) / (1000 * 60 * 60 * 24)) >= 0
const isDateAfterThatDate = (pastDate, futureDate) => Math.ceil((new Date(futureDate) - new Date(pastDate)) / (1000 * 60 * 60 * 24)) > 0

export const showErrorMessage = msg => {

    const errMsgPopup = document.getElementById('error-block');
    errMsgPopup.querySelector('.js-err-message').innerHTML = msg;
    errMsgPopup.classList.add('active');
}

export const showToDoListPopup = indexNr => {

    const toDoListPopup = document.getElementById('to-do-list');
    toDoListPopup.querySelector('input[type="text"]').value = '';
    toDoListPopup.querySelector('input[type="hidden"]').value = indexNr;
    toDoListPopup.classList.add('active');
}

export const toggleTripCreateSection = (action = '') => {

    const tripCreateSection = document.getElementById('trip-create');
    
    if(action == 'active') {
        tripCreateSection.classList.remove('loading');
        tripCreateSection.classList.add('active');
    }
    else if(action == 'loading') {
        tripCreateSection.classList.remove('active');
        tripCreateSection.classList.add('loading');
    }  
    else {
        tripCreateSection.classList.remove('active');
        tripCreateSection.classList.remove('loading');
    }
}
export {
    daysDifference,
    scrollToSection,
    isFutureDate,
    isDateAfterThatDate,
}