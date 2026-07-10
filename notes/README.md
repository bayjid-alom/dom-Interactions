> **Functionality Thinking Process**

## Toggling
### 1st
- total count find out
- total --> allcards er length
- all card er child er number 
- console.log(allCardSection.children.length)
- calculateCount()

### 2nd -- empty array

- thrivingList = [];
-  thrivingCount.innerText = thrivingList.length;
- cards will push in this array

```
thrivingList.push({ name: "A" }, { name: "B" }, { name: "C" });
Thrive count : 3
```
- event delegation --> main e

- <button onclick="toggleStyle('all-filter-btn')" class="bg-black text-white px-5 py-2 rounded-md mr-2" id="all-filter-btn">All</button>

 - make ()
- all button select and eventListener



<br><br><br>



















###  Toggling Part - 01

 ```

let thrivingList = [];
let strugglingList = []

let total = document.getElementById("total");
let thrivingCount = document.getElementById("thriving-count");
let strugglingCount = document.getElementById("struggling-count")

let mainContainer = document.querySelector("main");
let allCardSection = document.getElementById("all-cards");

function calculateCount() {
    total.innerText = allCardSection.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
}
calculateCount()


function toggleStyle(id) {
    console.log("button clicked")
}
```

