function mobileMenu() {
    var x = document.getElementsByTagName("nav")[0];
    if (x.className === "nav") {
        x.className += "-mobile";
    } else {
        x.className = "nav";
    }
}