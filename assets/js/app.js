const navbar = document.getElementById('navbar')
const navbarContent = `
    <a href="/index.html">
         <div class="logo__ct d-grid place-center">
            <img src="/assets/img/logos/NGM.png" alt="">
        </div>
    </a>
            <ul class="navbar__ct--list row gap-2">
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
                    <ul class="nav__dropdown row">
                        <a href="/assets/pages/about.html">
                            <li class="nav__dropdown--droplink">About</li>
                        </a>
                        <a href="/assets/pages/drivers.html">
                            <li class="nav__dropdown--droplink">Drivers</li>
                        </a>
                
                    </ul>
                </li>
                <li class="nav__link nav__link--dropdown">
                     <div  class="row gap-05 align-center">
                    <span class="nav__link--misc">2024</span>
                  <i class="bi bi-chevron-down"></i>
                    </div>
                    <ul class="nav__dropdown row">
                        <a href="/assets/pages/cars.html">
                            <li class="nav__dropdown--droplink">Cars</li>
                        </a>
                         <a href="/assets/pages/standings.html">
                            <li class="nav__dropdown--droplink">Standings</li>
                        </a>
                        <a href="/assets/pages/program.html">
                            <li class="nav__dropdown--droplink">Sim Racer Program</li>
                        </a>
                        <a href="/assets/pages/exclusive.html">
                            <li class="nav__dropdown--droplink">Exclusive Content</li>
                        </a>
                    </ul>
                </li>
                <a href="/assets/pages/media.html">
                            <li class="nav__link">
                    <span class="nav__link--misc">Media</span>
                </li>
                </a>

          

                <div class="auth__ct nav__link position-relative">
                    <div class=" row gap-1">
                        <i class="bi bi-person-circle"></i>
                        <h4 class="auth__ct--title text-uppercase">Good Morning</h4>
                    </div>
                    <div class="nav__dropdown auth__buttons col gap-1">
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
                <a href="/assets/pages/about.html">
                    <li class="nav-link">About</li>
                </a>
                 <a href="/assets/pages/drivers.html">
                    <li class="nav-link">Drivers</li>
                </a>
                 <a href="/assets/pages/2024.html">
                    <li class="nav-link">2024</li>
                </a>
                <a href="/assets/pages/media.html">
                    <li class="nav-link">Media</li>
                </a>
                <a href="/assets/pages/program.html">
                    <li class="nav-link">Driving Program</li>
                </a>
                <a href="">
                    <li class="nav-link">Privacy Police</li>
                </a>
                <a href="">
                    <li class="nav-link">Terms and Conditions</li>
                </a>
            </ul>
            <ul class="nav-list row gap-1">
                <a href="https://www.instagram.com/ngmracingteam/">
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

    navLinks.forEach(navlink => {
        navlink.onclick = (event) => {
            event.stopPropagation();
    
            // Alterna o estado ativo do dropdown do navlink clicado
            navlink.classList.toggle('active');
            navlink.querySelector('.nav__dropdown')?.classList.toggle('active');
    
            // Remove a classe 'active' de todos os outros navlinks e dropdowns
            navLinks.forEach(otherLink => {
                if (otherLink !== navlink) {
                    otherLink.classList.remove('active');
                    otherLink.querySelector('.nav__dropdown')?.classList.remove('active');
                }
            });
        };
    
        // Impede que o clique no dropdown feche o menu
        navlink.querySelector('.nav__dropdown')?.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
    
    // Remove 'active' de todos ao clicar fora dos navlinks
    document.addEventListener('click', () => {
        navLinks.forEach(navlink => {
            navlink.classList.remove('active');
            navlink.querySelector('.nav__dropdown')?.classList.remove('active');
        });
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


