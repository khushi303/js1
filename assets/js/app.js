// const ourArray = [];
// for (let i = 0; i <= 20; i += 2) {
//     ourArray.push(i)
// }
// document.getElementById("evenno").innerHTML = ourArray;

// const myArray = [];
// for (let a = 1; a <= 20; a += 2) {
//     myArray.push(a)
// }
// document.getElementById("oddno").innerHTML = myArray;


// var m = 1;
// var yourArray = [m = 1];
// for (let t = 0; t < 20; t++) {
//     m *= 2
//     // console.log(m)
//     yourArray.push(m)
// }

// document.getElementById("doubleno").innerHTML = yourArray;
// var p = 2;
// do {
//     console.log(p)
//     p++
// } while (p < 10);

// function myname() {
//     var p = document.getElementById("pwds")
//     if (p.type === "password") {
//         p.type = "text";
//     } else {
//         p.type = "password";
//     }
// }

var carddata = [
    {
        Img: './assets/images/pops.png',
        heading: "Popular",
        heading2: " Artists",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, earum."
    },
    {
        Img: './assets/images/pops1.png',
        heading: "Popular",
        heading2: " Artists",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, earum.",
    },
    {
        Img: './assets/images/pops2.png',
        heading: "Popular",
        heading2: " Artists",
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, earum.",
    }
]

const postcontainer = document.querySelector(".cardcontainer");
const mycard =
    carddata.map((postdata) => {
        // const cardelement = document.createElement("div");
        // cardelement.classList.add("card");
        // cardelement.innerHTML = `
        // <h2>${postdata.heading}</h2>
        // <p>${postdata.p}</p>`

        return `
        <div class="card bg-black">
        <img class="br_16" src=${postdata.Img} alt=""/>
            <h2 class="head-font text-white mb-0 lh-1 pt-4">${postdata.heading}<span class="text_purple">${postdata.heading2}</span></h2>
            <p class="para-font text-white mb-0 lh-1 pt-2 w-100">${postdata.p}</p>
        </div>
        `
    }).join(" ")

postcontainer.innerHTML = mycard;