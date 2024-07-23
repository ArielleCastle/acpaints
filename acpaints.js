function toggleBodyBar() {
    var bodybar = document.querySelector('.bodybar');
    bodybar.style.display = (bodybar.style.display === 'none' || bodybar.style.display === '') ? 'flex' : 'none';
    document.body.classList.toggle('dark-background');

}

document.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    if (window.scrollY > 50) { // Adjust scroll distance as needed
        nav.classList.add("nav-transparent");
    } else {
        nav.classList.remove("nav-transparent");
    }
});
