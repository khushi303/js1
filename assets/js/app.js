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
        return `
        <div class="card bg-black">
        <img class="br_16" src=${postdata.Img} alt=""/>
            <h2 class="head-font text-white mb-0 lh-1 pt-4 text-center">${postdata.heading}<span class="text_purple">${postdata.heading2}</span></h2>
            <p class="para-font text-white mb-0 lh-1 pt-2 w-100 text-center">${postdata.p}</p>
        </div>
        `
    }).join(" ")

postcontainer.innerHTML = mycard;