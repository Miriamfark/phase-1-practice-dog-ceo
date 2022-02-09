console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const imgContainer = document.getElementById('dog-image-container')

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then((data) => {
    const arrayOfDogURLs = data.message
    arrayOfDogURLs.forEach((url)=>imgContainer.appendChild(makeImgTag(url)))
})

function makeImgTag(url) {
    const imageTag = document.createElement('img')
    imageTag.src = url
    return imageTag
}

const breedList = document.querySelector('#dog-breeds')

fetch('https://dog.ceo/api/breeds/list/all')
.then(response => response.json())
.then(data => {
    const dogBreeds = Object.keys(data.message)
    dogBreeds.forEach((breed) => breedList.appendChild(makeList(breed)))
})

function makeList(breed) {
    const liTag = document.createElement('li')
    liTag.textContent = breed
    return liTag
}

breedList.addEventListener('click',()=> {
    if (event.target.tagName === 'LI') {
        event.target.style.color = "red"
    }
})

const breedDropDown = document.querySelector('#breed-dropdown')
breedDropDown.addEventListener('change', filterBreeds)

function filterBreeds(event) {
    fetch ('https://dog.ceo/api/breeds/list/all')
    .then (response => response.json())
    .then(data => {
        const dogBreeds = Object.keys(data.message)
        const filteredArray = dogBreeds.filter(breed =>{
            return breed.startsWith(event.target.value)
        })
        breedList.innerHTML = ""
        filteredArray.forEach((breed) => {
            breedList.innerHTML += `<li data-info="breed">${breed}</li>`
        })
    }
    
        
    )
        
}

