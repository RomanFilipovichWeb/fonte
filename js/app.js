		$(document).ready(function(){
				$('.slider').slick({
					arrows:false,
					dots:true,
					slidesToShow:1,
					autoplay:true,
					speed:500
				});
			});

			$(document).ready(function(){
			$('.blog__slider').slick({
				arrows:true,
				dots:true,
				slidesToShow:3,
				autoplay:true,
				speed:500,
				responsive:[
				{
					breakpoint: 990,
					settings: {
						slidesToShow:2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow:2
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow:1
					}
				}
			]
			});
		});

		document.addEventListener('DOMContentLoaded', function() {

		   var modalButtons = document.querySelectorAll('.js-open-modal'),
		       overlay      = document.querySelector('.js-overlay-modal'),
		       closeButtons = document.querySelectorAll('.js-modal-close');


		   modalButtons.forEach(function(item){

		      item.addEventListener('click', function(e) {

		         e.preventDefault();

		         var modalId = this.getAttribute('data-modal'),
		             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

		         modalElem.classList.add('active');
		         overlay.classList.add('active');
		      });

		   });

		   closeButtons.forEach(function(item){

		      item.addEventListener('click', function(e) {
		         var parentModal = this.closest('.modal');

		         parentModal.classList.remove('active');
		         overlay.classList.remove('active');
		      });

		   });

		    document.body.addEventListener('keyup', function (e) {
		        var key = e.keyCode;

		        if (key == 27) {

		            document.querySelector('.modal.active').classList.remove('active');
		            document.querySelector('.overlay').classList.remove('active');
		        };
		    }, false);

		    overlay.addEventListener('click', function() {
		        document.querySelector('.modal.active').classList.remove('active');
		        this.classList.remove('active');
		    });
		})

		/* Nav */

		const toggleBurger = document.getElementsByClassName('toggle-button')[0]
		const navbarLinks = document.getElementsByClassName("navbar-link")[0]

		toggleBurger.addEventListener("click", () => {
			toggleBurger.classList.toggle("active");
			navbarLinks.classList.toggle("active");
		})

		document.querySelectorAll(".navbar-links").forEach(n => n.addEventListener("click", () => {
			toggleBurger.classList.remove("active");
			navbarLinks.classList.remove("active");
		}))

		/* Filter*/

		let filter = $("[data-filter]");

	    filter.on("click", function(event) {
	        event.preventDefault();

	        let cat = $(this).data('filter');

	        if(cat == 'all') {
	            $("[data-cat]").removeClass("hide");
	        } else {
	            $("[data-cat]").each(function() {
	                let workCat = $(this).data('cat');

	                if(workCat != cat) {
	                    $(this).addClass('hide');
	                } else {
	                    $(this).removeClass('hide');
	                }
	            });
	        }
	    });
