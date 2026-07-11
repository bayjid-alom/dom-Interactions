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
- all button select and eventListener or function using too make short the code
- <button onclick="toggleStyle('struggling-filter-btn')
- যে বাটনে ক্লিক করা হচ্ছে তার আইডি কে দিয়ে দিচ্ছে।
- এবার --
  - zekno ekta btn e click korle 3 ta btn er color yash kore dibo.... er age 3 ta btn er bg-black text-white remove kore dite hobe
  - zeta select korbo tar bg--- black 



### why not add bg-black?  first remove bg-gray
```
  function toggleStyle(id) {
    // console.log("clicked", id)
    allFilterBtn.classList.remove("bg-black", "text-white")
    thrivingBtn.classList.remove("bg-black", "text-white")
    strugglingBtn.classList.remove("bg-black", "text-white")


    allFilterBtn.classList.add("bg-gray-300", "text-black")
    thrivingBtn.classList.add("bg-gray-300", "text-black")
    strugglingBtn.classList.add("bg-gray-300", "text-black")


    <!-- Fix process -->
    const selected = document.getElementById(id);
    selected.classList.remove("bg-gray-300", "text-black")
    selected.classList.add("bg-black", "text-white")
}
```




<br><br><br>



















###  Toggling Part - 01

 

