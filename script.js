let container = document.querySelector('.container')

fetch("https://restcountries.com/v2/all").then((res) => res.json())
    .then((data) => displaycountries(data))
    

const displaycountries = (data) => {
    data.forEach((Elementdata) => {
        const division = document.createElement('div')
         division.style.width = "22em";
        division.className = "card m-2"
        division.innerHTML = `
             
        <div class="card-header text center  text-light bg-dark" > <h4  id="cityname"> ${Elementdata.name}</h4></div>
          <div><img src ="${Elementdata.flag}"style="width: 50%; height: 10rem; class="mx-auto" ></div>

         <div class= "card-body text-center " style="padding-top:30px;>

         <h4 class="card title"></h4>
         <h5 class="text-light">Capital     :  ${Elementdata.capital}</h5>
         <h5 class="text-light">Region      :  ${Elementdata.region}</h5>
         <h5 class="text-light">Country code:  ${Elementdata.callingCodes[0]}</h5>
         <button onclick="block('${Elementdata.name}')" type="button" class="btn btn-secondary border border-dark">Click For Weather</button>
       
         </div>;
     `  
        container.appendChild(division);

    });

}
async function block(cityname){

   // var cityname=document.getElementById('cityname')
    console.log(cityname)
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=d3e506754c7c6054d2a6c7e680b5a02f`

        let res=await fetch(url)
        let data=await res.json()
      
        
   alert(`
    
    For ${cityname}  
    Humidity is ${data.main.humidity}
    Pressure is ${data.main.pressure}
    Temperature is ${data.main.temp}
    `)
}
block()
