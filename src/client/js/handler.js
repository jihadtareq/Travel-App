const daysDifference = (startDate,endDate)=>Math.ceil(Math.abs(new Date(endDate)-new Date(startDate))/(1000*60*60*24));
const scrollToSection = sectionId => document.getElementById(sectionId).scrollIntoView({  behavior: 'smooth' });
const isFutureDate = date => Math.ceil((new Date(date) - Date.now()) / (1000 * 60 * 60 * 24)) >= 0
const isDateAfterThatDate = (pastDate, futureDate) => Math.ceil((new Date(futureDate) - new Date(pastDate)) / (1000 * 60 * 60 * 24)) > 0


const toggleTripCreateSection = (action = '') => {

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
    toggleTripCreateSection
}