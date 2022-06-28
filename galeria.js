const modalimgBox = document.getElementById("modal-imgBox");
const modalimg = document.getElementById("modal-img");

function openModalImg(reference) {
    modalimgBox.style.display = "flex";
    modalimg.src = reference;
}

function closeImg() {
    modalimgBox.style.display = "none";
}