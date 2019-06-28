import $ from 'jquery';
import { User } from './calculator.js';

$(document).ready(function() {
  $('#mercury').click(function(event) {
    console.log('jquery is working');
    event.preventDefault();
    const userAge = parseFloat($('#user-age').val());
    console.log(userAge);
    let planetAge = new User(userAge);
    console.log(planetAge.mercAge());
  });
});
