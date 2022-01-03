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


/**/
const container = document.querySelector("main");

const heightWindow = screen.height;

container.style.minHeight = `${heightWindow}px`;

