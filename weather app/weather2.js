const myform = document.querySelector('#form-input');
const tasklist = document.querySelector('.weather_app');

myform.addEventListener('submit', addevent);

function addevent(d){
    d.preventDefault()
    const task = document.querySelector('#city');

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${task.value}&units=metric&appid=6ef7648b487b22a1a83952b58d64fdd1`)
    .then(res => showitem(res))
    .catch(err => console.log(err));


    function showitem(res){
        
        if(res.status == 200){
            let user = res.data
            
            const weather = document.createElement("div")
            const content = document.createElement('div');
            const icon = document.createElement('div');

            const h2 = document.createElement('h2');
            h2.appendChild(document.createTextNode(task.value.toUpperCase()))

            const p = document.createElement('p');
            p.appendChild(document.createTextNode(`${user["main"]["temp"]}°F`))

            const p2 = document.createElement('p');
            p2.appendChild(document.createTextNode(`${user["weather"][0]["description"]}`))
            
            content.appendChild(h2)
            content.appendChild(p)
            content.appendChild(p2)
            
            weather.appendChild(content)
            weather.appendChild(icon)
            weather.classList.add('container2')
            
            tasklist.appendChild(weather)
            
            icon.classList.add("icon")
            icon.innerHTML = `<img src="http://openweathermap.org/img/w/${user["weather"][0]["icon"]}.png " alt="">`

        }
        task.value = ""
    }
}