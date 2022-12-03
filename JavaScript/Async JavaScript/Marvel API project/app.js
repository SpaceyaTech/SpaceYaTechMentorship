
const marvelApi = (e)=>{
  e.preventDefault();
  // Get the character name
    const characterName = document.querySelector('#character-name').value
    // If there's a value then make the fetch request    
    if(characterName){
    document.querySelector('.info-header') ? document.querySelector('.info-header').remove(): '' 
    fetch(`https://gateway.marvel.com/v1/public/characters?name=${characterName}&apikey=${process.env.marvelKey}`)
    .then((res)=>res.json())
    .then(async data=>{
      const results = data.data.results[0]
      if(data.data.results.length > 0){
        //  comics(results.id)
        let imgurl = `${results.thumbnail.path}.${results.thumbnail.extension}`
        results.description.length > 0 ? document.querySelector(".character-description").innerHTML = results.description : document.querySelector(".character-description").innerHTML = "No description available for this hero" 
        uiController(results,imgurl)
      }else{
        const heroApi = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
        const data = await heroApi.json()
        const hero = data.find(hero => hero.name.toLowerCase() === characterName.toLowerCase())
        console.log(hero)
        uiController(hero,hero.images.lg)
        document.querySelector(".character-description").innerHTML = "No description available for this hero"
      }
     }
    )
    .catch(err=>
      console.log(err)
      )
    }
}

const uiController = (res,imageUrl) =>{
         document.querySelector(".character-name").innerHTML = res.name  
         document.querySelector('.hero-image') ? document.querySelector('.hero-image').remove():''
         const heroContainer = document.querySelector('.hero')
         const image = document.createElement('img')
         image.src = imageUrl
         image.alt = `An image of ${res.name}`
         image.classList.add('hero-image')
         heroContainer.appendChild(image)
}


const comics = async(characterId) =>{
  const comicContainer = document.querySelector('.comics');
  comicContainer.style.display = 'grid'
  try {
    const result = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?apikey=${process.env.marvelKey}`)
    const data = await result.json();
    const comics = data.data.results;
    // Clear the comics container
    comicContainer.innerHTML = '';
    // Loop over the comics and set them as background images for each div that is created
    comics.forEach(comic=>{
    let div = document.createElement("div")
    div.style.background = `url(${comic.thumbnail.path}/landscape_incredible.${comic.thumbnail.extension})`
    div.style.backgroundPosition = 'center'
    div.style.backgroundRepeat = 'no-repeat'
    div.style.backgroundSize = 'cover'
    comicContainer.appendChild(div)
   }) 
   
  } catch (error) {
    comicContainer.innerHTML = "Unable to fetch the data"
  }
}
document.querySelector('form').addEventListener('submit',marvelApi)