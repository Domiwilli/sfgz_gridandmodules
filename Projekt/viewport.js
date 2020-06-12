/**
 * Created by hzuellig on 04.06.20.
 */


/**
 * Hier allenfalls die Klassennamen anpassen
 */

const checkviewclass = ".checkview"; //Klasse der Elemente, die gecheckt werden sollen
const inviewclass = "isinview"; //Klasse die gesetzt wird, falls Element im viewport ist
/**
 * Ab hier nichts aendern!!
 */

const IsInView = el => {
    const boundsTop = el.getBoundingClientRect().top

    let offset = 0;
    if(el.getAttribute('data-attr-offset')!==null){
        offset = parseInt(el.getAttribute('data-attr-offset'))
    }


    const viewport = {
        top: 0 - offset,
        bottom: window.innerHeight - offset,
    }

    console.log(viewport.top)
    console.log(viewport.top)

    const bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight
    }


    return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom )
        || ( bounds.top  <= viewport.bottom && bounds.top >= viewport.top )
        || (bounds.top <= viewport.top && bounds.bottom >= viewport.bottom);
}




document.addEventListener( 'DOMContentLoaded', () => {

    const elements = document.querySelectorAll(checkviewclass)
    const handler = () => raf( () => {
    for (let i = 0; i < elements.length; i++)
{


    if (IsInView(elements[i])) {
        elements[i].classList.add(inviewclass)
    }else{
        elements[i].classList.remove(inviewclass)
    }
}
} )

handler()
window.addEventListener( 'scroll', handler )
} )

const raf =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60)
    }
