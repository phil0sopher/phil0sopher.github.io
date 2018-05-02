if ( $(window).width() > 416) {      
  //Add your javascript for larger screens
} 
else {
  $('iframe.disable_mobile').attr('src','null'); 
}

  var elem = document.querySelector('.materialboxed');
  var instance = M.Materialbox.init(elem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
        
