refre1.addEventListener("click",()=>{
    resetInputs(refTargets);
})
cross1.addEventListener("click",()=>{
    updateScreen();
})
itmBtn1.addEventListener("click",()=>{
    updateScreen();
})
timeBtn.addEventListener("click",()=>{
    setTime();
})

function changeClass(target){
    let tar = target.className;
    if (tar == "shownCont"){
        target.className = "hiddenCont";
    } else {
        target.className = "shownCont";
    }
}
function resetInputs(target){
    let len = target.length;
    for(i=0;i<len;i++){
        target[i].value = "";
    }
}
function copyInputs(int){
    let len = refTargets.length;
    refTargets[0].value = list[int].title;
    // need to rework the time from the string, maybe
    refTargets[1].value = list[int].sTime;
    refTargets[2].value = list[int].fTime;

    refTargets[3].value = list[int].desc;
    refTargets[4].value = list[int].sDate;
    refTargets[5].value = list[int].fDate;
    refTargets[6].value = list[int].diffi;
}

function updateScreen(inputs){
    changeClass(newItemWin);
    changeClass(newItemBac);
    if (inputs == true) resetInputs(refTargets);

}
