let thrivingList = [];
let strugglingList = [];

let total = document.getElementById("total");
let thrivingCount = document.getElementById("thriving-count");
let strugglingCount = document.getElementById("struggling-count");

const allCardSection = document.getElementById("all-cards");
// console.log(allCardSection.children.length)

const mainContainer = document.querySelector("main");
console.log(mainContainer)

const allFilterBtn = document.getElementById("all-filter-btn");

function calculateCount() {
    total.innerText = allCardSection.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
}

calculateCount()


function toggleStyle(id) {
    console.log("clicked", id)
}