import $ from 'jquery';
import { User } from './calculator.js';

$(document).ready(function() {
  $('#mercury').click(function(event) {

    console.log('jquery is working');
    event.preventDefault();

    const userAge = parseFloat($('#user-age').val());
    console.log(userAge);

    let mercAge = new User(userAge);
    console.log(mercAge.mercAge());

    let venAge = new User(userAge);
    console.log(venAge.venAge());

    let marAge = new User(userAge);
    console.log(marAge.marAge().toFixed(1));

    let jupAge = new User(userAge);
    console.log(jupAge.jupAge().toFixed(1));
  });
});
