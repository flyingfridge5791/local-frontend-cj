$(document).ready(function() {

    const btn = document.querySelector('#alert');

    const form = document.querySelector('#loginForm');

    btn.addEventListener('click', function(){
        alert('Warning JS')
    })
    //vanlig JS ovan
    //jQuery

    $('#alert').click(function(){
        alert('Warning jQuery')
    })

    btn.addEventListener('mouseup', function(){
        alert('Warning')
    })

    form['firstName'].addEventListener('keydown', (event) => {
        console.log(event);
    })
  
    form['firstName'].addEventListener('focus', function() {
        this.classList.add('focus');
    })

    form['firstName'].addEventListener('blur', function() {
        console.log('gick bort från input')
        this.classList.remove('focus');
    })
})