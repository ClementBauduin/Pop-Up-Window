const popUp = document.querySelector(".box_celebs--popup");
const button = document.querySelector(".box_celebs");
const cross = document.querySelector("#cross");
const blurBg = document.querySelector(".blurbg");


button.addEventListener("click", () => {

    popUp.classList.remove("hidden");
    blurBg.classList.remove("hidden");

});


const popUpClose = () => {
    popUp.classList.add("hidden");
    blurBg.classList.add("hidden");
}

blurBg.addEventListener("click",() => {
    if (!blurBg.classList.contains("hidden")) {
        popUpClose();
    }
})

cross.addEventListener("click",popUpClose);

document.addEventListener("keydown",(e) => {
    if (e.key === "Escape" && !blurBg.classList.contains("hidden")) {
        console.log("ça marche la touche est " + e.key)
        popUpClose();
    }
})