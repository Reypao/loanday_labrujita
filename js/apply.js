emailjs.init({
    publicKey: "i6LntRa1AcwDE_FCw"
});

const heroLoanForm = document.getElementById("heroLoanForm");
const heroFormMessage = document.getElementById("heroFormMessage");

heroLoanForm.addEventListener("submit", function (event) {
    event.preventDefault();

    heroFormMessage.textContent = "Sending...";
    heroFormMessage.style.color = "#ffffff";

    emailjs.sendForm("service_familia", "template_r8mkc5e", heroLoanForm)
        .then(function () {
            heroFormMessage.textContent = "Message sent successfully!";
            heroFormMessage.style.color = "#9a791d";

            heroLoanForm.reset();
        })
        .catch(function (error) {
            console.log("EmailJS error:", error);

            heroFormMessage.textContent = "There was an error. Please try again.";
            heroFormMessage.style.color = "#ff4d4d";
        });
});