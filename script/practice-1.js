let thrivingList = [];
let strugglingList = [];

let total = document.getElementById("total");
let thrivingCount = document.getElementById("thriving-count");
let strugglingCount = document.getElementById("struggling-count");

const allFilterBtn = document.getElementById("all-filter-btn");
const thrivingBtn = document.getElementById("thriving-filter-btn");
const strugglingBtn = document.getElementById("struggling-filter-btn")

const allCardSection = document.getElementById("all-cards");
const mainContainer = document.querySelector("main");
const filteredSection = document.getElementById("filtered-section");


function calculateCount() {
    total.innerText = allCardSection.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
}
calculateCount()


function toggleStyle(id) {
    allFilterBtn.classList.remove("bg-black", "text-white")
    thrivingBtn.classList.remove("bg-black", "text-white")
    strugglingBtn.classList.remove("bg-black", "text-white")

    allFilterBtn.classList.add("bg-gray-300", "text-black")
    thrivingBtn.classList.add("bg-gray-300", "text-black")
    strugglingBtn.classList.add("bg-gray-300", "text-black")

    const selected = document.getElementById(id);
    selected.classList.remove("bg-gray-300", "text-black")
    selected.classList.add("bg-black", "text-white")
}


mainContainer.addEventListener("click", function (event) {
    const parentNode = event.target.parentNode.parentNode;
    const plantName = parentNode.querySelector(".plantName").innerText;
    const latinName = parentNode.querySelector(".latinName")

    const light = parentNode.querySelector(".light").innerText;
    const water = parentNode.querySelector(".water").innerText;

    const status = parentNode.querySelector(".status").innerText
    const notes = parentNode.querySelector(".notes").innerText

    const cardInfo = {
        plantName,
        latinName,
        light,
        water,
        status,
        notes,
    }

    const plantExist = thrivingList.find(item => item.plantName == cardInfo.plantName);
    if (!plantExist) {
        thrivingList.push(cardInfo)
    }

})


function renderThriving() {
    filteredSection.innerHTML = "";

    for (let thrive of thrivingList) {
        console.log(thrive)
    }

    const div = document.createElement("div")
    div.className = "card flex justify-between my-6 py-6 border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1  p-4"

    div.innerHTML = `
     <div class="leftside space-y-6">
                    <!-- part - 01 -->
                    <div>
                        <p class="plantName text-4xl">Plant Name 01</p>
                        <p class="latinName">Latin Name</p>
                    </div>
                    <!-- part 02 -->
                    <div class="flex gap-3">
                        <p class="light bg-gray-200 rounded-md px-3 py-1">Bright Indicate</p>
                        <p class="water bg-gray-200 rounded-md px-3 py-1">Weekly</p>
                    </div>
                    <!-- part 03 -->
                    <div>
                        <p class="status">Not Applicable</p>
                        <p class="notes">New leaf unfurling by the east window.</p>
                    </div>

                    <div class="flex gap-4">
                        <button
                            class="thriving-btn bg-green-200 px-4 py-2 rounded-md border border-green-200  hover:border hover:border-green-500 transition-all duration-300 ease-in-out">Thrive</button>

                        <button
                            class="struggling-btn bg-red-200 px-4 py-2 rounded-md border border-red-200  hover:border hover:border-red-500 transition-all duration-300 ease-in-out">Struggle</button>
                    </div>
                </div>


                <div class="rightside">
                    <button
                        class="bg-red-100 text-red-500 px-4 py-2 rounded-md border border-red-200  hover:border hover:border-red-500 transition-all duration-300 ease-in-out">Delete</button>
                </div>
    
    `;

    // Rest of the project Part-01 (21:00)


}














