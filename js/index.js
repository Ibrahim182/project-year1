// if there is a field are an empty will invalid

(function() {
  'use strict';
  window.addEventListener('load', function() {

    // form that we wanna to cheack it

    var forms = document.getElementsByClassName('needs-validation');

    // Loop for input 

    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
