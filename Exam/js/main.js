"use strict";
	//Grid
$(function () {
	var $grid = $('.grid');
	var vacType = ['Sport', 'Holiday', 'Games', 'Culture', 'Relaxation', 'Travelling'];
	var query = [];
	var amount = 8;
	function create() {
		$grid.html('');
		for (var i = 0; i < 3; i++) {
			for (var _i = 0; _i < 3; _i++) {
				var _rand = Math.random();
				var str = '<div';
				if (_rand > 0.7 && _i < 2) {
					str += ' class="grid__fat"';
					_i++;
				}
				str += '>';
				$grid.append(str);
			}
		}
	}
	create();
	var $div = $('.grid div');

	var rand = Math.random() * vacType.length >> 0;
	$.getJSON('http://pixabay.com/api/?key=2737229-d77c828bc96e9964645663545&q=' + vacType[rand] + '&image_type=photo&per_page=' + $div.length, function (r) {
		//console.log(r);
		//console.log($div.length);
		//console.log(vacType[rand]);
		for (var i = 0; i < $div.length; i++) {
			$div.eq(i).css('background-image', 'url(' + r.hits[i].webformatURL + ')').html(r.hits[i].tags);
		};
	});
	$('form').on('submit', function (e) {
		e.preventDefault();
		e.stopPropagation();
		var word = $('.search__input').val() || '';
		create();
		var $div = $('.grid div');
		$.getJSON('http://pixabay.com/api/?key=2737229-d77c828bc96e9964645663545&q=' + word + '&image_type=photo&per_page' + $div.length, function (r) {
			//console.log(r);
			for (var i = 0; i < $div.length; i++) {
				$div.eq(i).css('background-image', 'url(' + r.hits[i].webformatURL + ')').html(r.hits[i].tags);
			}
		});
	});
});

	//Smooth scrolling to anchor
$(document).ready(function() {
   $(".movement").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 1500,
         easing: "swing"
      });
      return false;
   });
});


