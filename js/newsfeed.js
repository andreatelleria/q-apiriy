 $(document).ready(function() {
    var myphoto = localStorage.getItem('imgprofile');
    var $imgid = $('                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               #imgprofile');
    $imgid.attr('src', myphoto);  

     // Initialize collapse button
 $(".button-collapse").sideNav();
 // Initialize collapsible (uncomment the line below if you use the dropdown variation)
 //$('.collapsible').collapsible();

 
  //Funcionalidad para que podamos hacer nuevas publicaciones en nuestro perfil
  var textArea = $('#text-area');
  textArea.on('keyup', function (e) {
    //console.log(event.target);
    //console.log($(this).val());
    //console.log($(this).val().length);
    if ($(this).val().length > 5) {
      $(this).css('color', 'teal');
      $('#post-btn').attr('disabled', false);
    }
  });

  $('#post-btn').on('click', function (e) {
    event.preventDefault()
    var textValue = textArea.val();
    $('.profile-posts-container').prepend('<div class="profile-post">' + textValue + '</div>');
    textArea.val('');
  });
 });
