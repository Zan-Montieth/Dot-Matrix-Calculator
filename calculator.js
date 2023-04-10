const displayXdimension = 112
const displayYdimension = 24


function createDotMatrix(){
    let dotDisplay = document.getElementById("dotDisplay")
    let dotElement = document.createElement("div");
    dotElement.classList.add("dot")
    let rowElement = document.createElement("div");
    rowElement.classList.add("row")
    for(dot = 0; dot < displayXdimension; dot++){
        dotElement.classList.remove(dot - 1)
        dotElement.classList.add(dot)
        rowElement.appendChild(dotElement.cloneNode(true));
    }
    for(row = 0; row < displayYdimension; row++){
        rowElement.classList.remove(row - 1)
        rowElement.classList.add(row)
        dotDisplay.appendChild(rowElement.cloneNode(true));
    }
    sizeDotDisplay();
}

function sizeDotDisplay() {
    const dotDisplay = document.getElementById("dotDisplay");
    const dotElement = document.getElementsByClassName("dot")[0];
    let dotWidth = getComputedStyle(dotElement).getPropertyValue("width");
    dotWidth = dotWidth.substring(0, dotWidth.length - 2);
    let dotMargin =
        getComputedStyle(dotElement).getPropertyValue("margin-left");
    dotMargin = dotMargin.substring(0, dotMargin.length - 2);
    let newWidth = dotWidth * displayXdimension + dotMargin * 2 * displayXdimension;
    newWidth = newWidth + "px";
    console.log(newWidth)
    dotDisplay.style.width = newWidth;
}

function activateDot(xCoord, yCoord){
    const dotDisplay = document.getElementById("dotDisplay");
    dotDisplay.childNodes[yCoord].childNodes[xCoord].classList.add("activated")
}

function deactivateDot(xCoord, yCoord){
    const dotDisplay = document.getElementById("dotDisplay");
    dotDisplay.childNodes[yCoord].childNodes[xCoord].classList.remove("activated")
}