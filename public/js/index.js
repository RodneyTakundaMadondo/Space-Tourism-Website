const hamburgerBtn = document.querySelector(".hamburger-btn");
const CloseBtn = document.querySelector(".close-btn");
const sidePanel = document.querySelector(".side-panel");

const moonLinks = document.querySelectorAll(".moon-links");
const celestialInfo = document.querySelector(".information");
const celestialPics = document.querySelector(".celestial-pic");
const prePag = document.querySelector(".pre-pag")
const postPag = document.querySelector(".post-pag")
const techPic = document.querySelector(".tech-pic")
const techInfo = document.querySelector(".tech-info")

const crewPagination = document.querySelectorAll(".crew-pagination");
const techPagination = document.querySelectorAll(".tech-pagination");
const underline = document.querySelectorAll(".moon-link-underline");//underline span
const navUnderline = document.querySelectorAll(".navigation-underline")
const navLinks = document.querySelectorAll(".nav-links");



// On page load, check if the current URL matches any link's href
window.addEventListener("load", () => {
  navLinks.forEach((btn, index) => {
    if (window.location.href === btn.href) {
      // If the current URL matches the link's href, add the active class
      navUnderline[index].classList.add("active-nav-underline");
    }
  });
});





hamburgerBtn.addEventListener("click", () => {
  sidePanel.classList.remove("translate-x-full")
  sidePanel.classList.add("translate-x-0");
})

CloseBtn.addEventListener("click", () => {
  sidePanel.classList.remove("translate-x-0")
  sidePanel.classList.add("translate-x-full");
})

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const spaceDataFetch = await fetch('/data.json');
    const spaceData = await spaceDataFetch.json();

    let destinations = spaceData.destinations;
    let crew = spaceData.crew;
    let technology = spaceData.technology;

    let filterd = destinations.filter((Item) => {
      if (Item.name === "Moon") {
        return Item;
      }
    })
    displayCelestialBody(filterd);
    const crewData = document.querySelector(".crew-data");
    displayCrew(crew, 0);
    displayTechInfo(technology, 0)


    //crew buttons
    //make first crew page pagination button white
    if (window.location.toString().includes("crew")) {
      crewPagination[0].classList.add("bg-white");
      crewPagination.forEach((crewButton, index) => {

        crewButton.addEventListener("click", () => {

          crewPagination.forEach((button) => {
            button.classList.remove("bg-white")
          });

          crewButton.classList.add("bg-white")
          displayCrew(crew, index);

        })
      })
    }
    navLinks.forEach((btn, index) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();  // Prevent the default anchor click behavior
    
        // Remove 'active-nav-underline' from all spans
        navUnderline.forEach((underline) => {
          underline.classList.remove("active-nav-underline");
        });
    
        // Add the active class to the clicked link's underline
        navUnderline[index].classList.add("active-nav-underline");
    
        // Navigate to the link
        window.location.href = btn.href;
      });
    });
    // console.log(technology[0].images.portrait.slice(1));
    // techpagination
    if(window.location.href.includes("technology-vehicle.html") ){
      techPagination[0].classList.remove("text-white");
      techPagination[0].classList.add("bg-white", "text-black");
    }

    techPagination.forEach((button, index) => {
     
      button.addEventListener("click", () => {
        techPagination.forEach((whiteBtn) => {
          whiteBtn.classList.remove("bg-white", "text-black");
          whiteBtn.classList.add("text-white")

        });
        button.classList.remove("text-white")
        button.classList.add("bg-white", "text-black");
        displayTechInfo(technology, index)

      })
    })
    if(window.location.href.includes("destination-moon.html")){
      underline[0].classList.add("active-moon-link");
     
    }
    

  }
  catch (error) {
    console.log(error);
  }


})


async function SpaceInfo() {
  try {
    const spaceDataFetch = await fetch('/data.json');
    const spaceData = await spaceDataFetch.json();

    let destinations = spaceData.destinations;
    let crew = spaceData.crew;
    let technology = spaceData.technology;

    //destination buttons
   
    moonLinks.forEach((moonLink,index) => {
      moonLink.addEventListener("click", (e) => {
       underline.forEach((line)=>{
        line.classList.remove("active-moon-link");
       })
        let stone = e.currentTarget.dataset.id;
        let filtered = destinations.filter((Planet) => {
          if (Planet.name === stone) {
            return Planet;
          }
        })
       underline[index].classList.add("active-moon-link")
       // works because opacity is set to full when in active-moon-link mode

        
        displayCelestialBody(filtered);
      })
    })


  }
  catch (error) {
    console.log(error);
  }
}
SpaceInfo();

function displayCelestialBody(array) {
  const scrollY = window.scrollY; 
  let displaySpaceStonePic = array.map((picture) => {
    return `
       <img class="block max-w-full" src="../${picture.images.png}" alt="Moon">
      `
  }).join("");

  if (celestialPics) {
    celestialPics.innerHTML = displaySpaceStonePic;
    window.scrollTo(0, scrollY); 
  }
  let displaySpaceStone = array.map((stone) => {
    return `
        <h2 class="moon-name">${stone.name}</h2>

          <div class="moon-info">
            <p class="text-secondary text-center  md:text-start">
              ${stone.description}
            </p>
          </div>

          <div class="moon-distance-info">
            <div class="text-white text-center md:text-start">
              <span class="block text-secondary mb-4 text-lg tracking-wider">Avg. distance</span>
              <span class="text-2xl font-serif">${stone.distance}</span>
            </div>

            <div class="text-white text-center md:text-start">
              <span class="block text-secondary mb-4 text-lg tracking-wider">est. travel time</span>
              <span class="text-2xl font-serif">${stone.travel}</span>
            </div>
          </div> 
        `
  }).join("");
  if (celestialInfo) {
    celestialInfo.innerHTML = displaySpaceStone
    window.scrollTo(0, scrollY);
  }
}
//crew function
function displayCrew(array, index) {
  const scrollY = window.scrollY; 
  let prePagData = `
<h2 class="text-center md:text-start ">
      <span class="block text-fourth text-xl sm:text-2xl font-serif uppercase mb-2 ">${array[index].role}</span>
      <span class="text-white font-serif uppercase text-2xl sm:text-3xl">${array[index].name}</span>
    </h2>
    <p class="text-center  px-2 text-secondary my-7 max-w-[18rem] mx-auto sm:max-w-xl sm:text-xl md:text-start md:px-0">
      ${array[index].bio}
    </p>
`
  let postPagData = `
    <div class=" relative flex justify-center ">
      <div class="max-w-[12rem] sm:max-w-xs h-50 lg:max-w-lg">
        <img class="block max-w-full" src=".${array[index].images.png}" alt="">
      </div>
      <div class="absolute bottom-0 left-0 w-full h-[3rem] bg-gradient-to-b from-transparent to-black sm:hidden "></div>
    </div>
`
  try {
    if (prePag) {
      prePag.innerHTML = prePagData;
      window.scrollTo(0, scrollY);
    }
    if (postPag) {
      postPag.innerHTML = postPagData;
      window.scrollTo(0, scrollY);
    }

  }
  catch (error) {
    console.log(error);
  }
}
function displayTechInfo(array, index) {
  const scrollY = window.scrollY; 
  let image =array[index].images.landscape.slice(1) ; // this is for the landscape images for the mobile and tab design
  let desktopImg = array[index].images.portrait.slice(1);// this is that portrait image shown in desktop

  // 
  let techPicture  = `
  <picture class="w-full h-full object-contain">
  <source media="(max-width: 640px)" srcset="${image}" >
  <source media="(min-width: 768px)" srcset="${desktopImg}" >
  <img src="${image}" class="w-full h-full object-contain" alt="Space Image">
  </picture>
`;// this makes images responsive for us to change at different screen sizes

  let techDescription = `
   <h1 class="text-tertiary text-center text-xl uppercase font-serif sm:text-2xl md:text-start md:text-3xl lg:text-4xl">The terminology...</h1>
            <h2 class="text-center text-white uppercase text-2xl  font-serif sm:text-4xl largeDesk:text-5xl md:text-start">${array[index].name}</h2>
            <p class="text-secondary text-center max-w-80  p-4 sm:max-w-[28rem] sm:p-0 sm:text-lg md:text-xl  font-extralight md:text-start">
                ${array[index].description}
            </p>
 `

  try {
    if (techPic && techInfo) {
      techPic.innerHTML = techPicture;
      techInfo.innerHTML = techDescription;
      window.scrollTo(0, scrollY);
    }
      
    
  } catch (error) {
    console.log(error);
  }
}
/**
 * 6930-2500-1200-300
 */

