const servicesData = {
    personal: {
        title: "Personal Loan",
        subtitle: "Fast and simple personal financial support.",
        image: "img/services/details/sd-1.jpg",
        description: "Our personal loans are designed to help you cover everyday needs, unexpected expenses, or important personal goals with a simple and reliable process.",
        benefits: [
            "Quick application process",
            "Personalized attention",
            "Flexible payment options",
            "Support for everyday financial needs"
        ]
    },

    business: {
        title: "Business Loan",
        subtitle: "Financial support for entrepreneurs and small businesses.",
        image: "img/services/details/sd-2.jpg",
        description: "This service is created for small business owners who need extra financial support to grow, invest, buy supplies, or manage daily operations.",
        benefits: [
            "Ideal for small businesses",
            "Simple process",
            "Support for growth and investment",
            "Clear and transparent guidance"
        ]
    },

    emergency: {
        title: "Emergency Loan",
        subtitle: "Quick help when unexpected expenses appear.",
        image: "img/services/services-3.jpg",
        description: "Emergency loans are designed to provide fast financial help when you need support for urgent situations or unexpected payments.",
        benefits: [
            "Fast response",
            "Useful for urgent needs",
            "Simple requirements",
            "Personalized support"
        ]
    }
};

$(".open-service-modal").on("click", function (event) {
    event.preventDefault();

    const serviceKey = $(this).data("service");
    const service = servicesData[serviceKey];

    $("#serviceModalTitle").text(service.title);
    $("#serviceModalSubtitle").text(service.subtitle);
    $("#serviceModalDescription").text(service.description);
    $("#serviceModalImage").attr("src", service.image);

    $("#serviceModalBenefits").empty();

    service.benefits.forEach(function (benefit) {
        $("#serviceModalBenefits").append(`<li>${benefit}</li>`);
    });

    $("#serviceModal").modal("show");
});