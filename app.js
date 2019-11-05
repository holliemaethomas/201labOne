'use strict';

var greeting = alert('Greetings Stranger!');

var userName = prompt('how about we start with a name?').toUpperCase();
console.log(' the users name is ' + userName);

var greetingWithName = alert('Ok, ' + userName + ' Guess we are not strangers anymore');

var likeToRead = function () {
  let question = prompt('Do you like to read? please answer yes or no').toUpperCase();

  console.log(userName + ' answered ' + question);

  if (question === 'NO') {
    alert(userName + ', you are no fun');
    console.log(userName + ' entered ' + question);
  }
  if (question === 'YES') {
    alert('Me too! I read almost a book a month');
  }
};

likeToRead();

var eatSpaghetti = function () {
  let question = prompt('Do you like spaghetti?').toUpperCase();

  console.log(userName + ' answered ' + question);

  if (question === 'NO') {
    alert(userName + 'YOU MONSTER!');
    console.log(userName + ' answered ' + question);
  }
  if (question === 'YES') {
    alert('Thats right ' + userName + ' only monsters do not like spaghetti');
  }
};

eatSpaghetti();

var likeCats = function () {
  let question = prompt('Do you like cats?').toUpperCase();

  console.log(userName + ' answered ' + question);

  if (question === 'NO') {
    alert(userName + 'Not even spaghetti cats?????');
    console.log(userName + ' answered ' + question);
  }
  if (question === 'YES') {
    alert('ok, but what if they were in spaghetti?');
  }
};

likeCats();

var likeSpaghettiCats = function () {
  let question = prompt('Do you like spaghetti cats?, please answer yes or no').toUpperCase();

  console.log(userName + ' answered ' + question);

  if (question === 'NO') {
    alert(userName + 'yeah, that would be weird ' + userName);
    console.log(userName + ' answered ' + question);
  }
  if (question === 'YES') {
    alert('me too ' + userName + 'me too');
  }
};

likeSpaghettiCats();
