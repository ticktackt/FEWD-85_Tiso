
$(document).on('ready', function() {
  $('.readmore').on('click', handleReadMore);
  $('.readless').on('click', handleReadLess);
  $('.learnmore').on('click', handleLearnMore);
});


function handleReadMore(event) {
  event.preventDefault();
  $(event.target)
    .closest('.post')
    .find('.hide')
    .slideDown()
    .show();
 // $('.hide').slideDown().show();
 $(event.target).closest('.readmore').slideUp();
}

function handleReadLess(event) {
  event.preventDefault();
  $(event.target)
  .closest('.post')
  .find('.hide')
  .slideUp();
  $(event.target).closest('.readmore').slideDown(); 

}

function handleLearnMore(event) {
  event.preventDefault();
  $('#sidebar .hide').show();
  $('.learnmore').hide();
}

