(function($) {

	"use strict";

	var $html = $("html");

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var global_functions = {
    	init: function() {
    		var self = this;

            self.partials();
            self.rellax();
            self.scroll();
    	},

        partials: function() {
            $(".menu-m").click(function() {
                $(".mobile-nav").toggleClass('active-menu');
            })
            
            $(".close-m").click(function() {
                $(".mobile-nav").toggleClass('active-menu');
            })

            var map = L.map('map').setView([-6.293506, 106.812852], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            var LeafIcon = L.Icon.extend({
                options: {
                    shadowUrl: 'leaf-shadow.png',
                    iconSize:     [38, 95],
                    shadowSize:   [50, 64],
                    iconAnchor:   [22, 94],
                    shadowAnchor: [4, 62],
                    popupAnchor:  [-3, -76]
                }
            });

            var greenIcon = new LeafIcon({iconUrl: 'static/landing/images/who-we-are.svg'});

            L.marker([-6.293506, 106.812852], {icon: greenIcon}).addTo(map);
        },

        rellax: function() {
            var rellax = new Rellax('.rellax', {
                speed: -2,
                center: false,
                wrapper: null,
                round: true,
                vertical: true,
                horizontal: false
            });

            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                autoplay: true,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            })
        },

        scroll: function() {
            $("#home").click(function() {
                $('html, body').animate({
                    scrollTop: $(".hero-section").offset().top -200
                }, 2000);
            });

            
            $("#about").click(function() {
                $('html, body').animate({
                    scrollTop: $(".about-section").offset().top -200
                }, 2000);
            });

            
            $("#feature").click(function() {
                $('html, body').animate({
                    scrollTop: $(".features").offset().top -400
                }, 2000);
            });

            $("#contact").click(function() {
                $('html, body').animate({
                    scrollTop: $(".contact-us").offset().top -400
                }, 2000);
            });
        }
    };

    $(document).ready(function() {
        global_functions.init();
    });

})(jQuery);
