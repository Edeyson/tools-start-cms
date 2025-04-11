
    // submenu and sub pages
    let burger = document.querySelector('.header__burger');
    let header = document.querySelector('.header');
    let navbarContainer = header.querySelector('.header__container');
    const desktop = window.innerWidth > 1024 ? true : false;
    function dropMenu() {
        burger.classList.toggle("header__burger--active");
        header.classList.toggle("header--fixed");
        navbarContainer.classList.toggle("header__container--active");
        document.body.classList.toggle("overflow-disabled");
    }
    function dropSubmenu(event) {
        let ul;
        let elementEvent = event.target;
        console.log("elementEvent", elementEvent.tagName);
        if (elementEvent.tagName == "SPAN" && elementEvent.id == "sub-page") {
            ul = event.composedPath()[2].querySelector('ul');
            event.composedPath()[0].classList.toggle("_navbar__btn-page--active");
        } else if (elementEvent.tagName == "I" && elementEvent.parentElement.tagName == "SPAN") {
            ul = event.composedPath()[3].querySelector('ul');
            event.composedPath()[1].classList.toggle("_navbar__btn-page--active");
        } else if (elementEvent.tagName == "ICONIFY-ICON") {
            ul = event.composedPath()[5].querySelector('ul');
            event.composedPath()[3].classList.toggle("_navbar__btn-page--active");
        }
        else if (elementEvent.tagName == "LI" && elementEvent.className.indexOf("_navbar__item--children") != -1) {
            ul = event.composedPath()[0].querySelector('._navbar__item--children > ._navbar__submenu');
            event.composedPath()[0].querySelector('._navbar__item--children > span').classList.toggle("_navbar__btn-page--active");
        } else if (elementEvent.tagName == "A" && elementEvent.parentElement.tagName == "DIV") {
            ul = event.composedPath()[2].querySelector('._navbar__item--children ._navbar__submenu');
            event.composedPath()[1].querySelector('._navbar__container-link-submenu #sub-page').classList.toggle("_navbar__btn-page--active");
        }
        if (ul) {
            ul.classList.toggle("_navbar__submenu--active");
        }
        if (elementEvent.classList.value.includes('header__container')) {
            dropMenu()
        }
        //navbarContainer.classList.toggle("header__container--active");
    }
    
    if (!desktop) {
        burger.addEventListener('click',()=>dropMenu());
        header.addEventListener('click',(event)=>dropSubmenu(event));
    }
    
    // active header transparent
    const headerContainer = document.querySelector('#headerTransparent');
    function transparentHeader() {
        const position = window.pageYOffset >= 5;
        position 
        ? headerContainer.classList.add('header-container--transparent')
        : headerContainer.classList.remove('header-container--transparent')
    }
    if (headerContainer && desktop) {
        window.onscroll = ()=> transparentHeader();
    }
    
    //event if  click in outset the menu
    if (!desktop) {
        document.addEventListener('click',(e)=> {
            if(document.querySelector('.header__burger--active') && !e.target.className.includes('header__bar') && e.target.innerHTML.includes('header__container--active') ){
                document.querySelector('.header__burger').click();
            }
        })
    }
    
    if (!desktop) {
        const imgLogo = document.querySelector('.header__logo img');
        const headerContainerMenu = document.querySelector('.header__container');
        const newDiv = () => document.createElement('div');
        const divLogo = newDiv();
        const divBurger = newDiv();
        const burger = document.querySelector('.header__burger');
    
        // Agregar clases de forma segura
        divLogo.classList.add("header__menu", "header__menu--logo");
    
        // Crear el logo sin usar innerHTML
        const logoImg = document.createElement("img");
        logoImg.id = "dnn_dnnLOGO_imgLogo";
        logoImg.src = imgLogo?.src || "";
        logoImg.alt = imgLogo?.alt || "";
        divLogo.appendChild(logoImg);
    
        headerContainerMenu.prepend(divLogo);
    
        // Configurar el botón del menú hamburguesa
        divBurger.classList.add("header__burger", "header__burger--active");
    
        // Clonar el contenido del botón de hamburguesa de forma segura
        if (burger) {
            const clonedBurger = burger.cloneNode(true);
            clonedBurger.addEventListener("click", () => burger.click());
            divBurger.appendChild(clonedBurger);
        }
    
        headerContainerMenu.append(divBurger);
    }
    
