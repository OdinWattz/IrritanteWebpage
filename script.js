let popUp = document.getElementById("cookiePopup");

//Wanneer er dus op accept geklikt wordt
document.getElementById("acceptCookie").addEventListener("click", () => {
// Hoelang de cookie geldig is: 5 minuten
  let d = new Date();
  d.setMinutes(5 + d.getMinutes());

  //De naam van de cookie en hoelang die geldig is
  document.cookie = "myCookieName=ditismijncookie_Odin; expires = " + d + ";";

  //Hide the popup
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});

//Wanneer er op reject geklikt wordt
// De reject doet eigenlijk helemaal niks want de pop up verdwijnt toch niet, al druk je op accept
// Express gedaan natuurlijk
document.getElementById("rejectCookie").addEventListener("click", () => {
    //Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
    });

// Die checkt of de cookie al bestaat
const checkCookie = () => {
  //Read the cookie and split on "="
  let input = document.cookie.split("=");
  //Check for our cookie
  if (input[0] == "myCookieName") {
    //Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    //Show the popup
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};


//Checkt of de cookie al bestaat wanneer de pagina laad
window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2000);
};