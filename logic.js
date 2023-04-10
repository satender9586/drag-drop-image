const dragFile = document.querySelector(".grag-area");
const textdrag = document.querySelector("header");


let file;

dragFile.addEventListener("dragover", (event) => {
    event.preventDefault();
    console.log("grag")
    dragFile.classList.add("active")
    textdrag.innerText = "File Uploader";

})

dragFile.addEventListener("dragleave", (event) => {
    event.preventDefault();
    console.log("grag")
    dragFile.classList.remove("active")
    textdrag.innerText = "Drag & Drop to Upload File";
})

dragFile.addEventListener("drop", (event) => {
    event.preventDefault();
    console.log("grag")

    file = event.dataTransfer.files[0]
    showFiles()

})

const showFiles = () => {
    let fileType = file.type;
    

    let validExtention = ["image/jpeg", "image/jpg", "image/png"]
    if (validExtention.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileurl = fileReader.result;

            let imgTag = `<img src="${fileurl}" alt="" />`
            dragFile.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file)

    }
    else {
        alert("this is an image Files")
        dragFile.classList.remove("active")
    }
}