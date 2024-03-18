const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById('cityName');

const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const day = document.getElementById('day');
const date = document.getElementById('today_date');
const current = new Date();
const datahide = document.querySelector('.middle_layer');
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    // console.log(cityVal)
    if (cityVal == "") {
        city_name.innerText = `Plz! write the name of city before searching`;
        datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `https://api.tomorrow.io/v4/weather/realtime?location=${cityVal}&apikey=O4NW2lkemuWSPq8DZmMoz6arGJhmZAZm`;
            const response = await fetch(url);
            const data= await response.json();
            const arrData=[data]
            console.log(arrData[0].data.values.temperature);
            temp_degree.innerText = arrData[0].data.values.temperature;
            day.innerText = daysOfWeek[current.getDay()];
            // date.innerText = current.getDate();
            datahide.classList.remove('data_hide');
        }
        catch (err) {
            console.log(err)
            city_name.innerText = `Plz! write the name of city properly`;
            datahide.classList.add('data_hide');
        }
    }

}

submitBtn.addEventListener('click', getInfo)