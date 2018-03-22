document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function ( event ) {
        const target = event.target;
        if (target.tagName.toLowerCase() == 'a') {
            if (/fiddle/.test(target.href)) {
                event.preventDefault();
                const iframe = document.querySelector('iframe');
                if (iframe.hasAttribute('src')) {
                    iframe.removeAttribute('src');
                } else {
                    iframe.setAttribute('src', target.href);
                }
            }
        }
        if (target.tagName.toLowerCase() == 'button') {
            const anchor = document.querySelectorAll('.sidebar a');
            for (let i = 0; i < anchor.length - 1; i++) {
                if (anchor[i].classList.contains('active')) {
                    anchor[i+1].click();
                }
            }
        }
    });
});

location.hash = '';

docute.init();

docute.router.beforeEach(function ( from, to, next ) {
    const body = document.querySelector('.markdown-body');
    body.classList.add('hide');
    setTimeout(function(){
        body.classList.remove('hide');
    }, 600);
    next();
});

axios
.get('./style.scss')
.then(function (res) {
    Sass.compile(res.data, function callback (result) {
        const div = document.createElement('div');
        div.innerHTML = `<style>${ result.text }</style>`;
        document.head.appendChild(div.firstElementChild);
    });
});