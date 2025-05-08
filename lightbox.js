const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.numbertext img');
images.forEach((img) => {
    img.addEventListener('click', e=> {
        lightbox.classList.add('active');
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(imgElement);
    });
});   

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    });
