var range = $('.input-range__main'),
    value = $('.input-range__main-value');

value.html(range.attr('value'));

range.on('input', function(){
  value.html(this.value);
});

range.on('input', function() {
    value.css("font-weight".value);
});
