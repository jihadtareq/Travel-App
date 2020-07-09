import { isFutureDate, isDateAfterThatDate,showErrorMessage} from './handler';

const validate = () =>{
    let error = ''

    const location = document.getElementById('location')
    const destination = document.getElementById('destination')
    const dateStart = document.getElementById('date-start')
    const dateEnd = document.getElementById('date-end')

    //check if the current location is valid 
    if(location.value.length < 3)
    {
        location.classList.remove('valid')
        location.classList.add('error')


        errors += '<p>Please, add the Current Location!</p>'
    }else{
        location.classList.remove('error')
        location.classList.add('valid')
    }

    //check the destination
    if(destination.value.length<3){
        let error =''

        destination.classList.remove('valid')
        destination.classList.add('error')

        error +='<p>Please, add the Destination!</p>'
    }else{
        destination.classList.remove('error')
        destination.classList.add('valid')
    }
     // check the Start Date field
     if(!isFutureDate(dateStart.value) || dateStart.value == '') {

        dateStart.classList.add('error');
        dateStart.classList.remove('valid');

        errors += '<p>Please, select the Departing Date <br>(The Date cannot be before today)</p>';
       
    } else {
        //validated
        dateStart.classList.remove('error');
        dateStart.classList.add('valid');
    }

    // check the End Date field
    if(!isDateAfterThatDate(dateStart.value, dateEnd.value) || !isFutureDate(dateEnd.value) || dateEnd.value == ''){
        dateEnd.classList.add('error')
        dateEnd.classList.remove('valid');
        
        errors += '<p>Please, select the Returning Date <br>(The Date cannot be before the Departing Date)</p>';
        
    } else {
        dateEnd.classList.remove('error')
        dateEnd.classList.add('valid');
    }

    //in case there is no error 
    if(!error){
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
       // alert('Can not Search')
        showErrorMessage(errors);
        return false
    }
}

export{
    validate
}