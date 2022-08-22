let url = document.location.href;
let current = -1;
let resultsLinks = [];
//Wait till page loads before initializing, with youtube this will prevent video lists from being empty
window.addEventListener("load", function () {
  if (url.includes("google.com")) {
    let results = document.getElementById("search");
    let resultsList = results.getElementsByTagName("h3");
    for (let i = 0; i < resultsList.length; i++) {
      // resultsLinks.push(resultsList[i].getElementsByTagName("a")[0])
      const parent = resultsList[i].parentElement;
      resultsLinks.push(parent);
    }
    resultsLinks = resultsLinks.filter((link) => link.href);
  } else if (url.includes("youtube.com")) {
    // resultsLinks = document.querySelectorAll('[id="video-title"]');
  }
});

function selectResult(index) {
  currentElement = resultsLinks[index];
  resultsLinks[index].focus();
  resultsLinks.forEach((element) => (element.style.color = ""));
  currentElement.style.color = "yellow";
}

window.onkeydown = function (e) {
  if (url.includes("youtube.com")) {
    resultsLinks = document.querySelectorAll('[id="video-title"]');
    if (document.activeElement.nodeName !== "INPUT") {
      if (e.altKey && (e.key == "L" || e.key == "l")) {
        document.getElementsByName("search_query")[0].select();
        return false; //Prevents L or l from being typed in the youtube search bar when hotkey is used
      }
    }
  }

  if (url.includes("google.com") || url.includes("youtube.com")) {
    if (document.activeElement.nodeName !== "INPUT") {
      if (e.key == "j" || e.key == "J") {
        if (current < resultsLinks.length - 1) {
          current++;
          selectResult(current);
        } else {
          window.scrollBy(0, 100); //Scrolls down when last comment is reached, allowing bottom of page to be viewed
        }
      } else if ((e.key == "k" || e.key == "K") && current > 0) {
        current--;
        selectResult(current);

        //Below statements advance to next or previous page in google search results
      } else if (e.key == "l" || e.key == "L") {
        document.getElementById("pnnext").click();
      } else if (e.key == "h" || e.key == "H") {
        document.getElementById("pnprev").click();
      }
    }
  }
};
