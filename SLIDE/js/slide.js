let index = 1;
slideShow(index);
slideShowLight(index);

// var left_arr = document.getElementById('left');
// var right_arr = document.getElementById('right');


function moveSlide(n) {
    slideShow(index += n);
}


function slideShow(n) {
    var slides = document.getElementById('slideshow').children;
    if (n > slides.length) {
        index = 1;
    }
    if (n < 1) {
        index = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index - 1].style.display = "flex";
    slides[index - 1].classList.add('fade');

    const lightbox = document.getElementById('lightbox-cont');
    for (let j = 0; j < slides.length; j++) {
        slides[j].addEventListener('click', (e) => {
            lightbox.style.display = "flex";
            let dindex = slides[j].getAttribute('data-index');
            slideShowLight(n, dindex);
            document.getElementById('close').addEventListener('click', (el) => {
                lightbox.style.display = "none";
                document.getElementById('slideshow-cont').style.opacity = "1";
            })

            document.getElementById('slideshow-cont').style.opacity = "0";
        })
    }
}

document.querySelectorAll(`.slide-item-image`).forEach(el => {
    el.addEventListener(`mouseover`, (e) => {
        document.addEventListener(`keydown`, keyDown);
    });
    el.addEventListener(`mouseout`, (e) => {
        document.removeEventListener(`keydown`, keyDown);
    })
});

function keyDown(e) {
    switch (e.keyCode) {
        case 37:
            e.preventDefault();
            index--;
            slideShow(index);
            break;
        case 39:
            e.preventDefault();
            index++;
            slideShow(index);
            break;
    }
}

//LIGHTBOX
function moveSlideLight(n) {
    slideShowLight(index += n);
}

function slideShowLight(n, data_index) {
    var slides = document.getElementById('lightbox').children;

    if (n > slides.length) {
        index = 1;
    }
    if (n < 1) {
        index = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index - 1].style.display = "flex";
    slides[index - 1].classList.add('fade');
}