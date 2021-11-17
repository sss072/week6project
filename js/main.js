let getData = async () =>{
    let city = document.querySelector('#search').value;
    let api_key = '5da5010b3446191cc7eaaf11e8835f9c' 
    
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    console.log(response.data)
    return response.data
}


let displayData = async () =>{
    let data = await getData()
    let old_high = data.main.temp_max
    let high = ((old_high-273.15)*1.8)+32
    let high_display = document.createElement("div")
    high_display.innerHTML = high
    document.querySelector('#High').append(high_display)
    
    let old_low = data.main.temp_min
    let low = ((old_low-273.15)*1.8)+32
    let low_display = document.createElement("div")
    low_display.innerHTML = low
    document.querySelector('#Low').append(low_display)  
    
    let forecast = data.weather[0].main
    let forecast_display = document.createElement("div")
    forecast_display.innerHTML = forecast
    document.querySelector('#Forecast').append(forecast_display) 
    
    
    
    let humidity = data.main.humidity
    let humidity_display = document.createElement("div")
    humidity_display.innerHTML = humidity
    document.querySelector('#Humidity').append(humidity_display)

}