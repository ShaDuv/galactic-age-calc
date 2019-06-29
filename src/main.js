import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { User } from './calculator.js';

$(document).ready(function() {
  $('#trigger').click(function(event) {
    event.preventDefault();
    const userDOB = ($('#user-age').val());
    const userLife = parseFloat($('#life').val());
    let planet = $('input[name = planet]:checked').val();
    let user = new User(userDOB, userLife);
    console.log('Age is ' + user.age);
    console.log('Life is ' + userLife);
    console.log(planet);
    console.log(planet + ' age is ' + user.calcAge(planet).toFixed(1));
    console.log(planet + ' life is ' + user.calcLife(planet).toFixed(1));
    console.log(user.leftYears(planet).toFixed(1));

  });
});
