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
            self.animNumber();
			self.preprocess();
            self.sidebar();
            self.select();
            self.card();
            self.module();
            self.alert();
            self.tables();
            self.transfer();
            self.chart();
            self.modeling()
        },
        
        animNumber: function() {
        },

        partials: function() {
            //=include partials/_partials.js
            $('.divide').divide({

                // current delimiter
                delimiter:',',

                // 1000 or 1,000
                divideThousand:true

             });
        },

				preprocess: function() {
                    //--search module--//
                    $('#src-preproc').keyup(function(){
                        var filter = $(this).val(), count = 0;
                        $('.card-pre-proc').each(function(){
                            if($(this).text().search(new RegExp(filter, "i")) < 0){
                                $(this).fadeOut();
                            } else {
                                $(this).show();
                                count++;
                            }
                        });
                    });

                    //-- show more --//
                    $('#show-pre').click(function() {
                        $('.card-prec').toggleClass('show-all');
                    });
					//--active module labeling--//
					$('#lab').click(function() {
							$('#module-labeling').appendTo('#pre-process-template');
							$(this).prop('disabled', true);
							$(this).addClass('selected-pre');
							$(this).find('i').removeClass('fas fa-plus-circle');
							$(this).find('i').addClass('fas fa-check');
					}),

					$('#module-labeling .del-item').click(function() {
							$(this).parents('#module-labeling').appendTo('#hide-temp');
							$('#lab').prop('disabled', false);
							$('#lab').removeClass('selected-pre');
							$('#lab').find('i').removeClass('fas fa-check');
							$('#lab').find('i').addClass('fas fa-plus-circle');
					});

					//--active missing value--//
					$('#mis').click(function() {
							$('#module-missing-value').appendTo('#pre-process-template');
							$(this).prop('disabled', true);
							$(this).addClass('selected-pre');
							$(this).find('i').removeClass('fas fa-plus-circle');
							$(this).find('i').addClass('fas fa-check');
					}),

					$('#module-missing-value .del-item').click(function() {
							$(this).parents('#module-missing-value').appendTo('#hide-temp');
							$('#mis').prop('disabled', false);
							$('#mis').removeClass('selected-pre');
							$('#mis').find('i').removeClass('fas fa-check');
							$('#mis').find('i').addClass('fas fa-plus-circle');
					});

					//--active minmax--//
					$('#min').click(function() {
							$('#module-minmax').appendTo('#pre-process-template');
							$(this).prop('disabled', true);
							$(this).addClass('selected-pre');
							$(this).find('i').removeClass('fas fa-plus-circle');
							$(this).find('i').addClass('fas fa-check');
					});

					$('#module-minmax .del-item').click(function() {
							$(this).parents('#module-minmax').appendTo('#hide-temp');
							$('#min').prop('disabled', false);
							$('#min').removeClass('selected-pre');
							$('#min').find('i').removeClass('fas fa-check');
							$('#min').find('i').addClass('fas fa-plus-circle');
					});

					//--active Bucketizer--//
					$('#buck').click(function() {
							$('#module-buck').appendTo('#pre-process-template');
							$(this).prop('disabled', true);
							$(this).addClass('selected-pre');
							$(this).find('i').removeClass('fas fa-plus-circle');
							$(this).find('i').addClass('fas fa-check');
					});

					$('#module-buck .del-item').click(function() {
							$(this).parents('#module-buck').appendTo('#hide-temp');
							$('#buck').prop('disabled', false);
							$('#buck').removeClass('selected-pre');
							$('#buck').find('i').removeClass('fas fa-check');
							$('#buck').find('i').addClass('fas fa-plus-circle');
					});

					//--active VectorAssembler --//
					$('#vecass').click(function() {
							$('#module-vecass').appendTo('#pre-process-template');
							$(this).prop('disabled', true);
							$(this).addClass('selected-pre');
							$(this).find('i').removeClass('fas fa-plus-circle');
							$(this).find('i').addClass('fas fa-check');
					});

					$('#module-vecass .del-item').click(function() {
							$(this).parents('#module-vecass').appendTo('#hide-temp');
							$('#vecass').prop('disabled', false);
							$('#vecass').removeClass('selected-pre');
							$('#vecass').find('i').removeClass('fas fa-check');
							$('#vecass').find('i').addClass('fas fa-plus-circle');
					});

					//--active PCA --//
					$('#pca').click(function() {
							$('#module-pca').appendTo('#pre-process-template');
							$(this).prop('disabled', true);
							$(this).addClass('selected-pre');
							$(this).find('i').removeClass('fas fa-plus-circle');
							$(this).find('i').addClass('fas fa-check');
					});

					$('#module-pca .del-item').click(function() {
							$(this).parents('#module-pca').appendTo('#hide-temp');
							$('#pca').prop('disabled', false);
							$('#pca').removeClass('selected-pre');
							$('#pca').find('i').removeClass('fas fa-check');
							$('#pca').find('i').addClass('fas fa-plus-circle');
					});

					//--active Tostopworder --//
					$('#token').click(function() {
							$('#module-token').appendTo('#pre-process-template');
							$(this).prop('disabled', true);
							$(this).addClass('selected-pre');
							$(this).find('i').removeClass('fas fa-plus-circle');
							$(this).find('i').addClass('fas fa-check');
					});

					$('#module-token .del-item').click(function() {
							$(this).parents('#module-token').appendTo('#hide-temp');
							$('#token').prop('disabled', false);
							$('#token').removeClass('selected-pre');
							$('#token').find('i').removeClass('fas fa-check');
							$('#token').find('i').addClass('fas fa-plus-circle');
					});

					//--active StopWordsRemover --//
					$('#stopword').click(function() {
							$('#module-stopword').appendTo('#pre-process-template');
							$(this).prop('disabled', true);
							$(this).addClass('selected-pre');
							$(this).find('i').removeClass('fas fa-plus-circle');
							$(this).find('i').addClass('fas fa-check');
					});

					$('#module-stopword .del-item').click(function() {
							$(this).parents('#module-stopword').appendTo('#hide-temp');
							$('#stopword').prop('disabled', false);
							$('#stopword').removeClass('selected-pre');
							$('#stopword').find('i').removeClass('fas fa-check');
							$('#stopword').find('i').addClass('fas fa-plus-circle');
                    });

                    //--active OneHotEncoder --//
					$('#onehot').click(function() {
                        $('#module-onehot').appendTo('#pre-process-template');
                        $(this).prop('disabled', true);
                        $(this).addClass('selected-pre');
                        $(this).find('i').removeClass('fas fa-plus-circle');
                        $(this).find('i').addClass('fas fa-check');
                    });

                    $('#module-onehot .del-item').click(function() {
                            $(this).parents('#module-onehot').appendTo('#hide-temp');
                            $('#onehot').prop('disabled', false);
                            $('#onehot').removeClass('selected-pre');
                            $('#onehot').find('i').removeClass('fas fa-check');
                            $('#onehot').find('i').addClass('fas fa-plus-circle');
                    });

                    //--active StandardScaler --//
					$('#scaler').click(function() {
                        $('#module-scaler').appendTo('#pre-process-template');
                        $(this).prop('disabled', true);
                        $(this).addClass('selected-pre');
                        $(this).find('i').removeClass('fas fa-plus-circle');
                        $(this).find('i').addClass('fas fa-check');
                    });

                    $('#module-scaler .del-item').click(function() {
                            $(this).parents('#module-scaler').appendTo('#hide-temp');
                            $('#scaler').prop('disabled', false);
                            $('#scaler').removeClass('selected-pre');
                            $('#scaler').find('i').removeClass('fas fa-check');
                            $('#scaler').find('i').addClass('fas fa-plus-circle');
                    });
                    
                    


				},

        modeling: function() {
        },

        sidebar: function() {
            $('#add-datasource').click(function(){
                $(".block-database").insertBefore(this);
            });




        // Modeling --

            // Modeling -- unsupervised
            $('#select-modeling').change(function(){
                if($(this).val() == 'unsupervised'){ // or this.value == 'volvo'
                    $("#forcase-sub").fadeToggle("fast").val('');
                    $('.modeling-container-unsupervised').fadeToggle("fast");
                } else {
                    $("#forcase-sub").fadeToggle("fast").val('');
                    $('.modeling-container-unsupervised').fadeToggle("fast");
                }
            });

            // Modeling -- unsupervised -- Kmeans
            $("#select-unsupervised").change(function(){
                if($(this).val() == 'kmeans'){
                    $("#module--kmeans").appendTo('#modeling-container');
                } else {
                    $("#module--kmeans").appendTo('#hide-temp');
                }
            });

            // Modeling -- unsupervised -- Gaussian
            $("#select-unsupervised").change(function(){
                if($(this).val() == 'Gaussian'){
                    $("#module--gaussian").appendTo('#modeling-container');
                } else {
                    $("#module--gaussian").appendTo('#hide-temp');
                }
            });
        },

        select: function() {
            $(document).ready(function() {
                $('.single-select').select2();
            });

            $(".preprocess-select").select2({
                width: 'resolve' // need to override the changed default
            });

            $('#select-preprocess').selectize({
                maxItems: 10,
                persist: true,
                plugins: ['remove_button'],
            });
        },

        card: function() {
            $('.slide-btn-card').click(function() {
                $(this).parent('.title').next('.body').slideToggle();
            });

            //$('.del-item').click(function() {
            //    $(this).parents('.pre-proc-item').remove();
            //});


            $('.add-cloumn-label').click(function(){
                $('<div class="input-group"><span>Column</span><input type="text" placeholder="input column"><button class="del-col-labeling"><i class="fas fa-trash"></i></button></div>').appendTo('#input-labeling');

                $('.del-col-labeling').click(function() {
                    $(this).parent('.input-group').remove();
                });
            });

            $('.add-datasource').click(function() {
                $('#data-template').clone(true,true).contents().appendTo("#template-datasource");
            });

            $('.add-select-row').click(function() {
                $('#sel-row-container').clone(true,true).contents().appendTo("#body-sel-row");
            });


            $('.add-datamerge').click(function() {
                $("#data-merge").slideDown();
            });

            $(".del-row-item").click(function(){
                $(this).parents('.sel-row').remove();
            });


            //--modul-merge--//

            //select-col function
            $('.add-col-select').click(function(){
                $('#col-select').appendTo('.container-data-set');
                $(this).prop('disabled', true);
                $(this).addClass('disabled-btn');
                //
                $(".add-row-select").prop('disabled', true);
                $(".add-row-select").addClass('disabled-btn');
                //
                $(".add-datamerge").prop('disabled', true);
                $(".add-datamerge").addClass('disabled-btn');
            });

            $('#push-col').click(function(){
                $(".add-col-select").addClass('has-pushed');
                $(this).parent('.body-sub').slideToggle();
                //
                if ($(".add-row-select").hasClass('has-pushed')) {

                } else {
                    $(".add-row-select").prop('disabled', false);
                    $(".add-row-select").removeClass('disabled-btn');
                }
                //
                if ($(".add-datamerge").hasClass('has-pushed')) {

                } else {
                    $(".add-datamerge").prop('disabled', false);
                    $(".add-datamerge").removeClass('disabled-btn');
                }
            });

            $('.col-remove').click(function() {
                $(this).parents('#col-select').appendTo('#hide-temp');
                $('.add-col-select').prop('disabled', false);
                $('.add-col-select').removeClass('disabled-btn');
                $(".add-col-select").removeClass('has-pushed');
            });

            //

            // merge function
            $('.add-datamerge').click(function(){
                $('#data-merge').appendTo('.container-data-set');
                $(this).prop('disabled', true);
                $(this).addClass('disabled-btn');
                //
                $(".add-row-select").prop('disabled', true);
                $(".add-row-select").addClass('disabled-btn');
                //
                $(".add-col-select").prop('disabled', true);
                $(".add-col-select").addClass('disabled-btn');
            });

            $('#push-data-merge').click(function(){
                $(".add-datamerge").addClass('has-pushed');
                $(this).parent('.body-sub').slideToggle();
                //
                if ($(".add-row-select").hasClass('has-pushed')) {

                } else {
                    $(".add-row-select").prop('disabled', false);
                    $(".add-row-select").removeClass('disabled-btn');
                }
                //
                if ($(".add-col-select").hasClass('has-pushed')) {

                } else {
                    $(".add-col-select").prop('disabled', false);
                    $(".add-col-select").removeClass('disabled-btn');
                }
            });

            $('.merge-remove').click(function() {
                $(this).parents('#data-merge').appendTo('#hide-temp');
                $('.add-datamerge').prop('disabled', false);
                $('.add-datamerge').removeClass('disabled-btn');
                $(".add-datamerge").removeClass('has-pushed');
            });






            // select row function

            $('.add-row-select').click(function(){
                $('#row-select').appendTo('.container-data-set');
                $(this).prop('disabled', true);
                $(this).addClass('disabled-btn');
                //
                $(".add-datamerge").prop('disabled', true);
                $(".add-datamerge").addClass('disabled-btn');
                //
                $(".add-col-select").prop('disabled', true);
                $(".add-col-select").addClass('disabled-btn');
            });

            $('#push-row').click(function(){
                $(".add-row-select").addClass('has-pushed');
                $(this).parent('.body-sub').slideToggle();
                //
                if ($(".add-datamerge").hasClass('has-pushed')) {

                } else {
                    $(".add-datamerge").prop('disabled', false);
                    $(".add-datamerge").removeClass('disabled-btn');
                }
                //
                if ($(".add-col-select").hasClass('has-pushed')) {

                } else {
                    $(".add-col-select").prop('disabled', false);
                    $(".add-col-select").removeClass('disabled-btn');
                }
            });

            $('.row-remove').click(function() {
                $(this).parents('#row-select').appendTo('#hide-temp');
                $('.add-row-select').prop('disabled', false);
                $('.add-row-select').removeClass('disabled-btn');
                $(".add-row-select").removeClass('has-pushed');
            });

            //


            //slide-body-sub
            $('.sub-proc div.title').click(function(){
                $(this).next('.body-sub').slideToggle();
            });



            $('#post-datasource').click(function() {
                $("#sidebar-datasource").addClass('');
            });

        },

        chart() {
            var chart = bb.generate({
                data: {
                  columns: [
                  ["data1", 1200, 1100, 1190, 1090, 1222, 1435],
                  ["data2", 1300, 1120, 1240, 1200, 1150, 1250]
                  ],
                  type: "bar",
                    colors: {
                        data1: "#69e781",
                        data2: "#0b2239"
                    },
                },
                bar: {
                  width: {
                    ratio: 0.5
                  }
                },
                axis: {
                    y: {
                      min: 1000,
                      max: 1500,
                    }
                  },
                bindto: "#BarChart"
              });
        },

        module: function() {
            $("#sidebar-datasource").click(function(){
                $('#box-input-data').addClass("card-active");
                $('.empty-box').hide();
            });

            var myCountdown = $('#example').progressBarTimer({ autoStart: true, label : { show: true, type: 'percent' }, onFinish : function () { alert('That\'s all folks'); } });
            
            // - - progressbar-- //
            $("#post-datasource").click(function(){
                $(this).hide();
                $('#refresh-datasource').show();
                $('#cancel-datasource').show();
                $('#progress-datasource').slideDown();
                $('.database-section div.card-input-body').slideToggle();
                $('#prev-btn').hide();
            });
            
            $('#refresh-datasource').click(function(){
                $('#number-prog-percent').html('100 %');
                $('#progress-data').attr('aria-valuenow','100').attr('style','width:100%');
                $('#prev-btn').hide();
                
                setTimeout(function(){
                    Swal.fire({
                        type: 'success',
                        title: 'Datasource has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    });
                },1000);

                setTimeout(function(){
                    $('#overlay-data').show();
                    $('#progress-datasource').slideUp();
                    $('#progress-data').attr('aria-valuenow','0').attr('style','width:0%');
                    $('.database-section div.card-input-body').slideToggle();
                    $('#refresh-datasource').hide();
                    $('#cancel-datasource').hide();

                    $('#sidebar-preproc').removeClass("de-active");
                    $('#sidebar-preproc').addClass("pre-proc-action");
                    $('#sidebar-datasource a i').removeClass("fa-plus-circle");
                    $('#sidebar-datasource a i').addClass("fa-check");
                    
                },3000);
            });



            ///////////// 

            $("#preprocess-action").click(function(){
                $(this).hide();
                $('#refresh-preproc').show();
                $('#cancel-preproc').show();
                $('#progress-preprocess').slideDown();
                $('.preproc-section div.card-input-body').slideToggle();
                $('#prev-btn').hide();
            });

            $('#refresh-preproc').click(function(){
                $('#number-prog-percent-preproc').html('100 %');
                $('#progress-data-preproc').attr('aria-valuenow','100').attr('style','width:100%');
                $('#prev-btn').hide();
                
                setTimeout(function(){
                    Swal.fire({
                        type: 'success',
                        title: 'Datasource has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    });
                },1000);

                setTimeout(function(){
                    $('#overlay-preproc').show();
                    $('#progress-preprocess').slideUp();
                    $('#progress-data-preproc').attr('aria-valuenow','0').attr('style','width:0%');
                    $('.preproc-section div.card-input-body').slideToggle();
                    $('#refresh-preproc').hide();
                    $('#cancel-preproc').hide();

                    $('#sidebar-modeling').removeClass("de-active");
                    $('#sidebar-modeling').addClass("modeling-action");
                    $('#sidebar-preproc a i').removeClass("fa-plus-circle");
                    $('#sidebar-preproc a i').addClass("fa-check");     
                },3000);
            });







            //////////////

            $("#modeling-action").click(function(){
                $(this).hide();
                $('#refresh-modeling').show();
                $('#cancel-modeling').show();
                $('#progress-modeling').slideDown();
                $('.modeling-section div.card-input-body').slideToggle();
                $('#prev-btn').hide();
            });

            $('#refresh-modeling').click(function(){
                $('#number-prog-percent-modeling').html('100 %');
                $('#progress-data-modeling').attr('aria-valuenow','100').attr('style','width:100%');
                $('#prev-btn').hide();
                
                setTimeout(function(){
                    Swal.fire({
                        type: 'success',
                        title: 'Datasource has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    });
                },1000);

                setTimeout(function(){
                    $('#overlay-modeling').show();
                    $('#progress-modeling').slideUp();
                    $('#progress-data-modeling').attr('aria-valuenow','0').attr('style','width:0%');
                    $('.modeling-section div.card-input-body').slideToggle();
                    $('#refresh-modeling').hide();
                    $('#cancel-modeling').hide();

                    $('#sidebar-viz').removeClass("de-active");
                    $('#sidebar-viz').addClass("modeling-action");
                    $('#sidebar-modeling a i').removeClass("fa-plus-circle");
                    $('#sidebar-modeling a i').addClass("fa-check");     
                    $('#viz-btn').slideDown();
                },3000);
            });



            $("#sidebar-preproc").click(function(){
                if($(this).hasClass('pre-proc-action')){
                    $('#box-pre').addClass("card-active");
                    $('html, body').animate({
                        scrollTop: $("#box-pre").offset().top - 30
                    }, 1000);
                }
                
            });

            $("#sidebar-modeling").click(function(){
                if($(this).hasClass('modeling-action')){
                    $('#box-modeling').addClass("card-active");
                    $('html, body').animate({
                        scrollTop: $("#box-modeling").offset().top - 30
                    }, 1000);
                }
            });

            $(".del").click(function() {
                $(this).parents(".block-database").remove();
            });
        },

        alert: function() {



            $('.con').click(function(){
                Swal.fire({
                    type: 'error',
                    title: 'Connection Failure',
                    showConfirmButton: false,
                    timer: 1500
                })
            });
        },

        tables: function() {
            $(document).ready( function () {
                $('#table_id').DataTable();
            } );
        },

        transfer: function() {
            var languages = [
                {
                    "language": "jQuery",
                    "value": 122
                },
                {
                    "language": "AngularJS",
                    "value": 132
                },
                {
                    "language": "ReactJS",
                    "value": 422
                },
                {
                    "language": "VueJS",
                    "value": 232
                },
                {
                    "language": "JavaScript",
                    "value": 765
                },
                {
                    "language": "Java",
                    "value": 876
                },
                {
                    "language": "Python",
                    "value": 453
                },
                {
                    "language": "TypeScript",
                    "value": 125
                },
                {
                    "language": "PHP",
                    "value": 633
                },
                {
                    "language": "Ruby on Rails",
                    "value": 832
                },
                {
                    "language": "HTML",
                    "value": 6312
                },
                {
                    "language": "XML",
                    "value": 83233
                }
            ];

            var groupData = [
                {
                    "groupName": "JavaScript",
                    "groupData": [
                        {
                            "language": "jQuery",
                            "value": 122
                        },
                        {
                            "language": "AngularJS",
                            "value": 643
                        },
                        {
                            "language": "ReactJS",
                            "value": 422
                        },
                        {
                            "language": "VueJS",
                            "value": 622
                        }
                    ]
                },
                {
                    "groupName": "Popular",
                    "groupData": [
                        {
                            "language": "JavaScript",
                            "value": 132
                        },
                        {
                            "language": "Java",
                            "value": 112
                        },
                        {
                            "language": "Python",
                            "value": 124
                        },
                        {
                            "language": "TypeScript",
                            "value": 121
                        },
                        {
                            "language": "PHP",
                            "value": 432
                        },
                        {
                            "language": "Ruby on Rails",
                            "value": 421
                        }
                    ]
                }
            ];

            var settings = {
                "inputId": "languageInput",
                "data": languages,
                "groupData": groupData,
                "itemName": "language",
                "groupItemName": "groupName",
                "groupListName" : "groupData",
                "container": "transfer",
                "valueName": "value",
                "callable" : function (data, names) {
                    console.log("Selected ID：" + data)
                    $("#selectedItemSpan").text(names)
                }
            };

            Transfer.transfer(settings);
        },
    };

    $(document).ready(function() {
        global_functions.init();
    });

})(jQuery);
