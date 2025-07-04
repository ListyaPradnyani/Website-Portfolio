/*---------NAVIGATION BAR FUNCTION--------*/
function myMenuFunction() {
    const menuBtn = document.getElementById("myNavMenu");
    const menuIcon = document.getElementById("menuIcon");

    // Toggle kelas 'responsive' pada menu
    menuBtn.classList.toggle("responsive");
}

/*---------MENU CLOSE ON CLICK--------*/
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        const menuBtn = document.getElementById("myNavMenu");
        const menuIcon = document.getElementById("menuIcon");

        // Tutup menu jika dalam mode responsive
        if (menuBtn.classList.contains("responsive")) {
            menuBtn.classList.remove("responsive");
            menuIcon.classList.remove("uil-times");
            menuIcon.classList.add("uil-bars");
        }
    });
});

function headerShadow() {
    const navHeader = document.getElementById("header");

    // Pastikan elemen #header ada sebelum menjalankan logika
    if (navHeader) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
            navHeader.style.height = "70px";
            navHeader.style.lineHeight = "70px";
        } else {
            navHeader.style.boxShadow = "none";
            navHeader.style.height = "90px";
            navHeader.style.lineHeight = "90px";
        }
    }
}

