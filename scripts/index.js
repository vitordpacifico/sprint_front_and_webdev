document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.getElementById('learnMoreBtn');

    learnMoreBtn.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Você será redirecionado para um site com mais informações!');
        window.open('https://www.g20.org/pt-br/g20-social/grupos-de-engajamento/oceans-20', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const primeira_imagem = document.getElementById('firstImage');
    const segunda_imagem = document.getElementById('secondImage');

    const fonte_prm_img = ['./imgs/pictures/arduino_image.jpg', './imgs/pictures/arduino2.png'];
    const fonte_segunda_img = ['./imgs/pictures/waste_sea.jpg', './imgs/pictures/lixo_na_praia.png'];

    let index_prm_img = 0;
    let index_segunda_img = 0;

    const changeImage = (imageElement, imageSources, index, direction, width, height) => {
        if (direction === 'next') {
            index = (index + 1) % imageSources.length;
        } else if (direction === 'prev') {
            index = (index - 1 + imageSources.length) % imageSources.length;
        }
        imageElement.src = imageSources[index];
        imageElement.style.width = width; 
        imageElement.style.height = height;
        return index;
    };

    const initialWidth = getComputedStyle(primeira_imagem).width;
    const initialHeight = getComputedStyle(primeira_imagem).height;

    const leftBtn1 = document.getElementById('leftBtn1');
    const rightBtn1 = document.getElementById('rightBtn1');
    const leftBtn2 = document.getElementById('leftBtn2');
    const rightBtn2 = document.getElementById('rightBtn2');

    
    rightBtn1.addEventListener('click', () => {
        index_prm_img = changeImage(primeira_imagem, fonte_prm_img, index_prm_img, 'next', initialWidth, initialHeight);
    });

    leftBtn1.addEventListener('click', () => {
        index_prm_img = changeImage(primeira_imagem, fonte_prm_img, index_prm_img, 'prev', initialWidth, initialHeight);
    });

   
    rightBtn2.addEventListener('click', () => {
        index_segunda_img = changeImage(segunda_imagem, fonte_segunda_img, index_segunda_img, 'next', initialWidth, initialHeight);
    });

    leftBtn2.addEventListener('click', () => {
        index_segunda_img = changeImage(segunda_imagem, fonte_segunda_img, index_segunda_img, 'prev', initialWidth, initialHeight);
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
