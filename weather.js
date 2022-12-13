    navigator.geolocation.getCurrentPosition(done,error);
            
    function done(x){
    let lat=x.coords.latitude;
    let lon=x.coords.longitude;
    let apiKey="67abc2d5baf18d3c228318abf230a8e8";
   
     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ apiKey}`).then(i=>i.json()).then(i=>{

      fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`).then(x=>x.json()).then(x=>{
        let AQI=x.list[0].main.aqi;
        const index=["Good","Fair","Moderate","Poor","Very Poor"]
        if(AQI==1){
            document.querySelector(".pollutionindex").innerHTML=`The Air Quality Of ${i.name} Area Is ${index[0]}`;
            document.querySelector(".pollutionindex").style.background="green"

        }
        else if(AQI==2){
            document.querySelector(".pollutionindex").innerHTML=`The Air Quality Of ${i.name} Area Is ${index[1]}`;
            document.querySelector(".pollutionindex").style.background="darkblue"

        }
        else if(AQI==3){
            document.querySelector(".pollutionindex").innerHTML=`The Air Quality Of ${i.name} Area Is ${index[2]}`;
            document.querySelector(".pollutionindex").style.background="orange"

        }
        else if(AQI==4){
            document.querySelector(".pollutionindex").innerHTML=`The Air Quality Of ${i.name} Area Is ${index[3]}`;
            document.querySelector(".pollutionindex").style.background="red"

        }
        else {
            document.querySelector(".pollutionindex").innerHTML=`The Air Quality Of ${i.name} Area is ${index[4]}`;
            document.querySelector(".pollutionindex").style.background="crimson"

        }
       

      })


            var sky= i.weather[0].main;
            document.querySelector(".location").innerHTML=`&#9679; ${i.name}`;
           
            if(sky=="rain"){
                document.querySelector(".icon").innerHTML="&#9730;";
            }
            else if(sky=="Clouds"){
                document.querySelector(".icon").innerHTML="&#9729;";
            }
            else if(sky=="Smoke" || sky=="Fog"){
                document.querySelector(".icon").innerHTML="&#x1F32B;";
            }
            else if(sky=="Snow"){
                document.querySelector(".icon").innerHTML="	&#x2603;";
            }
            else{
                document.querySelector(".icon").innerHTML="&#9728;";
            }  
            document.querySelector(".local").innerHTML=`${Math.floor(i.main.temp-275)}&deg;C`;

            document.querySelector(".sky").innerHTML=sky;
            
            document.querySelector(".mintemp").innerHTML=`${Math.floor(i.main.temp_min-275)}&deg;C`;

            document.querySelector(".maxtemp").innerHTML=`${Math.floor(i.main.temp_max-275)}&deg;C`;

            document.querySelector(".feels").innerHTML=`${Math.floor(i.main.feels_like-275)}&deg;C`;

            document.querySelector(".windspeed").innerHTML=`${parseFloat(i.wind.speed)}`;
    })
    document.querySelector(".submit").addEventListener("click",function(e){
            e.preventDefault();
            let cityName=city.value;
            if(cityName==""){
                document.querySelector(".alert").innerHTML='Enter A City Name';     
            }
         
            else {   

            let apiKey="67abc2d5baf18d3c228318abf230a8e8";
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ apiKey}`).then(i=>i.json()).then(i=>{
        
                 let lati=i.coord.lat;
                 let long=i.coord.lon;

                fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lati}&lon=${long}&appid=${apiKey}`).then(J=>J.json()).then(J=>{
                    let AQI=J.list[0].main.aqi;
                    const index=["Good","Fair","Moderate","Poor","Very Poor"]
                    if(AQI==1){
                        document.querySelector(".index").innerHTML=`The Air Quality Of ${cityName} Area Is ${index[0]}`;
                        document.querySelector(".index").style.background="green"
            
                    }
                    else if(AQI==2){
                        document.querySelector(".index").innerHTML=`The Air Quality Of ${cityName} Area Is ${index[1]}`;
                        document.querySelector(".index").style.background="darkblue"
            
                    }
                    else if(AQI==3){
                        document.querySelector(".index").innerHTML=`The Air Quality Of ${cityName} Area Is ${index[2]}`;
                        document.querySelector(".index").style.background="orange"
            
                    }
                    else if(AQI==4){
                        document.querySelector(".index").innerHTML=`The Air Quality Of ${cityName} Area Is ${index[3]}`;
                        document.querySelector(".index").style.background="red"
            
                    }
          
                    else {
                        document.querySelector(".index").innerHTML=`The Air Quality Of ${cityName} Area is ${index[4]}`;
                        document.querySelector(".index").style.background="crimson"
            
                    }
                })
    
            document.querySelector(".alert").innerHTML="";
            
            document.querySelector(".result").removeAttribute("hidden");
            var sky= i.weather[0].main;
            document.querySelector(".loc").innerHTML=`&#9679; ${cityName}`;
           
            if(sky=="rain"){
                document.querySelector(".icona").innerHTML="&#9730;";
            }
            else if(sky=="Clouds"){
                document.querySelector(".icona").innerHTML="&#9729;";
            }
            else if(sky=="Smoke" || sky=="Fog"){
                document.querySelector(".icona").innerHTML="&#x1F32B;";
            }
            else{
                document.querySelector(".icona").innerHTML="&#9728;";
            }  
            document.querySelector(".locala").innerHTML=`${Math.floor(i.main.temp-275)}&deg;C`;

            document.querySelector(".skya").innerHTML=sky;
            
            document.querySelector(".mintempa").innerHTML=`${Math.floor(i.main.temp_min-275)}&deg;C`;

            document.querySelector(".maxtempa").innerHTML=`${Math.floor(i.main.temp_max-275)}&deg;C`;

            document.querySelector(".feelsa").innerHTML=`${Math.floor(i.main.feels_like-275)}&deg;C`;

            document.querySelector(".windspeeda").innerHTML=`${parseFloat(i.wind.speed)}`;
       
         }) 
    }  
          }) 
    }

    function error(x){
    console.log(x.message);
    }
    ;

  