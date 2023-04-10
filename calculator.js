const displayXdimension = 112;
const displayYdimension = 24;

const displayChar = {
    1: {
        0: [false, false, true, false, false],
        1: [false, true, true, false, false],
        2: [false, false, true, false, false],
        3: [false, false, true, false, false],
        4: [false, false, true, false, false],
        5: [false, false, true, false, false],
        6: [false, true, true, true, false],
    },
    2: {
        0: [false, true, true, true, false],
        1: [true, false, false, false, true],
        2: [false, false, false, false, true],
        3: [false, false, false, true, false],
        4: [false, false, true, false, false],
        5: [false, true, false, false, false],
        6: [true, true, true, true, true],
    },
    3: {
        0: [true, true, true, true, false],
        1: [false, false, false, false, true],
        2: [false, false, false, false, true],
        3: [false, true, true, true, false],
        4: [false, false, false, false, true],
        5: [false, false, false, false, true],
        6: [true, true, true, true, false],
    },
    4: {
        0: [true, false, false, false, true],
        1: [true, false, false, false, true],
        2: [true, false, false, false, true],
        3: [true, true, true, true, true],
        4: [false, false, false, false, true],
        5: [false, false, false, false, true],
        6: [false, false, false, false, true],
    },
    5: {
        0: [true, true, true, true, true],
        1: [true, false, false, false, false],
        2: [true, false, false, false, false],
        3: [true, true, true, true, false],
        4: [false, false, false, false, true],
        5: [false, false, false, false, true],
        6: [true, true, true, true, false],
    },
    6: {
        0: [false, true, true, true, false],
        1: [true, false, false, false, false],
        2: [true, false, false, false, false],
        3: [true, true, true, true, false],
        4: [true, false, false, false, true],
        5: [true, false, false, false, true],
        6: [false, true, true, true, false],
    },
    7: {
        0: [true, true, true, true, true],
        1: [false, false, false, false, true],
        2: [false, false, false, false, true],
        3: [false, false, false, true, false],
        4: [false, false, true, false, false],
        5: [false, false, true, false, false],
        6: [false, false, true, false, false],
    },
    8: {
        0: [false, true, true, true, false],
        1: [true, false, false, false, true],
        2: [true, false, false, false, true],
        3: [false, true, true, true, false],
        4: [true, false, false, false, true],
        5: [true, false, false, false, true],
        6: [false, true, true, true, false],
    },
    9: {
        0: [false, true, true, true, false],
        1: [true, false, false, false, true],
        2: [true, false, false, false, true],
        3: [false, true, true, true, true],
        4: [false, false, false, false, true],
        5: [true, false, false, false, true],
        6: [false, true, true, true, false],
    },
    0: {
        0: [false, true, true, true, false],
        1: [true, false, false, false, true],
        2: [true, false, false, true, true],
        3: [true, false, true, false, true],
        4: [true, true, false, false, true],
        5: [true, false, false, false, true],
        6: [false, true, true, true, false],
    },
    "+": {
        0: [false, false, false, false, false],
        1: [false, false, true, false, false],
        2: [false, false, true, false, false],
        3: [true, true, true, true, true],
        4: [false, false, true, false, false],
        5: [false, false, true, false, false],
        6: [false, false, false, false, false],
    },
    "-": {
        0: [false, false, false, false, false],
        1: [false, false, false, false, false],
        2: [false, false, false, false, false],
        3: [true, true, true, true, true],
        4: [false, false, false, false, false],
        5: [false, false, false, false, false],
        6: [false, false, false, false, false],
    },
    "/": {
        0: [false, false, false, false, true],
        1: [false, false, false, false, true],
        2: [false, false, false, true, false],
        3: [false, false, true, false, false],
        4: [false, true, false, false, false],
        5: [true, false, false, false, false],
        6: [true, false, false, false, false],
    },"*":{
        0:[false,false,false,false,false],
        1:[true,false,false,false,true],
        2:[false,true,true,true,false],
        3:[false,false,true,false,false,],
        4:[false,true,true,true,false],
        5:[true,false,false,false,true],
        6:[false,false,false,false,false],
    }
};

function createDotMatrix() {
    let dotDisplay = document.getElementById("dotDisplay");
    let dotElement = document.createElement("div");
    dotElement.classList.add("dot");
    let rowElement = document.createElement("div");
    rowElement.classList.add("row");
    for (dot = 0; dot < displayXdimension; dot++) {
        dotElement.classList.remove(dot - 1);
        dotElement.classList.add(dot);
        rowElement.appendChild(dotElement.cloneNode(true));
    }
    for (row = 0; row < displayYdimension; row++) {
        rowElement.classList.remove(row - 1);
        rowElement.classList.add(row);
        dotDisplay.appendChild(rowElement.cloneNode(true));
    }
    sizeDotDisplay();
    printChar("1", false);
    addSpace();
    printChar("2", false);
    addSpace();
    printChar("3", false);
    addSpace();
    printChar("4", false);
    addSpace();
    printChar("5", false);
    addSpace();
    printChar("6", false);
    addSpace();
    printChar("7", false);
    addSpace();
    printChar("8", false);
    addSpace();
    printChar("9", false);
    addSpace();
    printChar("0", false);
    addSpace();
    printChar("+", false);
    addSpace();
    printChar("-", false);
    addSpace();
    printChar("/", false);
    addSpace();
    printChar("*", false);
    addSpace();
}

function sizeDotDisplay() {
    const dotDisplay = document.getElementById("dotDisplay");
    const dotElement = document.getElementsByClassName("dot")[0];
    let dotWidth = getComputedStyle(dotElement).getPropertyValue("width");
    dotWidth = dotWidth.substring(0, dotWidth.length - 2);
    let dotMargin =
        getComputedStyle(dotElement).getPropertyValue("margin-left");
    dotMargin = dotMargin.substring(0, dotMargin.length - 2);
    let newWidth =
        dotWidth * displayXdimension + dotMargin * 2 * displayXdimension;
    newWidth = newWidth + "px";
    console.log(newWidth);
    dotDisplay.style.width = newWidth;
}

function activateDot(xCoord, yCoord) {
    const dotDisplay = document.getElementById("dotDisplay");
    dotDisplay.childNodes[yCoord].childNodes[xCoord].classList.add("activated");
}

function deactivateDot(xCoord, yCoord) {
    const dotDisplay = document.getElementById("dotDisplay");
    dotDisplay.childNodes[yCoord].childNodes[xCoord].classList.remove(
        "activated"
    );
}

function shiftRowLeft(rowNum) {
    let dotElement = document.createElement("div");
    dotElement.classList.add("dot");
    const dotDisplay = document.getElementById("dotDisplay");
    dotDisplay.childNodes[rowNum].removeChild(
        dotDisplay.childNodes[rowNum].firstChild
    );
    let newDotNum = +dotDisplay.childNodes[rowNum].lastChild.classList[1] + 1;
    dotElement.classList.add(newDotNum);
    dotDisplay.childNodes[rowNum].appendChild(dotElement);
}

function printChar(charIn, isUpper) {
    charArray = displayChar[charIn];
    console.log(charArray);
    console.log(charArray[0]);
    if (isUpper == false) {
        for (col = 0; col < 5; col++) {
            for (row = 0; row < 7; row++) {
                if (charArray[row][col]) {
                    activateDot(111, 14 + row);
                }
                shiftRowLeft(14 + row);
            }
        }
    } else {
        for (col = 0; col < 5; col++) {
            for (row = 0; row < 7; row++) {
                if (charArray[row][col]) {
                    activateDot(111, 3 + row);
                }
                shiftRowLeft(3 + row);
            }
        }
    }
}

function addSpace(isUpper) {
    if (isUpper) {
        for (row = 0; row < 7; row++) {
            shiftRowLeft(3 + row);
            shiftRowLeft(3 + row);
        }
    } else {
        for (row = 0; row < 7; row++) {
            shiftRowLeft(14 + row);
            shiftRowLeft(14 + row);
        }
    }
}
