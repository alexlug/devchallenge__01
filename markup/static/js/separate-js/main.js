/**
 * Created by alexlug on 02.05.2017.
 */

if (!('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)) {
    $('body').addClass('no-touch');
}
