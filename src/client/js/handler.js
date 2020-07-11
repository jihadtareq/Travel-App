const daysDifference = (startDate,endDate)=>{
    let substract = Math.abs(new Date(endDate)-new Date(startDate));
    let divide =Math.ceil(substract)/(1000*60*60*24);
    return divide
}

const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({  behavior: 'smooth' });
}

const isFutureDate = (date) => {
    let substract = new Date(date) - Date.now()
    Math.ceil( substract / (1000 * 60 * 60 * 24)) >= 0
}
const isDateAfterThatDate = (pastDate, futureDate) => {
    let substract =new Date(futureDate) - new Date(pastDate)
    Math.ceil( substract / (1000 * 60 * 60 * 24)) > 0
}


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