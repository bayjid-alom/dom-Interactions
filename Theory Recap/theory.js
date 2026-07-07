// console.log(document)

// Single element
const header_1 = document.getElementById("header");
const header_2 = document.querySelector("#header");
header_2.innerText = "Text Changed using (innerText)"

// Nodelist
const paragraph_1 = document.getElementsByClassName("text");
const paragraph_2 = document.querySelectorAll(".text");

paragraph_1[0].classList.add("hidden")
paragraph_1[0].classList.remove("hidden")
paragraph_2[1].classList.add("highlights");
paragraph_2[1].classList.remove("highlights", "hidden");

paragraph_2[1].classList.add("bold", "highlights")


for (let para of paragraph_2) {
    para.innerText = "Paragraph Changed using (Loop)"
}


let box = document.getElementById("box");
box.innerHTML = `
<h2>Box Header</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quos debitis, illo esse adipisci minima odit,
            a, enim vero molestiae possimus recusandae accusantium ad eos. Maxime accusantium repudiandae ipsum nisi?
        </p>
`


const handleBtn = document.getElementById("handle");

handleBtn.addEventListener("click", function () {
    document.body.style.background =
        "linear-gradient(135deg, #0f172a, #1e293b, #334155)";
    document.body.style.color = "#d3e5f7";
    document.body.style.fontFamily = "Poppins, sans-serif";
    document.body.style.margin = "30px";
    document.body.style.padding = "30px";
    document.body.style.transition = "all 0.6s ease";
    document.body.style.minHeight = "100vh";
    document.body.style.borderRadius = "20px";
    document.body.style.boxShadow = "0 0 40px rgba(0,0,0,0.35)";
});



