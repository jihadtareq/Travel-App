const coordinatesAPI = async(city,country='')=>{

    const geonameURL = `http://api.geonames.org/searchJSON?q=${city}&country=${country}&maxRows=10&username=jihadtarek`
    const res = await fetch('https://cors-anywhere.herokuapp.com/' + geonameURL);
    try{
        const data = await res.json();
        return data;

    }
    catch(error){
        console.log(error);
        
    }
}

//Get DATA from API
const getDataAPI = async(userData)=>{
    let trip={}

    trip.error='';

    //get  Current Location
    await coordinatesAPI(userData.location)
    .then(resLocation=>{
        if(resLocation.error){
            trip.error=resLocation.error;
        }
        else{
            trip.location = {
                city:resLocation.geonames[0].toponymName,
                lat: resLocation.geonames[0].lat,
                lng: resLocation.geonames[0].lng
            }
        }
    })

    //get the destination

    await coordinatesAPI(userData.destination)
    .then(resDestinaton =>{
        if(resDestinaton.error){
            trip.error = resDestinaton.error;
        }else{

            //add the destination info to the object

            trip.destination = {
                city: resDestinaton.geonames[0].toponymName,
                country: resDestinaton.geonames[0].countryName,
                lat: resDestinaton.geonames[0].lat,
                lng: resDestinaton.geonames[0].lng
            };
        }
    })


}

//SAVE NEWTRIP

const saveNewtrip = (newTripHolder) =>{
    //check if the LocalStorage is supported by User's Browser
    if(window.localStorage !== undefined){
        let arrTPcapstone = [];
        // getitem tp_capstone from localstorage and retun it in json form 
        if (localStorage.getItem('tp_capstone')){
            //return the newtripHolder in array too
            arrTPcapstone = [...JSON.parse(localStorage.getItem('tp_capstone')),newTripHolder]
        }else{
            arrTPcapstone=[newTripHolder];
        }

        //add the trip to localstorage
        localStorage.setItem('tp_capstone',JSON.stringify(arrTPcapstone))

    }else{
        alert('Your Browser doesn\'t support the local storage. \nPlease, update your browser!');
        
        return false;
    }
}
export{
    coordinatesAPI,
    getDataAPI
}