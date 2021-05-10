$(document).ready(function(){
  $('#nav-tabContent').tabs('select', 0);
  $('#nav-tab a').on('click', function (event) {
    event.preventDefault()
    console.log(this);
    $(this).tab('show')
  })
});
