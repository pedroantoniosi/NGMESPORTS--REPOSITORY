// Utility function to manage cookies
const cookieManager = {
    set(name, value, days) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
    },
    get(name) {
        return document.cookie.split('; ').reduce((r, current) => {
            const [key, value] = current.split('=');
            return key === name ? decodeURIComponent(value) : r;
        }, '');
    },
    checkConsent() {
        return this.get('cookieConsent');
    }
};

// Function to display the cookie consent banner
const showCookieBanner = () => {
    const banner = document.querySelector('.cookies__ct');
    banner.style.display = 'block';
};

// Event handlers
const handleAccept = () => {
    cookieManager.set('cookieConsent', 'accepted', 30);
    hideBanner();
};

const handleReject = () => {
    cookieManager.set('cookieConsent', 'rejected', 30);
    hideBanner();
};

const hideBanner = () => {
    const banner = document.querySelector('.cookies__ct');
    banner.style.display = 'none';
};

// Initialize the cookie consent management
document.addEventListener('DOMContentLoaded', () => {
    if (!cookieManager.checkConsent()) {
        showCookieBanner();
    }

    document.querySelector('.btn__handler-true').addEventListener('click', handleAccept);
    document.querySelector('.btn__handler-false').addEventListener('click', handleReject);
});
