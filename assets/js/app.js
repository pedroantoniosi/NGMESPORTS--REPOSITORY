const navbar = document.getElementById('navbar')
const navbarContent = `

    <div class="logo__ct">
            <img src="./assets/img/logos/NGM.png" alt="">
    </div>

  <ul class="navbar__ct--list row gap-2">
            <li class="nav__link"> 
                <span class="nav__link--misc">Latest</span>
            </li>
            <li class="nav__link">
                 <span class="nav__link--misc">Team</span>
                <ul class="nav__link--dropdown ccc">
                        <li class="nav__link--droplink"></li>
                        <li class="nav__link--droplink"></li>
                </ul>
            </li>
             <li class="nav__link">
                 <span class="nav__link--misc">2024</span>
                <ul class="nav__link--dropdown ccc">
                        <li class="nav__link--droplink"></li>
                        <li class="nav__link--droplink"></li>
                </ul>
            </li>
            <li class="nav__link">
                <span class="nav__link--misc">Media</span>   
            </li>
              <li class="nav__link">
                <ul class="nav__link--dropdown ccc">
                    <span class="nav__link--misc">Media</span>
                    <li class="nav__link--droplink"></li>
                    <li class="nav__link--droplink"></li>
                </ul>
            </li>
        </ul>


            <div class="auth__ct ms-auto">
            <div class="row gap-1">
            <i class="bi bi-person-circle"></i>
            <h4 class="auth__ct--title text-uppercase">Good Morning</h4>
            </div>
            <div class="aut__buttons col ccc">
                <div class="btn__auth">Sign Up</div>
                <div class="btn__auth">Login</div>
            </div>
        </div>
`
navbar.innerHTML = navbarContent