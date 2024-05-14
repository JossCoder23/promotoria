window.addEventListener("load", () => {
    let modal = document.querySelectorAll('.modal')[0];
    let modalC = document.querySelectorAll('.modal-container')[0];
    let close = document.getElementById('close');
    let lupa = document.querySelector('.headerMenu__lupa');
    let menuCont = document.querySelector('.headerMenu__options');
    let button = document.querySelectorAll('.info__button--click')[0];
    let button1 = document.querySelectorAll('.info__button--click')[1];
    let button2 = document.querySelectorAll('.info__button--click')[2];
    let button3 = document.querySelectorAll('.info__button--click')[3];
    let button4 = document.querySelectorAll('.info__button--click')[4];
    let button5 = document.querySelectorAll('.info__button--click')[5];
    let button6 = document.querySelectorAll('.info__button--click')[6];
    let button7 = document.querySelectorAll('.info__button--click')[7];
    let button8 = document.querySelectorAll('.info__button--click')[8];
    let button9 = document.querySelectorAll('.info__button--click')[9];
    function removeOptions(selectElement) {
        var i, L = selectElement.options.length - 1;
        for(i = L; i >= 0; i--) {
            selectElement.remove(i);
        }
    }
    new Swiper(".mySwiper", {
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets"
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // slidesPerView: 2,
        // slidesPerColumn: 2,
        autoplay: { 
            delay: 8000
        },
        loop: true,
        breakpoints: {
            999: {
                slidesPerView: 2,
                slidesPerColumn: 1
            },
            1919: {
                loop: false,
                slidesPerView: 3
            }
        }
    });
    //0 - 4 talleres
    button.addEventListener("click", (e) => {
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
        document.getElementById('tipo-eventos').setAttribute("disabled", "disabled");
        // document.getElementById('talleres-form').setAttribute("selected", "selected");
        document.getElementById('tipo-eventos').options[1].selected = true;
        document.getElementById('fecha-eventos').add(new Option("21/Oct/23", "Sábado 21 de Octubre", "selected", "selected"));
        document.getElementById('fecha-eventos').setAttribute("disabled", "disabled");
        removeOptions(document.getElementById('carreras-eventos'));
        document.getElementById('carreras-eventos').add(new Option("Psicología", "PSICOLOGIA"));
        document.getElementById('carreras-eventos').add(new Option("Medicina Veterinaria y Zootecnia", "MEDICINA VETERINARIA Y ZOOTECNIA"));
    });
    button1.addEventListener("click", (e) => {
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
        document.getElementById('tipo-eventos').setAttribute("disabled", "disabled");
        // document.getElementById('talleres-form').setAttribute("selected", "selected");
        document.getElementById('tipo-eventos').options[1].selected = true;
        document.getElementById('fecha-eventos').add(new Option("14/Oct/23", "Sábado 14 de Octubre", "selected", "selected"));
        document.getElementById('fecha-eventos').setAttribute("disabled", "disabled");
        removeOptions(document.getElementById('carreras-eventos'));
        document.getElementById('carreras-eventos').add(new Option("Biología", "BIOLOGIA"));
        document.getElementById('carreras-eventos').add(new Option("Nutrición", "NUTRICION"));
    });
    button2.addEventListener("click", (e) => {
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
        document.getElementById('tipo-eventos').setAttribute("disabled", "disabled");
        // document.getElementById('talleres-form').setAttribute("selected", "selected");
        document.getElementById('tipo-eventos').options[1].selected = true;
        document.getElementById('fecha-eventos').add(new Option("21/Oct/23", "Sábado 21 de Octubre", "selected", "selected"));
        document.getElementById('fecha-eventos').setAttribute("disabled", "disabled");
        removeOptions(document.getElementById('carreras-eventos'));
        document.getElementById('carreras-eventos').add(new Option("Administración", "ADMINISTRACION"));
        document.getElementById('carreras-eventos').add(new Option("Educación", "EDUCACIÓN"));
    });
    button3.addEventListener("click", (e) => {
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
        document.getElementById('tipo-eventos').setAttribute("disabled", "disabled");
        // document.getElementById('talleres-form').setAttribute("selected", "selected");
        document.getElementById('tipo-eventos').options[1].selected = true;
        document.getElementById('fecha-eventos').add(new Option("14/Oct/23", "Sábado 14 de Octubre", "selected", "selected"));
        document.getElementById('fecha-eventos').setAttribute("disabled", "disabled");
        removeOptions(document.getElementById('carreras-eventos'));
        document.getElementById('carreras-eventos').add(new Option("Ingeniería Ambiental", "INGENIERIA AMBIENTAL"));
        document.getElementById('carreras-eventos').add(new Option("Ingeniería Biomédica", "INGENIERIA BIOMEDICA"));
        document.getElementById('carreras-eventos').add(new Option("Ingeniería Industrial", "INGENIERIA INDUSTRIAL"));
        document.getElementById('carreras-eventos').add(new Option("Ingeniería Informática", "INGENIERIA INFORMATICA"));
    });
    //aca es
    button4.addEventListener("click", (e) => {
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
        document.getElementById('tipo-eventos').setAttribute("disabled", "disabled");
        // document.getElementById('talleres-form').setAttribute("selected", "selected");
        document.getElementById('tipo-eventos').options[1].selected = true;
        // document.querySelector('#tipos-eventos [value="' + selectedValue + '"]').selected = true;
        document.getElementById('fecha-eventos').add(new Option("21/Oct/23", "Sábado 21 de Octubre", "selected", "selected"));
        document.getElementById('fecha-eventos').setAttribute("disabled", "disabled");
        removeOptions(document.getElementById('carreras-eventos'));
        document.getElementById('carreras-eventos').add(new Option("Terapia de Audición, Voz y Lenguaje", "TERAPIA DE AUDICION VOZ Y LENGUAJE"));
        document.getElementById('carreras-eventos').add(new Option("Terapia Ocupacional", "TERAPIA OCUPACIONAL"));
    });
    button5.addEventListener("click", (e) => {
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
    });
    button6.addEventListener("click", (e) => {
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
    });
    button7.addEventListener("click", (e) => {
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
    });
    button8.addEventListener("click", (e) => {
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
    });
    button9.addEventListener("click", (e) => {
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
    });
    lupa.addEventListener("click", (e) => {
        e.preventDefault();
        menuCont.style.transition = "display .1s ease-in !important";
        menuCont.style.display = "grid";
        setTimeout(() => {
            menuCont.style.display = "none";
        }, 3000);
    })
    window.addEventListener("click", (e) => {
        if(e.target === modalC){
            modal.classList.toggle("modal-close");
            setTimeout(() => {
                modalC.style.opacity = "0";
                modalC.style.visibility = "hidden";
            }, 800);
        }
    });
    close.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.toggle("modal-close");
        setTimeout(() => {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 800);
    });

})
