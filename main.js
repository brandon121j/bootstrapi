const firstButton = document.querySelector('#first');

const secondButton = document.querySelector('#second');

function firstEvent() {
    console.log('First Button clicked')
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((rawData) => rawData.json())
    .then ((data) => {
        // console.log('Raw data received.');
        // console.log(data.json());
        const firstImage = document.querySelector('#firstIMG');
        firstImage.src = data.message;
    });
}

function secondEvent() {
    // console.log('Second Button clicked')
    fetch('https://goweather.herokuapp.com/weather/jacksonville')
    .then((rawData) => rawData.json())
    .then((data) => {
        let desc = document.querySelector('#description');
        let temp = document.querySelector('#temp');
        let wind = document.querySelector('#wind')
        desc.innerHTML = data.description;
        temp.innerHTML = data.temperature;
        wind.innerHTML = data.wind;
        console.log(data)
        
    })
    // .then()
}

firstButton.addEventListener('click', firstEvent);

secondButton.addEventListener('click', secondEvent);