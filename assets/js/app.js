const navbar = document.getElementById('navbar')
const navbarContent = `
    <a href="/index.html">
         <div class="logo__ct">
            <img src="/assets/img/logos/NGM.png" alt="">
        </div>
    </a>
            <ul class="navbar__ct--list row align-center gap-2">
                <a href="/assets/pages/news.html">
                    <li class="nav__link">
                        <span class="nav__link--misc">Latest</span>
                    </li>
                </a>
                <li class="nav__link nav__link--dropdown">
                    <div  class="row gap-05 align-center">
                    <span class="nav__link--misc">Team</span>
                  <i class="bi bi-chevron-down"></i>
                    </div>
                    <ul class="nav__dropdown ccc">
                        <a href="">
                            <li class="nav__link--droplink">Drivers</li>
                        </a>
                        <a href="">
                            <li class="nav__link--droplink">Droplink</li>
                        </a>
                
                    </ul>
                </li>
                <li class="nav__link nav__link--dropdown">
                     <div  class="row gap-05 align-center">
                    <span class="nav__link--misc">2024</span>
                  <i class="bi bi-chevron-down"></i>
                    </div>
                    <ul class="nav__dropdown ccc">
                        <a href="">
                            <li class="nav__link--droplink">Our Team</li>
                        </a>
                        <a href="">
                            <li class="nav__link--droplink">Our Cars</li>
                        </a>
                        <a href="">
                            <li class="nav__link--droplink">Sim Racer Program</li>
                        </a>
                        <a href="">
                            <li class="nav__link--droplink">Exclusive Content</li>
                        </a>
                    </ul>
                </li>
                <a href="./assets/pages/media.html">
                            <li class="nav__link">
                    <span class="nav__link--misc">Media</span>
                </li>
                </a>

          

                <div class="auth__ct">
                    <div class=" row gap-1">
                        <i class="bi bi-person-circle"></i>
                        <h4 class="auth__ct--title text-uppercase">Good Morning</h4>
                    </div>
                    <div class="auth__buttons col ccc">
                        <div class="btn__auth">Sign Up</div>
                        <div class="btn__auth">Login</div>
                    </div>
                </div>
            </ul>
        <button class="btn__toggle d-none-md">
            <span class="list__bar"></span>
            <span class="list__bar"></span>
            <span class="list__bar"></span>
        </button>
`
const footer = document.getElementById('footer')
const footerContent = `
  <div class="row justify-between flex-wrap gap-1 pdef">
            <ul class="nav-list row-lg gap-05">
                <a href="">
                    <li class="nav-link">About</li>
                </a>
                <a href="">
                    <li class="nav-link">Media</li>
                </a>
                <a href="">
                    <li class="nav-link">Videos</li>
                </a>
                <a href="">
                    <li class="nav-link">Driving Program</li>
                </a>
                <a href="">
                    <li class="nav-link">Contact Us</li>
                </a>
                <a href="">
                    <li class="nav-link">Privacy Police</li>
                </a>
                <a href="">
                    <li class="nav-link">Terms and Conditions</li>
                </a>
            </ul>
            <ul class="nav-list row gap-1">
                <a href="">
                    <li class="nav-link"><i class="bi bi-instagram ico"></i></li>
                </a>
                <a href="">
                    <li class="nav-link"><i class="bi bi-tiktok ico"></i></li>
                </a>
                <a href="">
                    <li class="nav-link"><i class="bi bi-youtube ico"></i></li>
                </a>
                <a href="">
                    <li class="nav-link"><i class="bi bi-twitter-x ico"></i></li>
                </a>
            </ul>

        </div>
`
navbar.innerHTML = navbarContent
footer.innerHTML = footerContent

//-----------------------------------------------------------
const toggleButton = document.querySelector('.btn__toggle');
const menuList = document.querySelector('.navbar__ct--list');
const navLinks = document.querySelectorAll('.nav__link--misc');
const navDropdown = document.querySelectorAll('.nav__dropdown');

toggleButton.addEventListener('click', () => {
    navDropdown.forEach((element) => {
        element.classList.remove('active');
    });
    menuList.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
    toggleButton.classList.toggle('active')
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav__link--dropdown');

    navLinks.forEach((navlink) => {
        navlink.onclick = function () {
            const dropdown = navlink.querySelector('.nav__dropdown').classList.toggle('active')
        };
    });
});



document.querySelectorAll('.aaa').forEach(item => {
    item.addEventListener('click', function() {
        // Se houver um elemento ativo, remova a classe
        const activeElement = document.querySelector('.aaa.active');
        if (activeElement) {
            activeElement.classList.remove('active');
        }
        
        // Adicione a classe active ao elemento clicado
        this.classList.add('active');

        // Mova o elemento clicado para o início da lista
        const container = document.querySelector('.container');
        container.insertBefore(this, container.firstChild); // Move o elemento clicado para o início
    });
});

document.querySelectorAll('.gallery__ct .card').forEach(item => {
    item.addEventListener('click', function() {
        // Remove a classe .active de todos os cards
        document.querySelectorAll('.gallery__ct .card').forEach(card => {
            card.classList.remove('active');
        });
        // Adiciona a classe .active ao card clicado
        item.classList.add('active');
    });
});

document.querySelectorAll('.close__wrapper').forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation();
        document.querySelectorAll('.gallery__ct .card').forEach(card => {
            card.classList.remove('active');
        });
    });
});