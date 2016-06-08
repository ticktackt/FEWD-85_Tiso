/*
Title underlines on mouseover.

Navbar in the sidebar.
  On hover, drop down of other page links drops down.
    Might use jquery navbar plug in for more responsive navigation.

Bottom <ol> of related posts.
  On hover title underlines. 
*/

$(document).on('ready', function() {
  $('.readmore').on('click', handleReadMore);
  $('.readless').on('click', handleReadLess);
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
  $(event.target).closest('.readmore').slideDown();}




