function toggleNightMode() {
  
    var body = document.body;

    body.classList.toggle('night-mode');
}
function onscrolling() {
    const scroolbtn = document.getElementById("c1");

    if (scroolbtn) {
        scroolbtn.addEventListener('click', () => {
            window.scrollTo({
                top: 300,
                behavior: "smooth"
            });
        });
    }
}
