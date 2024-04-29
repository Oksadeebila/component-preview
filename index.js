var card =  document.getElementsByClassName('card');
var cardcontent = document.getElementsByClassName('card-content');
var pdark = document.getElementsByClassName('p-dark');
var button = document.getElementById('button');
function darkMode() {
  document.getElementById("body").classList.toggle("bodyDark");
  document.getElementById("social-dashboard").classList.toggle("social-dashboard__dark");
  for(let i = 0; i < card.length; i += 1) {
    card.item(i).classList.toggle("card__dark");
  }
  for(let i = 0; i< pdark.length; i += 1 ) {
    pdark.item(i).classList.toggle("paragrafDark");
  }
  for(let i = 0; i< cardcontent.length; i += 1) {
    cardcontent.item(i).classList.toggle("card__dark");
  }
  button.classList.toggle("circleLight");
}


// var darkButton = document.getElementById('darkId');
// // var mainPart = document.getElementById('main');
// // var textDashboard = document.getElementById('.social-dashboard');
// // var card = document.getElementById('.cardId');
// // var body = document.getElementById('body');
// // var textFollow = document.getElementById('followerID');

// // darkButton.addEventListener('click', function() {
// //   mainPart.style.backgroundColor = ' hsl(0, 0%,100%)';
// //   body.style.backgroundColor = 'hsl(0, 0%,100%)';
// //   card.style.backgroundColor = 'hsl(227, 47%, 96%)';
// //   textDashboard.style.color = 'hsl(230, 17%, 14%)';
// //   textFollow.style.color = 'hsl(230, 17%, 14%)';
// // });
// darkButton.addEventListener('click', function() {
 

