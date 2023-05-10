var $count = 0;

var $eb = $('.edit-button');
var $ei = $('.editable-input');
var $ec = $('.editable-cell');

//Editable input fields
$eb.on('click', function() {
  $count++
  if ($count < 2) {
    $ei.prop('readonly', false).focus();
    $ei.prop('placeholder','');
    $ei.val('');
    $(this).addClass('hide');
    $ec.addClass('editing');
  } else {
    $ei.prop('readonly', false).focus();
    $eb.addClass('hide');
    $ec.addClass('editing');
  }
});


$ei.on('blur', function() {
  $eb.removeClass('hide');
  $ei.prop('readonly', true);
  $ec.removeClass('editing');
});
