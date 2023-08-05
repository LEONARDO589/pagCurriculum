document.addEventListener("DOMContentLoaded", (event) => {


    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contact__iframe" frameborfer="0" scrolling="no" marginheight="0" marginwindth="0"
        width="600" height="450" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5599.000997203835!2d-73.12888418589125!3d7.115386217429565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e68157af751c0ed%3A0x75a0e4551148c36c!2sBucaramanga%2C%20Santander!5e0!3m2!1ses!2sco!4v1691197633980!5m2!1ses!2sco"></iframe>`;
    },500);
});
