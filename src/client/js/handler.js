const daysDifference =(startDate,endDate)=>{
    const date1=new Date(startDate);
    const date2 = new Date (endDate);
    return Math.ceil(Math.abs(date2-date1)/(1000*3600*24));
}

const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({  behavior: 'smooth' })
};

const isFutureDate = (date) => {
    const futureDate = new Date(date);
    const currentDate = Date.now();
   return  Math.ceil((futureDate-currentDate) / (1000 * 3600 * 24)) >= 0
}

const isDateAfterThatDate = (pastDate, futureDate) =>{
    const fDate = new Date(futureDate);
    const pDate = new Date (pastDate);
    return Math.ceil((fDate-pDate) / (1000 * 3600 * 24)) > 0
}


const tripCreateSection = (action = '') => {

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
    tripCreateSection
}