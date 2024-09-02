var cars = [
{name:"Gravy-Garage", 
type:"Pack", 
downloadlink:"https://mega.nz/file/UR0l0TrS#o4dqPuov2ChCp-Ki9kBvCiAzzyVRrOUD-mCnrszhL4c"
}, 
{name:"WDT-Street-Pack", 
type:"Pack", 
downloadlink: "https://mega.nz/file/J7gxFbTb#U3YeRN56SogVeOgebmuAhzP8MFcek8scfHRfsGJtuxI"
}, 
{name: "Dakuside-Car-Pack",
type: "Pack",
downloadlink: "https://drive.usercontent.google.com/download?id=1Z8SYEQ1yFLByj-pG23PIWnUfaUVUb0NC&export=download&authuser=0"
},
{name: "BDC Street Pack",
type: "Pack",
downloadlink: "https://drive.usercontent.google.com/download?id=10YtCLbzS3wBtUtab55wnfcZIdxCZEWST&export=download&authuser=0"
}, 
{name: "Drift Playground",
type: "Map",
downloadlink: "https://assettocorsa.club/mods/tracks/touge-drift-circuit.html"
}, 
{name: "Euphoria Hillside Park",
type:"Map",
downloadlink: "https://www.overtake.gg/downloads/euphoria-hillside-park.38370/"
},
{name: "EK Happogahara",
type: "Map",
downloadlink: "https://drive.usercontent.google.com/download?id=1R4YfdDRvlQzx3LeOlIQ_9IYj_jcEPvut&export=download&authuser=0" 
},
{name: "Lime Rock OTM",
type: "Map",
downloadlink: "https://drive.usercontent.google.com/download?id=1MoVEGxJ7eJyqSEuyjCQvxGXLWu48sbh8&export=download&authuser=0"
},
{name: "Underground Garaz Tube (Tokyo Drift)",
type: "Map",
downloadlink: "https://www.overtake.gg/downloads/underground-garaz-tube-tokyo-drift.57727/"
},
{name: "Brooklyn Park",
type: "Map",
downloadlink: "https://www.overtake.gg/downloads/brooklyn-park.56483/"
},
{name: "Mt Akina",
type: "Map",
downloadlink: "https://www.overtake.gg/downloads/akina-2022-yaseone-pass-route-33.53199/"
},
{name: "VDC Bikernieki",
type: "Map",
downloadlink: "https://drive.usercontent.google.com/download?id=1U37MdTGzvVHUo5KaErefyT8CZm24G-Md&export=download&authuser=0"
},
{name:"Klutch-Kickers",
type:"Map",
downloadlink: "https://drive.usercontent.google.com/download?id=1U-CPyys0iVfRr9DUbwTFcdxQKJupK9SK&export=download&authuser=0"
}, 
{name: "Grange Motor Circuit",
type: "Map",
downloadlink: "https://www.overtake.gg/downloads/grange-motor-circuit.58450/"
},
{name: "Meihan Sportsland Course",
type: "Map",
downloadlink: "https://assettocorsa.club/mods/tracks/meihan-sportsland-c-course.html"
}

/*{name:,
type:,
downloadlink:
}*/
];

//Functions is to recieve input and return output. The parenthesis can accept values/arguments.
function DisplayCars (cars) {
    let displayArea = document.getElementById("p1");
    displayArea.innerHTML = " ";

    for (let i = 0; i < cars.length; i++) {
         //link variable href argument = link, target (new tab or not), link display text
        let linkHTML = `<a href="${cars[i].downloadlink}" target="_blank">${cars[i].downloadlink}</a>`;
        displayArea.innerHTML += `${cars[i].name}, ${cars[i].type}, ${linkHTML}<br><br>`;
    }
}

DisplayCars(cars);

function SearchCars () {
    let searchQuery = document.getElementById("searchBar").value.toLowerCase();
    let filteredCars = cars.filter(cars => cars.name.toLowerCase().includes(searchQuery) || cars.type.toLowerCase().includes(searchQuery));
    DisplayCars(filteredCars)
}



function BackCars () {
    let displayArea = document.getElementById("p1");
    displayArea.innerHTML = " ";

    for (let i = 0; i < cars.length; i++) {
         //link variable href argument = link, target (new tab or not), link display text
        let linkHTML = `<a href="${cars[i].downloadlink}" target="_blank">${cars[i].downloadlink}</a>`;
        displayArea.innerHTML += `${cars[i].name}, ${cars[i].type}, ${linkHTML}<br><br>`;
    }
}
    





 



