// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui/sortable
//= require jquery-ui/effect-highlight
//= require_tree .



jQuery(function() {

  $('.submittable').click(function() {
    $(this).parents('form:first').submit();
  });

  var cells, desired_width, table_width;
  if ($('#sortable').length > 0) {
    table_width = $('#sortable').width();
    cells = $('#sortable').find('tr')[0].cells.length;
    desired_width = table_width / cells + 'px';
    $('.table td').css('width', desired_width);
    return $('#sortable').sortable({
      axis: 'y',
      items: '.item',
      cursor: 'move',
      sort: function(e, ui) {
        return ui.item.addClass('active-item-shadow');
      },
      stop: function(e, ui) {
        ui.item.removeClass('active-item-shadow');
        return ui.item.children('td').effect('highlight', {}, 1000);
      },
      update: function(e, ui) {
        var item_id, position;
        item_id = ui.item.data('item-id');
        console.log(item_id);
        position = ui.item.index();
        console.log(position);

        return $.ajax({
          type: 'POST',
          url: '/tasks/update_row_order',
          dataType: 'json',
          data: {
            task: {
              task_id: item_id,
              row_order_position: position
            }
          }
        });
      }
    });
  }
});
