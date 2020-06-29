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