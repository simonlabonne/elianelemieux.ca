$(document).ready(function(){
  $('#nav-tab > a:nth-child(1)').addClass('active');
  $('#nav-tabContent > div:nth-child(1)').addClass('active').addClass('show');
  $('#nav-tab a').on('click', function (event) {
    event.preventDefault()
    console.log(this);
    $(this).tab('show')
  })
});
