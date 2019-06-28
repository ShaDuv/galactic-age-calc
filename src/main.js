import $ from 'jquery';
import { User } from './calculator.js';

$(document).ready(function() {
  $('#trigger').click(function(event) {
    event.preventDefault();
    const userAge = parseFloat($('#user-age').val());
    const userLife = parseFloat($('#life').val());
    let planet = $('input[name = planet]:checked').val();
    let user = new User(userAge, userLife);
    console.log('Age is ' + userAge);
    console.log('Life is ' + userLife);
    console.log(planet);
    console.log(planet + ' age is ' + user.calcAge(planet).toFixed(2));
    console.log(planet + ' life is ' + user.calcLife(planet).toFixed(2));
  });
});
