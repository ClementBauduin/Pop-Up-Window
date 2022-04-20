const popUp = document.querySelector(".box_celebs--popup");
const button = document.querySelector(".box_celebs");
const crossClose = document.querySelector("#cross");



//Event listener sur la div Gandhi
button.addEventListener("click", () => {
    popUp.classList.remove("hidden");
    button.classList.add("blurbg");

    //Event listener du clique sur la croix
    crossClose.onclick = () => {
        popUp.classList.toggle("hidden");                                    //Changer la classe de la popup en hidden
        button.classList.remove("blurbg");                                   //Retirer la classe blurbg du bouton Gandhi
    }

    //Event listener sur les touches du clavier
    document.onkeydown = (e) => {
        if (e.key === "Escape" && !popUp.classList.contains("hidden")) {     //Target de la touche echap
            popUp.classList.toggle("hidden");                                //Changer la classe de la popup en hidden
            button.classList.remove("blurbg");                               //Retirer la classe blurbg du bouton Gandhi
        }
    }
})

