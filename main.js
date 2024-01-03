const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

//Using async/await
async function generateJoke() {

    const config = {
        headers:{
            'Accept': 'application/json' // this is the header that we need to add to get the json data
        }
    }
    const resFetch =  await fetch('https://icanhazdadjoke.com/', config) 
    const data = await resFetch.json(); // this is the data that we get from the api
    jokeEl.innerHTML = data.joke; // this is the data that we get from the api

}


//Using .then() method

// function generateJoke() {

//     const config = {
//         headers:{
//             'Accept': 'application/json' // this is the header that we need to add to get the json data
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', config).then(res => res.json()).then((data) => 
//     {
//         jokeEl.innerHTML = data.joke; // this is the data that we get from the api 
//         // we can use the .joke because we know that the data is in json format
//     })
// }