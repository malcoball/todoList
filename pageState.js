function saveState(){
    localStorage.clear();
    localStorage.setItem("shownList",JSON.stringify(list));
}
function loadState(){
    read = JSON.parse(localStorage.getItem("shownList"));
    if (read != null) {
        list = read;
        let len = list.length;
            for(int=0;int<len;int++){
                pushToDom(list[int]);
                console.log(int);
            }
    }
}
function clearState(){
    localStorage.clear();
}

loadState();