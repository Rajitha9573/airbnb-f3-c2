const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8851911562msh8842a3f385e54bdp10230fjsn213e05b79e2c',
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	}
};


async function getData(){
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result.results);
        renderData(result.results)
    } catch (error) {
        console.error(error);
    }
}
getData();


const listOfHotels = document.getElementById("hotelList");

console.log(listOfHotels)
function renderData(arrayOfHotel){

    arrayOfHotel.forEach((hotel) => {
        const divElement = document.createElement("div");
        const title = document.createElement("h1");
        title.innerHTML=hotel.name;
        title.appendChild(divElement);
    })
    divElement.appendChild(listOfHotels)
 
}