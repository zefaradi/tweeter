$(document).ready(function() {
  // --- our code goes here ---
  // $('.submit-btn').on('click', function (event) {
  //   event.preventDefault();
  //   alert("fire");
  // })

  $('#tweet-text').on('keydown', function () {
    let $words = $(this).val().length;
    const $counter = $('output.counter');
    let $totalWords = 140 - $words;
    console.log("words:", $words);
    // console.log($(this));
    // console.log("counter:", counter);
    // counter -= words;
    $counter.text($totalWords);
    
    if ($words > 140) {
      $counter.addClass("error")
    } else {
      $counter.removeClass("error")
    }
  })
});