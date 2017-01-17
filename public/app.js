  var endtime = '2050-01-01';

 function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 12091 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);


  // var MOCK_STATUS_UPDATES = {
  //     "statusUpdates": [
  //         {
  //             "id": "1111111",
  //             // "text": "Can't believe how much fun I'm having.",
  //             "friendId": "aaaaaa",
  //             "friendName": "John Doe",
  //             "publishedAt": 1470016976609
  //         },
  //         {
  //             "id": "2222222",
  //             // "text": "Have FOMO? Well you SHOULD!",
  //             "friendId": "bbbbbbb",
  //             "friendName": "Jane Doe",
  //             "publishedAt": 1470012976609
  //         },
  //         {
  //             "id": "333333",
  //             // "text": "They're giving out immortality and free $$$ where I am.",
  //             "friendId": "cccc",
  //             "friendName": "Jim Doe",
  //             "publishedAt": 1470011976609
  //         },
  //         {
  //             "id": "4444444",
  //             // "text": "humble brag humble brag humble brag",
  //             "friendId": "ddddd",
  //             "friendName": "Jackie Doe",
  //             "publishedAt": 1470009976609
  //         }
  //     ]
  // };

  function getRecentStatusUpdates(callbackFn) {
      setTimeout(function(){ callbackFn(MOCK_STATUS_UPDATES)}, 100);
  }

  // this function stays the same when we connect
  // to real API later
  function displayStatusUpdates(data) { 
      for (index in data.statusUpdates) {
          $('.data_results').append(
              '<p>' + data.statusUpdates[index].text + '</p>');
      }
  }

  // this function can stay the same even when we
  // are connecting to real API
  function getAndDisplayStatusUpdates() {
      getRecentStatusUpdates(displayStatusUpdates);
  }

  $(function() {
      getAndDisplayStatusUpdates();
      
  })
  
  }):