function focus() {
    // select all input fields
    Array.from(document.querySelectorAll('input')).forEach(i => {
        i.addEventListener('focus', onFocus);
        i.addEventListener('blur', onBlur);
    });


    function onFocus(event) {
        // onFocus -> select input parent -> apply class "focused"
        event.target.parentNode.className = 'focused';

    }

    function onBlur(event) {
        // onBlur -> select input parent -> remove class "focused"
        event.target.parentNode.className = '';

    }
}
