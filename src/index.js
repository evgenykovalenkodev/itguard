function textAreaAdjust(o) {
    o.style.height = "1px";
    o.style.height = (25+o.scrollHeight)+"px";
}
let inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
    let label	 = input.nextElementSibling,
        labelVal = label.innerHTML;
    input.addEventListener( 'change', function( e )
    {
        let fileName = '';
        if( this.files && this.files.length > 1 )
            fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
            fileName = e.target.value.split( '\\' ).pop();

        if( fileName )
            label.querySelector( 'span' ).innerHTML = fileName;
        else
            label.innerHTML = labelVal;
    });
    input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
    input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
});
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}
function f() {
    let one = document.getElementById('collapseOne');
    let onePic = document.getElementById('one');
    let home = document.getElementById('home');
    if(one.classList.contains('show') === false) {
        home.classList.add('border-my');
        onePic.src = './img/home_active.svg'
    } else {
        home.classList.remove('border-my');
        onePic.src = './img/home.svg'
    }
}
function ff() {
    let two = document.getElementById('collapseTwo');
    let twoPic = document.getElementById('two');
    let house = document.getElementById('house');
    if(two.classList.contains('show') === false) {
        house.classList.add('border-my');
        twoPic.src = './img/house_active.svg'
    } else {
        house.classList.remove('border-my');
        twoPic.src = './img/house.svg'
    }
}
function fff() {
    let three = document.getElementById('collapseThree');
    let threePic = document.getElementById('three');
    let office = document.getElementById('office');
    if(three.classList.contains('show') === false) {
        office.classList.add('border-my');
        threePic.src = './img/office_active.svg'
    } else {
        office.classList.remove('border-my');
        threePic.src = './img/office.svg'
    }
}
function ffff() {
    let four = document.getElementById('collapseFour');
    let quest = document.getElementById('quest');
    if(four.classList.contains('show') === false) {
        quest.classList.add('border-my');
    } else {
        quest.classList.remove('border-my');
    }
}
window.onload = function () {
    document.body.onclick = function (e) {
        e = e || event;
        let target = e.target || e.srcElement;
        let one = document.getElementById('collapseOne');
        let onePic = document.getElementById('one');
        let home = document.getElementById('home');
        let two = document.getElementById('collapseTwo');
        let twoPic = document.getElementById('two');
        let house = document.getElementById('house');
        let three = document.getElementById('collapseThree');
        let threePic = document.getElementById('three');
        let office = document.getElementById('office');
        let four = document.getElementById('collapseFour');
        let quest = document.getElementById('quest');
        if (target.id !== "one") {
            one.classList.remove('show');
            onePic.src = './img/home.svg';
            home.classList.remove('border-my')
        } if (target.id !== "two") {
            two.classList.remove('show');
            twoPic.src = './img/house.svg';
            house.classList.remove('border-my')
        } if (target.id !== "three") {
            three.classList.remove('show');
            threePic.src = './img/office.svg';
            office.classList.remove('border-my')
        } if (target.id !== "four") {
            four.classList.remove('show');
            quest.classList.remove('border-my')
        }
    }
};
let one = document.getElementById('collapseOne');
let onePic = document.getElementById('one');
let home = document.getElementById('home');
let two = document.getElementById('collapseTwo');
let twoPic = document.getElementById('two');
let house = document.getElementById('house');
let three = document.getElementById('collapseThree');
let four = document.getElementById('collapseFour');
let threePic = document.getElementById('three');
let office = document.getElementById('office');
let quest = document.getElementById('quest');
let myScrollFunc = function () {
    let y = window.scrollY;
    if (y >= 1500 || y == 0 ) {
        home.classList.remove('border-my');
        house.classList.remove('border-my');
        office.classList.remove('border-my');
        quest.classList.remove('border-my');
        one.classList.remove('show');
        onePic.src = './img/home.svg';
        two.classList.remove('show');
        twoPic.src = './img/house.svg';
        three.classList.remove('show');
        threePic.src = './img/office.svg';
        four.classList.remove('show');
    }
};
