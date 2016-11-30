function showMenu() {

    document.querySelector('.dropdown--menu').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {

    if (!e.target.matches('.dropdown--button')) {
        
        document.querySelector('.dropdown--menu').classList.remove('show');
    }
}