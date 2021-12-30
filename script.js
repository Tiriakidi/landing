let projectsInfo = [{
        src: './images/completed_rostov.jpg',
        alt: 'rostov appartmets',
        city: 'Rostov-on-Don <br>LCD admiral',
        area: '81 m2',
        time: '3.5 months'
    },{
        src: './images/completed_sochi.jpg',
        alt: 'sochi appartmet',
        city: 'Sochi <br>Thieves',
        area: '105 m2',
        time: '4 months'
    },{
        src: './images/completed_rostov_patriotic.jpg',
        alt: 'rostov appartmet in Patriotic',
        city: 'Rostov-on-Don <br>Patriotic',
        area: '93 m2',
        time: '3 months'
}];

//IMAGE
let sliderImage = document.querySelector('.pr-image');

//DESCRIPTIONS
let descCity = document.querySelector('.pr-more__desc-city');
let descArea = document.querySelector('.pr-more__desc-area');
let descTime = document.querySelector('.pr-more__desc-time');

function setProjectsInfo (index) {
    sliderImage.dataset.index = index;
    sliderImage.src = projectsInfo[index].src;
    sliderImage.alt = projectsInfo[index].alt;
    descCity.innerHTML = projectsInfo[index].city;
    descArea.innerHTML = projectsInfo[index].area;
    descTime.innerHTML = projectsInfo[index].time;   

    document.querySelectorAll('.active').forEach(elem => elem.classList.remove('active'));
    document.querySelectorAll(`[data-index="${index}"]`).forEach(elem => elem.classList.add('active'));
};

//ARROWS
document.querySelectorAll('.slider-arrow').forEach(arrow => {    
    arrow.addEventListener('click', function() {
        let curNumber = +sliderImage.dataset.index;
        let nextNumber;
        if (arrow.classList.contains('left')) {
            nextNumber = curNumber === 0 ? projectsInfo.length - 1 : curNumber - 1;
        } else {
            nextNumber = curNumber === projectsInfo.length - 1 ? 0 : curNumber + 1;
        }
        setProjectsInfo(nextNumber);
    });
});

//DOTS and LINKS

document.querySelectorAll('.slider_options').forEach(function (option) {
    option.addEventListener('click', function (event) {
        event.preventDefault();
        setProjectsInfo(+this.dataset.index);       
    });
});




