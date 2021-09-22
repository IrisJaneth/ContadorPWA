if("serviceWorker" in navigator){
    //Registramos el Service Worker
    navigator.serviceWorker.register("./sw.js");
}