function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var captions = document.getElementById("slide-caption").getElementsByTagName("p");

    // wrap around if out of bounds
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // hide all slides & pause videos
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

        let vid = slides[i].querySelector("video");
        if (vid) {
            vid.pause();
            vid.currentTime = 0; // reset
        }

        let iframe = slides[i].querySelector("iframe");
        if (iframe) {
            const src = iframe.src;
            iframe.src = "";   // clear it to stop loading/playback
            iframe.src = src;  // reassign it to reset
        }

        // hide all captions
        if (captions[i]) captions[i].style.display = "none";
    }

    // remove active dot styling
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }

    // show current slide
    slides[slideIndex - 1].style.display = "block";

    // show caption for current slide
    if (captions[slideIndex - 1]) captions[slideIndex - 1].style.display = "block";

    // activate corresponding dot
    if (dots.length > 0) {
        dots[slideIndex - 1].classList.add("active-dot");
    }

    // play video if the visible slide has one
    let currentVid = slides[slideIndex - 1].querySelector("video");
    if (currentVid) {
        currentVid.play();
    }
}

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('open');
}