let mySearchButton=document.getElementById("searchButton");
let mySearchInput=document.getElementById("searchMe");
// let mySearchResult=document.getElementById();
// mySearchButton.addEventListener("click",function(){})


// let shirts = document.querySelectorAll("#secondBox span")
// let shirtArray = Array.from(shirts);
// shirtArray.filter((i)=>{
//     console.log(i);
    
// })
let shirts = document.querySelectorAll("#secondBox span");
let shirtArray = Array.from(shirts);

function filterShirtsByName(name) {
    return shirtArray.filter(span => {
        // Get the text content of the first <p> element inside the span
        let shirtName = span.querySelectorAll('p')[0].textContent;
        // console.log(shirtName);
        // Check if the shirtName includes the desired name (case-insensitive)
        return shirtName.toLowerCase().includes(name.toLowerCase());
    });
}

// let filteredShirts = filterShirtsByName('green');
// console.log(filteredShirts);

function handleSearch() {
    let searchTerm = mySearchInput.value.trim();
    let filteredShirts = filterShirtsByName(searchTerm);
    console.log(filteredShirts)
    // Optionally, you could also update the DOM to show only the filtered shirts
    // For example, hide all shirts and then show only the filtered ones
    shirts.forEach(shirt => {
        shirt.style.display = 'none'; // Hide all shirts initially
    });
 filteredShirts.forEach(shirt => {
        shirt.style.display = 'block'; // Show only the filtered shirts
    });
}
mySearchButton.addEventListener("click", handleSearch);