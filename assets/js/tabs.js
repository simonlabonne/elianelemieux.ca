$(document).ready(function(){
  $('#nav-tab a').on('click', function (event) {
    event.preventDefault()
    $(this).tab('show')
  })
});
