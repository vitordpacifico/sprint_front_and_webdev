document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.getElementById('learnMoreBtn');

    learnMoreBtn.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Você será redirecionado para um site com mais informações!');
        window.open('https://www.g20.org/pt-br/g20-social/grupos-de-engajamento/oceans-20', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './imgs/pictures/boats.jpg',
        './imgs/pictures/mask_in_water.jpg',
        './imgs/pictures/bottle_in_water.jpg'
    ];
    let currentIndex = 0;
    const imgElement = document.querySelector('#public .left_picture img');

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
    }

    setInterval(showNextImage, 5000);
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
