
$(document).ready(function(){
  $('.datepicker').datepicker();
  $('.modal').modal();
  $('select').formSelect();

});
document.addEventListener('click', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});

function select(){
  $('select').formSelect();
}
function modal(){
  $('.modal').modal();
}
