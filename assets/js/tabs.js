$(document).ready(function(){
  $( '#nav-tab a' ).tabs('select', 0);
  $('#nav-tab a').on('click', function (event) {
    event.preventDefault()
    console.log(this);
    $(this).tab('show')
  })
});
