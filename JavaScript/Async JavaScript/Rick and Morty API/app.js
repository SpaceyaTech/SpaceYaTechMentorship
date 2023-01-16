const fetchData = async(url) =>{
    const data = await fetch(url);
    const res = await data.json();
     
    return res.results;
  }



document.querySelector('.btn')
.addEventListener('click',()=>{
   fetchData("https://rickandmortyapi.com/api/character")
   .then(data=>{
    console.log(data)
    data.forEach(char=>{
        //console.log(character)
        const { name } = char;
        const namePara = document.createElement('p');
        namePara.textContent = name;
        const cardSection = document.querySelector('.card-section');
              
        cardSection.appendChild(namePara)
        
    })
    
   })
   .catch(err=>console.log(err))
   
    
})