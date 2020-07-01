const validate = () =>{
    let error = ''

    const location = document.getElementById('location')
    const destination = document.getElementById('destination')

    //check if the current location is valid 
    if(location.value.length < 10)
    {
        location.classList.remove('valid')
        location.classList.add('error')


        errors += '<p>Please, add the Current Location!</p>'
    }else{
        location.classList.remove('error')
        location.classList.add('valid')
    }

    //chech the destination
    if(destination.value.length<10){
        let error =''

        destination.classList.remove('valid')
        destination.classList.add('error')

        error +='<p>Please, add the Destination!</p>'
    }else{
        destination.classList.remove('error')
        destination.classList.add('valid')
    }

    //in case there is no error 
    if(!error){
        document.getElementById('search').classList.add('disabled')
        //return the validated object
        return {
            location:location.value,
            destination:destination.value
        }
    }else{
        document.getElementById('search').classList.remove('disabled')
        alert('Can not Search')
        return false
    }
}