// Função para definir cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Função para pegar um cookie pelo nome
function getCookie(name) {
    const nameEQ = name + "=";
    const cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Função para ocultar o banner de cookies
function hideCookiesBanner() {
    document.querySelector('.cookies-container').style.display = 'none';
}

// Manipulador do botão de "Aceitar"
document.querySelector('.settings-btn-handler').addEventListener('click', function () {
    setCookie('cookiesConsent', 'accepted', 365);
    hideCookiesBanner(); // Oculta o banner
});

// Manipulador do botão de "Rejeitar"
document.querySelector('.accept-btn-handler').addEventListener('click', function () {
    setCookie('cookiesConsent', 'rejected', 365);
    hideCookiesBanner(); // Oculta o banner
});

// Verificar se o usuário já deu consentimento e controlar a exibição do banner


const cookieConsent = getCookie('cookiesConsent');
if (cookieConsent) {
    hideCookiesBanner(); // Oculta o banner se o consentimento já foi dado
} else {
    document.querySelector('.cookies-container').style.display = 'block'; // Exibe o banner se não houver consentimento
}