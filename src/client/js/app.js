/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
const baseURL ='https://api.openweathermap.org/data/2.5/weather?zip=';
const APIkey = '&APPID=e5f1d30dabc61588114bc27d77162b8e';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click',performAction)

/* Function called by event listener */
function performAction(e){

    const newFeelings = document.getElementById('feelings').value;
    const zip =document.getElementById('zip').value;
    getData(baseURL,zip,APIkey)
    .then(function(temperature){
        //add data
        console.log(temperature);
        postData('/add',{temp:temperature,date:newDate,content:newFeelings})
        updateUI()

    })    
}

/* Function to GET Web API Data*/
const getData = async (baseURL,zip,key)=>{
    const res =await fetch(baseURL + zip + ',us' + key)
    try{
        const data = await res.json();
        const temperature=data.main.temp;
        return temperature;
    }catch(error){
        console.log("error",error);
    }
}
/* Function to POST data */
const postData = async(url='',data={})=>{

    const response = await fetch(url,{
        method:'POST',
        credentials:'same-origin',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(data),

    });

    try{
        const newData = await response.json();
        console.log(newDate);
        return newData;
    }
    catch(error)
    {
       console.log("error",error);
    }

}

/* Function to GET Project Data */

const getProjectData = async(url='')=>{
    const res = await fetch(url);
    try{
        const allData =await res.json();
        return allData;
    }catch(error){
        console.log("error",error);
    }

}

/*UPDATEUI */
const updateUI = async()=>{

    const request = await fetch('/all');
    try{
        let allData = await request.json();
        allData = allData.data
        console.log(allData);
        for(let i=0;i<allData.length;i++){
        document.getElementById('date').innerHTML=allData[i].date;
        document.getElementById('temp').innerHTML=allData[i].temperature;
        document.getElementById('content').innerHTML=allData[i].content;
        }

    }catch(error){
        console.log("error",error);
    }

}

