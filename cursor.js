window.CURSOR = 'arrow';
window.UNLOADED_IMAGES = 0;

(() => {
    loadImage('./src/images/cursors/arrow.svg');
    loadImage('./src/images/cursors/openhand.svg');
    loadImage('./src/images/cursors/closedhand.svg');
    loadImage('./src/images/cursors/pointinghand.svg');
    loadImage('./src/images/cursors/ball.gif');


    const cursor = new Image();
    cursor.id = 'cursor';
    cursor.className = 'cursor';
    cursor.src = './src/images/cursors/arrow.svg';

    document.body.appendChild(cursor);

    const checkLoad = () => {
        cursor.src = window.UNLOADED_IMAGES === 0 ? `./src/images/cursors/${window.CURSOR}.svg` : './src/images/cursors/ball.gif';
        window.requestAnimationFrame(checkLoad);
    }

    window.requestAnimationFrame(checkLoad);

    window.addEventListener('mousemove', e => {
        if(!cursor.src.includes(window.CURSOR))
            cursor.src = `./src/images/cursors/${window.CURSOR}.svg`;

        cursor.style.left = e.x + 'px';
        cursor.style.top = e.y + 'px';

        if(window.UNLOADED_IMAGES !== 0)
            cursor.src = './src/images/cursors/ball.gif';
    });

    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('mouseover', () => window.CURSOR = 'pointinghand');
        btn.addEventListener('mouseleave', () => window.CURSOR = 'arrow');
    });
})();

function loadImage(src) {
    const image = new Image(0, 0);
    image.src = src;
    delete image;
}