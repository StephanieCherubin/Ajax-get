console.log('jQueryGet loaded');

//Callback is a block of code
//that executes when an event occurs.


$(function () {
  // on document load
  $('#github').click(function (evt) {
// on github click
    evt.preventDefault();

    const url = 'https://api.github.com/users/stephaniecherubin';
// get data from url
    $.get(url, function(result) {
      getData(result);
      $('#output').append(getData(result));
    });
  });
})


function getData(result) {
  let output = ''
  output += '<ul>'
  for (const key in result) {
    output += '<li><strong>';
    output += key +  ": " + result[key];
    output += '</li>';

    }
    output += '</ul>';
    return output;
  }


// EventBinding: Binding the Callback getData

// In other words, I’ve created a function
// bound to an event. When the event happens -
// I get my HTTP response -
// then the function is executed.
// This is what it means to be an “event-oriented” language
