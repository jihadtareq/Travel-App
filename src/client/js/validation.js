import { isFutureDate, isDateAfterThatDate} from './handler';

const validate = () =>{
    let errors=''
    const location = document.getElementById('location')
    const destination = document.getElementById('destination')
    const dateStart = document.getElementById('date-start')
    const dateEnd = document.getElementById('date-end')

    //check if the current location is valid 
    if(location.value.length < 3)
    {
        location.classList.remove('valid')
        location.classList.add('error')


     errors += alert('Please, add the Current Location!')
    }else{
        location.classList.remove('error')
        location.classList.add('valid')
    }

    //check the destination
    if(destination.value.length<3){

        destination.classList.remove('valid')
        destination.classList.add('error')

        errors += alert('Please, add the Destination!')
    }else{
        destination.classList.remove('error')
        destination.classList.add('valid')
    }
     // check the Start Date field
     if(!isFutureDate(dateStart.value) || dateStart.value == '') {

        dateStart.classList.add('error');
        dateStart.classList.remove('valid');

        errors += alert('Please, select the Departing Date because The Date cannot be before today!');
       
    } else {
        //validated
        dateStart.classList.remove('error');
        dateStart.classList.add('valid');
    }

    // check the End Date field
    if(!isDateAfterThatDate(dateStart.value, dateEnd.value) || !isFutureDate(dateEnd.value) || dateEnd.value == ''){
        dateEnd.classList.add('error')
        dateEnd.classList.remove('valid');
        
        errors += alert('Please, select the Returning Date because The Date cannot be before the Departing Date');
        
    } else {
        dateEnd.classList.remove('error')
        dateEnd.classList.add('valid');
    }

    //in case there is no error 
    if(!errors){
        document.getElementById('search').classList.add('disabled')
        //return the validated object
        return {
            location:location.value,
            destination:destination.value,
            dateStart: dateStart.value, 
            dateEnd: dateEnd.value

        }
    }else{
        document.getElementById('search').classList.remove('disabled')
        alert('Can not Search')
        return false
    }
}

export{
    validate
}