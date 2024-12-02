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
    // console.log(technology[0].images.portrait.slice(1));
    // techpagination
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







  }
  catch (error) {
    console.log("error fetching data");
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
    moonLinks.forEach((moonLink) => {
      moonLink.addEventListener("click", (e) => {
        let stone = e.currentTarget.dataset.id;
        let filtered = destinations.filter((Planet) => {
          if (Planet.name === stone) {
            return Planet;
          }
        })
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
  let displaySpaceStonePic = array.map((picture) => {
    return `
       <img class="block max-w-full" src="../${picture.images.png}" alt="Moon">
      `
  }).join("");

  if (celestialPics) {
    celestialPics.innerHTML = displaySpaceStonePic;
  }
  let displaySpaceStone = array.map((stone) => {
    return `
        <h2 class="moon-name">${stone.name}</h2>

          <div class="moon-info">
            <p class="text-secondary text-center ">
              ${stone.description}
            </p>
          </div>

          <div class="moon-distance-info">
            <div class="text-white text-center">
              <span class="block text-secondary mb-4 text-lg ">Avg. distance</span>
              <span class="text-4xl font-serif">${stone.distance}</span>
            </div>

            <div class="text-white text-center">
              <span class="block text-secondary mb-4 text-lg ">est. travel time</span>
              <span class="text-4xl font-serif">${stone.travel}</span>
            </div>
          </div> 
        `
  }).join("");
  if (celestialInfo) {
    celestialInfo.innerHTML = displaySpaceStone
  }
}
//crew function
function displayCrew(array, index) {
  // let crewArray 
  let prePagData = `
<h2 class="text-center ">
      <span class="block text-fourth text-xl sm:text-2xl font-serif uppercase mb-2">${array[index].role}</span>
      <span class="text-white font-serif uppercase text-2xl sm:text-3xl">${array[index].name}</span>
    </h2>
    <p class="text-center  px-2 text-secondary my-8 max-w-[18rem] mx-auto sm:max-w-xl sm:text-xl">
      ${array[index].bio}
    </p>
`
  let postPagData = `
    <div class=" relative flex justify-center ">
      <div class="max-w-[12rem] sm:max-w-xs h-50">
        <img class="block max-w-full" src=".${array[index].images.png}" alt="">
      </div>
      <div class="absolute bottom-0 left-0 w-full h-[3rem] bg-gradient-to-b from-transparent to-black sm:hidden "></div>
    </div>
`
  try {
    if (prePag) {
      prePag.innerHTML = prePagData;
    }
    if (postPag) {
      postPag.innerHTML = postPagData;
    }

  }
  catch (error) {
    console.log("error updating crewData");
  }
}
function displayTechInfo(array, index) {

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
   <h1 class="text-tertiary text-center text-xl uppercase font-serif sm:text-2xl">The terminology...</h1>
            <h2 class="text-center text-white uppercase text-2xl  font-serif sm:text-4xl">${array[index].name}</h2>
            <p class="text-secondary text-center max-w-80  p-4 sm:max-w-[28rem] sm:p-0 sm:text-lg font-extralight">
                ${array[index].description}
            </p>
 `

  try {
    if (techPic) {
      techPic.innerHTML = techPicture;
    }
    if (techInfo) {
      techInfo.innerHTML = techDescription;
    }
  } catch (error) {
    console.log(error);
  }
}
/**
 * 6930-2500-1200-300
 */