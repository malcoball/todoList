// get DOM elements
const cross1 = document.querySelector("#windowX1");
const refre1 = document.querySelector("#windowR1");
const itmBtn1 = document.querySelector("#secRight button");
const newItemWin = document.querySelector("#newItem");
const newItemBac = document.querySelector("#backgroundElm");
const refTargets = [
    document.querySelector("#titleInp"),
    document.querySelector("#timeIn1"),
    document.querySelector("#timeIn2"),
    document.querySelector("#txtInp1"),
    document.querySelector("#dateIn1"),
    document.querySelector("#dateIn2"),
    document.querySelector("#inpDiff"),
]
const createBtn = document.querySelector("#btnCreate");
const updateBtn = document.querySelector("#btnUpdate");
const listOut = document.querySelector("#listOut");
const timeBtn = document.querySelector("#timeBtn");

function getRadio(name){
    let btns = document.getElementsByName(name);
    for (i=0;i<btns.length;i++){
        if (btns[i].checked){
            return btns[i].value;
        }
    }
}
function setTime(){ // Doesn't work with times like 9:30 or 10:04
    // Get the date
    let currentDate = new Date();

    // Convert date to time
    let hour = currentDate.getHours();
    let minu = currentDate.getMinutes();

    // Add a 0 if needed
    if (hour.length == 1) hour = "0"+hour;
    if (minu.length == 1) minu = "0"+minu;

    // Concat
    time = hour + ":" + minu;

    // Output
    refTargets[1].value = time;
    refTargets[2].value = time;
    console.log(time);
}