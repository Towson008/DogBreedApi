const URL = 'https://dog.ceo/api/breed/hound/images/random'
const BREED_URL = "https://dog.ceo/api/breeds/image/random"


fetch(URL).then((res)=>{
    return res.json()
}).then((meg) =>{
    console.log(meg.message)
})

const dogBreed = document.querySelector('.dog-breed')
const loader = document.querySelector('.loader')

const loadNewDog = () =>{
    loader.classList.add('show');
    dogBreed.classList.remove('show') 

    fetch(BREED_URL)
    .then((response)=>{
        return response.json()
    })
    .then((data)=> {
        console.log(data)
        const img = document.createElement('img');
        const dogMessage = document.createElement('H3');
        img.src = data.message;

        loader.classList.remove('show')
        dogBreed.classList.add ('show')
 
        dogMessage.innerText = "Hi, I'm a dog, I hope you like me 🐶";

        document.querySelector('.dog-breed').appendChild(img)
        document.querySelector('.dog-breed').appendChild(dogMessage);
    })
}



document.querySelector('.load-dog').addEventListener('click', loadNewDog)