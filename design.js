window.onload = function () {
    var container = document.querySelector('.gif-container');
    var currentX = -100;
    var endX = window.innerWidth + 100;

    function animate() {
        currentX += 5;
        container.style.left = currentX + 'px';

        if (currentX < endX) {
            requestAnimationFrame(animate);
        }
    }
    animate();
};
