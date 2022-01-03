const areaLink = document.querySelector("#longLink");
const areaLinkShort = document.querySelector("#areaLinkShort");
const encurtar = document.querySelector("#encurtar");

encurtar.addEventListener('click', () =>{
  
  
  shortLink();
  
})
areaLink.addEventListener('keypress', (e) =>{
  
  
    if(e.key === "Enter")
    {
      
      shortLink();
    }
  
  
})




function shortLink()
{
 
  const originalLink = areaLink.value
  const url = `https://api.shrtco.de/v2/shorten?url=${originalLink}`;
  
  fetch(url)
  .then(response =>{ 
    
    return response.json();
  })
  
  .then(short => {
    
    
    areaLinkShort.value = short.result.short_link;
  
    
  })
}

/*Fix screen bug*/
const container = document.querySelector("main");

const altura = window.innerHeight - (window.innerHeight * 10 / 100);

container.style.height = `${altura}px`;
