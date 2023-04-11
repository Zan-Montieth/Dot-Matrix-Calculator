const displayXdimension = 112;
const displayYdimension = 24;

let buttonHistory = "";
let activeHistory = "";

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
    },
    "*": {
        0: [false, false, false, false, false],
        1: [true, false, false, false, true],
        2: [false, true, true, true, false],
        3: [false, false, true, false, false],
        4: [false, true, true, true, false],
        5: [true, false, false, false, true],
        6: [false, false, false, false, false],
    },
    ".": {
        0: [false, false],
        1: [false, false],
        2: [false, false],
        3: [false, false],
        4: [false, false],
        5: [false, false],
        6: [true, false],
    },
    "=": {
        0: [false, false, false, false, false],
        1: [false, false, false, false, false],
        2: [false, true, true, true, false],
        3: [false, false, false, false, false],
        4: [false, true, true, true, false],
        5: [false, false, false, false, false],
        6: [false, false, false, false, false],
    },
    E: {
        0: [true, true, true, true, true],
        1: [true, false, false, false, false],
        2: [true, false, false, false, false],
        3: [true, true, true, true, false],
        4: [true, false, false, false, false],
        5: [true, false, false, false, false],
        6: [true, true, true, true, true],
    },
    R: {
        0: [true, true, true, true, false],
        1: [true, false, false, false, true],
        2: [true, false, false, false, true],
        3: [true, true, true, true, false],
        4: [true, false, true, false, false],
        5: [true, false, false, true, false],
        6: [true, false, false, false, true],
    },
    O: {
        0: [false, true, true, true, false],
        1: [true, false, false, false, true],
        2: [true, false, false, false, true],
        3: [true, false, false, false, true],
        4: [true, false, false, false, true],
        5: [true, false, false, false, true],
        6: [false, true, true, true, false],
    },
};

function startup() {
    createDotMatrix();
    sizeDotDisplay();
    setButtonFunctions();
}

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
}

function sizeDotDisplay() {
    const dotDisplay = document.getElementById("dotDisplay");
    const userInputs = document.getElementById("userInputs");
    const dotElement = document.getElementsByClassName("dot")[0];
    let dotWidth = getComputedStyle(dotElement).getPropertyValue("width");
    dotWidth = dotWidth.substring(0, dotWidth.length - 2);
    let dotMargin =
        getComputedStyle(dotElement).getPropertyValue("margin-left");
    dotMargin = dotMargin.substring(0, dotMargin.length - 2);
    let newWidth =
        dotWidth * displayXdimension + dotMargin * 2 * displayXdimension;
    newWidth = newWidth + "px";
    dotDisplay.style.width = newWidth;
    userInputs.style.width = newWidth;
}

function setButtonFunctions() {
    numbers = document.getElementsByClassName("number");
    operations = document.getElementsByClassName("operation");
    clearButton = document.getElementById("clr");
    Array.from(numbers).forEach((digit) => {
        digit.addEventListener("click", numberPress);
    });
    Array.from(operations).forEach((operation) => {
        operation.addEventListener("click", operationPress);
    });
    clearButton.addEventListener("click", function () {
        clearDisplay(true);
        clearDisplay(false);
        activeHistory = "";
        buttonHistory = "";
    });
}

function numberPress() {
    printChar(this.id, false);
    addSpace(false);
    activeHistory += this.id;
}

function operationPress() {
    if (this.id == "division") {
        activeHistory += "/";
    } else if (this.id == "multiplication") {
        activeHistory += "*";
    } else if (this.id == "subtraction") {
        activeHistory += "-";
    } else if (this.id == "addition") {
        activeHistory += "+";
    }
    buttonHistory += activeHistory;
    activeHistory = "";
    clearDisplay(false);
    updateHistory();
    operations = document.getElementsByClassName("operation");
    Array.from(operations).forEach((operation) => {
        operation.disabled = true;
    });
    // else if (this.id == "decimal") {
    //     activeHistory += ".";
    //     printChar(".", false);
    // } else if (this.id == "equals"){
    //     activeHistory += "=";
    //     buttonHistory += activeHistory;
    //     activeHistory = "";
    //     clearDisplay(false);
    //     updateHistory();
    //     computeSolution();
    // }
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

// function shiftRowRight(rowNum) {
//     let dotElement = document.createElement("div");
//     dotElement.classList.add("dot");
//     const dotDisplay = document.getElementById("dotDisplay");
//     dotDisplay.childNodes[rowNum].removeChild(
//         dotDisplay.childNodes[rowNum].lastChild
//     );
//     let newDotNum = +dotDisplay.childNodes[rowNum].firstChild.classList[1] - 1;
//     dotElement.classList.add(newDotNum);
//     dotDisplay.childNodes[rowNum].insertBefore(dotElement, dotDisplay.childNodes[rowNum].firstChild);
// } Deprecated by updating print char function

function printChar(charIn, isUpper) {
    charArray = displayChar[charIn];
    charWidth = charArray[0].length;
    if (isUpper == false) {
        for (col = 0; col < charWidth; col++) {
            for (row = 0; row < 7; row++) {
                if (charArray[row][col]) {
                    activateDot(111, 14 + row);
                }
                shiftRowLeft(14 + row);
            }
        }
    } else {
        for (col = 0; col < charWidth; col++) {
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
        }
    } else {
        for (row = 0; row < 7; row++) {
            shiftRowLeft(14 + row);
        }
    }
}

function clearDisplay(isUpper) {
    if (isUpper == false) {
        for (col = 0; col < displayXdimension; col++) {
            for (row = 0; row < 7; row++) {
                deactivateDot(col, 14 + row);
            }
        }
    } else {
        for (col = 0; col < displayXdimension; col++) {
            for (row = 0; row < 7; row++) {
                deactivateDot(col, 3 + row);
            }
        }
    }
}

function updateHistory() {
    console.log(buttonHistory);
    charHistory = buttonHistory.split("");
    clearDisplay(true);
    for (charIndex = 0; charIndex < charHistory.length; charIndex++) {
        printChar(charHistory[charIndex], true);
        addSpace(true);
    }
}

function computeSolution() {
    let computeArray = buttonHistory.split("");
    let computeNumbers = ["", ""];
    let numberIndex = 0;
    for (charIndex = 0; charIndex < buttonHistory.length; charIndex++) {
        if (
            (computeArray[charIndex] >= 0 && computeArray[charIndex] <= 9) ||
            computeArray[charIndex] == "."
        ) {
            computeNumbers[numberIndex] += computeArray[charIndex];
        } else {
            numberIndex++;
        }
    }
}
