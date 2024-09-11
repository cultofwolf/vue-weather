import {createStore} from "vuex";

export default createStore({
    state: {
        // initial state
        count: 0,
        weatherData:{
            icon: 'icon',
            temp: 0,
            text: 'text',
            location : 'location',
            city: 'seoul',
        },
        toggle : true,
    },
    mutations: {
        // mutations(데이터변경)
        addCounter(state, payload) {
            state.count += 1 + payload;
        },
        updateCity(state, payload){
            state.weatherData.city = payload;
        },
        updateWeather(state, payload){
            state.weatherData.icon = payload.weather[0].icon;
            state.weatherData.temp = payload.main.temp;
            state.weatherData.text = payload.weather[0].desc;
            state.weatherData.location = payload.sys.country;
            state.weatherData.city = payload.name;
        },
        toggleButton(state){
            state.toggle = !state.toggle;
        }
    },
    actions: {
        getWeather(context) {
            const API_KEY = import.meta.env.VITE_API_KEY;
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`
            fetch(API_URL)
                .then((res) => res.json())
                //.then( res=> res.json())
                .then(data => {
                    console.log(data)
                    //mutations 함수로 날씨 정보 없뎃
                    context.commit('updateWeather',data);

                })
                .catch(err => {
                    alert(err);
                });
        }
    }
})