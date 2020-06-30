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
export{
    coordinatesAPI,
    getDataAPI
}