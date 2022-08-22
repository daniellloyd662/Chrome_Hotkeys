let url = document.location.href
let current = -1
let results = document.getElementById('search')
let resultsList = results.getElementsByTagName('h3')
let resultsLinks = []

for (let i=0; i<resultsList.length; i++){
    // resultsLinks.push(resultsList[i].getElementsByTagName("a")[0])
   const parent = (resultsList[i].parentElement)
    resultsLinks.push(parent)
}
resultsLinks = resultsLinks.filter(link => link.href)
function selectResult(index){
        currentElement = resultsLinks[index]
        resultsLinks[index].focus()
        resultsLinks.forEach(element => element.style.color = "" )
        currentElement.style.color = "yellow"
}

window.onkeydown= function(e){
if (url.includes('youtube.com')){
    if(e.altKey && (e.key == "L" || e.key == "l")){
    document.getElementsByName('search_query')[0].select()
    return false //Prevents L or l from being typed in the youtube search bar when hotkey is used 
    }
}
if (url.includes('google.com')){
    if (document.activeElement.nodeName !== "INPUT"){

    if((e.key =="j" || e.key == "J") && current <resultsLinks.length){
        current++ 
        selectResult(current)

    } else if ((e.key =="k" || e.key == "K") && current >0){
        current --
        selectResult(current)
    } else if (e.key = 'm'){
        console.log(document.activeElement)
        console.log(document.activeElement.nodeName)
           
    }

    }
}

}