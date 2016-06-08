


/*
  in order to create a new todo:
  grab the value of the input text box
  then, create a new li into the ul '#todos'
  clear text box after new todo is added.
  Find current count div and increase it's value +1.
*/
function createNewTodo(event) {
  event.preventDefault();
  var toDo= $('#newItem').val();
  var newTodoHTML = "<li>" + toDo + "</li>";
  $("#todos").append(newTodoHTML);
  $('#newItem').val('');
  var currentCountText = $('#count').text();
  var currentCountNumber = parseInt(currentCountText, 10);
  var newCurrentCountNumber= currentCountNumber+1;
  $('#count').text(newCurrentCountNumber);

}




/*
  when the page loads, attach these events:
  - clicking on the add button should create a new todo
*/
$(function() {
  $('#newItem').focus();
  $('#add').on('click', createNewTodo);

});