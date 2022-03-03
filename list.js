let list = [];
let listDeleted = [];
let selectedList = -1; // Used to identify the correct item

class listItem {
    constructor(title, status, sTime, fTime, desc, sDate, fDate, priority, diffi) {
        this.title = title;
        this.status = status;
        this.sTime = sTime;
        this.fTime = fTime;
        this.desc = desc;
        this.sDate = sDate;
        this.fDate = fDate;
        this.priority = priority;
        this.diffi = diffi;
        list.push(this);
    }
}

createBtn.addEventListener("click",()=>{
    listChange();
    
})
updateBtn.addEventListener("click",()=>{
    listChange(true);
})

function listChange(replace){
    // Create the new object
    let title = refTargets[0].value;
    if (title != ""){ // Only run if there's a title
        let sTime =  assesInput(refTargets[1].value); 
        let fTime =  assesInput(refTargets[2].value); 
        let desc =  assesInput(refTargets[3].value);
        let sDate = assesInput(refTargets[4].value);
        let fDate = assesInput(refTargets[5].value);
        let diff =  assesDiff(refTargets[6].value);
        new listItem(title,getRadio("status"),sTime,fTime,desc,sDate,fDate,getRadio("priority"),diff);

        if (replace == true){
            killTarget(selectedList,false);
        }

        let len = list.length-1;
        pushToDom(list[len]);

        updateScreen(true);
    }
}

function assesDiff(input){ // Handles any input that's out of range
    let num = parseInt(input);
    let out;
    if (num == NaN) out = ""; else
    if (num < 1)    out = 1; else 
    if (num > 5)    out = 5; else 
    out = num;

    return out;
}

function assesInput(inp){
    if (inp == " - "){
        return ""
    } else {

        return inp;
    }
}

function pushToDom(item){ // Pushes the list item to the DOM
    // create root dom node
    let rootDiv = document.createElement("div");
    rootDiv.className = `list ${getClass(item.status)}`;


        // create Small div
        let sDiv = document.createElement("div");
        sDiv.className = "listSm hiddenCont";
        rootDiv.append(sDiv);
        sDiv.id = `minCont${list.length-1}`;

            // create small div elements
            // Title
            let sTitle = document.createElement("h4");
            sTitle.textContent = item.title;
            sDiv.append(sTitle);

            // Urgency
            let sUrgent = document.createElement("h4");
                let sUrgentI = document.createElement("i");
                sUrgentI.textContent = item.status;
                sUrgent.append(sUrgentI);
            sDiv.append(sUrgent);

            // Time
            let sTime = document.createElement("h4");
            sTime.textContent = item.sTime + " - " + item.fTime;
            sDiv.append(sTime);

            // Control div
            let contDiv = document.createElement("div");
            sDiv.append(contDiv);

                // Max btn
                makeWindowBtns(contDiv);

        // create Large div
        let lDiv = document.createElement("div");
        lDiv.className = "listLg";
        rootDiv.append(lDiv);

            // create large div top
            let lDivTop = document.createElement("div");
            lDivTop.className = "listLgTop";
            lDiv.append(lDivTop);

                // Large div top
                // Title
                let lTitle = document.createElement("h4");
                lTitle.textContent = item.title;
                lTitle.className = "upper";
                lDivTop.append(lTitle);

                // Urgency
                let lUrgent = document.createElement("h4");
                lUrgent.textContent = item.status;
                lDivTop.append(lUrgent);

                // Difficulty     needs to be updated
                if (Number.isInteger(item.diffi)){
                    let lDiff = document.createElement("img");
                    lDiff.src = `Images/Difficulty ${item.diffi}.png`;
                    lDiff.width = "48";
                    lDivTop.append(lDiff);
                }

                // Span
                let lSpan = document.createElement("span");
                lDivTop.append(lSpan);

                // Window controls
                let lDivSetting = document.createElement("div");
                lDivTop.append(lDivSetting);
                makeWindowBtns(lDivSetting);






            // Create large div bottom
            let lDivBtm = document.createElement("div");
            lDivBtm.className = "listLgBtm";
            lDiv.append(lDivBtm);

                // Create large div bottom description
                let lDivBtmDes = document.createElement("div");
                lDivBtmDes.className = "listLgBtmDesc";
                lDivBtm.append(lDivBtmDes);

                    // bottom description content
                    let lDivBtmDesCon = document.createElement("p");
                    lDivBtmDesCon.innerHTML = item.desc;
                    lDivBtmDes.append(lDivBtmDesCon);

                // Create large div bottom time
                let lDivBtmTim = document.createElement("div");
                lDivBtmTim.className = "listLgBtmTime";
                lDivBtm.append(lDivBtmTim);

                    // bottom time time
                    let lDivBtmTimTim = document.createElement("p");
                    lDivBtmTimTim.innerHTML = item.sTime + " - " +item.fTime;
                    lDivBtmTim.append(lDivBtmTimTim);
                    
                    if ((item.sDate) && (item.fDate) != ""){
                        // bottom time space
                        let lDivBtmTimDiv = document.createElement("div");
                        lDivBtmTimDiv.innerHTML = "space";
                        lDivBtmTimDiv.className = "hide";
                        lDivBtmTim.append(lDivBtmTimDiv);

                        // bottom time start date
                        let lDivBtmTimDat1 = document.createElement("p");
                        lDivBtmTimDat1.innerHTML = item.sDate;
                        lDivBtmTim.append(lDivBtmTimDat1);

                        // bottom time start date
                        let lDivBtmTimDat2 = document.createElement("p");
                        lDivBtmTimDat2.innerHTML = item.fDate;
                        lDivBtmTim.append(lDivBtmTimDat2);

                        // Change the classes to have a larger display when only 1 is there
                        lDivBtmTim.className += " BtmTimeSml";
                    } else {
                        // Change the time string
                        lDivBtmTimTim.innerHTML = item.sTime + "  " +item.fTime; // Override the previous text
                        lDivBtmTim.className += " BtmTimeLrg";
                    }

                    


    // Output to DOM
    listOut.append(rootDiv);
}
function listToDom(){ // Totally refreshes the list DOM area
    killDom(); // Delets the original page section

    // Replaces it with a stronger, faster version
    let len = list.length;
    for (j=0;j<len;j++){
        pushToDom(list[j]);
    }
}
function getTarget(e){
    if (Number.isInteger(e)) return e; // Pretty much skips the function if not needed
    let target = e.target.id;
    target = parseInt(target.slice(7)); // not finished, may want to get the number dynamically
    return target;
}

function minimiseTarget(e){ // Changes the size of a list item
    target = getTarget(e)
    
    // Returns the html dom for the containing div
    let dom0 = document.querySelectorAll(".list")[target].childNodes[0];
    let dom1 = document.querySelectorAll(".list")[target].childNodes[1];
    dom0.classList.toggle("hiddenCont");
    dom1.classList.toggle("hiddenCont");
}

function largeTarget(e){
    // Get int of list item
    target = getTarget(e);
    copyInputs(target);
    updateScreen(false);
    selectedList = target;
}

function killTarget(e,ask){
    if (ask == true) ask = prompt("Type yes if you want to delete this item","no");
    else ask = "yes";
    if (ask == "yes"){
        // Get the dom target
        target = getTarget(e)


        // Add to deleted array
        listDeleted.push(list[target]);

        // Remove the item from list and dom
        list = removeFromArr(list,target); // Remove list item from array

        listToDom();
        // let dom0 = document.querySelectorAll(".list")[target];
        // dom0.remove();
    }
}

function makeWindowBtns(target){
    // Outputs 3 buttons to 
    let divSet = [
        document.createElement("img"),
        document.createElement("img"),
        document.createElement("img"),
    ]

        // PROBLEM 0
        divSet[0].id = `minCont${list.length-1}`;
        divSet[1].id = `maxCont${list.length-1}`;
        divSet[2].id = `delCont${list.length-1}`;
        divSet[0].alt = "min control";
        divSet[1].alt = "min control";
        divSet[2].alt = "min control";
        // Shared parts
        for (i=0;i<3;i++){
            divSet[i].src = "Images/Settings icon.png";
            divSet[i].width = "48";
            divSet[i].className = "settingIco settingIcoSml";
            target.append(divSet[i]);
        }
        // Attatch functions
        divSet[0].addEventListener("click",(e)=>{
            minimiseTarget(e);
        })
        divSet[1].addEventListener("click",(e)=>{
            largeTarget(e);
        })
        divSet[2].addEventListener("click",(e)=>{
            killTarget(e,false);
        })
}

function removeFromArr(arr,int){
    let len = arr.length;
    let out = []
    for(i=0;i<len;i++){
        if (i != int) out.push(arr[i]);
    }
    return out;
}

function getClass(input){
    switch(input){
        case "active"   : return "liActive";
        case "started"  : return "liStrt";
        case "planned"  : return "liPlan";
        case "paused"   : return "liPaus";
        case "dele"     : return "liDele";
        case "done"     : return "liDone";
    }
}

function killDom(){
    let target = document.querySelectorAll(".list");
    for (let i = 0; i < target.length; i++){
        target[i].remove();
    }
}