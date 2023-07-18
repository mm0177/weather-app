let input=document.querySelector("#query")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2719ba43d4msh7c7d49197b2a84cp165aeejsnc2175bec204f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getpr=(city)=>{
    cityName.innerHTML=city
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,options)
	.then(response=>response.json())
    .then((response)=>{
        temp.innerHTML=response.temp
        max_temp.innerHTML=response.max_temp
        min_temp.innerHTML=response.min_temp
        wind_speed.innerHTML=response.wind_speed
        

    })
    
    .catch(err=>console.log(err))
    
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getpr(city.value)
})
getpr("Delhi")