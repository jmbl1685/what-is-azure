window.addEventListener('load', () => {

    AOS.init({
        // Global settings
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll

        // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

});

window.onscroll = () => {

    DisplayStyleValue(20, document.getElementById('Up'));
    DisplayStyleValue(160, document.getElementById('div-title-2'));
}

function ScrollAnimation(className){
    document.querySelector(className).scrollIntoView({ behavior: 'smooth' });
}

function ScrollUp(){
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
}

function DisplayStyleValue(value, element) {

    let scroll = {
        BODY: document.body.scrollTop,
        DOCUMENT_ELEMENT: document.documentElement.scrollTop
    };

    if (scroll.BODY > value || scroll.DOCUMENT_ELEMENT > value)
        element.style.display = 'block';
    else
        element.style.display = 'none';
} 
