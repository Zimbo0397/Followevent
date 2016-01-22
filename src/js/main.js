$(document).ready(function() {
  var $btns = $('.sorts-bttns .spans-group');
  
  console.log('load');

  $btns.on('click', function() {
    $btns.removeClass('active');
    $(this).toggleClass('active');

    console.log('1');

    var $list = $('.main-inst-list'),
        $rows = $list.children('.container').children('.row');

    

    if ($(this).hasClass('spans-1')) {
        $list.addClass('list-type-2');

        $rows.children()
        .removeClass('col-md-3')
        .removeClass('col-sm-4')
        .removeClass('col-xs-6')
        .addClass('col-md-12')
        .addClass('col-sm-12')
        .addClass('col-xs-12')
    } else {
        $list.removeClass('list-type-2');

        $rows.children()
        .removeClass('col-md-12')
        .removeClass('col-sm-12')
        .removeClass('col-xs-12')
        .addClass('col-md-3')
        .addClass('col-sm-4')
        .addClass('col-xs-6')
    }    
  });
});
// col-md-3 col-sm-4 col-xs-6


///////////////blueimp-gallery INit///////////////////////
document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};
  $(function() {
    $( "#datepicker" ).datepicker();
  });

        
