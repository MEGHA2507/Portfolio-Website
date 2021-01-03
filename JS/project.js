window.onscroll = function () {
    scrolling();
};

function scrolling(event) {

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    if (winScroll === height) {
        // console.log('max height reached');

        if (document.querySelector('.scroll-indicator-down').classList.contains('show')) {
            document.querySelector('.scroll-indicator-down').classList.remove('show');
            document.querySelector('.scroll-indicator-down').classList.add('hide');
            document.querySelector('.scroll-indicator-up').classList.remove('hide');
            document.querySelector('.scroll-indicator-up').classList.add('show');
        } else {
            document.querySelector('.scroll-indicator-down').classList.add('hide');
            document.querySelector('.scroll-indicator-up').classList.remove('hide');
            document.querySelector('.scroll-indicator-up').classList.add('show');
        }
    }
    if (winScroll === 0) {
        console.log('min height of page');
        if (document.querySelector('.scroll-indicator-up').classList.contains('show')) {
            document.querySelector('.scroll-indicator-up').classList.remove('show');
            document.querySelector('.scroll-indicator-up').classList.add('hide');
            document.querySelector('.scroll-indicator-down').classList.remove('hide');
            document.querySelector('.scroll-indicator-down').classList.add('show');
        } else {
            document.querySelector('.scroll-indicator-up').classList.add('hide');
            document.querySelector('.scroll-indicator-down').classList.remove('hide');
            document.querySelector('.scroll-indicator-down').classList.add('show');
        }

    }
}

function showprojectDetails(event){
    const project = event.target;

    if(project.parentElement.nextSibling.nextSibling.classList.contains('hide')){
        project.parentElement.nextSibling.nextSibling.classList.remove('hide');
        project.parentElement.nextSibling.nextSibling.classList.add('show');
    }
    else{
        project.parentElement.nextSibling.nextSibling.classList.remove('show');
        project.parentElement.nextSibling.nextSibling.classList.add('hide');
    }
}