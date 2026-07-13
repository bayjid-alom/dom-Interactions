let thrivingList = [];
let strugglingList = [];

let total = document.getElementById("total");
let thrivingCount = document.getElementById("thriving-count");
let strugglingCount = document.getElementById("struggling-count");


const allFilterBtn = document.getElementById("all-filter-btn");
const thrivingBtn = document.getElementById("thriving-filter-btn");
const strugglingBtn = document.getElementById("struggling-filter-btn")


const allCardSection = document.getElementById("all-cards");
// console.log(allCardSection.children.length)

const mainContainer = document.querySelector("main");
console.log(mainContainer)


function calculateCount() {
    total.innerText = allCardSection.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
}
calculateCount()


function toggleStyle(id) {
    // console.log("clicked", id)

    // Remove black style from all 3 buttons
    allFilterBtn.classList.remove("bg-black", "text-white")
    thrivingBtn.classList.remove("bg-black", "text-white")
    strugglingBtn.classList.remove("bg-black", "text-white")

    // Add gray style to all buttons to make them neutral
    allFilterBtn.classList.add("bg-gray-300", "text-black")
    thrivingBtn.classList.add("bg-gray-300", "text-black")
    strugglingBtn.classList.add("bg-gray-300", "text-black")

    // Remove gray style from the selected button and add black style
    const selected = document.getElementById(id);
    selected.classList.remove("bg-gray-300", "text-black")
    selected.classList.add("bg-black", "text-white")
    // selected.classList.add("border", "border-blue-600")
}




/****
 mainContainer-এর ভিতরে user যেই card-এ click করে, event.target.parentNode.parentNode ব্যবহার করে সেই card-টিকে (parentNode) select করা হচ্ছে। এরপর parentNode.querySelector() দিয়ে ওই card-এর plantName, latinName, light, water, status এবং notes-এর text (innerText) বের করে আলাদা JavaScript variable-এ store করা হচ্ছে।  ****/
mainContainer.addEventListener("click", function (event) {
    const parentNode = event.target.parentNode.parentNode;
    const plantName = parentNode.querySelector(".plantName").innerText;
    const latinName = parentNode.querySelector(".latinName").innerText;

    const light = parentNode.querySelector(".light").innerText;
    const water = parentNode.querySelector(".water").innerText;

    const status = parentNode.querySelector(".status").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    console.log(plantName, light, water, status, notes)

    const cardInfo = {
        plantName,
        latinName,
        light,
        water,
        status,
        notes
    }

    console.log(cardInfo)

})


