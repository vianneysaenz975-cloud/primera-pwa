function mensaje(){

    alert("🎉 Bienvenido a tu primera Progressive Web App.");

}

if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('sw.js');

}