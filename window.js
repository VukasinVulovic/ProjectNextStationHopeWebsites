
let current_window = null;
let start_pos = [];

const main = document.querySelector('#main');

window.addEventListener('mousemove', e => {
    if(current_window) {
        current_window.style.left = e.x - start_pos[0] + 'px';
        current_window.style.top = e.y - start_pos[1] + 'px';
    }
});

window.addEventListener('mouseup', e => {
    if(current_window)
        current_window.style.transition = 'none';

    current_window = null;
});

const WINDOW_TEMPLATES = {
    about: {
        x: '0.1vw',
        y: '0.1vw',
        width: 'calc(var(--regular-window-size) - 1%)',
        height: 'auto',
        html: '<nav class="top"> <div class="buttons"> <button class="button"> <i class="fas fa-circle close"> <i class="fas fa-times hidden"></i> </i> </button> <button class="button"> <i class="fas fa-circle minimize"> <i class="fas fa-minus hidden"></i> </i> </button> </div><span class="title"> About </span> </nav> <section class="main"> <div class="about"> <img src="./src/images/its_logo.png" alt="ITS LOGO" class="logo"> <div class="text"> <h1 class="title"> Information Technology High School </h1> <span class="info"> Serbia, Belgrade </span> <span class="info info-long"> <b> ITHS </b> is the first educational institution of this type. <br>Our students are educated not just in IT, but general knowledge as well. <br><br>With modern, efficient and before all, interactive theaching, adapted to needs, abilities and iterests of students. <br><br>We offer the profile of IT technician wanted by modern needs. </span> </div></div></section>'
    },
    teachers: {
        x: '49.9vw',
        y: '0.1vw',
        width: 'calc(var(--regular-window-size) - 1%)',
        height: 'auto',
        html: '<nav class="top"> <div class="buttons"> <button class="button"> <i class="fas fa-circle close"> <i class="fas fa-times hidden"></i> </i> </button> <button class="button"> <i class="fas fa-circle minimize"> <i class="fas fa-minus hidden"></i> </i> </button> </div><span class="title"> Teachers </span> </nav> <section class="main"> <div class="teachers"> <div class="logo"> <img src="./src/images/gallery/grupna.png" alt="ITS LOGO" class="image"> </div><div class="text"> <span class="info-long"> <b> Teachers </b> are selected according to strict criteria, and their work is constantly evaluated. <br>They are the foundation of our and student\'s success. <br>Smiling, armed with patience, they teach students both team and individual work. <br>They recognize student\'s qualities, help and motivate them. </span> </div></div></section>'
    },
    founders:  {
        x: '0.6vw',
        y: '67.7vh',
        width: 'calc(var(--regular-window-size) - 1%)',
        height: 'auto',
        html: '<nav class="top"> <div class="buttons"> <button class="button"> <i class="fas fa-circle close"> <i class="fas fa-times hidden"></i> </i> </button> <button class="button"> <i class="fas fa-circle minimize"> <i class="fas fa-minus hidden"></i> </i> </button> </div><span class="title"> Founders </span> </nav> <section class="main"> <div class="founders"> <div class="logos"> <div class="logo"> <img src="./src/images/logo_comtrade.png" alt="comtrade logo" class="image"> </div><div class="logo"> <img src="./src/images/logo_linkGroup.png" alt="link group logo" class="image"> </div></div><div class="text"> <span class="info-long"> <b> Comtrade Group </b> is a multinational company with regional offices in Serbia, Bosnia and Herzegovina and Slovenia. </span> <span class="info-long"> <b> LINK group </b> is a multinational company that has been engaged in education and certification in the field of IT and modern business for more than 20 years, <br>successfully achieving the mission of raising the level of education in the field of professional, higher and secondary education. </span> </div></div></section>'
    },
    field_trips: {
        x: '0.1vw',
        y: '0.1vw',
        width: 'calc(var(--regular-window-size) - 1%)',
        height: 'auto',
        html: ' <nav class="top"> <div class="buttons"> <button class="button"> <i class="fas fa-circle close"> <i class="fas fa-times hidden"></i> </i> </button> <button class="button"> <i class="fas fa-circle minimize"> <i class="fas fa-minus hidden"></i> </i> </button> <button class="button"> <i class="fas fa-circle maximize"> <i class="fas fa-expand-alt hidden" style="font-size: 0.6em;"></i> </i> </button> </div><span class="title"> Field Trips </span> </nav> <section class="main"> <div class="gallery"> <div class="view"> <img src="./src/images/gallery/field_trips/IMG-4b8a27fb3ec5b4313103f06ed115f28d-V-min.jpg" alt="image" class="image"> </div><div class="preview"> <img src="./src/images/gallery/field_trips/IMG-4b8a27fb3ec5b4313103f06ed115f28d-V-min.jpg" alt="image" class="image"> <img src="./src/images/gallery/field_trips/Copy-of-20181004_125057-min.jpg" alt="image" class="image"> <img src="./src/images/gallery/field_trips/IMG-c43b5a519e90ced22dccc3ea3cc8a174-V-min.jpg" alt="image" class="image"> <img src="./src/images/gallery/field_trips/IMG_5230.jpg" alt="image" class="image"> <img src="./src/images/gallery/field_trips/IMG_3239.jpg" alt="image" class="image"> </div></div></section>'
    },
    museums: {
        x: main.clientHeight * 0.924 + 'px',
        y: '0.1vw',
        width: 'calc(var(--regular-window-size) - 1%)',
        height: 'auto',
        html: '<nav class="top"> <div class="buttons"> <button class="button"> <i class="fas fa-circle close"> <i class="fas fa-times hidden"></i> </i> </button> <button class="button"> <i class="fas fa-circle minimize"> <i class="fas fa-minus hidden"></i> </i> </button> <button class="button"> <i class="fas fa-circle maximize"> <i class="fas fa-expand-alt hidden" style="font-size: 0.6em;"></i> </i> </button> </div><span class="title"> Museums </span> </nav> <section class="main"> <div class="gallery"> <div class="view"> <img src="./src/images/gallery/museums/20190228_125824-min.jpg" alt="image" class="image"> </div><div class="preview"> <img src="./src/images/gallery/museums/20190228_125824-min.jpg" alt="image" class="image"> <img src="./src/images/gallery/museums/20190228_125824 (1)-min.jpg" alt="image" class="image"> <img src="./src/images/gallery/museums/20181220_135913.jpg" alt="image" class="image"> <img src="./src/images/gallery/museums/Copy-of-IMG_4526.jpg" alt="image" class="image"> <img src="./src/images/gallery/museums/IMG_0035-1.jpg" alt="image" class="image"> </div></div></section>'
    },
    distance_learning: {
        x: '0.1vw',
        y: '0.1vw',
        width: 'calc(var(--regular-window-size) - 1%)',
        height: 'auto',
        html: '<nav class="top"> <div class="buttons"> <button class="button"> <i class="fas fa-circle close"> <i class="fas fa-times hidden"></i> </i> </button> <button class="button"> <i class="fas fa-circle minimize"> <i class="fas fa-minus hidden"></i> </i> </button> <button class="button"> <i class="fas fa-circle maximize"> <i class="fas fa-expand-alt hidden" style="font-size: 0.6em;"></i> </i> </button> </div><span class="title"> Distance Learing </span> </nav> <section class="main"> <div class="teachers"> <div class="logo"> <img src="./src/images/DLS.PNG" alt="image" class="image"> </div><div class="text"> <span class="info-long"> During the 2020/2021 coronavirus pandemic, schools in Serbia had to shut down, including our\'s. <br>Quality of eduction dropped significantly, because the wheren\'t prepared, students didn\'t have access to classes. <br>But unlike other schools, our\'s was prepared, we immidietly started using the <br>"<b>Distance Learing System</b>" so we can have online classes. </span> </div></div></section>'
    },
    technology_in_class: {
        x: main.clientHeight * 0.924 + 'px',
        y: '0.1vw',
        width: 'calc(var(--regular-window-size) - 1%)',
        height: 'auto',
        html: '<nav class="top"> <div class="buttons"> <button class="button"> <i class="fas fa-circle close"> <i class="fas fa-times hidden"></i> </i> </button> <button class="button"> <i class="fas fa-circle minimize"> <i class="fas fa-minus hidden"></i> </i> </button> <button class="button"> <i class="fas fa-circle maximize"> <i class="fas fa-expand-alt hidden" style="font-size: 0.6em;"></i> </i> </button> </div><span class="title"> Techonlogy + Education </span> </nav> <section class="main"> <div class="teachers"> <div class="logo"> <img src="./src/images/projector.jpg" alt="image" class="image"> </div><div class="text"> <span class="info-long"> Our teachers present the subject using presentation displayed uing a projector, and use a smart board to interact with the computer. <br>Having a visual demontration being shown on the board and having the ability to <br>Request the material from the class uing a computer at home, helps student with education. </span> </div></div></section>'
    },
    activities: {
        x: '-0.2vw',
        y: '0.1vw',
        width: 'calc(var(--regular-window-size) - 1%)',
        height: 'auto',
        html: ' <nav class="top"> <div class="buttons"> <button class="button"> <i class="fas fa-circle close"> <i class="fas fa-times hidden"></i> </i> </button> <button class="button"> <i class="fas fa-circle minimize"> <i class="fas fa-minus hidden"></i> </i> </button> <button class="button"> <i class="fas fa-circle maximize"> <i class="fas fa-expand-alt hidden" style="font-size: 0.6em;"></i> </i> </button> </div><span class="title"> Extracurricular Activities </span> </nav> <section class="main"> <div class="gallery"> <div class="view"> <img src="./src/images/activities/brainfinity.jpeg" alt="image" class="image"> <span class="caption"> Brainifinity competition </span> </div><div class="preview"> <img src="./src/images/activities/brainfinity.jpeg" alt="image" class="image" title="Brainifinity competition"> <img src="./src/images/activities/IthsPosetaOsn.jpg" alt="image" class="image" title="Visit to the Elementary School \'Sava Jovanović Sirogojno\'"> <img src="./src/images/activities/klizanje-1200x630.png" alt="image" class="image" title="Ice Skating for the students"> <img src="./src/images/activities/iths-vaterpolo.png" alt="image" class="image" title="ITHS team participated in the Belgrade Water Polo Championship"> <img src="./src/images/activities/ITHS-kuglanje-sajt.jpg" alt="image" class="image" title="Bowling organized for students"> </div></div></section>'
    },
    actions: {
        x: main.clientHeight * 0.928 + 'px',
        y: '0.1vw',
        width: 'calc(var(--regular-window-size) - 1%)',
        height: 'auto',
        html: '<nav class="top"> <div class="buttons"> <button class="button"> <i class="fas fa-circle close"> <i class="fas fa-times hidden"></i> </i> </button> <button class="button"> <i class="fas fa-circle minimize"> <i class="fas fa-minus hidden"></i> </i> </button> <button class="button"> <i class="fas fa-circle maximize"> <i class="fas fa-expand-alt hidden" style="font-size: 0.6em;"></i> </i> </button> </div><h1 class="title"> Humanitarian Causes </h1> </nav> <section class="main"> <div class="gallery"> <div class="view"> <img src="./src/images/causes/FBIthsGejming.jpg" alt="image" class="image"> <span class="caption"> Humanitarian gaming tournament </span> </div><div class="preview"> <img src="./src/images/causes/FBIthsGejming.jpg" alt="image" class="image" title="Humanitarian gaming tournament"> <img src="./src/images/causes/ITHS_cep.jpg" alt="image" class="image" title="ITHS students participate in the humanitarian action \'Handicap Plug\'"> <img src="./src/images/causes/ITHS_Nurdor.jpg" alt="image" class="image" title="Let\'s be humane: Nurdor and ITHS"> <img src="./src/images/causes/ITHS-kolaz-Humanitarna-akcija-1200x630px.jpg" alt="image" class="image" title="The humanity of ITHS students in action"> <img src="./src/images/causes/Kolaz-ITHS-tirsova.jpg" alt="image" class="image" title="Visit to Tirsova"> </div></div></section>'
    }
}

class Window {
    constructor(type) {
        this.div = document.querySelector('#window-' + type);
        
        if(this.div) //if window exists
            return;

        this.div = document.createElement('div');

        if(!WINDOW_TEMPLATES[type])
            throw new Error('Unknown window template!');

        this.div.innerHTML = WINDOW_TEMPLATES[type].html;

        if(window.innerWidth > window.innerHeight) { //if on desktop
            this.div.style.position = 'absolute';
            this.div.style.left = WINDOW_TEMPLATES[type].x;
            this.div.style.top = WINDOW_TEMPLATES[type].y;
        }

        this.div.id = 'window-' + type;
        this.type = type;
        this.div.className = 'window';
        this.can_be_moved = true;
        this.setMovementHandler();
    }

    setMovementHandler() {
        const top = this.div.querySelector('.top');
        const close = this.div.querySelector('.window .top .buttons .button .close').parentNode;
        const minimize = this.div.querySelector('.window .top .buttons .button .minimize').parentNode;
        const maximize = this.div.querySelector('.window .top .buttons .button .maximize')?.parentNode;
        const buttons_div = this.div.querySelector('.window .top .buttons');

        top.addEventListener('mouseover', e => {
            if(e.target === top)
                window.CURSOR = 'openhand';

            if(!this.can_be_moved)
                window.CURSOR = 'arrow';
        });

        top.addEventListener('mouseleave', () => window.CURSOR = 'arrow');

        buttons_div.addEventListener('mouseover', () => window.CURSOR = 'pointinghand');
        buttons_div.addEventListener('mouseleave', () => window.CURSOR = this.can_be_moved ? 'openhand' : 'arrow');

        top.addEventListener('mousedown', e => {
            if(!this.can_be_moved)
                return;

            window.CURSOR = 'closedhand';

            let winX = parseInt(getComputedStyle(this.div)['left']) || 0;
            let winY = parseInt(getComputedStyle(this.div)['top']) || 0;

            start_pos[0] = e.x - winX;
            start_pos[1] = e.y - winY;
            current_window = this.div;

            // if(this.div.parentNode.lastElementChild != this.div) //if not no top, bring it
            //     this.div.parentNode.appendChild(this.div);
    
            this.div.style.transition = 'none';

            this.div.style.zIndex = '5';

            //set clicked window to top
            document.querySelectorAll('#main .window').forEach(w => {
                if(w !== this.div)
                    w.style.zIndex = '1';
            });
        });

        top.addEventListener('mouseup', () => window.CURSOR = this.can_be_moved ? 'openhand' : 'arrow');
    
        close.addEventListener('click', () => {
            this.div.remove();
        });
    
        minimize.addEventListener('click', () => {
            this.can_be_moved = true;
            this.div.style.position = 'relative';
            // this.div.style.minWidth = '0';
            // this.div.style.minHeight = '0';
            this.div.style.width = WINDOW_TEMPLATES[this.type].width;
            this.div.style.height = WINDOW_TEMPLATES[this.type].height;
            this.div.style.transition = '1s';
        });
        
        if(maximize) {
            maximize.addEventListener('click', () => {
                this.can_be_moved = false;
                this.div.style.position = 'absolute';
                this.div.style.width = '98.9%';
                this.div.style.height = '94.6%';
                this.div.style.left = '0';
                this.div.style.top = '0';
                this.div.style.transition = '1s';
            });
        }
    }
}

function setGallerySetting(win) {
    const image = win.div.querySelector('.view .image');
    const caption = win.div.querySelector('.view .caption');
    const images = win.div.querySelectorAll('.gallery .preview .image');
    let prev_image = images[0];

    images.forEach(img => {
        img.addEventListener('click', () => {
            if(caption)
                caption.innerText = img.title;
            
            image.src = img.src;
            prev_image.style.border = 'none';
            img.style.border = 'solid 0.2rem orange';
            prev_image = img;

        });

        window.UNLOADED_IMAGES++;
        
        img.addEventListener('load', () => {
            window.UNLOADED_IMAGES--;
        });
    });
}

function createWindows(page) {
    main.innerHTML = '';

    switch(page) {
        case '':
        case 'About':
            let about = new Window('about');
            main.appendChild(about.div);

            let teachers = new Window('teachers');
            main.appendChild(teachers.div);

            let founders = new Window('founders');
            main.appendChild(founders.div);
            break;

        case 'Modern Education':
            let distance_learning = new Window('distance_learning');
            main.appendChild(distance_learning.div);

            let technology_in_class = new Window('technology_in_class');
            main.appendChild(technology_in_class.div);
            break;

        case 'Gallery':
            let field_trips = new Window('field_trips');
            main.appendChild(field_trips.div);

            let museums = new Window('museums');
            main.appendChild(museums.div);

            setGallerySetting(field_trips);
            setGallerySetting(museums);
            break;

        case 'Student Life':
            let activities = new Window('activities');
            main.appendChild(activities.div);

            let actions = new Window('actions');
            main.appendChild(actions.div);

            setGallerySetting(activities);
            setGallerySetting(actions);
            break;
    }
}
// movementHandler();