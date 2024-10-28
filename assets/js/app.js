


function activeBackDropdown(){
    const allDropdownActive = document.querySelectorAll('.dropdown');
    allDropdownActive.forEach(dropdownActive => {
        // Adiciona o novo HTML ao início do conteúdo existente
        dropdownActive.insertAdjacentHTML('afterbegin', `
            <div class="nav-dropdown row justify-between align-center">
                <span class="btn-close btn-back-drop"><i class="bi bi-arrow-left me-05"></i>BACK</span>
                <span class="btn-close btn-closenav"><i class="bi bi-x-lg"></i></span>
            </div>
        `);
    });
}activeBackDropdown()

// Select all elements with the class 'my-button'
const dropToggle = document.querySelectorAll('.dropdown-toggle');
dropToggle.forEach(button => {
  button.addEventListener('click', () => {
    button.querySelector('.dropdown').classList.add('active');
  });
});

const btnBackDrop = document.querySelectorAll('.btn-back-drop');
btnBackDrop.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o clique se propague
    button.closest('.dropdown').classList.remove('active');
  });
});


const navHide = document.querySelectorAll('.btn-closenav');
navHide.forEach(button => {
  button.addEventListener('click', () => {
   document.getElementById('navbar-list').classList.remove('active')
  });
});


  document.getElementById('navbar-toggle').addEventListener('click', () => {
    document.getElementById('navbar-list').classList.add('active')
  });



const cars = [
    {
        model: "Formula Hybrid",
        imageSrc: "./assets/img/cc-hybrid/car.jpg",
        specs: {
            engine: "V6 turbo engine",
            potency: "998bhp",
            weight: "807kg",
            gears: 8
        }
    },
    {
        model: "Formula Supreme",
        imageSrc: "./assets/img/cc-suzuka/car.jpg",
        specs: {
            engine: "V8 turbo engine",
            potency: "550bhp",
            weight: "670kg",
            gears: 6
        }
    },
    {
        model: "Formula Americas",
        imageSrc: "./assets/img/cc-americas/car.jpg",
        specs: {
            engine: "V8 Híbrido turbo engine",
            potency: "660bhp",
            weight: "845kg",
            gears: 6
        }
    },
    {
        model: "Formula RSS 4",
        imageSrc: "./assets/img/cc-formula4/car.jpg",
        specs: {
            engine: "4cyl Aspirado",
            potency: "163bhp",
            weight: "599kg",
            gears: 6
        }
    }
];


const renderCarSlides = (cars) => {
    const mySwiper = document.querySelector('.mySwiper');

    // Cria o HTML para cada slide
    const slidesHTML = cars.map(car => `
        <swiper-slide class="slider-card col p-1">
            <div class="car-img row p-2">
                <img src="${car.imageSrc}" alt="${car.model}">
            </div>
            <div class="car-spec col gap-2 py-4">
                <button class="btn-discover m-auto">Discover The Car</button>
                     <h2 class="title text-center">${car.model}</h2>
                <div class="caption gap-2">
                    ${Object.entries(car.specs).map(([key, value]) => `
                        <div class="col">
                            <span class="misc">${value}</span>
                            <h3 class="text">${key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                        </div>
                    `).join('')}
                </div>
            </div>
        </swiper-slide>
    `).join('');

    // Insere o HTML no contêiner
    mySwiper.innerHTML = slidesHTML;
};

renderCarSlides(cars);