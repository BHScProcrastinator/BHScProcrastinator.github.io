document.getElementById("aboutButton").addEventListener("click", fade);

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
};

function fade() {
  var containers = document.getElementsByTagName("section");
  if (hasClass(containers[0],"aboutActive") == false) {
    for (i = 0; i < containers.length; i++) {containers[i].setAttribute("class", "aboutActive")};
    document.getElementById("aboutButton").setAttribute("class", "waiting");
    setTimeout (function () {
      document.getElementById("aboutButton").setAttribute("class","aboutActive");
}, 650)
  } else {
    for (i = 0; i < containers.length; i++) {containers[i].removeAttribute("class")};
    document.getElementById("aboutButton").setAttribute("class", "waiting2");
    setTimeout (function () {document.getElementById("aboutButton").removeAttribute("class");}, 650)
  }

  }
