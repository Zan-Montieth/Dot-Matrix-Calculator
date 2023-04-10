const displayXdimension = 112
const displayYdimension = 24

function createDotMatrix(){
    let dotDisplay = document.getElementById("dotDisplay")
    let dotElement = document.createElement("div");
    dotElement.classList.add("dot")
    for(row = 0; row < displayYdimension; row++){
        for(dot = 0; dot < displayXdimension; dot++){
            dotDisplay.appendChild(dotElement.cloneNode(true))
        }
    }
    sizeDotDisplay();
}

function sizeDotDisplay() {
    const sizeContainer = document.getElementById("dotDisplay");
    const dotElement = document.getElementsByClassName("dot")[0];
    let dotWidth = getComputedStyle(dotElement).getPropertyValue("width");
    dotWidth = dotWidth.substring(0, dotWidth.length - 2);
    let dotMargin =
        getComputedStyle(dotElement).getPropertyValue("margin-left");
    dotMargin = dotMargin.substring(0, dotMargin.length - 2);
    let newWidth = dotWidth * displayXdimension + dotMargin * 2 * displayXdimension;
    newWidth = newWidth + "px";
    console.log(newWidth)
    sizeContainer.style.width = newWidth;
}