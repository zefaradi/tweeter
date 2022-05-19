$(document).ready(function() {

  $('#tweet-text').on('keydown', function () {
    let $words = $(this).val().length;
    const $counter = $('output.counter');
    let $totalWords = 140 - $words;
    console.log("words:", $words);
    $counter.text($totalWords);
    
    if ($words > 140) {
      $counter.addClass("error")
    } else {
      $counter.removeClass("error")
    }
  })
});