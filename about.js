function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
};

function buttonsReset() {
  buttons = document.getElementsByTagName("navig");
  for (i = 0; i < buttons.length; i++) {buttons[i].removeAttribute("class");};
};

function buttonOff(buttonId) {
  button = document.getElementById(buttonId)
  button.setAttribute("class", "waiting2");
  setTimeout (function () {button.removeAttribute("class");}, 650)

};

function aboutToggle() {
  var containers = document.getElementsByTagName("section");
  if (hasClass(containers[0],"aboutActive") == false) {
    buttonsReset();
    for (i = 0; i < containers.length; i++) {containers[i].setAttribute("class", "aboutActive")};
    document.getElementById("aboutButton").setAttribute("class", "waiting");
    setTimeout (function () {
      document.getElementById("aboutButton").setAttribute("class","active");
}, 650)
  } else {
    for (i = 0; i < containers.length; i++) {containers[i].removeAttribute("class")};
    buttonOff("aboutButton");
  }

};

function blogToggle() {
  var containers = document.getElementsByTagName("section");
  if (hasClass(containers[0],"blogActive") == false) {
    buttonsReset();
    for (i = 0; i < containers.length; i++) {containers[i].setAttribute("class", "blogActive")};
    document.getElementById("blogButton").setAttribute("class", "waiting");
    setTimeout (function () {
      document.getElementById("blogButton").setAttribute("class","active");
}, 650)
  } else {
    for (i = 0; i < containers.length; i++) {containers[i].removeAttribute("class")};
    buttonOff("blogButton");
  }

};

document.getElementById("aboutButton").addEventListener("click", aboutToggle);
document.getElementById("blogButton").addEventListener("click", blogToggle);
