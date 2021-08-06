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
            self.otheFunction();
            self.panelfunction();
    	},

        partials: function() {
            //=include partials/_partials.js
        },

        otheFunction: function() {
        },

        panelfunction: function() {
            // import-db
            $("#imprt-db").click(function(e){
                var newId = $('.column-db').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn column-db" id="import-db-module-' +newId+ '"><h4>Import Database</h4>'+
                    '<div class="inpt-grp"><label>Database Type</label><select><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>Database Name</label><input type="text" id="db-name' +newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Database Table</label><input type="text" id="db-table'+newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Username</label><input type="text" id="db-user'+newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Password</label><input type="password" id="db-pass'+newId+'" class="ip1"></div> '+
                    '<button type="button" id="run-import-db'+newId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="explore-import-db'+newId+'" class="trigger-explore"  data-toggle="tooltip" title="Explore table"><i class="fas fa-table"></i></button>'+
                    '<button type="button" id="del'+newId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="explore" id="exp-tb-db'+newId+'" style="display:none">'+
                    '<div class="explore__overlay"></div>'+
                    '<div class="explore__card">'+
                    '<div class="title-explore">Explore Table<p id="close-explore">x</p></div>'+
                    '<div class="body-explore">'+
                    '<div class="body-explore__inner">'+
                    '<div class="sidebar-explore">'+
                    '<div class="filters"><select id="filter-table-explor"><option value="sel" selected disabled>Select Type</option><option value="temp">Temporary</option><option value="persist">Persist</option></select></div>'+
                    '<a href="#" class="list-table active temp"><div class="trigger-sub-menu">Table dataset 019<span>+</span></div></a>'+
                    '<a href="#" class="list-table active persist"><div class="trigger-sub-menu">Table dataset 219<span>+</span></div></a>'+
                    '</div>'+
                    '<div class="main-explore">'+
                    '<div class="main-explore__inner">'+
                    '<textarea class="query" placeholder="Write query here"></textarea>'+
                    '<button type="button" id="run-explore-'+newId+'" class="run run-popup"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<div class="table-db">'+
                    '<table class="table">'+
                    '<thead>'+
                    '<tr><th>Firstname</th><th>Lastname</th><th>Email</th></tr>'+
                    '</thead>'+
                    '<tbody>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '</tbody>'+
                    '</table>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                    
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn column-db" id="import-db-module-' +newId+ '"><h4>Import Database</h4>'+
                    '<div class="inpt-grp"><label>Database Type</label><select><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>Database Name</label><input type="text" id="db-name' +newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Database Table</label><input type="text" id="db-table'+newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Username</label><input type="text" id="db-user'+newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Password</label><input type="password" id="db-pass'+newId+'" class="ip1"></div> '+
                    '<button type="button" id="run-import-db'+newId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="explore-import-db'+newId+'" class="trigger-explore" data-toggle="tooltip" title="Explore table"><i class="fas fa-table"></i></button>'+
                    '<button type="button" id="del'+newId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="explore" id="exp-tb-db'+newId+'" style="display:none">'+
                    '<div class="explore__overlay"></div>'+
                    '<div class="explore__card">'+
                    '<div class="title-explore">Explore Table<p id="close-explore">x</p></div>'+
                    '<div class="body-explore">'+
                    '<div class="body-explore__inner">'+
                    '<div class="sidebar-explore">'+
                    '<div class="filters"><select id="filter-table-explor"><option value="sel" selected disabled>Select Type</option><option value="temp">Temporary</option><option value="persist">Persist</option></select></div>'+
                    '<a href="#" class="list-table active temp"><div class="trigger-sub-menu">Table dataset 019<span>+</span></div></a>'+
                    '<a href="#" class="list-table active persist"><div class="trigger-sub-menu">Table dataset 219<span>+</span></div></a>'+
                    '</div>'+
                    '<div class="main-explore">'+
                    '<div class="main-explore__inner">'+
                    '<textarea class="query" placeholder="Write query here"></textarea>'+
                    '<button type="button" id="run-explore-'+newId+'" class="run run-popup"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<div class="table-db">'+
                    '<table class="table">'+
                    '<thead>'+
                    '<tr><th>Firstname</th><th>Lastname</th><th>Email</th></tr>'+
                    '</thead>'+
                    '<tbody>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '</tbody>'+
                    '</table>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });

            //import file
            $("#imprt-fl").click(function(){
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    
                    var idFile = $('.column-fl').length + 1;
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn column-fl" id="import-file-module-' +idFile+ '"><h4>Import Files</h4>'+
                    '<div class="inpt-grp long-width"><label>Database Type</label><input class="inpt-file" id="file-id-'+idFile+'" type="file" name="myFile"></div>'+
                    '<button type="button" id="run-import-file'+idFile+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="explore-import-db'+idFile+'" class="trigger-explore" data-toggle="tooltip" title="Explore table"><i class="fas fa-table"></i></button>'+
                    '<button type="button" id="del'+idFile+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="explore" id="exp-tb-db'+idFile+'" style="display:none">'+
                    '<div class="explore__overlay"></div>'+
                    '<div class="explore__card">'+
                    '<div class="title-explore">Explore Table<p id="close-explore">x</p></div>'+
                    '<div class="body-explore">'+
                    '<div class="body-explore__inner">'+
                    '<div class="sidebar-explore">'+
                    '<div class="filters"><select id="filter-table-explor"><option value="sel" selected disabled>Select Type</option><option value="temp">Temporary</option><option value="persist">Persist</option></select></div>'+
                    '<a href="#" class="list-table active temp"><div class="trigger-sub-menu">Table dataset 019<span>+</span></div></a>'+
                    '<a href="#" class="list-table active persist"><div class="trigger-sub-menu">Table dataset 219<span>+</span></div></a>'+
                    '</div>'+
                    '<div class="main-explore">'+
                    '<div class="main-explore__inner">'+
                    '<textarea class="query" placeholder="Write query here"></textarea>'+
                    '<button type="button" id="run-explore-'+idFile+'" class="run run-popup"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<div class="table-db">'+
                    '<table class="table">'+
                    '<thead>'+
                    '<tr><th>Firstname</th><th>Lastname</th><th>Email</th></tr>'+
                    '</thead>'+
                    '<tbody>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '</tbody>'+
                    '</table>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');

                } else {

                    var idFile = $('.column-fl').length + 1;
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn column-fl" id="import-file-module-' +idFile+ '"><h4>Import Files</h4>'+
                    '<div class="inpt-grp long-width"><label>Database Type</label><input class="inpt-file" id="file-id-'+idFile+'" type="file" name="myFile"></div>'+
                    '<button type="button" id="run-import-file'+idFile+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="explore-import-db'+idFile+'" class="trigger-explore"  data-toggle="tooltip" title="Explore table"><i class="fas fa-table"></i></button>'+
                    '<button type="button" id="del'+idFile+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="explore" id="exp-tb-db'+idFile+'" style="display:none">'+
                    '<div class="explore__overlay"></div>'+
                    '<div class="explore__card">'+
                    '<div class="title-explore">Explore Table<p id="close-explore">x</p></div>'+
                    '<div class="body-explore">'+
                    '<div class="body-explore__inner">'+
                    '<div class="sidebar-explore">'+
                    '<div class="filters"><select id="filter-table-explor"><option value="sel" selected disabled>Select Type</option><option value="temp">Temporary</option><option value="persist">Persist</option></select></div>'+
                    '<a href="#" class="list-table active temp"><div class="trigger-sub-menu">Table dataset 019<span>+</span></div></a>'+
                    '<a href="#" class="list-table active persist"><div class="trigger-sub-menu">Table dataset 219<span>+</span></div></a>'+
                    '</div>'+
                    '<div class="main-explore">'+
                    '<div class="main-explore__inner">'+
                    '<textarea class="query" placeholder="Write query here"></textarea>'+
                    '<button type="button" id="run-explore-'+idFile+'" class="run run-popup"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<div class="table-db">'+
                    '<table class="table">'+
                    '<thead>'+
                    '<tr><th>Firstname</th><th>Lastname</th><th>Email</th></tr>'+
                    '</thead>'+
                    '<tbody>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>'+
                    '</tbody>'+
                    '</table>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });


            //datamerge
            $("#data-merge").click(function(){
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    
                    var idMerge = $('.column-data-merge').length + 1;
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn column-data-merge" id="data-merge-module-'+idMerge+'"><h4>Data Merge</h4>'+
                    '<div class="inpt-grp thre-width"><label>Data Name</label><select class="from-merge-'+idMerge+'"><option value="db1">db_name1</option><option value="db2">db_name2</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Action</label><select class="method-merge-'+idMerge+'"><option value="lefjoin">left join</option><option value="rightjoin">Right Join</option><option value="innerjoin">Inner Join</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Target</label><select class="to-merge-'+idMerge+'"><option value="dbt1">db_target1</option><option value="dbt2">db_target2</option></select></div>'+
                    '<button type="button" id="run-data-merge'+idMerge+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+idMerge+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');

                } else {

                    var idMerge = $('.column-data-merge').length + 1;
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn column-data-merge" id="data-merge-module-'+idMerge+'"><h4>Data Merge</h4>'+
                    '<div class="inpt-grp thre-width"><label>Data Name</label><select class="from-merge-'+idMerge+'"><option value="db1">db_name1</option><option value="db2">db_name2</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Action</label><select class="method-merge-'+idMerge+'"><option value="lefjoin">left join</option><option value="rightjoin">Right Join</option><option value="innerjoin">Inner Join</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Target</label><select class="to-merge-'+idMerge+'"><option value="dbt1">db_target1</option><option value="dbt2">db_target2</option></select></div>'+
                    '<button type="button" id="run-data-merge'+idMerge+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+idMerge+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });

            //select-col
            $("#select-col").click(function(){
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    
                    var idSelcol = $('.column-select-col').length + 1;
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn column-select-col" id="data-sel-col-'+idSelcol+'"><h4>Select Column</h4>'+
                    '<div class="no-selected-box">'+
                    '<div class="checkbox-layout-inline"><input id="sel-col-1" class="sel-col-container" type="checkbox" name="colname" value="colnameA"> <label for="sel-col-1">Age</label></div>'+
                    '<div class="checkbox-layout-inline"><input id="sel-col-2" class="sel-col-container" type="checkbox" name="colname" value="colnameb"> <label for="sel-col-2">Jenis Kelamin</label></div>'+
                    '<div class="checkbox-layout-inline"><input id="sel-col-3" class="sel-col-container" type="checkbox" name="colname" value="colnamec"> <label for="sel-col-3">Tinggal</label></div>'+
                    '<div class="checkbox-layout-inline"><input id="sel-col-4" class="sel-col-container" type="checkbox" name="colname" value="colnameA"> <label for="sel-col-4">Tingat</label></div>'+
                    '<div class="checkbox-layout-inline"><input id="sel-col-5" class="sel-col-container" type="checkbox" name="colname" value="colnameb"> <label for="sel-col-5">Status</label></div>'+
                    '<div class="checkbox-layout-inline"><input id="sel-col-6" class="sel-col-container" type="checkbox" name="colname" value="colnamec"> <label for="sel-col-6">Derajat</label></div>'+
                    '</div>'+
                    '<button type="button" id="push-col'+idSelcol+'" class="push">Submit</button>'+
                    '<button type="button" id="del'+idSelcol+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');

                } else {

                    var idSelcol = $('.column-select-col').length + 1;
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn column-select-col" id="data-sel-col-'+idSelcol+'"><h4>Select Column</h4>'+
                    '<div class="no-selected-box">'+
                    '<div class="checkbox-layout-inline"><input id="sel-col-1" class="sel-col-container" type="checkbox" name="colname" value="colnameA"> <label for="sel-col-1">Age</label></div>'+
                    '<div class="checkbox-layout-inline"><input id="sel-col-2" class="sel-col-container" type="checkbox" name="colname" value="colnameb"> <label for="sel-col-2">Jenis Kelamin</label></div>'+
                    '<div class="checkbox-layout-inline"><input id="sel-col-3" class="sel-col-container" type="checkbox" name="colname" value="colnamec"> <label for="sel-col-3">Tinggal</label></div>'+
                    '<div class="checkbox-layout-inline"><input id="sel-col-4" class="sel-col-container" type="checkbox" name="colname" value="colnameA"> <label for="sel-col-4">Tingat</label></div>'+
                    '<div class="checkbox-layout-inline"><input id="sel-col-5" class="sel-col-container" type="checkbox" name="colname" value="colnameb"> <label for="sel-col-5">Status</label></div>'+
                    '<div class="checkbox-layout-inline"><input id="sel-col-6" class="sel-col-container" type="checkbox" name="colname" value="colnamec"> <label for="sel-col-6">Derajat</label></div>'+
                    '</div>'+
                    '<button type="button" id="push-col'+idSelcol+'" class="push">Submit</button>'+
                    '<button type="button" id="del'+idSelcol+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });

            //Select-row
            $("#select-row").click(function(){
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    
                    var idSelrow = $('.column-select-row').length + 1;
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn column-select-row" id="select-row-module-'+idSelrow+'"><h4>Select Row</h4>'+
                    '<div class="inpt-grp thre-width"><label>Row Name</label><input type="text" id="row-name'+idSelrow+'" class="ip1"></div>'+
                    '<div class="inpt-grp thre-width"><label>Conditon</label><select id="method-row-'+idSelrow+'"><option value="sama">=</option><option value="kurang"> < </option><option value="lebih">></option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Value</label><input type="text" id="row-value'+idSelrow+'" class="ip1"></div>'+
                    '<button type="button" id="run-select-row'+idSelrow+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+idSelrow+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');

                } else {
                    var idSelrow = $('.column-select-row').length + 1;
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn column-select-row" id="select-row-module-'+idSelrow+'"><h4>Select Row</h4>'+
                    '<div class="inpt-grp thre-width"><label>Row Name</label><input type="text" id="row-name'+idSelrow+'" class="ip1"></div>'+
                    '<div class="inpt-grp thre-width"><label>Conditon</label><select id="method-row-'+idSelrow+'"><option value="sama">=</option><option value="kurang"> < </option><option value="lebih">></option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Value</label><input type="text" id="row-value'+idSelrow+'" class="ip1"></div>'+
                    '<button type="button" id="run-select-row'+idSelrow+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+idSelrow+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });

            ////////// PREPROCESS ////////

            
            // Standard Scaler
            $("#standardscaler").click(function(e){
                var standarScalerId = $('.std-scaler').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn std-scaler" id="std-scaler-module-' +standarScalerId+ '"><h4>Standard Scaler</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol' +standarScalerId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol'+standarScalerId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>withStd</label><input type="text" id="withStd'+standarScalerId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>withMean</label><input type="text" id="withMean'+standarScalerId+'" class="ip1"></div> '+
                    '<button type="button" id="run-std-scaler'+standarScalerId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+standarScalerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn std-scaler" id="std-scaler-module-' +standarScalerId+ '"><h4>Standard Scaler</h4>'+
                        '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol' +standarScalerId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol'+standarScalerId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>withStd</label><input type="text" id="withStd'+standarScalerId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>withMean</label><input type="text" id="withMean'+standarScalerId+'" class="ip1"></div> '+
                        '<button type="button" id="run-std-scaler'+standarScalerId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+standarScalerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');

                }
            });

            //  issingVal
            $("#missingval").click(function(e){
                var missValId = $('.miss-val').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn miss-val" id="miss-val-module-' +missValId+ '"><h4>Missing Value</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-missval' +missValId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol-missval'+missValId+'" class="ip1"></div> '+
                    '<button type="button" id="run-missval'+missValId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+missValId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn miss-val" id="miss-val-module-' +missValId+ '"><h4>Missing Value</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-missval' +missValId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol-missval'+missValId+'" class="ip1"></div> '+
                    '<button type="button" id="run-missval'+missValId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+missValId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');

                }
            });

            // Labeling
            $("#labeling").click(function(e){
                var labelingId = $('.labeling').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn labeling" id="labeling-module-' +labelingId+ '"><h4>Labeling</h4>'+
                    '<div class="inpt-grp longest firts-col"><label>Column</label><input type="text" id="labeling-col' +labelingId+'" class="ip1"><span class="del-parents"><i class="far asasasas fa-trash-alt"></i></span></div> '+
                    '<div class="sub-labeling-container"></div>'+
                    '<a id="add-column">+ Column</a>'+
                    '<button type="button" id="run-labeling-col'+labelingId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+labelingId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn labeling" id="labeling-module-' +labelingId+ '"><h4>Labeling</h4>'+
                    '<div class="inpt-grp longest firts-col"><label>Column</label><input type="text" id="labeling-col' +labelingId+'" class="ip1"><span class="del-parents"><i class="far asasasas fa-trash-alt"></i></span></div> '+
                    '<div class="sub-labeling-container"></div>'+
                    '<a id="add-column">+ Column</a>'+
                    '<button type="button" id="run-labeling-col'+labelingId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+labelingId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });

            //  MinMax
            $("#minmax").click(function(e){
                var minMax = $('.minmax').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn minmax" id="minmax-module-' +minMax+ '"><h4>MinMax</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-minmax' +minMax+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol-minmax'+minMax+'" class="ip1"></div> '+
                    '<button type="button" id="run-minmax'+minMax+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+minMax+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn minmax" id="minmax-module-' +minMax+ '"><h4>MinMax</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-minmax' +minMax+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol-minmax'+minMax+'" class="ip1"></div> '+
                    '<button type="button" id="run-minmax'+minMax+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+minMax+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');

                }
            });

            //  Bucketizer
            $("#bucketizer").click(function(e){
                var bucketId = $('.bucket').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn bucket" id="bucket-module-' +bucketId+ '"><h4>Bucketizer</h4>'+
                    '<div class="inpt-grp"><label>Split</label><input type="text" id="split-bucket' +bucketId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-bucket' +bucketId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>IntputCol</label><input type="text" id="inputCol-bucket-2-'+bucketId+'" class="ip1"></div> '+
                    '<button type="button" id="run-bucket'+bucketId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+bucketId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn bucket" id="bucket-module-' +bucketId+ '"><h4>Bucketizer</h4>'+
                    '<div class="inpt-grp"><label>Split</label><input type="text" id="split-bucket' +bucketId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-bucket' +bucketId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>IntputCol</label><input type="text" id="inputCol-bucket-2-'+bucketId+'" class="ip1"></div> '+
                    '<button type="button" id="run-bucket'+bucketId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+bucketId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');

                }
            });


            //  vectorassembler
            $("#vectorassembler").click(function(e){
                var vaId = $('.va').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn va" id="va-module-' +vaId+ '"><h4>vectorassembler</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-va' +vaId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-2-va'+vaId+'" class="ip1"></div> '+
                    '<button type="button" id="run-va'+vaId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+vaId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn va" id="va-module-' +vaId+ '"><h4>vectorassembler</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-va' +vaId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-2-va'+vaId+'" class="ip1"></div> '+
                    '<button type="button" id="run-va'+vaId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+vaId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');

                }
            });

             //  PCA
             $("#pca").click(function(e){
                var pcaId = $('.pca').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn pca" id="pca-module-' +pcaId+ '"><h4>PCA</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-pca' +pcaId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-2-pca'+pcaId+'" class="ip1"></div> '+
                    '<button type="button" id="run-pca'+pcaId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+pcaId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn pca" id="pca-module-' +pcaId+ '"><h4>PCA</h4>'+
                        '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-pca' +pcaId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-2-pca'+pcaId+'" class="ip1"></div> '+
                        '<button type="button" id="run-pca'+pcaId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+pcaId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });

            //  tokenizer
            $("#tokenizer").click(function(e){
                var tokenizerId = $('.tokenizer').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn tokenizer" id="tokenizer-module-' +tokenizerId+ '"><h4>Tokenizer</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-tokenizer' +tokenizerId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-2-tokenizer'+tokenizerId+'" class="ip1"></div> '+
                    '<button type="button" id="run-tokenizer'+tokenizerId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+tokenizerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn tokenizer" id="tokenizer-module-' +tokenizerId+ '"><h4>Tokenizer</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-tokenizer' +tokenizerId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-2-tokenizer'+tokenizerId+'" class="ip1"></div> '+
                    '<button type="button" id="run-tokenizer'+tokenizerId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+tokenizerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });

            //  stopword
            $("#stopword").click(function(e){
                var stopword = $('.stopword').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn stopword" id="stopword-module-' +stopword+ '"><h4>StopWordRemover</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-stopword' +stopword+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-2-stopword'+stopword+'" class="ip1"></div> '+
                    '<button type="button" id="run-stopword'+stopword+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+stopword+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn stopword" id="stopword-module-' +stopword+ '"><h4>StopWordRemover</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-stopword' +stopword+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-2-stopword'+stopword+'" class="ip1"></div> '+
                    '<button type="button" id="run-stopword'+stopword+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+stopword+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });


            //  onehot
            $("#onehot").click(function(e){
                var onehotId = $('.onehot').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn onehot" id="onehot-module-' +onehotId+ '"><h4>OneHotEncoder</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-onehot' +onehotId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-2-onehot'+onehotId+'" class="ip1"></div> '+
                    '<button type="button" id="run-onehot'+onehotId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+onehotId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn onehot" id="onehot-module-' +onehotId+ '"><h4>OneHotEncoder</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-onehot' +onehotId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-2-onehot'+onehotId+'" class="ip1"></div> '+
                    '<button type="button" id="run-onehot'+onehotId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+onehotId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });

            //  normalizer
            $("#normalizer").click(function(e){
                var normalizerId = $('.normalizer').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn normalizer" id="normalizer-module-' +normalizerId+ '"><h4>Normalizer</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-normalizer' +normalizerId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol-normalizer'+normalizerId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>P</label><input type="text" id="p-normalizer'+normalizerId+'" class="ip1"></div> '+
                    '<button type="button" id="run-normalizer'+normalizerId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+normalizerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn normalizer" id="normalizer-module-' +normalizerId+ '"><h4>Normalizer</h4>'+
                    '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-normalizer' +normalizerId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol-normalizer'+normalizerId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>P</label><input type="text" id="p-normalizer'+normalizerId+'" class="ip1"></div> '+
                    '<button type="button" id="run-normalizer'+normalizerId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+normalizerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });
            


            //////// MODELING ///////

            //  kmeans
            $("#kmeans").click(function(e){
                var kmeansId = $('.kmeans').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn kmeans" id="kmeans-module-' +kmeansId+ '"><h4>KMeans</h4>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-kmeans' +kmeansId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-kmeans'+kmeansId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>initMode</label><input type="text" id="initMode-kmeans'+kmeansId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>initSteps</label><input type="text" id="initSteps-kmeans'+kmeansId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-kmeans'+kmeansId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>K=</label><input type="text" id="k-kmeans'+kmeansId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-kmeans'+kmeansId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-kmeans'+kmeansId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>distanceMeasure</label><input type="text" id="distanceMeasure-kmeans'+kmeansId+'" class="ip1"></div> '+
                    '<button type="button" id="run-kmeans'+kmeansId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+kmeansId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn kmeans" id="kmeans-module-' +kmeansId+ '"><h4>KMeans</h4>'+
                        '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-kmeans' +kmeansId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-kmeans'+kmeansId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>initMode</label><input type="text" id="initMode-kmeans'+kmeansId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>initSteps</label><input type="text" id="initSteps-kmeans'+kmeansId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-kmeans'+kmeansId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>K=</label><input type="text" id="k-kmeans'+kmeansId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-kmeans'+kmeansId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-kmeans'+kmeansId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>distanceMeasure</label><input type="text" id="distanceMeasure-kmeans'+kmeansId+'" class="ip1"></div> '+
                        '<button type="button" id="run-kmeans'+kmeansId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+kmeansId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });

            //  gmm
            $("#gmm").click(function(e){
                var gmmId = $('.gmm').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn gmm" id="gmm-module-' +gmmId+ '"><h4>Gaussian Mixture Model</h4>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-gmm' +gmmId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-gmm'+gmmId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>k</label><input type="text" id="k-gmm'+gmmId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-gmm'+gmmId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-gmm'+gmmId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-gmm'+gmmId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-gmm'+gmmId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-2-gmm'+gmmId+'" class="ip1"></div> '+
                    '<button type="button" id="run-gmm'+gmmId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+gmmId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn gmm" id="gmm-module-' +gmmId+ '"><h4>Gaussian Mixture Model</h4>'+
                        '<div class="inpt-grp"><label>featuresCol</label><input type="text" id=featuresCol-gmm' +gmmId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-gmm'+gmmId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>k</label><input type="text" id="k-gmm'+gmmId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-gmm'+gmmId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-gmm'+gmmId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-gmm'+gmmId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-gmm'+gmmId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-2-gmm'+gmmId+'" class="ip1"></div> '+
                        '<button type="button" id="run-gmm'+gmmId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+gmmId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });

            //  linear-reg
            $("#linear-reg").click(function(e){
                var linearregId = $('.linear-reg').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn linear-reg" id="linear-reg-module-' +linearregId+ '"><h4>Linear Regression</h4>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id=featuresCol-linear-reg' +linearregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-linear-reg'+linearregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-linear-reg'+linearregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-linear-reg'+linearregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>regParam</label><input type="text" id="regParam-linear-reg'+linearregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>elasticNetParam</label><input type="text" id="elasticNetParam-linear-reg'+linearregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-linear-reg'+linearregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>fitIntercept</label><input type="text" id="fitIntercept-linear-reg'+linearregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>standardization</label><input type="text" id="standardization-linear-reg'+linearregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>solver</label><input type="text" id="solver-linear-reg'+linearregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>weightCol</label><input type="text" id="weightCol-linear-reg'+linearregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>aggregationDepth</label><input type="text" id="aggregationDepth-linear-reg'+linearregId+'" class="ip1"></div> '+           
                    '<div class="inpt-grp"><label>loss</label><input type="text" id="loss-linear-reg'+linearregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>epsilon</label><input type="text" id="epsilon-linear-reg'+linearregId+'" class="ip1"></div> '+
                    '<button type="button" id="run-linear-reg'+linearregId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+linearregId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn linear-reg" id="linear-reg-module-' +linearregId+ '"><h4>Linear Regression</h4>'+
                        '<div class="inpt-grp"><label>featuresCol</label><input type="text" id=featuresCol-linear-reg' +linearregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-linear-reg'+linearregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-linear-reg'+linearregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-linear-reg'+linearregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>regParam</label><input type="text" id="regParam-linear-reg'+linearregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>elasticNetParam</label><input type="text" id="elasticNetParam-linear-reg'+linearregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-linear-reg'+linearregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>fitIntercept</label><input type="text" id="fitIntercept-linear-reg'+linearregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>standardization</label><input type="text" id="standardization-linear-reg'+linearregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>solver</label><input type="text" id="solver-linear-reg'+linearregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>weightCol</label><input type="text" id="weightCol-linear-reg'+linearregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>aggregationDepth</label><input type="text" id="aggregationDepth-linear-reg'+linearregId+'" class="ip1"></div> '+           
                        '<div class="inpt-grp"><label>loss</label><input type="text" id="loss-linear-reg'+linearregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>epsilon</label><input type="text" id="epsilon-linear-reg'+linearregId+'" class="ip1"></div> '+
                        '<button type="button" id="run-linear-reg'+linearregId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+linearregId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });


            //  logisticreg
            $("#logisticreg").click(function(e){
                var logisticregId = $('.logisticreg').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn logisticreg" id="logisticreg-module-' +logisticregId+ '"><h4>Logistic Regression</h4>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>regParam</label><input type="text" id="regParam-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>elasticNetParam</label><input type="text" id="elasticNetParam-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>fitIntercept</label><input type="text" id="fitIntercept-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>threshold</label><input type="text" id="threshold-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>thresholds</label><input type="text" id="thresholds-logisticreg' +logisticregId+'" class="ip1"></div> '+ 
                    '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>standardization</label><input type="text" id="standardization-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>weightCol</label><input type="text" id="weightCol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>aggregationDepth</label><input type="text" id="aggregationDepth-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>family</label><input type="text" id="family-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>lowerBoundsOnCoefficients</label><input type="text" id="lowerBoundsOnCoefficients-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>upperBoundsOnCoefficients</label><input type="text" id="upperBoundsOnCoefficients-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>lowerBoundsOnIntercepts</label><input type="text" id="lowerBoundsOnIntercepts-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>upperBoundsOnIntercepts</label><input type="text" id="upperBoundsOnIntercepts-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<button type="button" id="run-logisticreg'+logisticregId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+logisticregId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn logisticreg" id="logisticreg-module-' +logisticregId+ '"><h4>Logistic Regression</h4>'+
                        '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>regParam</label><input type="text" id="regParam-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>elasticNetParam</label><input type="text" id="elasticNetParam-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>fitIntercept</label><input type="text" id="fitIntercept-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>threshold</label><input type="text" id="threshold-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>thresholds</label><input type="text" id="thresholds-logisticreg' +logisticregId+'" class="ip1"></div> '+ 
                        '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>standardization</label><input type="text" id="standardization-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>weightCol</label><input type="text" id="weightCol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>aggregationDepth</label><input type="text" id="aggregationDepth-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>family</label><input type="text" id="family-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>lowerBoundsOnCoefficients</label><input type="text" id="lowerBoundsOnCoefficients-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>upperBoundsOnCoefficients</label><input type="text" id="upperBoundsOnCoefficients-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>lowerBoundsOnIntercepts</label><input type="text" id="lowerBoundsOnIntercepts-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>upperBoundsOnIntercepts</label><input type="text" id="upperBoundsOnIntercepts-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<button type="button" id="run-logisticreg'+logisticregId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+logisticregId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });


            //  decisiontree
            $("#decisiontree").click(function(e){
                var decisiontreeId = $('.decisiontree').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn decisiontree" id="decisiontree-module-' +decisiontreeId+ '"><h4>Decision Tree</h4>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-decisiontree' +decisiontreeId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>maxDepth</label><input type="text" id="maxDepth-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>maxBins</label><input type="text" id="maxBins-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>minInstancesPerNode</label><input type="text" id="minInstancesPerNode-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>minInfoGain</label><input type="text" id="minInfoGain-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>maxMemoryInMB</label><input type="text" id="maxMemoryInMB-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>cacheNodeIds</label><input type="text" id="cacheNodeIds-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>checkpointInterval</label><input type="text" id="checkpointInterval-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>impurity</label><input type="text" id="impurity-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                    '<button type="button" id="run-decisiontree'+decisiontreeId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+decisiontreeId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn decisiontree" id="decisiontree-module-' +decisiontreeId+ '"><h4>Decision Tree</h4>'+
                        '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-decisiontree' +decisiontreeId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>maxDepth</label><input type="text" id="maxDepth-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>maxBins</label><input type="text" id="maxBins-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>minInstancesPerNode</label><input type="text" id="minInstancesPerNode-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>minInfoGain</label><input type="text" id="minInfoGain-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>maxMemoryInMB</label><input type="text" id="maxMemoryInMB-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>cacheNodeIds</label><input type="text" id="cacheNodeIds-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>checkpointInterval</label><input type="text" id="checkpointInterval-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>impurity</label><input type="text" id="impurity-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                        '<button type="button" id="run-decisiontree'+decisiontreeId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+decisiontreeId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });

            //  randomforest
            $("#randomforest").click(function(e){
                var randomforestId = $('.randomforest').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn randomforest" id="randomforest-module-' +randomforestId+ '"><h4>Random Forest</h4>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-randomforest' +randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>maxDepth</label><input type="text" id="maxDepth-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>maxBins</label><input type="text" id="maxBins-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>minInstancesPerNode</label><input type="text" id="minInstancesPerNode-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>minInfoGain</label><input type="text" id="minInfoGain-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>maxMemoryInMB</label><input type="text" id="maxMemoryInMB-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>cacheNodeIds</label><input type="text" id="cacheNodeIds-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>checkpointInterval</label><input type="text" id="checkpointInterval-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>impurity</label><input type="text" id="impurity-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>numTrees</label><input type="text" id="numTrees-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>featureSubsetStrategy</label><input type="text" id="featureSubsetStrategy-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>subsamplingRate</label><input type="text" id="subsamplingRate-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<button type="button" id="run-randomforest'+randomforestId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+randomforestId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn randomforest" id="randomforest-module-' +randomforestId+ '"><h4>Random Forest</h4>'+
                        '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-randomforest' +randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>maxDepth</label><input type="text" id="maxDepth-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>maxBins</label><input type="text" id="maxBins-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>minInstancesPerNode</label><input type="text" id="minInstancesPerNode-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>minInfoGain</label><input type="text" id="minInfoGain-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>maxMemoryInMB</label><input type="text" id="maxMemoryInMB-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>cacheNodeIds</label><input type="text" id="cacheNodeIds-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>checkpointInterval</label><input type="text" id="checkpointInterval-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>impurity</label><input type="text" id="impurity-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>numTrees</label><input type="text" id="numTrees-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>featureSubsetStrategy</label><input type="text" id="featureSubsetStrategy-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>subsamplingRate</label><input type="text" id="subsamplingRate-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<button type="button" id="run-randomforest'+randomforestId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+randomforestId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });


            //  naivebayes
            $("#naivebayes").click(function(e){
                var naivebayesId = $('.naivebayes').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn naivebayes" id="naivebayes-module-' +naivebayesId+ '"><h4>Naive Bayes</h4>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-naivebayes' +naivebayesId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>smoothing</label><input type="text" id="smoothing-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>modelType</label><input type="text" id="modelType-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>thresholds</label><input type="text" id="thresholds-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>weightCol</label><input type="text" id="weightCol-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                    '<button type="button" id="run-naivebayes'+naivebayesId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+naivebayesId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn naivebayes" id="naivebayes-module-' +naivebayesId+ '"><h4>Naive Bayes</h4>'+
                        '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-naivebayes' +naivebayesId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>smoothing</label><input type="text" id="smoothing-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>modelType</label><input type="text" id="modelType-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>thresholds</label><input type="text" id="thresholds-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>weightCol</label><input type="text" id="weightCol-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                        '<button type="button" id="run-naivebayes'+naivebayesId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+naivebayesId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });


            //  fpgrowth
            $("#fpgrowth").click(function(e){
                var fpgrowthId = $('.fpgrowth').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn fpgrowth" id="fpgrowth-module-' +fpgrowthId+ '"><h4>FP Growth</h4>'+
                    '<div class="inpt-grp"><label>minSupport</label><input type="text" id="minSupport-fpgrowth' +fpgrowthId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>minConfidence</label><input type="text" id="minConfidence-fpgrowth'+fpgrowthId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>itemsCol</label><input type="text" id="itemsCol-fpgrowth'+fpgrowthId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-fpgrowth'+fpgrowthId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>numPartitions</label><input type="text" id="numPartitions-fpgrowth'+fpgrowthId+'" class="ip1"></div> '+
                    '<button type="button" id="run-fpgrowth'+fpgrowthId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+fpgrowthId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn fpgrowth" id="fpgrowth-module-' +fpgrowthId+ '"><h4>FP Growth</h4>'+
                        '<div class="inpt-grp"><label>minSupport</label><input type="text" id="minSupport-fpgrowth' +fpgrowthId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>minConfidence</label><input type="text" id="minConfidence-fpgrowth'+fpgrowthId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>itemsCol</label><input type="text" id="itemsCol-fpgrowth'+fpgrowthId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-fpgrowth'+fpgrowthId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>numPartitions</label><input type="text" id="numPartitions-fpgrowth'+fpgrowthId+'" class="ip1"></div> '+
                        '<button type="button" id="run-fpgrowth'+fpgrowthId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+fpgrowthId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
            });
									

            /// FUNCTION FOCUS COLUMN
            $(document).on('click', '.panel-coloumn', function(e) {
                $(this).addClass('active-column');
            });
            $(".panel-coloumn").click();

            $( "body" ).delegate( ".panel-coloumn", "click", function() {
                $(this).siblings().removeClass('active-column');
            });
            //

            //function remove column
            $(document).on('click', '.del', function(e) {
                $(this).parent('.panel-coloumn').remove();
            });
            $(".del").click();
            //

            //function add column labling
            $(document).on('click', '#add-column', function(e) {
                var labelingSubId = $('.sub-labeling').length + 2;
                $(".sub-labeling-container")
                .append(
                '<div class="inpt-grp longest sub-labeling"><label>Column</label><input type="text" id="labeling-col' +labelingSubId+'" class="ip1"><span class="del-parents"><i class="far asasasas fa-trash-alt"></i></span></div>');
            });
            $("#add-column").click();

            ////
            
            $(document).on('click', '.del-parents', function(e) {
                $(this).parent('.inpt-grp').remove();
            });
            $(".del-parents").click();
            //

            ///slide-toggle-panel//
            $(".title-triger").click(function(){
                $(this).next('.panel-item--sub').slideToggle();
            });

            //function explore db            
            $(document).on('click', '.trigger-explore', function(e) {
                $(this).parent('.panel-coloumn').children('.explore').toggleClass('active-explore');
            });
            $(".trigger-explore").click();

            $(document).on('click', '#close-explore', function(e) {
                $(this).parents('.explore').toggleClass('active-explore');
            });
            $("#close-explore").click();

            $(document).on('change', '#filter-table-explor', function(e) {
                if($(this).val() == "temp") {
                    $(this).parents('.sidebar-explore').children('.persist').hide();
                } else {
                    $(this).parents('.sidebar-explore').children('.persist').show();
                }

                if($(this).val() == "persist") {
                    $(this).parents('.sidebar-explore').children('.temp').hide();
                } else {
                    $(this).parents('.sidebar-explore').children('.temp').show();
                }
                
            });
            $("#filter-table-explor").change();




            //function output         
            $(document).on('click', '.run', function(e) {
                $(this).nextAll('.output-card').show();
                $(this).nextAll('.stat-progress').slideDown();
            });
            $(".run").click();
            


            
            //


            


            
        },
    };

    $(document).ready(function() {
        global_functions.init();
    });

})(jQuery);
