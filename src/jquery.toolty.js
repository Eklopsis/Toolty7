/*
 * TooltyJS jQuery plugin unminified - version 0.0.1
 * https://github.com/Eklopsis/TooltyJS
 *
 * @author Eklopsis <iamguillaumepe@gmail.com>
 *
 */

$(function() {
  $(document).on('mouseover', '[tooltip]', function() {
    var direction = $(this).attr('tooltip-direction'),
        content = $(this).attr('tooltip-content');

    var this_width = parseInt($(this).css('width')),
        this_height = parseInt($(this).css('height')),
        this_top = parseInt($(this).offset().top),
        this_left = parseInt($(this).offset().left);

    var new_top = null,
        new_left = null;

    $('body').prepend('<div class="tooltip" direction="' + direction + '">' + content + '</div>');

    var tooltip_width = parseInt($('.tooltip').css('width')),
        tooltip_height = parseInt($('.tooltip').css('height'));

    if (direction == 'left') {
      new_top = (this_top + ((this_height/2) - (tooltip_height/2))) + 'px';
      new_left = (this_left - (tooltip_width + 10)) + 'px';
    } else if (direction == 'right') {
      new_top = (this_top + ((this_height/2) - (tooltip_height/2))) + 'px';
      new_left = (this_left + (this_width + 10)) + 'px';
    } else if (direction == 'bottom') {
      new_top = (this_top + (tooltip_height + 10)) + 'px';
      new_left = (this_left + ((this_width/2) - (tooltip_width/2))) + 'px';
    } else if (direction == 'top') {
      new_top = (this_top - (this_height + 10)) + 'px';
      new_left = (this_left + ((this_width/2) - (tooltip_width/2))) + 'px';
    }

    $('.tooltip').animate({'top': new_top, 'left': new_left }, 0).fadeIn(0);
  });

  $(document).on('mouseout', '[tooltip]', function(e) {
    $('.tooltip').remove(); }
  );
});
