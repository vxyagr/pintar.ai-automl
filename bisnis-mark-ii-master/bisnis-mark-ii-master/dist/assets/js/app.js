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
            
        },

        otheFunction: function() {
        },

        panelfunction: function() {
            // import-db
            $("#imprt-db").click(function(e){
                loading("3");
                var newId = $('.column-db').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn column-db" id="import-db-module-' +newId+ '"><h4>[<span id="import-db-' + newId + '"> </span>] Import Database</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp"><label>Database Type</label><select  id="db-type' +newId+ '"><option value="postgres">PostgreSql</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>Database URL</label><input type="text" id="db-url' +newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Database Name</label><input type="text" id="db-name' +newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Database Table</label><input type="text" id="db-table'+newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Username</label><input type="text" id="db-user'+newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Password</label><input type="password" id="db-pass'+newId+'" class="ip1"></div> '+
                    '<button type="button" onclick="importDatabase(\'import-db-module-' +newId+ '\')" id="run-import-db'+newId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
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
                    '<div class="progress"><div id="progress-bar' + newId + '" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn column-db" id="import-db-module-' +newId+ '"><h4>[<span id="import-db-' + newId + '"> </span>] Import Database</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp"><label>Database Type</label><select  id="db-type' +newId+ '"><option value="postgres">PostgreSql</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>Database URL</label><input type="text" id="db-url' +newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Database Name</label><input type="text" id="db-name' +newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Database Table</label><input type="text" id="db-table'+newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Username</label><input type="text" id="db-user'+newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Password</label><input type="password" id="db-pass'+newId+'" class="ip1"></div> '+
                    '<button type="button" onclick="importDatabase(\'import-db-module-' +newId+ '\')" id="run-import-db'+newId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
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
                    // '<div class="progress"><div id="progress-bar' + newId + '" class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '<div class="progress"><div id="progress-bar' + newId + '" class="progress-bar" role="progressbar" style="width: 0%" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });

            //import file
            $("#imprt-fl").click(function(){
                loading("3");
                var idFile = $('.column-fl').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn column-fl" id="import-module-' +idFile+ '"><h4>Import Files</h4>'+
                     //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<form action="/file-upload"class="dropzone" id="import-file-box-' +idFile+ '"></form>'+
                    '<div class="inpt-grp long-width"><label>Database Type</label><input class="inpt-file" id="file-id-'+idFile+'" type="file" name="myFile"></div>'+
                    '<button type="button" id="run-import-file'+idFile+'" onclick="importFile(\'import-module-' +idFile+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
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
                    '<div class="progress"><div id="progress-bar' + idFile + '" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                } else {
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn column-fl" id="import-module-' +idFile+ '"><h4>Import Files</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp long-width"><label>Database Type</label><input class="inpt-file" id="file-id-'+idFile+'" type="file" name="myFile"></div>'+
                    '<button type="button" id="run-import-file'+idFile+'" onclick="importFile(\'import-module-' +idFile+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
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
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });


            //data merge
            $("#data-merge").click(function(){
                var idMerge = $('.column-data-merge').length + 1;
                showTables('merge-module-' + idMerge);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {

                    // onclick="showTables(\'data-merge-module-' + idMerge + '\')" 
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn column-data-merge"  id="merge-module-'+idMerge+'"><h4>Data Merge</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table 1</label><select onchange="describeTable(\'merge-module-' + idMerge + '\',\'from-merge-' + idMerge + '\',\'from-key-' + idMerge + '\',true)" class="from-merge-'+idMerge+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Key Table 1</label><select class="from-key-'+idMerge+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Join Type</label><select class="method-merge-'+idMerge+'"><option value="inner join">Inner Join</option><option value="left join">Left Join</option><option value="right join">Right Join</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table 2</label><select onchange="describeTable(\'merge-module-' + idMerge + '\',\'to-merge-' + idMerge + '\',\'to-key-' + idMerge + '\',true)" class="to-merge-'+idMerge+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Key Table 2</label><select class="to-key-'+idMerge+'"></select></div>'+

                    '<button type="button" onclick="mergeTables(\'merge-module-' +idMerge+ '\')"  id="run-data-merge'+idMerge+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+idMerge+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                } else {
                    var idMerge = $('.column-data-merge').length + 1;
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn column-data-merge"  id="merge-module-'+idMerge+'"><h4>Data Merge</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table 1</label><select onchange="describeTable(\'merge-module-' + idMerge + '\',\'from-merge-' + idMerge + '\',\'from-key-' + idMerge + '\',true)" class="from-merge-'+idMerge+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Key Table 1</label><select class="from-key-'+idMerge+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Join Type</label><select class="method-merge-'+idMerge+'"><option value="inner join">Inner Join</option><option value="left join">Left Join</option><option value="right join">Right Join</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table 2</label><select onchange="describeTable(\'merge-module-' + idMerge + '\',\'to-merge-' + idMerge + '\',\'to-key-' + idMerge + '\',true)" class="to-merge-'+idMerge+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Key Table 2</label><select class="to-key-'+idMerge+'"></select></div>'+

                    '<button type="button" onclick="mergeTables(\'merge-module-' +idMerge+ '\')"  id="run-data-merge'+idMerge+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+idMerge+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
    
                }
            });

            //select-col
            $("#select-col").click(function(e){
                //loading("3");
                var selectColId = $('.selectcol').length + 1;
                showTables('selectcol-module-' + selectColId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn selectcol" id="selectcol-module-' +selectColId+ '"><h4>Select Column</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'selectcol-module-' + selectColId + '\',\'from-selectcol-' + selectColId + '\',\'from-key-' + selectColId + '\',false)" class="from-selectcol-'+selectColId+'"></select></div>'+
                    '<div class="no-selected-box">'+
                    '</div>'+
                    '<button type="button" id="run-selectcol'+selectColId+'" onclick="selectcol(\'selectcol-module-' +selectColId+ '\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+selectColId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                } else {
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn selectcol" id="selectcol-module-' +selectColId+ '"><h4>Select Column</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'selectcol-module-' + selectColId + '\',\'from-selectcol-' + selectColId + '\',\'from-key-' + selectColId + '\',false)" class="from-selectcol-'+selectColId+'"></select></div>'+
                        '<div class="no-selected-box">'+
                        '</div>'+
                        '<button type="button" id="run-selectcol'+selectColId+'" onclick="selectcol(\'selectcol-module-' +selectColId+ '\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+selectColId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });


            //Select-row
            $("#select-row").click(function(){
                var idSelrow = $('.column-select-row').length + 1;
                showTables('row-module-' + idSelrow);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn column-select-row" id="row-module-'+idSelrow+'"><h4>Select Row</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'row-module-' + idSelrow + '\',\'from-row-' + idSelrow + '\',\'from-key-' + idSelrow + '\',true)" class="from-row-'+idSelrow+'"></select></div>'+
                    // '<div class="inpt-grp thre-width"><label>Row Name</label><input type="text" id="row-name'+idSelrow+'" class="ip1"></div>'+
                    '<div class="inpt-grp thre-width"><label>Row Name</label><select id="name-row'+idSelrow+'" class="from-key-'+idSelrow+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Conditon</label><select id="method-row'+idSelrow+'"><option value="="> = </option><option value="<"> < </option><option value=">"> > </option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Value</label><input type="text" id="value-row'+idSelrow+'" class="ip1"></div>'+
                    '<button type="button" id="run-select-row'+idSelrow+'" onclick="selectRow(\'row-module-' +idSelrow+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+idSelrow+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div id="progress-bar' + idSelrow + '" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                } else {
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn column-select-row" id="row-module-'+idSelrow+'"><h4>Select Row</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'row-module-' + idSelrow + '\',\'from-row-' + idSelrow + '\',\'from-key-' + idSelrow + '\',true)" class="from-row-'+idSelrow+'"></select></div>'+
                        // '<div class="inpt-grp thre-width"><label>Row Name</label><input type="text" id="row-name'+idSelrow+'" class="ip1"></div>'+
                        '<div class="inpt-grp thre-width"><label>Row Name</label><select id="name-row'+idSelrow+'" class="from-key-'+idSelrow+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Conditon</label><select id="method-row'+idSelrow+'"><option value="="> = </option><option value="<"> < </option><option value=">"> > </option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Value</label><input type="text" id="value-row'+idSelrow+'" class="ip1"></div>'+
                        '<button type="button" id="run-select-row'+idSelrow+'" onclick="selectRow(\'row-module-' +idSelrow+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+idSelrow+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div id="progress-bar' + idSelrow + '" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });

            ////////// PREPROCESS ////////

            
            // Standard Scaler
            $("#standardscaler").click(function(e){
                var standarScalerId = $('.scaler').length + 1;
                showTables('scaler-module-' + standarScalerId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn scaler" id="scaler-module-' +standarScalerId+ '"><h4>Standard Scaler</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'scaler-module-' + standarScalerId + '\',\'from-scaler-' + standarScalerId + '\',\'from-key-' + standarScalerId + '\', true)" class="from-scaler-'+standarScalerId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>inputCol </label><select class="from-key-'+standarScalerId+'"></select></div>'+
                    '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol-scaler'+standarScalerId+'" class="ip1" value="scaled"></div> '+
                    '<div class="inpt-grp"><label>withStd</label><input type="text" id="withStd'+standarScalerId+'" class="ip1" value="True"></div> '+
                    '<div class="inpt-grp"><label>withMean</label><input type="text" id="withMean'+standarScalerId+'" class="ip1" value="False"></div> '+
                    '<button type="button" id="run-scaler'+standarScalerId+'" onclick="standardscaler(\'scaler-module-' +standarScalerId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+standarScalerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn scaler" id="scaler-module-' +standarScalerId+ '"><h4>Standard Scaler</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'scaler-module-' + standarScalerId + '\',\'from-scaler-' + standarScalerId + '\',\'from-key-' + standarScalerId + '\', true)" class="from-scaler-'+standarScalerId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>inputCol </label><select class="from-key-'+standarScalerId+'"></select></div>'+
                        '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol-scaler'+standarScalerId+'" class="ip1" value="scaled"></div> '+
                        '<div class="inpt-grp"><label>withStd</label><input type="text" id="withStd'+standarScalerId+'" class="ip1" value="True"></div> '+
                        '<div class="inpt-grp"><label>withMean</label><input type="text" id="withMean'+standarScalerId+'" class="ip1" value="False"></div> '+
                        '<button type="button" id="run-scaler'+standarScalerId+'" onclick="standardscaler(\'scaler-module-' +standarScalerId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+standarScalerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }
            });

             // MissingVal
            $("#missingval").click(function(e){
                var missValId = $('.missval').length + 1;
                showTables('missval-module-' + missValId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn missval" id="missval-module-' +missValId+ '"><h4>[] Missing Value</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Source</label><select class="from-missval-'+missValId+'"></select></div>'+
                        '<div class="no-selected-box">'+
                        '<div class="checkbox-layout-inline"><input id="missval'+missValId+'" class="sel-col-container" type="radio" name="colname'+missValId+'" value="remove"> <label for="missval-1">Remove</label></div>'+
                        '<div class="checkbox-layout-inline"><input id="missval'+missValId+'" class="sel-col-container" type="radio" name="colname'+missValId+'" value="average"> <label for="missval-2">Average</label></div>'+
                        '<div class="checkbox-layout-inline"><input id="missval'+missValId+'" class="sel-col-container" type="radio" name="colname'+missValId+'" value="default"> <label for="missval-3">Default</label></div>'+
                        '</div>'+
                        '<button type="button" id="run-missval'+missValId+'" onclick="missingval(\'missval-module-' +missValId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+missValId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn missval" id="missval-module-' +missValId+ '"><h4>[] Missing Value</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select class="from-missval-'+missValId+'"></select></div>'+
                    '<div class="no-selected-box">'+
                    '<div class="checkbox-layout-inline"><input id="missval'+missValId+'" class="sel-col-container" type="radio" name="colname'+missValId+'" value="remove"> <label for="missval-1">Remove</label></div>'+
                    '<div class="checkbox-layout-inline"><input id="missval'+missValId+'" class="sel-col-container" type="radio" name="colname'+missValId+'" value="average"> <label for="missval-2">Average</label></div>'+
                    '<div class="checkbox-layout-inline"><input id="missval'+missValId+'" class="sel-col-container" type="radio" name="colname'+missValId+'" value="default"> <label for="missval-3">Default</label></div>'+
                    '</div>'+
                    '<button type="button" id="run-missval'+missValId+'" onclick="missingval(\'missval-module-' +missValId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+missValId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });

            //  MinMax
            $("#minmax").click(function(e){
                var minMax = $('.minmax').length + 1;
                showTables('minmax-module-' + minMax);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn minmax" id="minmax-module-' +minMax+ '"><h4>MinMax</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'minmax-module-' + minMax + '\',\'from-minmax-' + minMax + '\',\'from-key-' + minMax + '\',true)" class="from-minmax-'+minMax+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>inputCol </label><select class="from-key-'+minMax+'"></select></div>'+
                    '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol-minmax'+minMax+'" class="ip1" value="scaled"></div> '+
                    '<button type="button" id="run-minmax'+minMax+'" onclick="minmax(\'minmax-module-' +minMax+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+minMax+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn minmax" id="minmax-module-' +minMax+ '"><h4>MinMax</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'minmax-module-' + minMax + '\',\'from-minmax-' + minMax + '\',\'from-key-' + minMax + '\',true)" class="from-minmax-'+minMax+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>inputCol </label><select class="from-key-'+minMax+'"></select></div>'+
                    '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol-minmax'+minMax+'" class="ip1" value="scaled"></div> '+
                    '<button type="button" id="run-minmax'+minMax+'" onclick="minmax(\'minmax-module-' +minMax+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+minMax+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }
            });

            //  Bucketizer
            $("#bucketizer").click(function(e){
                var bucketId = $('.bucket').length + 1;
                showTables('bucket-module-' + bucketId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn bucket" id="bucket-module-' +bucketId+ '"><h4>Bucketizer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'bucket-module-' + bucketId + '\',\'from-bucket-' + bucketId + '\',\'from-key-' + bucketId + '\',true)" class="from-bucket-'+bucketId+'"></select></div>'+
                    '<div class="inpt-grp"><label>Split</label><input type="text" id="split-bucket' +bucketId+'" class="ip1" value="0.2, 0.4"></div> '+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+bucketId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-bucket'+bucketId+'" class="ip1" value="buckets"></div> '+
                    '<button type="button" id="run-bucket'+bucketId+'" onclick="bucketizer(\'bucket-module-' +bucketId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+bucketId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn bucket" id="bucket-module-' +bucketId+ '"><h4>Bucketizer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'bucket-module-' + bucketId + '\',\'from-bucket-' + bucketId + '\',\'from-key-' + bucketId + '\',true)" class="from-bucket-'+bucketId+'"></select></div>'+
                    '<div class="inpt-grp"><label>Split</label><input type="text" id="split-bucket' +bucketId+'" class="ip1" value="0.2, 0.4"></div> '+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+bucketId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-bucket'+bucketId+'" class="ip1" value="buckets"></div> '+
                    '<button type="button" id="run-bucket'+bucketId+'" onclick="bucketizer(\'bucket-module-' +bucketId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+bucketId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }
            });


            //  vectorassembler
            $("#vectorassembler").click(function(e){
                var vaId = $('.va').length + 1;
                showTables('va-module-' + vaId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn va" id="va-module-' +vaId+ '"><h4>Vector Assembler</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'va-module-' + vaId + '\',\'from-va-' + vaId + '\',\'from-key-' + vaId + '\',false)" class="from-va-'+vaId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="OutputCol-va'+vaId+'" class="ip1" value="va_features"></div> '+
                    '<div class="no-selected-box">'+
                    '</div>'+
                    '<button type="button" id="run-va'+vaId+'" onclick="vectorAssembler(\'va-module-' +vaId+ '\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+vaId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn va" id="va-module-' +vaId+ '"><h4>Vector Assembler</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'va-module-' + vaId + '\',\'from-va-' + vaId + '\',\'from-key-' + vaId + '\',false)" class="from-va-'+vaId+'"></select></div>'+
                    // '<div class="inpt-grp"><label>InputCol</label><input type="text" id="inputCol-va' +vaId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="OutputCol-va'+vaId+'" class="ip1" value="va_features"></div> '+
                    '<div class="no-selected-box">'+                   
                    '</div>'+
                    '<button type="button" id="run-va'+vaId+'" onclick="vectorAssembler(\'va-module-' +vaId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+vaId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                   
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }
            });

             //  PCA
             $("#pca").click(function(e){

                var pcaId = $('.pca').length + 1;
                showTables('pca-module-' + pcaId);

                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn pca" id="pca-module-' +pcaId+ '"><h4>PCA</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'pca-module-' + pcaId +  '\',\'from-pca-' + pcaId + '\',\'from-key-' + pcaId + '\', true)"  class="from-pca-'+pcaId+'"></select></div>'+
                        '<div class="inpt-grp"><label>NumOfComponents</label><input type="text" id="num-of-components-' +pcaId+'" class="num-of-components-' +pcaId+'" value="2"></div> '+
                        '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+pcaId+'"></select></div>'+
                        '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-pca' +pcaId+'" class="ip1" value="pca_feature"></div> '+
                        '<button type="button" id="run-pca'+pcaId+'" onclick="pca(\'pca-module-' +pcaId+ '\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+pcaId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn pca" id="pca-module-' +pcaId+ '"><h4>PCA</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'pca-module-' + pcaId +  '\',\'from-pca-' + pcaId + '\',\'from-key-' + pcaId + '\', true)" class="from-pca-'+pcaId+'"></select></div>'+
                        '<div class="inpt-grp"><label>NumOfComponents</label><input type="text" id="num-of-components-' +pcaId+'" class="num-of-components-' +pcaId+'" value="2"></div> '+
                        '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+pcaId+'"></select></div>'+
                        '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-pca' +pcaId+'" class="ip1" value="pca_feature"></div> '+
                        '<button type="button" id="run-pca'+pcaId+'" onclick="pca(\'pca-module-' +pcaId+ '\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+pcaId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });

            //  tokenizer
            $("#tokenizer").click(function(e){
                var tokenizerId = $('.tokenizer').length + 1;
                showTables('tokenizer-module-' + tokenizerId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn tokenizer" id="tokenizer-module-' +tokenizerId+ '"><h4>Tokenizer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'tokenizer-module-' + tokenizerId +  '\',\'from-tokenizer-' + tokenizerId + '\',\'from-key-' + tokenizerId + '\', true)"  class="from-tokenizer-'+tokenizerId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+tokenizerId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-tokenizer'+tokenizerId+'" class="ip1" value="tokenized"></div> '+
                    '<button type="button" id="run-tokenizer'+tokenizerId+'" onclick="tokenizer(\'tokenizer-module-' +tokenizerId+ '\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+tokenizerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn tokenizer" id="tokenizer-module-' +tokenizerId+ '"><h4>Tokenizer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'tokenizer-module-' + tokenizerId +  '\',\'from-tokenizer-' + tokenizerId + '\',\'from-key-' + tokenizerId + '\', true)"  class="from-tokenizer-'+tokenizerId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+tokenizerId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-tokenizer'+tokenizerId+'" class="ip1" value="tokenized"></div> '+
                    '<button type="button" id="run-tokenizer'+tokenizerId+'" onclick="tokenizer(\'tokenizer-module-' +tokenizerId+ '\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+tokenizerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });

            //  stopword
            $("#stopword").click(function(e){
                var stopwordId = $('.stopword').length + 1;
                showTables('stopword-module-' + stopwordId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn stopword" id="stopword-module-' +stopwordId+ '"><h4>StopWordRemover</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'stopword-module-' + stopwordId +  '\',\'from-stopword-' + stopwordId + '\',\'from-key-' + stopwordId + '\', true)"  class="from-stopword-'+stopwordId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+stopwordId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-stopword'+stopwordId+'" class="ip1" value="stopword_feature"></div> '+
                    '<button type="button" id="run-stopword'+stopwordId+'" onclick="stopword(\'stopword-module-' +stopwordId+ '\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+stopwordId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn stopword" id="stopword-module-' +stopwordId+ '"><h4>StopWordRemover</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'stopword-module-' + stopwordId +  '\',\'from-stopword-' + stopwordId + '\',\'from-key-' + stopwordId + '\', true)"  class="from-stopword-'+stopwordId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>InputCol</label><select class="from-key-'+stopwordId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-stopword'+stopwordId+'" class="ip1" value="stopword_feature"></div> '+
                    '<button type="button" id="run-stopword'+stopwordId+'" onclick="stopword(\'stopword-module-' +stopwordId+ '\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+stopwordId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });


            //  onehot
            $("#onehot").click(function(e){
                var onehotId = $('.onehot').length + 1;
                showTables('onehot-module-' + onehotId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn onehot" id="onehot-module-' +onehotId+ '"><h4>OneHotEncoder</h4><b style="color:red"> Note : Must be String Indexer First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'onehot-module-' + onehotId +  '\',\'from-onehot-' + onehotId + '\',\'from-key-' + onehotId + '\', true)"  class="from-onehot-'+onehotId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+onehotId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-onehot'+onehotId+'" class="ip1" value="encoded"></div> '+
                    '<button type="button" id="run-onehot'+onehotId+'" onclick="onehot(\'onehot-module-' +onehotId+ '\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+onehotId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn onehot" id="onehot-module-' +onehotId+ '"><h4>OneHotEncoder</h4><b style="color:red"> Note : Must be String Indexer First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'onehot-module-' + onehotId +  '\',\'from-onehot-' + onehotId + '\',\'from-key-' + onehotId + '\', true)"  class="from-onehot-'+onehotId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+onehotId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-onehot'+onehotId+'" class="ip1" value="encoded"></div> '+
                    '<button type="button" id="run-onehot'+onehotId+'" onclick="onehot(\'onehot-module-' +onehotId+ '\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+onehotId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });

            //  normalizer
            $("#normalizer").click(function(e){
                var normalizerId = $('.normalizer').length + 1;
                showTables('normalizer-module-' + normalizerId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn normalizer" id="normalizer-module-' +normalizerId+ '"><h4>Normalizer</h4><b style="color:red"> Note : Must be Vector Assembler First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'normalizer-module-' + normalizerId + '\',\'from-normalizer-' + normalizerId + '\',\'from-key-' + normalizerId + '\', true)" class="from-normalizer-'+normalizerId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+normalizerId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-normalizer'+normalizerId+'" class="ip1" value="normalized"></div> '+
                    '<div class="inpt-grp"><label>P</label><input type="text" id="p-normalizer'+normalizerId+'" class="ip1" value="2"></div> '+
                    '<button type="button" id="run-normalizer'+normalizerId+'" onclick="normalizer(\'normalizer-module-' +normalizerId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+normalizerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn normalizer" id="normalizer-module-' +normalizerId+ '"><h4>Normalizer</h4><b style="color:red"> Note : Must be Vector Assembler First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'normalizer-module-' + normalizerId + '\',\'from-normalizer-' + normalizerId + '\',\'from-key-' + normalizerId + '\', true)" class="from-normalizer-'+normalizerId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+normalizerId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-normalizer'+normalizerId+'" class="ip1" value="normalized"></div> '+
                    '<div class="inpt-grp"><label>P</label><input type="text" id="p-normalizer'+normalizerId+'" class="ip1" value="2"></div> '+
                    '<button type="button" id="run-normalizer'+normalizerId+'" onclick="normalizer(\'normalizer-module-' +normalizerId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+normalizerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });
            
            //  Random Split
            $("#randomsplit").click(function(e){
                loading("3");
                var totalcolumn = $(".panel-coloumn").length + 1;
                var randomsplitId = $('.va').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn va" id="random-split-module-' +randomsplitId+ '"><h4>[] Random Split</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp"><label>Data Source</label><select id="datasource-random-split' +randomsplitId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>Train</label><input type="text" id="train-random-split' +randomsplitId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Test</label><input type="text" id="test-random-split'+randomsplitId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Seed</label><input type="text" id="seed-random-split' +randomsplitId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>output</label><input type="text" id="output-random-split'+randomsplitId+'" class="ip1"></div> '+
                    '<button type="button" id="run-random-split'+randomsplitId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+randomsplitId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-random-split-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn va" id="random-split-module-' +randomsplitId+ '"><h4>[] Random Split</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp"><label>Data Source</label><select id="datasource-random-split' +randomsplitId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>Train</label><input type="text" id="train-random-split' +randomsplitId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>Test</label><input type="text" id="test-random-split'+randomsplitId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>Seed</label><input type="text" id="seed-random-split' +randomsplitId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>output</label><input type="text" id="output-random-split'+randomsplitId+'" class="ip1"></div> '+
                        '<button type="button" id="run-random-split'+randomsplitId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+randomsplitId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-random-split-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }
            });
            
            // String Indexer
            $("#stringindexer").click(function(e){
                loading("3");

                var totalcolumn = $(".panel-coloumn").length + 1;
                var stringindexerId = $('.stringindexer').length + 1;
                showTables('stringindexer-module-' + stringindexerId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn stringindexer" id="stringindexer-module-' +stringindexerId+ '"><h4>[] String Indexer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'stringindexer-module-' + stringindexerId + '\',\'from-stringindexer-' + stringindexerId + '\',\'from-key-' + stringindexerId + '\', true)" class="from-stringindexer-'+stringindexerId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+stringindexerId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-stringindexer'+stringindexerId+'" class="ip1" value="indexed"></div> '+
                    '<div class="inpt-grp"><label>handleInvalid</label><input type="text" id="handleInvalid-stringindexer' +stringindexerId+'" class="ip1" value="error"></div> '+
                    '<div class="inpt-grp"><label>stringOrderType</label><input type="text" id="stringOrderType-stringindexer'+stringindexerId+'" class="ip1" value="frequencyDesc"></div> '+
                    '<button type="button" id="run-stringindexer'+stringindexerId+'" onclick="stringindexer(\'stringindexer-module-' +stringindexerId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+stringindexerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-stringindexer-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn stringindexer" id="stringindexer-module-' +stringindexerId+ '"><h4>[] String Indexer</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'stringindexer-module-' + stringindexerId + '\',\'from-stringindexer-' + stringindexerId + '\',\'from-key-' + stringindexerId + '\', true)" class="from-stringindexer-'+stringindexerId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+stringindexerId+'"></select></div>'+
                        '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-stringindexer'+stringindexerId+'" class="ip1" value="indexed"></div> '+
                        '<div class="inpt-grp"><label>handleInvalid</label><input type="text" id="handleInvalid-stringindexer' +stringindexerId+'" class="ip1" value="error"></div> '+
                        '<div class="inpt-grp"><label>stringOrderType</label><input type="text" id="stringOrderType-stringindexer'+stringindexerId+'" class="ip1" value="frequencyDesc"></div> '+
                        '<button type="button" id="run-stringindexer'+stringindexerId+'" onclick="stringindexer(\'stringindexer-module-' +stringindexerId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+stringindexerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-stringindexer-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }
            });

            // Label Indexer
            $("#labelindexer").click(function(e){
                loading("3");

                var totalcolumn = $(".panel-coloumn").length + 1;
                var labelindexerId = $('.labelindexer').length + 1;
                showTables('labelindexer-module-' + labelindexerId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn labelindexer" id="labelindexer-module-' +labelindexerId+ '"><h4>[] Label Indexer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'labelindexer-module-' + labelindexerId + '\',\'from-labelindexer-' + labelindexerId + '\',\'from-key-' + labelindexerId + '\', true)" class="from-labelindexer-'+labelindexerId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+labelindexerId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-labelindexer'+labelindexerId+'" class="ip1" value="indexed"></div> '+
                    '<div class="inpt-grp"><label>handleInvalid</label><input type="text" id="handleInvalid-labelindexer' +labelindexerId+'" class="ip1" value="error"></div> '+
                    '<div class="inpt-grp"><label>stringOrderType</label><input type="text" id="stringOrderType-labelindexer'+labelindexerId+'" class="ip1" value="frequencyDesc"></div> '+
                    '<button type="button" id="run-labelindexer'+labelindexerId+'" onclick="labelindexer(\'labelindexer-module-' +labelindexerId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+labelindexerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-labelindexer-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn labelindexer" id="labelindexer-module-' +labelindexerId+ '"><h4>[] String Indexer</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'labelindexer-module-' + labelindexerId + '\',\'from-labelindexer-' + labelindexerId + '\',\'from-key-' + labelindexerId + '\', true)" class="from-labelindexer-'+labelindexerId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+labelindexerId+'"></select></div>'+
                        '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-labelindexer'+labelindexerId+'" class="ip1" value="indexed"></div> '+
                        '<div class="inpt-grp"><label>handleInvalid</label><input type="text" id="handleInvalid-labelindexer' +labelindexerId+'" class="ip1" value="error"></div> '+
                        '<div class="inpt-grp"><label>stringOrderType</label><input type="text" id="stringOrderType-labelindexer'+labelindexerId+'" class="ip1" value="frequencyDesc"></div> '+
                        '<button type="button" id="run-labelindexer'+labelindexerId+'" onclick="labelindexer(\'labelindexer-module-' +labelindexerId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+labelindexerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-labelindexer-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }
            });

            //HASHING TF
            
            $("#hashingtf").click(function(e){
                var hashingTfId = $('.hashingTf').length + 1;
                showTables('hashingTf-module-' + hashingTfId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn hashingTf" id="hashingTf-module-' +hashingTfId+ '"><h4>Hashing TF</h4><b style="color:red"> Note : Must be Tokenizer First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'hashingTf-module-' + hashingTfId + '\',\'from-hashingTf-' + hashingTfId + '\',\'from-key-' + hashingTfId + '\', true)" class="from-hashingTf-'+hashingTfId+'"></select></div>'+
                    '<div class="inpt-grp"><label>Number of Features</label><input type="text" id="num_of_features-hashingTf'+hashingTfId+'" class="ip1" value="10"></div> '+
                    '<div class="inpt-grp thre-width"><label>inputCol </label><select class="from-key-'+hashingTfId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-hashingTf'+hashingTfId+'" class="ip1" value="tf"></div> '+
                    
                    '<button type="button" id="run-hashingTf'+hashingTfId+'" onclick="hashingTf(\'hashingTf-module-' +hashingTfId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+hashingTfId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn hashingTf" id="hashingTf-module-' +hashingTfId+ '"><h4>Hashing TF</h4><b style="color:red"> Note : Must be Tokenizer First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'hashingTf-module-' + hashingTfId + '\',\'from-hashingTf-' + hashingTfId + '\',\'from-key-' + hashingTfId + '\', true)" class="from-hashingTf-'+hashingTfId+'"></select></div>'+
                    '<div class="inpt-grp"><label>Number of Features</label><input type="text" id="num_of_features-hashingTf'+hashingTfId+'" class="ip1" value="10"></div> '+
                    '<div class="inpt-grp thre-width"><label>inputCol </label><select class="from-key-'+hashingTfId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-hashingTf'+hashingTfId+'" class="ip1" value="tf"></div> '+
                    
                    '<button type="button" id="run-hashingTf'+hashingTfId+'" onclick="hashingTf(\'hashingTf-module-' +hashingTfId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+hashingTfId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');

                }
            });

            //IDF
            
            $("#idf").click(function(e){
                var idfId = $('.idf').length + 1;
                showTables('idf-module-' + idfId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn idf" id="idf-module-' +idfId+ '"><h4>IDF</h4><b style="color:red"> Note : Must be Tokenizer First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'idf-module-' + idfId + '\',\'from-idf-' + idfId + '\',\'from-key-' + idfId + '\', true)" class="from-idf-'+idfId+'"></select></div>'+
                    '<div class="inpt-grp"><label>Minimum Document Frequency</label><input type="text" id="min_doc_freq-idf'+idfId+'" class="ip1" value="3"></div> '+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+idfId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-idf'+idfId+'" class="ip1" value="idf"></div> '+
                    
                    '<button type="button" id="run-idf'+idfId+'" onclick="idf(\'idf-module-' +idfId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+idfId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn idf" id="idf-module-' +idfId+ '"><h4>IDF</h4><b style="color:red"> Note : Must be Tokenizer First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'idf-module-' + idfId + '\',\'from-idf-' + idfId + '\',\'from-key-' + idfId + '\', true)" class="from-idf-'+idfId+'"></select></div>'+
                    '<div class="inpt-grp"><label>Minimum Document Frequency</label><input type="text" id="min_doc_freq-idf'+idfId+'" class="ip1" value="3"></div> '+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+idfId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-idf'+idfId+'" class="ip1" value="idf"></div> '+
                    
                    '<button type="button" id="run-idf'+idfId+'" onclick="idf(\'idf-module-' +idfId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+idfId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');

                }
            });

            //  Count Vectorizer
            $("#countvectorizer").click(function(e){
                var cvId = $('.cv').length + 1;
                showTables('cv-module-' + cvId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn cv" id="cv-module-' +cvId+ '"><h4>Count Vectorizer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'cv-module-' + cvId +  '\',\'from-cv-' + cvId + '\',\'from-key-' + cvId + '\', true)"  class="from-cv-'+cvId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+cvId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-cv'+cvId+'" class="ip1" value="count_vectorized"></div> '+
                    '<button type="button" id="run-cv'+cvId+'" onclick="countvectorizer(\'cv-module-' +cvId+ '\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+cvId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn cv" id="cv-module-' +cvId+ '"><h4>Count Vectorizer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'cv-module-' + cvId +  '\',\'from-cv-' + cvId + '\',\'from-key-' + cvId + '\', true)"  class="from-cv-'+cvId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+cvId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-cv'+cvId+'" class="ip1" value="count_vectorized"></div> '+
                    '<button type="button" id="run-cv'+cvId+'" onclick="countvectorizer(\'cv-module-' +cvId+ '\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+cvId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
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
                showTables('kmeans-module-' + kmeansId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn kmeans" id="kmeans-module-' +kmeansId+ '"><h4>KMeans</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'kmeans-module-' + kmeansId + '\',\'from-kmeans-' + kmeansId + '\',\'from-key-' + kmeansId + '\',true)" class="from-kmeans-'+kmeansId+'"></select></div>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-kmeans' +kmeansId+'" class="ip1" value="features"></div> '+
                    '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-kmeans' +kmeansId+'" class="from-key-'+kmeansId+'"></select></div>'+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-kmeans'+kmeansId+'" class="ip1" value="prediction"></div> '+
                    '<div class="inpt-grp"><label>initMode</label><input type="text" id="initMode-kmeans'+kmeansId+'" class="ip1" value="k-means||"></div> '+
                    '<div class="inpt-grp"><label>initSteps</label><input type="text" id="initSteps-kmeans'+kmeansId+'" class="ip1" value="2"></div> '+
                    '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-kmeans'+kmeansId+'" class="ip1" value="0.0001"></div> '+
                    '<div class="inpt-grp"><label>K</label><input type="text" id="k-kmeans'+kmeansId+'" class="ip1" value="2"></div> '+
                    '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-kmeans'+kmeansId+'" class="ip1" value="20"></div> '+
                    '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-kmeans'+kmeansId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>distanceMeasure</label><input type="text" id="distanceMeasure-kmeans'+kmeansId+'" class="ip1" value="euclidean"></div> '+
                    // '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-kmeans'+kmeansId+'" class="ip1" value="0.75"></div> '+
                    // '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-kmeans'+kmeansId+'" class="ip1" value="0.25"></div> '+
                    '<button type="button" id="run-kmeans'+kmeansId+'"  onclick="kmeans(\'kmeans-module-' +kmeansId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+kmeansId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn kmeans" id="kmeans-module-' +kmeansId+ '"><h4>KMeans</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'kmeans-module-' + kmeansId + '\',\'from-kmeans-' + kmeansId + '\',\'from-key-' + kmeansId + '\',true)" class="from-kmeans-'+kmeansId+'"></select></div>'+
                        '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-kmeans' +kmeansId+'" class="ip1" value="features"></div> '+
                        '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-kmeans' +kmeansId+'" class="from-key-'+kmeansId+'"></select></div>'+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-kmeans'+kmeansId+'" class="ip1" value="prediction"></div> '+
                        '<div class="inpt-grp"><label>initMode</label><input type="text" id="initMode-kmeans'+kmeansId+'" class="ip1" value="k-means||"></div> '+
                        '<div class="inpt-grp"><label>initSteps</label><input type="text" id="initSteps-kmeans'+kmeansId+'" class="ip1" value="2"></div> '+
                        '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-kmeans'+kmeansId+'" class="ip1" value="0.0001"></div> '+
                        '<div class="inpt-grp"><label>K</label><input type="text" id="k-kmeans'+kmeansId+'" class="ip1" value="2"></div> '+
                        '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-kmeans'+kmeansId+'" class="ip1" value="20"></div> '+
                        '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-kmeans'+kmeansId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>distanceMeasure</label><input type="text" id="distanceMeasure-kmeans'+kmeansId+'" class="ip1" value="euclidean"></div> '+
                        // '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-kmeans'+kmeansId+'" class="ip1" value="0.75"></div> '+
                        // '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-kmeans'+kmeansId+'" class="ip1" value="0.25"></div> '+
                        '<button type="button" id="run-kmeans'+kmeansId+'"  onclick="kmeans(\'kmeans-module-' +kmeansId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+kmeansId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });

            //  gmm
            $("#gmm").click(function(e){
                var gmmId = $('.gmm').length + 1;
                showTables('gmm-module-' + gmmId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn gmm" id="gmm-module-' +gmmId+ '"><h4>Gaussian Mixture Model</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'gmm-module-' + gmmId + '\',\'from-gmm-' + gmmId + '\',\'from-key-' + gmmId + '\',true)" class="from-gmm-'+gmmId+'"></select></div>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-gmm' +gmmId+'" class="ip1" value="features"></div> '+
                    '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-gmm' +gmmId+'" class="from-key-'+gmmId+'"></select></div>'+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-gmm'+gmmId+'" class="ip1" value="prediction"></div> '+
                    '<div class="inpt-grp"><label>k</label><input type="text" id="k-gmm'+gmmId+'" class="ip1" value="2"></div> '+
                    '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-gmm'+gmmId+'" class="ip1" value="probability"></div> '+
                    '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-gmm'+gmmId+'" class="ip1" value="0.01"></div> '+
                    '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-gmm'+gmmId+'" class="ip1" value="100"></div> '+
                    '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-gmm'+gmmId+'" class="ip1" value="None"></div> '+
                    // '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-2-gmm'+gmmId+'" class="ip1"></div> '+
                    // '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-gmm'+gmmId+'" class="ip1" value="0.75"></div> '+
                    // '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-gmm'+gmmId+'" class="ip1" value="0.25"></div> '+
                    '<button type="button" id="run-gmm'+gmmId+'" onclick="gmm(\'gmm-module-' +gmmId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+gmmId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn gmm" id="gmm-module-' +gmmId+ '"><h4>Gaussian Mixture Model</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'gmm-module-' + gmmId + '\',\'from-gmm-' + gmmId + '\',\'from-key-' + gmmId + '\',true)" class="from-gmm-'+gmmId+'"></select></div>'+
                        '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-gmm' +gmmId+'" class="ip1" value="features"></div> '+
                        '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-gmm' +gmmId+'" class="from-key-'+gmmId+'"></select></div>'+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-gmm'+gmmId+'" class="ip1" value="prediction"></div> '+
                        '<div class="inpt-grp"><label>k</label><input type="text" id="k-gmm'+gmmId+'" class="ip1" value="2"></div> '+
                        '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-gmm'+gmmId+'" class="ip1" value="probability"></div> '+
                        '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-gmm'+gmmId+'" class="ip1" value="0.01"></div> '+
                        '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-gmm'+gmmId+'" class="ip1" value="100"></div> '+
                        '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-gmm'+gmmId+'" class="ip1" value="None"></div> '+
                        // '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-2-gmm'+gmmId+'" class="ip1"></div> '+
                        // '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-gmm'+gmmId+'" class="ip1" value="0.75"></div> '+
                        // '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-gmm'+gmmId+'" class="ip1" value="0.25"></div> '+
                        '<button type="button" id="run-gmm'+gmmId+'" onclick="gmm(\'gmm-module-' +gmmId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+gmmId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });

            //  linear-reg
            $("#linearreg").click(function(e){
                var linearregId = $('.linearreg').length + 1;
                showTables('linearreg-module-' + linearregId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn linearreg" id="linearreg-module-' +linearregId+ '"><h4>Linear Regression</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'linearreg-module-' + linearregId + '\',\'from-linearreg-' + linearregId + '\',\'from-key-' + linearregId + '\',true)" class="from-linearreg-'+linearregId+'"></select></div>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-linearreg' +linearregId+'" class="ip1" value="features"></div> '+
                    '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-linearreg' +linearregId+'" class="from-key-'+linearregId+'"></select></div>'+
                    // '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-linearreg'+linearregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-linearreg'+linearregId+'" class="ip1" value="prediction"></div> '+
                    '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-linearreg'+linearregId+'" class="ip1" value="100"></div> '+
                    '<div class="inpt-grp"><label>regParam</label><input type="text" id="regParam-linearreg'+linearregId+'" class="ip1" value="0.0"></div> '+
                    '<div class="inpt-grp"><label>elasticNetParam</label><input type="text" id="elasticNetParam-linearreg'+linearregId+'" class="ip1" value="0.0"></div> '+
                    '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-linearreg'+linearregId+'" class="ip1" value="1e-06"></div> '+
                    '<div class="inpt-grp"><label>fitIntercept</label><input type="text" id="fitIntercept-linearreg'+linearregId+'" class="ip1" value="True"></div> '+
                    '<div class="inpt-grp"><label>standardization</label><input type="text" id="standardization-linearreg'+linearregId+'" class="ip1" value="True"></div> '+
                    '<div class="inpt-grp"><label>solver</label><input type="text" id="solver-linearreg'+linearregId+'" class="ip1" value="auto"></div> '+
                    '<div class="inpt-grp"><label>weightCol</label><input type="text" id="weightCol-linearreg'+linearregId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>aggregationDepth</label><input type="text" id="aggregationDepth-linearreg'+linearregId+'" class="ip1" value="2"></div> '+           
                    '<div class="inpt-grp"><label>loss</label><input type="text" id="loss-linearreg'+linearregId+'" class="ip1" value="squaredError"></div> '+
                    '<div class="inpt-grp"><label>epsilon</label><input type="text" id="epsilon-linearreg'+linearregId+'" class="ip1" value="1.35"></div> '+
                    '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-linearreg'+linearregId+'" class="ip1" value="0.75"></div> '+
                    '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-linearreg'+linearregId+'" class="ip1" value="0.25"></div> '+
                    '<button type="button" id="run-linearreg'+linearregId+'" onclick="linearRegression(\'linearreg-module-' +linearregId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+linearregId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn linearreg" id="linearreg-module-' +linearregId+ '"><h4>Linear Regression</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'linearreg-module-' + linearregId + '\',\'from-linearreg-' + linearregId + '\',\'from-key-' + linearregId + '\',true)" class="from-linearreg-'+linearregId+'"></select></div>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-linearreg' +linearregId+'" class="ip1" value="features"></div> '+
                    '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-linearreg' +linearregId+'" class="from-key-'+linearregId+'"></select></div>'+
                    // '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-linearreg'+linearregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-linearreg'+linearregId+'" class="ip1" value="prediction"></div> '+
                    '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-linearreg'+linearregId+'" class="ip1" value="100"></div> '+
                    '<div class="inpt-grp"><label>regParam</label><input type="text" id="regParam-linearreg'+linearregId+'" class="ip1" value="0.0"></div> '+
                    '<div class="inpt-grp"><label>elasticNetParam</label><input type="text" id="elasticNetParam-linearreg'+linearregId+'" class="ip1" value="0.0"></div> '+
                    '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-linearreg'+linearregId+'" class="ip1" value="1e-06"></div> '+
                    '<div class="inpt-grp"><label>fitIntercept</label><input type="text" id="fitIntercept-linearreg'+linearregId+'" class="ip1" value="True"></div> '+
                    '<div class="inpt-grp"><label>standardization</label><input type="text" id="standardization-linearreg'+linearregId+'" class="ip1" value="True"></div> '+
                    '<div class="inpt-grp"><label>solver</label><input type="text" id="solver-linearreg'+linearregId+'" class="ip1" value="auto"></div> '+
                    '<div class="inpt-grp"><label>weightCol</label><input type="text" id="weightCol-linearreg'+linearregId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>aggregationDepth</label><input type="text" id="aggregationDepth-linearreg'+linearregId+'" class="ip1" value="2"></div> '+           
                    '<div class="inpt-grp"><label>loss</label><input type="text" id="loss-linearreg'+linearregId+'" class="ip1" value="squaredError"></div> '+
                    '<div class="inpt-grp"><label>epsilon</label><input type="text" id="epsilon-linearreg'+linearregId+'" class="ip1" value="1.35"></div> '+
                    '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-linearreg'+linearregId+'" class="ip1" value="0.75"></div> '+
                    '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-linearreg'+linearregId+'" class="ip1" value="0.25"></div> '+
                    '<button type="button" id="run-linearreg'+linearregId+'" onclick="linearRegression(\'linearreg-module-' +linearregId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+linearregId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });


            //  logisticreg
            $("#logisticreg").click(function(e){
                var logisticregId = $('.logisticreg').length + 1;
                showTables('logisticreg-module-' + logisticregId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn logisticreg" id="logisticreg-module-' +logisticregId+ '"><h4>Logistic Regression</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'logisticreg-module-' + logisticregId + '\',\'from-logisticreg-' + logisticregId + '\',\'from-key-' + logisticregId + '\',true)" class="from-logisticreg-'+logisticregId+'"></select></div>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-logisticreg' +logisticregId+'" class="ip1" value="features"></div> '+
                    '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-logisticreg' +logisticregId+'" class="from-key-'+logisticregId+'"></select></div>'+
                    // '<div class="inpt-grp thre-width"><label>predictionCol</label><select id="predictionCol-logisticreg' +logisticregId+'" class="from-key-'+logisticregId+'"></select></div>'+
                    // '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-logisticreg' +logisticregId+'" class="ip1" value="prediction"></div> '+
                    '<div class="inpt-grp"><label>maxIter</label><input type="text" value="100" id="maxIter-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>regParam</label><input type="text" value="0.0" id="regParam-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>elasticNetParam</label><input type="text" value="0.0" id="elasticNetParam-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>tol</label><input type="text" value="1e-06" id="tol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>fitIntercept</label><input type="text" id="fitIntercept-logisticreg' +logisticregId+'" class="ip1" value="True"></div> '+
                    '<div class="inpt-grp"><label>threshold</label><input type="text" value="0.5" id="threshold-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>thresholds</label><input type="text" id="thresholds-logisticreg' +logisticregId+'" class="ip1" value="None"></div> '+ 
                    '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-logisticreg' +logisticregId+'" class="ip1" value="probability"></div> '+
                    '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-logisticreg' +logisticregId+'" class="ip1" value="rawPrediction"></div> '+
                    '<div class="inpt-grp"><label>standardization</label><input type="text" id="standardization-logisticreg' +logisticregId+'" class="ip1" value="True"></div> '+
                    '<div class="inpt-grp"><label>weightCol</label><input type="text" id="weightCol-logisticreg' +logisticregId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>aggregationDepth</label><input type="text" value="2" id="aggregationDepth-logisticreg' +logisticregId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>family</label><input type="text" id="family-logisticreg' +logisticregId+'" class="ip1" value="auto"></div> '+
                    '<div class="inpt-grp"><label>lowerBoundsOnCoefficients</label><input type="text" id="lowerBoundsOnCoefficients-logisticreg' +logisticregId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>upperBoundsOnCoefficients</label><input type="text" id="upperBoundsOnCoefficients-logisticreg' +logisticregId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>lowerBoundsOnIntercepts</label><input type="text" id="lowerBoundsOnIntercepts-logisticreg' +logisticregId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>upperBoundsOnIntercepts</label><input type="text" id="upperBoundsOnIntercepts-logisticreg' +logisticregId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-logisticreg'+logisticregId+'" class="ip1" value="0.75"></div> '+
                    '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-logisticreg'+logisticregId+'" class="ip1" value="0.25"></div> '+
                    '<button type="button" id="run-logisticreg'+logisticregId+'" onclick="logisticRegression(\'logisticreg-module-' +logisticregId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+logisticregId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn logisticreg" id="logisticreg-module-' +logisticregId+ '"><h4>Logistic Regression</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'logisticreg-module-' + logisticregId + '\',\'from-logisticreg-' + logisticregId + '\',\'from-key-' + logisticregId + '\',true)" class="from-logisticreg-'+logisticregId+'"></select></div>'+
                        '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-logisticreg' +logisticregId+'" class="ip1" value="features"></div> '+
                        '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-logisticreg' +logisticregId+'" class="from-key-'+logisticregId+'"></select></div>'+
                        // '<div class="inpt-grp thre-width"><label>predictionCol</label><select id="predictionCol-logisticreg' +logisticregId+'" class="from-key-'+logisticregId+'"></select></div>'+
                        // '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-logisticreg' +logisticregId+'" class="ip1" value="prediction"></div> '+
                        '<div class="inpt-grp"><label>maxIter</label><input type="text" value="100" id="maxIter-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>regParam</label><input type="text" value="0.0" id="regParam-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>elasticNetParam</label><input type="text" value="0.0" id="elasticNetParam-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>tol</label><input type="text" value="1e-06" id="tol-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>fitIntercept</label><input type="text" id="fitIntercept-logisticreg' +logisticregId+'" class="ip1" value="True"></div> '+
                        '<div class="inpt-grp"><label>threshold</label><input type="text" value="0.5" id="threshold-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>thresholds</label><input type="text" id="thresholds-logisticreg' +logisticregId+'" class="ip1" value="None"></div> '+ 
                        '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-logisticreg' +logisticregId+'" class="ip1" value="probability"></div> '+
                        '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-logisticreg' +logisticregId+'" class="ip1" value="rawPrediction"></div> '+
                        '<div class="inpt-grp"><label>standardization</label><input type="text" id="standardization-logisticreg' +logisticregId+'" class="ip1" value="True"></div> '+
                        '<div class="inpt-grp"><label>weightCol</label><input type="text" id="weightCol-logisticreg' +logisticregId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>aggregationDepth</label><input type="text" value="2" id="aggregationDepth-logisticreg' +logisticregId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>family</label><input type="text" id="family-logisticreg' +logisticregId+'" class="ip1" value="auto"></div> '+
                        '<div class="inpt-grp"><label>lowerBoundsOnCoefficients</label><input type="text" id="lowerBoundsOnCoefficients-logisticreg' +logisticregId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>upperBoundsOnCoefficients</label><input type="text" id="upperBoundsOnCoefficients-logisticreg' +logisticregId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>lowerBoundsOnIntercepts</label><input type="text" id="lowerBoundsOnIntercepts-logisticreg' +logisticregId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>upperBoundsOnIntercepts</label><input type="text" id="upperBoundsOnIntercepts-logisticreg' +logisticregId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-logisticreg'+logisticregId+'" class="ip1" value="0.75"></div> '+
                        '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-logisticreg'+logisticregId+'" class="ip1" value="0.25"></div> '+
                        '<button type="button" id="run-logisticreg'+logisticregId+'" onclick="logisticRegression(\'logisticreg-module-' +logisticregId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+logisticregId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });


            //  decisiontree
            $("#decisiontree").click(function(e){
                var decisiontreeId = $('.decisiontree').length + 1;
                showTables('decisiontree-module-' + decisiontreeId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn decisiontree" id="decisiontree-module-' +decisiontreeId+ '"><h4>Decision Tree</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'decisiontree-module-' + decisiontreeId + '\',\'from-decisiontree-' + decisiontreeId + '\',\'from-key-' + decisiontreeId + '\',true)" class="from-decisiontree-'+decisiontreeId+'"></select></div>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-decisiontree' +decisiontreeId+'" class="ip1" value="features"></div> '+
                    '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-decisiontree' +decisiontreeId+'" class="from-key-'+decisiontreeId+'"></select></div>'+
                    // '<div class="inpt-grp thre-width"><label>predictionCol</label><select id="predictionCol-decisiontree' +decisiontreeId+'" class="from-key-'+decisiontreeId+'"></select></div>'+
                    // '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-decisiontree'+decisiontreeId+'" class="ip1" value="prediction"></div> '+
                    '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-decisiontree'+decisiontreeId+'" class="ip1" value="probability"></div> '+
                    '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-decisiontree'+decisiontreeId+'" class="ip1" value="rawPrediction"></div> '+
                    '<div class="inpt-grp"><label>maxDepth</label><input type="text" id="maxDepth-decisiontree'+decisiontreeId+'" class="ip1" value="5"></div> '+
                    '<div class="inpt-grp"><label>maxBins</label><input type="text" id="maxBins-decisiontree'+decisiontreeId+'" class="ip1" value="32"></div> '+
                    '<div class="inpt-grp"><label>minInstancesPerNode</label><input type="text" id="minInstancesPerNode-decisiontree'+decisiontreeId+'" class="ip1" value="1"></div> '+
                    '<div class="inpt-grp"><label>minInfoGain</label><input type="text" id="minInfoGain-decisiontree'+decisiontreeId+'" class="ip1" value="0.0"></div> '+
                    '<div class="inpt-grp"><label>maxMemoryInMB</label><input type="text" id="maxMemoryInMB-decisiontree'+decisiontreeId+'" class="ip1" value="256"></div> '+
                    '<div class="inpt-grp"><label>cacheNodeIds</label><input type="text" id="cacheNodeIds-decisiontree'+decisiontreeId+'" class="ip1" value="False"></div> '+
                    '<div class="inpt-grp"><label>checkpointInterval</label><input type="text" id="checkpointInterval-decisiontree'+decisiontreeId+'" class="ip1" value="10"></div> '+
                    '<div class="inpt-grp"><label>impurity</label><input type="text" id="impurity-decisiontree'+decisiontreeId+'" class="ip1" value="gini"></div> '+
                    '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-decisiontree'+decisiontreeId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-decisiontree'+decisiontreeId+'" class="ip1" value="0.75"></div> '+
                    '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-decisiontree'+decisiontreeId+'" class="ip1" value="0.25"></div> '+
                    '<button type="button" id="run-decisiontree'+decisiontreeId+'" onclick="decisionTree(\'decisiontree-module-' +decisiontreeId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+decisiontreeId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn decisiontree" id="decisiontree-module-' +decisiontreeId+ '"><h4>Decision Tree</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'decisiontree-module-' + decisiontreeId + '\',\'from-decisiontree-' + decisiontreeId + '\',\'from-key-' + decisiontreeId + '\',true)" class="from-decisiontree-'+decisiontreeId+'"></select></div>'+
                        '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-decisiontree' +decisiontreeId+'" class="ip1" value="features"></div> '+
                        '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-decisiontree' +decisiontreeId+'" class="from-key-'+decisiontreeId+'"></select></div>'+
                        // '<div class="inpt-grp thre-width"><label>predictionCol</label><select id="predictionCol-decisiontree' +decisiontreeId+'" class="from-key-'+decisiontreeId+'"></select></div>'+
                        // '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-decisiontree'+decisiontreeId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-decisiontree'+decisiontreeId+'" class="ip1" value="prediction"></div> '+
                        '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-decisiontree'+decisiontreeId+'" class="ip1" value="probability"></div> '+
                        '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-decisiontree'+decisiontreeId+'" class="ip1" value="rawPrediction"></div> '+
                        '<div class="inpt-grp"><label>maxDepth</label><input type="text" id="maxDepth-decisiontree'+decisiontreeId+'" class="ip1" value="5"></div> '+
                        '<div class="inpt-grp"><label>maxBins</label><input type="text" id="maxBins-decisiontree'+decisiontreeId+'" class="ip1" value="32"></div> '+
                        '<div class="inpt-grp"><label>minInstancesPerNode</label><input type="text" id="minInstancesPerNode-decisiontree'+decisiontreeId+'" class="ip1" value="1"></div> '+
                        '<div class="inpt-grp"><label>minInfoGain</label><input type="text" id="minInfoGain-decisiontree'+decisiontreeId+'" class="ip1" value="0.0"></div> '+
                        '<div class="inpt-grp"><label>maxMemoryInMB</label><input type="text" id="maxMemoryInMB-decisiontree'+decisiontreeId+'" class="ip1" value="256"></div> '+
                        '<div class="inpt-grp"><label>cacheNodeIds</label><input type="text" id="cacheNodeIds-decisiontree'+decisiontreeId+'" class="ip1" value="False"></div> '+
                        '<div class="inpt-grp"><label>checkpointInterval</label><input type="text" id="checkpointInterval-decisiontree'+decisiontreeId+'" class="ip1" value="10"></div> '+
                        '<div class="inpt-grp"><label>impurity</label><input type="text" id="impurity-decisiontree'+decisiontreeId+'" class="ip1" value="gini"></div> '+
                        '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-decisiontree'+decisiontreeId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-decisiontree'+decisiontreeId+'" class="ip1" value="0.75"></div> '+
                    '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-decisiontree'+decisiontreeId+'" class="ip1" value="0.25"></div> '+
                        '<button type="button" id="run-decisiontree'+decisiontreeId+'" onclick="decisionTree(\'decisiontree-module-' +decisiontreeId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+decisiontreeId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });

            //  randomforest
            $("#randomforest").click(function(e){
                var randomforestId = $('.randomforest').length + 1;
                showTables('randomforest-module-' + randomforestId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn randomforest" id="randomforest-module-' +randomforestId+ '"><h4>Random Forest</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'randomforest-module-' + randomforestId + '\',\'from-randomforest-' + randomforestId + '\',\'from-key-' + randomforestId + '\',true)" class="from-randomforest-'+randomforestId+'"></select></div>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-randomforest' +randomforestId+'" class="ip1" value="features"></div> '+
                    '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-randomforest' +randomforestId+'" class="from-key-'+randomforestId+'"></select></div>'+
                    // '<div class="inpt-grp thre-width"><label>predictionCol</label><select id="predictionCol-randomforest' +randomforestId+'" class="from-key-'+randomforestId+'"></select></div>'+
                    // '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-randomforest'+randomforestId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-randomforest'+randomforestId+'" class="ip1" value="prediction"></div> '+
                    '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-randomforest'+randomforestId+'" class="ip1" value="probability"></div> '+
                    '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-randomforest'+randomforestId+'" class="ip1" value="rawPrediction"></div> '+
                    '<div class="inpt-grp"><label>maxDepth</label><input type="text" id="maxDepth-randomforest'+randomforestId+'" class="ip1" value="5"></div> '+
                    '<div class="inpt-grp"><label>maxBins</label><input type="text" id="maxBins-randomforest'+randomforestId+'" class="ip1" value="32"></div> '+
                    '<div class="inpt-grp"><label>minInstancesPerNode</label><input type="text" id="minInstancesPerNode-randomforest'+randomforestId+'" class="ip1" value="0"></div> '+
                    '<div class="inpt-grp"><label>minInfoGain</label><input type="text" id="minInfoGain-randomforest'+randomforestId+'" class="ip1" value="0.0"></div> '+
                    '<div class="inpt-grp"><label>maxMemoryInMB</label><input type="text" id="maxMemoryInMB-randomforest'+randomforestId+'" class="ip1" value="256"></div> '+
                    '<div class="inpt-grp"><label>cacheNodeIds</label><input type="text" id="cacheNodeIds-randomforest'+randomforestId+'" class="ip1" value="False"></div> '+
                    '<div class="inpt-grp"><label>checkpointInterval</label><input type="text" id="checkpointInterval-randomforest'+randomforestId+'" class="ip1" value="10"></div> '+
                    '<div class="inpt-grp"><label>impurity</label><input type="text" id="impurity-randomforest'+randomforestId+'" class="ip1" value="gini"></div> '+
                    '<div class="inpt-grp"><label>numTrees</label><input type="text" id="numTrees-randomforest'+randomforestId+'" class="ip1" value="20"></div> '+
                    '<div class="inpt-grp"><label>featureSubsetStrategy</label><input type="text" id="featureSubsetStrategy-randomforest'+randomforestId+'" class="ip1" value="auto"></div> '+
                    '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-randomforest'+randomforestId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>subsamplingRate</label><input type="text" id="subsamplingRate-randomforest'+randomforestId+'" class="ip1" value="0.0"></div> '+
                    '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-randomforest'+randomforestId+'" class="ip1" value="0.75"></div> '+
                    '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-randomforest'+randomforestId+'" class="ip1" value="0.25"></div> '+                    
                    '<button type="button" id="run-randomforest'+randomforestId+'" onclick="randomForest(\'randomforest-module-' +randomforestId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+randomforestId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn randomforest" id="randomforest-module-' +randomforestId+ '"><h4>Random Forest</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'randomforest-module-' + randomforestId + '\',\'from-randomforest-' + randomforestId + '\',\'from-key-' + randomforestId + '\',true)" class="from-randomforest-'+randomforestId+'"></select></div>'+
                        '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-randomforest' +randomforestId+'" class="ip1" value="features"></div> '+
                        '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-randomforest' +randomforestId+'" class="from-key-'+randomforestId+'"></select></div>'+
                        // '<div class="inpt-grp thre-width"><label>predictionCol</label><select id="predictionCol-randomforest' +randomforestId+'" class="from-key-'+randomforestId+'"></select></div>'+
                        // '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-randomforest'+randomforestId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-randomforest'+randomforestId+'" class="ip1" value="prediction"></div> '+
                        '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-randomforest'+randomforestId+'" class="ip1" value="probability"></div> '+
                        '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-randomforest'+randomforestId+'" class="ip1" value="rawPrediction"></div> '+
                        '<div class="inpt-grp"><label>maxDepth</label><input type="text" id="maxDepth-randomforest'+randomforestId+'" class="ip1" value="5"></div> '+
                        '<div class="inpt-grp"><label>maxBins</label><input type="text" id="maxBins-randomforest'+randomforestId+'" class="ip1" value="32"></div> '+
                        '<div class="inpt-grp"><label>minInstancesPerNode</label><input type="text" id="minInstancesPerNode-randomforest'+randomforestId+'" class="ip1" value="0"></div> '+
                        '<div class="inpt-grp"><label>minInfoGain</label><input type="text" id="minInfoGain-randomforest'+randomforestId+'" class="ip1" value="0.0"></div> '+
                        '<div class="inpt-grp"><label>maxMemoryInMB</label><input type="text" id="maxMemoryInMB-randomforest'+randomforestId+'" class="ip1" value="256"></div> '+
                        '<div class="inpt-grp"><label>cacheNodeIds</label><input type="text" id="cacheNodeIds-randomforest'+randomforestId+'" class="ip1" value="False"></div> '+
                        '<div class="inpt-grp"><label>checkpointInterval</label><input type="text" id="checkpointInterval-randomforest'+randomforestId+'" class="ip1" value="10"></div> '+
                        '<div class="inpt-grp"><label>impurity</label><input type="text" id="impurity-randomforest'+randomforestId+'" class="ip1" value="gini"></div> '+
                        '<div class="inpt-grp"><label>numTrees</label><input type="text" id="numTrees-randomforest'+randomforestId+'" class="ip1" value="20"></div> '+
                        '<div class="inpt-grp"><label>featureSubsetStrategy</label><input type="text" id="featureSubsetStrategy-randomforest'+randomforestId+'" class="ip1" value="auto"></div> '+
                        '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-randomforest'+randomforestId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>subsamplingRate</label><input type="text" id="subsamplingRate-randomforest'+randomforestId+'" class="ip1" value="0.0"></div> '+
                        '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-randomforest'+randomforestId+'" class="ip1" value="0.75"></div> '+
                        '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-randomforest'+randomforestId+'" class="ip1" value="0.25"></div> '+
                        '<button type="button" id="run-randomforest'+randomforestId+'" onclick="randomForest(\'randomforest-module-' +randomforestId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+randomforestId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });


            //  naivebayes
            $("#naivebayes").click(function(e){
                var naivebayesId = $('.naivebayes').length + 1;
                showTables('naivebayes-module-' + naivebayesId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn naivebayes" id="naivebayes-module-' +naivebayesId+ '"><h4>Naive Bayes</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'naivebayes-module-' + naivebayesId + '\',\'from-naivebayes-' + naivebayesId + '\',\'from-key-' + naivebayesId + '\',true)" class="from-naivebayes-'+naivebayesId+'"></select></div>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-naivebayes' +naivebayesId+'" class="ip1" value="features"></div> '+
                    '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-naivebayes' +naivebayesId+'" class="from-key-'+naivebayesId+'"></select></div>'+
                    // '<div class="inpt-grp thre-width"><label>predictionCol</label><select id="predictionCol-naivebayes' +naivebayesId+'" class="from-key-'+naivebayesId+'"></select></div>'+
                    // '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-naivebayes'+naivebayesId+'" class="ip1" value="prediction"></div> '+
                    '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-naivebayes'+naivebayesId+'" class="ip1" value="probability"></div> '+
                    '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-naivebayes'+naivebayesId+'" class="ip1" value="rawPrediction"></div> '+
                    '<div class="inpt-grp"><label>smoothing</label><input type="text" id="smoothing-naivebayes'+naivebayesId+'" class="ip1" value="1.0"></div> '+
                    '<div class="inpt-grp"><label>modelType</label><input type="text" id="modelType-naivebayes'+naivebayesId+'" class="ip1" value="multinomial"></div> '+
                    '<div class="inpt-grp"><label>thresholds</label><input type="text" id="thresholds-naivebayes'+naivebayesId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>weightCol</label><input type="text" id="weightCol-naivebayes'+naivebayesId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-naivebayes'+naivebayesId+'" class="ip1" value="0.75"></div> '+
                    '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-naivebayes'+naivebayesId+'" class="ip1" value="0.25"></div> '+
                    '<button type="button" id="run-naivebayes'+naivebayesId+'" onclick="naiveBayes(\'naivebayes-module-' +naivebayesId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+naivebayesId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn naivebayes" id="naivebayes-module-' +naivebayesId+ '"><h4>Naive Bayes</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'naivebayes-module-' + naivebayesId + '\',\'from-naivebayes-' + naivebayesId + '\',\'from-key-' + naivebayesId + '\',true)" class="from-naivebayes-'+naivebayesId+'"></select></div>'+
                        '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-naivebayes' +naivebayesId+'" class="ip1" value="features"></div> '+
                        '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-naivebayes' +naivebayesId+'" class="from-key-'+naivebayesId+'"></select></div>'+
                        // '<div class="inpt-grp thre-width"><label>predictionCol</label><select id="predictionCol-naivebayes' +naivebayesId+'" class="from-key-'+naivebayesId+'"></select></div>'+
                        // '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-naivebayes'+naivebayesId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-naivebayes'+naivebayesId+'" class="ip1" value="prediction"></div> '+
                        '<div class="inpt-grp"><label>probabilityCol</label><input type="text" id="probabilityCol-naivebayes'+naivebayesId+'" class="ip1" value="probability"></div> '+
                        '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-naivebayes'+naivebayesId+'" class="ip1" value="rawPrediction"></div> '+
                        '<div class="inpt-grp"><label>smoothing</label><input type="text" id="smoothing-naivebayes'+naivebayesId+'" class="ip1" value="1.0"></div> '+
                        '<div class="inpt-grp"><label>modelType</label><input type="text" id="modelType-naivebayes'+naivebayesId+'" class="ip1" value="multinomial"></div> '+
                        '<div class="inpt-grp"><label>thresholds</label><input type="text" id="thresholds-naivebayes'+naivebayesId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>weightCol</label><input type="text" id="weightCol-naivebayes'+naivebayesId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-naivebayes'+naivebayesId+'" class="ip1" value="0.75"></div> '+
                        '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-naivebayes'+naivebayesId+'" class="ip1" value="0.25"></div> '+                      
                        '<button type="button" id="run-naivebayes'+naivebayesId+'" onclick="naiveBayes(\'naivebayes-module-' +naivebayesId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+naivebayesId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });


            //  fpgrowth
            $("#fpgrowth").click(function(e){
                var fpgrowthId = $('.fpgrowth').length + 1;
                showTables('fpgrowth-module-' + fpgrowthId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn fpgrowth" id="fpgrowth-module-' +fpgrowthId+ '"><h4>FP Growth</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'fpgrowth-module-' + fpgrowthId + '\',\'from-fpgrowth-' + fpgrowthId + '\',\'from-key-' + fpgrowthId + '\',true)" class="from-fpgrowth-'+fpgrowthId+'"></select></div>'+
                    '<div class="inpt-grp"><label>splits</label><input type="text" id="splits-fpgrowth' +fpgrowthId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>minSupport</label><input type="text" id="minSupport-fpgrowth' +fpgrowthId+'" class="ip1" value="0.3"></div> '+
                    '<div class="inpt-grp"><label>minConfidence</label><input type="text" id="minConfidence-fpgrowth'+fpgrowthId+'" class="ip1" value="0.8"></div> '+
                    '<div class="inpt-grp"><label>itemsCol</label><input type="text" id="itemsCol-fpgrowth'+fpgrowthId+'" class="ip1" value="items"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-fpgrowth'+fpgrowthId+'" class="ip1" value="prediction"></div> '+
                    '<div class="inpt-grp"><label>numPartitions</label><input type="text" id="numPartitions-fpgrowth'+fpgrowthId+'" class="ip1" value="None"></div> '+
                    '<button type="button" id="run-fpgrowth'+fpgrowthId+'" onclick="fpgrowth(\'fpgrowth-module-' +fpgrowthId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+fpgrowthId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">On process</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn fpgrowth" id="fpgrowth-module-' +fpgrowthId+ '"><h4>FP Growth</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'fpgrowth-module-' + fpgrowthId + '\',\'from-fpgrowth-' + fpgrowthId + '\',\'from-key-' + fpgrowthId + '\',true)" class="from-fpgrowth-'+fpgrowthId+'"></select></div>'+
                        '<div class="inpt-grp"><label>splits</label><input type="text" id="splits-fpgrowth' +fpgrowthId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>minSupport</label><input type="text" id="minSupport-fpgrowth' +fpgrowthId+'" class="ip1" value="0.3"></div> '+
                        '<div class="inpt-grp"><label>minConfidence</label><input type="text" id="minConfidence-fpgrowth'+fpgrowthId+'" class="ip1" value="0.8"></div> '+
                        '<div class="inpt-grp"><label>itemsCol</label><input type="text" id="itemsCol-fpgrowth'+fpgrowthId+'" class="ip1" value="items"></div> '+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-fpgrowth'+fpgrowthId+'" class="ip1" value="prediction"></div> '+
                        '<div class="inpt-grp"><label>numPartitions</label><input type="text" id="numPartitions-fpgrowth'+fpgrowthId+'" class="ip1" value="None"></div> '+
                        '<button type="button" id="run-fpgrowth'+fpgrowthId+'" onclick="fpgrowth(\'fpgrowth-module-' +fpgrowthId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+fpgrowthId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">On process</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });

             //  linearsvc
            $("#linearsvc").click(function(e){
                var linearsvcId = $('.linearsvc').length + 1;
                showTables('linearsvc-module-' + linearsvcId);
                var totalcolumn = $(".panel-coloumn").length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn linearsvc" id="linearsvc-module-' +linearsvcId+ '"><h4>[] Linear SVM</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'linearsvc-module-' + linearsvcId + '\',\'from-linearsvc-' + linearsvcId + '\',\'from-key-' + linearsvcId + '\',true)" class="from-linearsvc-'+linearsvcId+'"></select></div>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-linearsvc' +linearsvcId+'" class="ip1" value="features"></div> '+
                    // '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-linearsvc'+linearsvcId+'" class="ip1" value="lab"></div> '+
                    '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-linearsvc' +linearsvcId+'" class="from-key-'+linearsvcId+'"></select></div>'+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-linearsvc'+linearsvcId+'" class="ip1" value="prediction"></div> '+
                    '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-linearsvc'+linearsvcId+'" class="ip1" value="100"></div> '+
                    '<div class="inpt-grp"><label>regParam</label><input type="text" id="regParam-linearsvc'+linearsvcId+'" class="ip1" value="0.0"></div> '+
                    '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-linearsvc'+linearsvcId+'" class="ip1" value="1e-06"></div> '+
                    '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-linearsvc'+linearsvcId+'" class="ip1" value="rawPrediction"></div> '+
                    '<div class="inpt-grp"><label>fitIntercept</label><input type="text" id="fitIntercept-linearsvc'+linearsvcId+'" class="ip1" value="True"></div> '+
                    '<div class="inpt-grp"><label>standardization</label><input type="text" id="standardization-linearsvc'+linearsvcId+'" class="ip1" value="True"></div> '+
                    '<div class="inpt-grp"><label>threshold</label><input type="text" value="0.0" id="threshold-linearsvc' +linearsvcId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>weightCol</label><input type="text" id="weightCol-linearsvc'+linearsvcId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>aggregationDepth</label><input type="text" id="aggregationDepth-linearsvc'+linearsvcId+'" class="ip1" value="0"></div> '+
                    '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-linearsvc'+linearsvcId+'" class="ip1" value="0.75"></div> '+
                    '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-linearsvc'+linearsvcId+'" class="ip1" value="0.25"></div> '+  
                    
                    '<br/>'+
                    '<button type="button" id="run-linearsvc'+linearsvcId+'" onclick="linearsvc(\'linearsvc-module-' +linearsvcId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+linearsvcId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-column-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn linearsvc" id="linearsvc-module-' +linearsvcId+ '"><h4>[] Linear SVM</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'linearsvc-module-' + linearsvcId + '\',\'from-linearsvc-' + linearsvcId + '\',\'from-key-' + linearsvcId + '\',true)" class="from-linearsvc-'+linearsvcId+'"></select></div>'+
                    '<div class="inpt-grp"><label>featuresCol</label><input type="text" id="featuresCol-linearsvc' +linearsvcId+'" class="ip1" value="features"></div> '+
                    // '<div class="inpt-grp"><label>labelCol</label><input type="text" id="labelCol-linearsvc'+linearsvcId+'" class="ip1" value="lab"></div> '+
                    '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-linearsvc' +linearsvcId+'" class="from-key-'+linearsvcId+'"></select></div>'+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-linearsvc'+linearsvcId+'" class="ip1" value="prediction"></div> '+
                    '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-linearsvc'+linearsvcId+'" class="ip1" value="100"></div> '+
                    '<div class="inpt-grp"><label>regParam</label><input type="text" id="regParam-linearsvc'+linearsvcId+'" class="ip1" value="0.0"></div> '+
                    '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-linearsvc'+linearsvcId+'" class="ip1" value="1e-06"></div> '+
                    '<div class="inpt-grp"><label>rawPredictionCol</label><input type="text" id="rawPredictionCol-linearsvc'+linearsvcId+'" class="ip1" value="rawPrediction"></div> '+
                    '<div class="inpt-grp"><label>fitIntercept</label><input type="text" id="fitIntercept-linearsvc'+linearsvcId+'" class="ip1" value="True"></div> '+
                    '<div class="inpt-grp"><label>standardization</label><input type="text" id="standardization-linearsvc'+linearsvcId+'" class="ip1" value="True"></div> '+
                    '<div class="inpt-grp"><label>threshold</label><input type="text" value="0.0" id="threshold-linearsvc' +linearsvcId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>weightCol</label><input type="text" id="weightCol-linearsvc'+linearsvcId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>aggregationDepth</label><input type="text" id="aggregationDepth-linearsvc'+linearsvcId+'" class="ip1" value="0"></div> '+
                    '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-linearsvc'+linearsvcId+'" class="ip1" value="0.75"></div> '+
                    '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-linearsvc'+linearsvcId+'" class="ip1" value="0.25"></div> '+
                    '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-linearsvc'+linearsvcId+'" class="ip1" value="0.75"></div> '+
                    '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-linearsvc'+linearsvcId+'" class="ip1" value="0.25"></div> '+  
                    
                    '<br/>'+
                    '<button type="button" id="run-linearsvc'+linearsvcId+'" onclick="linearsvc(\'linearsvc-module-' +linearsvcId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+linearsvcId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-column-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });

            //  arima
            $("#arima").click(function(e){
                var arimaId = $('.arima').length + 1;
                showTables('arima-module-' + arimaId);
                var totalcolumn = $(".panel-coloumn").length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn arima" id="arima-module-' +arimaId+ '"><h4>[] ARIMA</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'arima-module-' + arimaId + '\',\'from-arima-' + arimaId + '\',\'from-key-' + arimaId + '\',true)" class="from-arima-'+arimaId+'"></select></div>'+
                        '<div class="inpt-grp"><label>splits</label><input type="text" id="splits-arima'+arimaId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>numberofpredict</label><input type="text" id="numberofpredict-arima'+arimaId+'" class="ip1" value="0"></div> '+
                        '<div class="inpt-grp"><label>dateCol</label><input type="text" id="dateCol-arima'+arimaId+'" class="ip1" value="dateCol"></div> '+
                        '<div class="inpt-grp"><label>timeseriesCol</label><input type="text" id="timeseriesCol-arima'+arimaId+'" class="ip1" value="timeserisCol"></div> '+
                        '<div class="inpt-grp"><label>start_p</label><input type="text" id="start_p-arima'+arimaId+'" class="ip1" value="2"></div> '+
                        '<div class="inpt-grp"><label>d</label><input type="text" id="d-arima'+arimaId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>start_q</label><input type="text" id="start_q-arima'+arimaId+'" class="ip1" value="2"></div> '+
                        '<div class="inpt-grp"><label>max_p</label><input type="text" id="max_p-arima'+arimaId+'" class="ip1" value="5"></div> '+
                        '<div class="inpt-grp"><label>max_d</label><input type="text" id="max_d-arima'+arimaId+'" class="ip1" value="2"></div> '+
                        '<div class="inpt-grp"><label>max_q</label><input type="text" id="max_q-arima'+arimaId+'" class="ip1" value="5"></div> '+
                        '<div class="inpt-grp"><label>start_P</label><input type="text" id="start_P-arima'+arimaId+'" class="ip1" value="1"></div> '+
                        '<div class="inpt-grp"><label>D</label><input type="text" id="D-arima'+arimaId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>start_Q</label><input type="text" id="start_Q-arima'+arimaId+'" class="ip1" value="1"></div> '+
                        '<div class="inpt-grp"><label>max_P</label><input type="text" id="max_P-arima'+arimaId+'" class="ip1" value="2"></div> '+
                        '<div class="inpt-grp"><label>max_D</label><input type="text" id="max_D-arima'+arimaId+'" class="ip1" value="1"></div> '+
                        '<div class="inpt-grp"><label>max_Q</label><input type="text" id="max_Q-arima'+arimaId+'" class="ip1" value="2"></div> '+
                        '<div class="inpt-grp"><label>max_order</label><input type="text" id="max_order-arima'+arimaId+'" class="ip1" value="10"></div> '+
                        '<div class="inpt-grp"><label>m</label><input type="text" id="m-arima'+arimaId+'" class="ip1" value="1"></div> '+
                        '<div class="inpt-grp"><label>seasonal</label><input type="text" id="seasonal-arima'+arimaId+'" class="ip1" value="True"></div> '+
                        '<div class="inpt-grp"><label>stationary</label><input type="text" id="stationary-arima'+arimaId+'" class="ip1" value="False"></div> '+
                        '<div class="inpt-grp"><label>stepwise</label><input type="text" id="stepwise-arima'+arimaId+'" class="ip1" value="True"></div> '+
                        '<div class="inpt-grp"><label>solver</label><input type="text" id="solver-arima'+arimaId+'" class="ip1" value="lbfgs"></div> '+
                        '<div class="inpt-grp"><label>suppress_warnings</label><input type="text" id="suppress_warnings-arima'+arimaId+'" class="ip1" value="False"></div> '+
                        '<div class="inpt-grp"><label>error_action</label><input type="text" id="error_action-arima'+arimaId+'" class="ip1" value="warn"></div> '+
                        '<div class="inpt-grp"><label>trace</label><input type="text" id="trace-arima'+arimaId+'" class="ip1" value="False"></div> '+
                        '<div class="inpt-grp"><label>scoring</label><input type="text" id="scoring-arima'+arimaId+'" class="ip1" value="mse"></div> '+
                        '<button type="button" id="run-arima'+arimaId+'" onclick="arima(\'arima-module-' +arimaId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+arimaId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-column-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn arima" id="arima-module-' +arimaId+ '"><h4>[] ARIMA</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'arima-module-' + arimaId + '\',\'from-arima-' + arimaId + '\',\'from-key-' + arimaId + '\',true)" class="from-arima-'+arimaId+'"></select></div>'+
                        '<div class="inpt-grp"><label>splits</label><input type="text" id="splits-arima'+arimaId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>numberofpredict</label><input type="text" id="numberofpredict-arima'+arimaId+'" class="ip1" value="0"></div> '+
                        '<div class="inpt-grp"><label>dateCol</label><input type="text" id="dateCol-arima'+arimaId+'" class="ip1" value="dateCol"></div> '+
                        '<div class="inpt-grp"><label>timeseriesCol</label><input type="text" id="timeseriesCol-arima'+arimaId+'" class="ip1" value="timeserisCol"></div> '+
                        '<div class="inpt-grp"><label>start_p</label><input type="text" id="start_p-arima'+arimaId+'" class="ip1" value="2"></div> '+
                        '<div class="inpt-grp"><label>d</label><input type="text" id="d-arima'+arimaId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>start_q</label><input type="text" id="start_q-arima'+arimaId+'" class="ip1" value="2"></div> '+
                        '<div class="inpt-grp"><label>max_p</label><input type="text" id="max_p-arima'+arimaId+'" class="ip1" value="5"></div> '+
                        '<div class="inpt-grp"><label>max_d</label><input type="text" id="max_d-arima'+arimaId+'" class="ip1" value="2"></div> '+
                        '<div class="inpt-grp"><label>max_q</label><input type="text" id="max_q-arima'+arimaId+'" class="ip1" value="5"></div> '+
                        '<div class="inpt-grp"><label>start_P</label><input type="text" id="start_P-arima'+arimaId+'" class="ip1" value="1"></div> '+
                        '<div class="inpt-grp"><label>D</label><input type="text" id="D-arima'+arimaId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>start_Q</label><input type="text" id="start_Q-arima'+arimaId+'" class="ip1" value="1"></div> '+
                        '<div class="inpt-grp"><label>max_P</label><input type="text" id="max_P-arima'+arimaId+'" class="ip1" value="2"></div> '+
                        '<div class="inpt-grp"><label>max_D</label><input type="text" id="max_D-arima'+arimaId+'" class="ip1" value="1"></div> '+
                        '<div class="inpt-grp"><label>max_Q</label><input type="text" id="max_Q-arima'+arimaId+'" class="ip1" value="2"></div> '+
                        '<div class="inpt-grp"><label>max_order</label><input type="text" id="max_order-arima'+arimaId+'" class="ip1" value="10"></div> '+
                        '<div class="inpt-grp"><label>m</label><input type="text" id="m-arima'+arimaId+'" class="ip1" value="1"></div> '+
                        '<div class="inpt-grp"><label>seasonal</label><input type="text" id="seasonal-arima'+arimaId+'" class="ip1" value="True"></div> '+
                        '<div class="inpt-grp"><label>stationary</label><input type="text" id="stationary-arima'+arimaId+'" class="ip1" value="False"></div> '+
                        '<div class="inpt-grp"><label>stepwise</label><input type="text" id="stepwise-arima'+arimaId+'" class="ip1" value="True"></div> '+
                        '<div class="inpt-grp"><label>solver</label><input type="text" id="solver-arima'+arimaId+'" class="ip1" value="lbfgs"></div> '+
                        '<div class="inpt-grp"><label>suppress_warnings</label><input type="text" id="suppress_warnings-arima'+arimaId+'" class="ip1" value="False"></div> '+
                        '<div class="inpt-grp"><label>error_action</label><input type="text" id="error_action-arima'+arimaId+'" class="ip1" value="warn"></div> '+
                        '<div class="inpt-grp"><label>trace</label><input type="text" id="trace-arima'+arimaId+'" class="ip1" value="False"></div> '+
                        '<div class="inpt-grp"><label>scoring</label><input type="text" id="scoring-arima'+arimaId+'" class="ip1" value="mse"></div> '+
                        '<button type="button" id="run-arima'+arimaId+'" onclick="arima(\'arima-module-' +arimaId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+arimaId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-column-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
            });

            //VISUALIZATION

            //  BarChart
            $("#barchart").click(function(e){
                //loading cell time//
                setTimeout(function(){
                    $('.loading-cell').fadeOut();
                }, 1000);
                

                var totalcolumn = $(".panel-coloumn").length + 1;
                var barchartId = $('.barchart').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn barchart" id="viz-barchart-module-' +barchartId+ '"><h4>[] BarChart</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-barchart' +barchartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>X-Axis</label><select id="x-axis-barchart' +barchartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>Y-Axis</label><select id="y-axis-barchart' +barchartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<button type="button" id="run-barchart'+barchartId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+barchartId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-barchart-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="barc'+barchartId+'"></div></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn barchart" id="viz-barchart-module-' +barchartId+ '"><h4>[] BarChart</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-barchart' +barchartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>X-Axis</label><select id="x-axis-barchart' +barchartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>Y-Axis</label><select id="y-axis-barchart' +barchartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<button type="button" id="run-barchart'+barchartId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+barchartId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-barchart-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="barc'+barchartId+'"></div></div></div>');
                }

                //start plotly
                //barCHart
                    var trace1 = {
                        x: ['giraffes', 'orangutans', 'monkeys'],
                        y: [20, 14, 23],
                        name: 'SF Zoo',
                        type: 'bar'
                    };
                    
                    var trace2 = {
                        x: ['giraffes', 'orangutans', 'monkeys'],
                        y: [12, 18, 29],
                        name: 'LA Zoo',
                        type: 'bar'
                    };
                    
                    var data = [trace1, trace2];
                    
                    var layout = {barmode: 'stack'};
                    
                    Plotly.newPlot('barc' + barchartId, data, layout, {showSendToCloud:true});
            });

            //  piechart
            $("#piechart").click(function(e){
                //loading cell time//
                setTimeout(function(){
                    $('.loading-cell').fadeOut();
                }, 1000);
                

                var totalcolumn = $(".panel-coloumn").length + 1;
                var piechartId = $('.piechart').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn piechart" id="viz-piechart-module-' +piechartId+ '"><h4>[] piechart</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-piechart' +piechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>values</label><select id="values-piechart' +piechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>Labels</label><select id="labels-piechart' +piechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<button type="button" id="run-piechart'+piechartId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+piechartId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-piechart-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="piechart'+piechartId+'"></div></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn piechart" id="viz-piechart-module-' +piechartId+ '"><h4>[] piechart</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-piechart' +piechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>values</label><select id="values-piechart' +piechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>Labels</label><select id="labels-piechart' +piechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<button type="button" id="run-piechart'+piechartId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+piechartId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-piechart-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="piechart'+piechartId+'"></div></div></div>');
                }

                //start plotly
                //piechart
                var data = [{
                    values: [19, 26, 55],
                    labels: ['Residential', 'Non-Residential', 'Utility'],
                    type: 'pie'
                    }];
                    
                    var layout = {
                    height: 400,
                    width: 500
                    };
                    
                    Plotly.newPlot('piechart' + piechartId, data, layout);
            });



            //  linechart
            $("#linechart").click(function(e){
                //loading cell time//

                var totalcolumn = $(".panel-coloumn").length + 1;
                var linechartId = $('.linechart').length + 1;
                showTables('linechart-module-' + linechartId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn linechart" id="linechart-module-' +linechartId+ '"><h4>[] linechart</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-linechart' +linechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'linechart-module-' + linechartId + '\',\'from-linechart-' + linechartId + '\',\'from-key-' + linechartId + '\',true)" class="from-linechart-'+linechartId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>X</label><select id="x-linechart' +linechartId+'" class="from-key-'+linechartId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Y</label><select id="y-linechart' +linechartId+'" class="from-key-'+linechartId+'"></select></div>'+
                        // '<div class="inpt-grp"><label>X</label><select id="x-linechart' +linechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        // '<div class="inpt-grp"><label>Y</label><select id="y-linechart' +linechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<button type="button" id="run-linechart'+linechartId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+linechartId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-linechart-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="linechart'+linechartId+'"></div></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                         '<div class="panel-coloumn linechart" id="linechart-module-' +linechartId+ '"><h4>[] linechart</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-linechart' +linechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'linechart-module-' + linechartId + '\',\'from-linechart-' + linechartId + '\',\'from-key-' + linechartId + '\',true)" class="from-linechart-'+linechartId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>X</label><select id="x-linechart' +linechartId+'" class="from-key-'+linechartId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Y</label><select id="y-linechart' +linechartId+'" class="from-key-'+linechartId+'"></select></div>'+
                        // '<div class="inpt-grp"><label>X</label><select id="x-linechart' +linechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        // '<div class="inpt-grp"><label>Y</label><select id="y-linechart' +linechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<button type="button" id="run-linechart'+linechartId+'" onclick="lineChartVisual(\'linechart-module-' +linechartId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+linechartId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-linechart-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="linechart'+linechartId+'"></div></div></div>');
                }

                //start plotly
                //linechart
                   
            });


            //  histogram
            $("#histogram").click(function(e){
                //loading cell time//
                setTimeout(function(){
                    $('.loading-cell').fadeOut();
                }, 1000);
                

                var totalcolumn = $(".panel-coloumn").length + 1;
                var histogramId = $('.histogram').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn histogram" id="viz-histogram-module-' +histogramId+ '"><h4>[] histogram</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-histogram' +histogramId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>x1</label><select id="x1-histogram' +histogramId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>x2</label><select id="x2-histogram' +histogramId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<button type="button" id="run-histogram'+histogramId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+histogramId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-histogram-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="histogram'+histogramId+'"></div></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn histogram" id="viz-histogram-module-' +histogramId+ '"><h4>[] histogram</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-histogram' +histogramId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>x1</label><select id="x1-histogram' +histogramId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>x2</label><select id="x2-histogram' +histogramId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<button type="button" id="run-histogram'+histogramId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+histogramId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-histogram-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="histogram'+histogramId+'"></div></div></div>');
                }

                //start plotly
                //histogram
                var x1 = [];
                var x2 = [];
                for (var i = 0; i < 500; i ++) {
                    x1[i] = Math.random();
                    x2[i] = Math.random();
                }
                
                var trace1 = {
                  x: x1,
                  type: "histogram",
                };
                var trace2 = {
                  x: x2,
                  type: "histogram",
                };
                var data = [trace1, trace2];
                var layout = {barmode: "stack"};
                Plotly.newPlot('histogram' + histogramId, data, layout);
            });


            //  violin
            $("#violin").click(function(e){
                //loading cell time//
                setTimeout(function(){
                    $('.loading-cell').fadeOut();
                }, 1000);
                

                var totalcolumn = $(".panel-coloumn").length + 1;
                var violinId = $('.violin').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn violin" id="viz-violin-module-' +violinId+ '"><h4>[] violin</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-violin' +violinId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>X</label><select id="xaxis-violin' +violinId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>Y</label><select id="yaxis-violin' +violinId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<button type="button" id="run-violin'+violinId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+violinId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-violin-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="violin'+violinId+'"></div></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn violin" id="viz-violin-module-' +violinId+ '"><h4>[] violin</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-violin' +violinId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>X</label><select id="xaxis-violin' +violinId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>Y</label><select id="yaxis-violin' +violinId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<button type="button" id="run-violin'+violinId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+violinId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-violin-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="violin'+violinId+'"></div></div></div>');
                }

                //start plotly
                //violin
                Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/violin_data.csv", function(err, rows){

                    function unpack(rows, key) {
                    return rows.map(function(row) { return row[key]; });
                    }

                    var data = [{
                    type: 'violin',
                    x: unpack(rows, 'day'),
                    y: unpack(rows, 'total_bill'),
                    points: 'none',
                    box: {
                        visible: true
                    },
                    line: {
                        color: 'green',
                    },
                    meanline: {
                        visible: true
                    },
                    transforms: [{
                        type: 'groupby',
                        groups: unpack(rows, 'day'),
                        styles: [
                            {target: 'Sun', value: {line: {color: 'blue'}}},
                            {target: 'Sat', value: {line: {color: 'orange'}}},
                            {target: 'Thur', value: {line: {color: 'green'}}},
                            {target: 'Fri', value: {line: {color: 'red'}}}
                        ]
                        }]
                    }]

                    var layout = {
                    title: "Multiple Traces Violin Plot",
                    yaxis: {
                        zeroline: false
                    }
                    }

                    Plotly.plot('violin' + violinId, data, layout);
                    });
            });

            //  scatter
            $("#scatter").click(function(e){
                //loading cell time//
                setTimeout(function(){
                    $('.loading-cell').fadeOut();
                }, 1000);
                

                var totalcolumn = $(".panel-coloumn").length + 1;
                var scatterId = $('.scatter').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn scatter" id="viz-scatter-module-' +scatterId+ '"><h4>[] scatter</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>X</label><select id="xaxis-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>Y</label><select id="yaxis-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>Z</label><select id="zaxis-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<button type="button" id="run-scatter'+scatterId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+scatterId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-scatter-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="scatter'+scatterId+'"></div></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn scatter" id="viz-scatter-module-' +scatterId+ '"><h4>[] scatter</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>X</label><select id="xaxis-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>Y</label><select id="yaxis-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>Z</label><select id="zaxis-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<button type="button" id="run-scatter'+scatterId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+scatterId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-scatter-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="scatter'+scatterId+'"></div></div></div>');
                }

                //start plotly
                //scatter
                Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/3d-scatter.csv', function(err, rows){
                function unpack(rows, key) {
                    return rows.map(function(row)
                    { return row[key]; });}

                    var trace1 = {
                        x:unpack(rows, 'x1'), y: unpack(rows, 'y1'), z: unpack(rows, 'z1'),
                        mode: 'markers',
                        marker: {
                            size: 12,
                            line: {
                            color: 'rgba(217, 217, 217, 0.14)',
                            width: 0.5},
                            opacity: 0.8},
                        type: 'scatter3d'
                    };

                    var trace2 = {
                        x:unpack(rows, 'x2'), y: unpack(rows, 'y2'), z: unpack(rows, 'z2'),
                        mode: 'markers',
                        marker: {
                            color: 'rgb(127, 127, 127)',
                            size: 12,
                            symbol: 'circle',
                            line: {
                            color: 'rgb(204, 204, 204)',
                            width: 1},
                            opacity: 0.8},
                        type: 'scatter3d'};

                    var data = [trace1, trace2];
                    var layout = {margin: {
                        l: 0,
                        r: 0,
                        b: 0,
                        t: 0
                    }};
                    Plotly.newPlot('scatter' + scatterId, data, layout);
                    });
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

            $(window).scroll(function(){

              if ($(window).scrollTop() == 0){
                  $("#left-panel").stop().animate({"marginTop": ($(window).scrollTop() + 0) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" )  
              }
              else{
                  $("#left-panel").stop().animate({"marginTop": ($(window).scrollTop() - 100) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
              }
            });


            //function output         
            $(document).on('click', '.run', function(e) {
                $(this).nextAll('.output-card').show();
                $(this).nextAll('.stat-progress').slideDown();
            });
            $(".run").click();
            
            
        },
    };
    var livy_id = 0;

    $(document).ready(function() {
        $("#livy_id").text(livy_id);

        global_functions.init();
    });

})(jQuery);

var gateway = "http://localhost:5000/";
var user_id = "pintarai";
var project_name = "Nur";
var project_description = "Project nya Nur";
var package_id = 1;
var encapsulation = 1;
var checkSession = true;
var sessionHealth = 0; //0 = dead, 1 = starting, 2 = run, 3 = idle
var runningCellId = 0; // nanti diganti array 
var runningSelectId = "";
var runningSelectKeyId = "";
var runningStatementId = 0;
var runningToDo = "";
var runningCellName = "";
var runningIsSelect = "";
var renderingIsFinished = true;
var statementId = 0;
var sessionId = 0;
var loopingGetValueDescribeEven2 ;
var loopingGetValueShowTablesEven2 ;


function getCurrentSession(){
    return $("#livy_id").text();
}

function getSessionState(){
    livy_id = getCurrentSession();
    url = gateway + "check_session/" + user_id + "/" + livy_id + "/" + project_name;
    ajaxCallGet(url, cellId=0, toDo="getSessionState");
}   

function getStatementState(){
    livy_id = getCurrentSession();

    //loop di sini...
    statementId = runningStatementId;
    url = gateway + "check_statement/" + user_id + "/" + livy_id + "/" + project_name + "/" + statementId;
    console.log('send request get check_statement' );
    ajaxCallGet(url, cellId=runningCellId, toDo="getStatementState");
}


setInterval(function() {
    // var result = 
    // console.log('halooo');
    if (checkSession && renderingIsFinished){
        getSessionState(); //starting, idle, busy, dead
    }
    else{
        getStatementState();
    }
}, 1000);

function loading(index,catchRunningCellId){
    if(index === "1"){
        $('.loading-cell').fadeOut();
    }else if(index === "2"){
        $('#'+catchRunningCellId).find('.loading-cell').fadeIn();
    }else{
        setTimeout(function(){
            $('.loading-cell').fadeOut();
        }, 1000);
    }
   
}


function responseGetSessionState(result){
    var obj1 = JSON.stringify(result);
    var obj2 = JSON.parse(obj1);
    var obj3 = JSON.parse(obj2.result.description);
    // console.log(obj3.state);
    $('#lab_status').text(obj3.state);
}

function responseGetStatementState(cellId, result){
    var obj1 = JSON.stringify(result);
    var obj2 = JSON.parse(obj1);
    var obj3 = JSON.parse(obj2.result.description);
    var obj4 = obj3.output;
    console.log('responseGetStatementState-->obj3--->',obj3);
    if (obj3.state=='available'){
        var status = obj4.status;
        // alert(status);
        checkSession=true;

        if (status == 'ok'){
            // $('#output-card' + cellId).text(obj4["data"]["text/plain"]);
            if (runningToDo=='importDatabase'){
                responseImportDatabase(cellId, obj4);
            }
            else if (runningToDo=='showTables'){
                responseShowTables(cellId, obj4);
            }
            else if (runningToDo=='describeTable'){
                responseDescribeTable(cellId, obj4);
            }
            else if (runningToDo=='mergeTables'){
                responseMergeTables(cellId, obj4);
            }
            else if (runningToDo=='selectcol'){
                responseSelectCol(cellId, obj4);
            }
            else if (runningToDo=='row'){
                responseSelectRow(cellId, obj4);
            }
            else if (runningToDo=='importFile'){
                responseImportFile(cellId, obj4);
            }
            else if (runningToDo=='pca'){
                responsePca(cellId, obj4);
            }
            else if (runningToDo=='vectorAssembler'){
                responseVectorAssembler(cellId, obj4);
            }
            else if (runningToDo=='logisticRegression'){
                responseLogisticRegression(cellId, obj4);
            }
            else if (runningToDo=='naiveBayes'){
                responseNaiveBayes(cellId, obj4);
            }
            else if (runningToDo=='randomForest'){
                responseRandomForest(cellId, obj4);
            }
            else if (runningToDo=='normalizer'){
                responseNormalizer(cellId, obj4);
            }
            else if (runningToDo=='decisionTree'){
                responseDecisionTree(cellId, obj4);
            }
            else if (runningToDo=='fpGrowth'){
                responseFpGrowth(cellId, obj4);
            }
            else if (runningToDo=='bucketizer'){
                responseBucketizer(cellId, obj4);
            }
            else if (runningToDo=='standardscaler'){
                responseStandardScaler(cellId, obj4);
            }
            else if (runningToDo=='tokenizer'){
                responseTokenizer(cellId, obj4);
            }
            else if (runningToDo=='stopword'){
                responseStopword(cellId, obj4);
            }
            else if (runningToDo=='onehot'){
                responseOneHot(cellId, obj4);
            }
            else if (runningToDo=='minmax'){
                responseMinMax(cellId, obj4);
            }
            else if (runningToDo=='kmeans'){
                responseKmeans(cellId, obj4);
            }
            else if (runningToDo=='gmm'){
                responseGmm(cellId, obj4);
            }
            else if (runningToDo=='linearRegression'){
                responseLinearRegression(cellId, obj4);
            }
            else if (runningToDo=='stringindexer'){
                responseStringIndexer(cellId, obj4);
            }
            else if (runningToDo=='linearSvc'){
                responseLinearSvc(cellId, obj4);
            }
            else if (runningToDo=='arima'){
                responseArima(cellId, obj4);
            }
            else if (runningToDo=='missingval'){
                responseMissingVal(cellId, obj4);
            }
            else if (runningToDo=='hashingTf'){
                responseHashingTf(cellId, obj4);
            }
            else if (runningToDo=='idf'){
                responseIdf(cellId, obj4);
            }
            else if (runningToDo=='cv'){
                responseCountVectorizer(cellId, obj4);
            }
            //Visualization
            else if (runningToDo=='lineChartVisual'){
                responseLineChartVisual(cellId, obj4);
            }
            else if (runningToDo=='barChartVisual'){
                responseBarChartVisual(cellId, obj4);
            }
            else if (runningToDo=='pieChartVisual'){
                responsePieChartVisual(cellId, obj4);
            }
            else if (runningToDo=='histogramChartVisual'){
                responseHistogramChartVisual(cellId, obj4);
            }
            else if (runningToDo=='violinChartVisual'){
                responseViolinChartVisual(cellId, obj4);
            }
            else if (runningToDo=='scatterChartVisual'){
                responseScatterChartVisual(cellId, obj4);
            }
        }
        else if (status == 'error'){
            var ename = obj4.ename;
            var evalue = obj4.evalue;
            $('#' +runningCellId).children('.output-card').find('.error-ouput').text(obj4['ename'] + " - " + obj4['evalue']);

            // console.log('obj2', runningCellId, id, status, obj2);
        }
        var progress = obj3.progress;
        var progress_new = progress*100;
        console.log("masuk sini : "+progress_new);
        $('#'+runningCellId).children('.stat-progress').find('.progress-bar').attr('aria-valuenow', progress*100).attr('style','width: ' + progress*100 + '%');
        // $('#'+runningCellId).children('.stat-progress').find('.progress-bar').attr('style','width: ' + progress*100 + '%');
    }
    else if(obj3.state=='running'){
        var progress = obj3.progress;
        $('#'+runningCellId).children('.stat-progress').find('.progress-bar').attr('aria-valuenow', progress*100).attr('style','width: ' + progress*100 + '%');
        $('#'+runningCellId).children('.output-card').find('.error-ouput').text('running...');
        checkSession=false;
    }


}

function listenStatementResponse(cellId, response, toDo){
    var obj1 = JSON.parse(JSON.stringify(response));
    console.log('obj1', cellId, obj1.result.description);

    var obj2 = JSON.parse(obj1.result.description);
    var id = obj2.id;

    var state = obj2.state;
    var output = obj2.output;
    var progress = obj2.progress;
    console.log('obj2', id, state, output, progress, cellId);

    // $('#output-card' + cellId).text(id);
    checkSession = false;

    runningStatementId = id;
    runningCellId = cellId;
    runningToDo = toDo;
    console.log("masuk listen statement : "+runningCellId);
}

/*
Create Session
*/
function createSession(num_of_core, num_of_mem){
    url = gateway + "create_session";
    // user_id = request.form['user_id'] 
    // package_id = request.form['package_id'] 
    // project_name = request.form['project_name'] 
    // project_description = request.form['project_description'] 
    // encapsulation = request.form['encapsulation'] 
    // num_of_core = request.form['num_of_core']
    // num_of_mem = request.form['num_of_mem']

    var data = {"user_id": user_id,
                "package_id": package_id,
                "project_name": project_name, 
                "project_description": project_description, 
                "encapsulation": encapsulation, //1-private //2-public 
                "num_of_core": num_of_core, 
                "num_of_mem": num_of_mem};
    ajaxCallPost(url, JSON.stringify(data), cellId=0, sendFile=false, toDo="createSession");
}

function responseCreateSession(response){
    var obj1 = JSON.parse(JSON.stringify(response));


    if (obj1.result.code=='livy-0'){
        var obj2 = JSON.parse(obj1.result.description);
        console.log('obj2', obj2);
        $("#livy_id").text(obj2.id);
        $("#lab_status").text(obj2.state);
        $("#notification_area").text(obj1.result.code + ' - ' + obj1.result.description);
        if (obj2.state == 'starting'){
            sessionHealth = 1;
        }
        checkSession = true;
    }
    else{
        $("#notification_area").text(obj1.result.code + ' - ' + obj1.result.description);
    }
}

/*
Import Database
*/
function importDatabase(cellId){
    console.log("cell id : "+cellId);
    url = gateway + "import_database";
    var arrayId = cellId.split("-");
    var id = arrayId[arrayId.length - 1];


    var db_type =  $("#db-type" + id).val();
    var db_url =  $("#db-url" + id).val();
    var db_name = $("#db-name" + id).val();
    var db_table = $("#db-table" + id).val();
    var db_user = $("#db-user" + id).val();
    var db_pass = $("#db-pass" + id).val();

    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "database_type": db_type,
                "database_url": db_url,
                "database_name": db_name,
                "database_table": db_table,
                "database_user": db_user,
                "database_password": db_pass}
    // alert(JSON.stringify(data));
    console.log("import file :"+runningCellId);
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "importDatabase");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}   

function responseImportDatabase(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];

    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");

    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();

    console.log('obj2', runningCellId, id, status, obj2);
}



/*
Show Tables
*/
function showTables(cellId){
    url = gateway + "show_tables";
    loopingGetValueShowTablesEven2 = 0;

    var data = {"user_id": user_id,
                "livy_id": livy_id};
    console.log('show table',JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "showTables");
}

function responseShowTables(cellId, response){
    console.log(response);
    var obj1 = response;
    loopingGetValueShowTablesEven2 = loopingGetValueShowTablesEven2 + 1;
    console.log(loopingGetValueShowTablesEven2);
    // alert(cellId);
    var arrayId = cellId.split("-");
    var moduleName =  arrayId[0];
    var selectId = arrayId[arrayId.length - 1];
    console.log('obj1--responseShowTables', cellId, obj1);

    var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));
    var id = obj1.execution_count;
    var status = obj1.status;

    if(loopingGetValueShowTablesEven2 % 2 === 0){
        $('#'+runningCellId).children('.inpt-grp').find('.from-' + moduleName +  '-' + selectId).empty();
        $('#'+runningCellId).children('.inpt-grp').find('.from-' + moduleName +  '-' + selectId).append('<option value="None">Select Table</option>');
        
        if (cellId.indexOf('merge')>=0){
            $('#'+runningCellId).children('.inpt-grp').find('.to-' + moduleName +  '-' + selectId).empty();
            $('#'+runningCellId).children('.inpt-grp').find('.to-' + moduleName +  '-' + selectId).append('<option value="None">Select Table</option>');
        }


        tableList = obj2['tableName'];

        for (var k in obj2['tableName']){
            // keys.push(k);
            $('#'+runningCellId).children('.inpt-grp').find('.from-' + moduleName +  '-' + selectId).append('<option value="' + tableList[k] +  '">' + tableList[k] + '</option>');
            if (cellId.indexOf('merge')>=0){
                $('#'+runningCellId).children('.inpt-grp').find('.to-' + moduleName +  '-' + selectId).append('<option value="' + tableList[k] +  '">' + tableList[k] + '</option>');
            }
        } 
        loading("1"); 
    }
    
        
    $('#'+runningCellId).children('.output-card').find('.error-ouput').html(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'",""));
    console.log('obj2', id, status, obj2);   
}

/*
Describe Table
*/
function describeTable(cellId, selectId, selectKeyId, isSelect){
    alert('describe table');
    loopingGetValueDescribeEven2 = 0;
    loading("2",runningCellId);
    url = gateway + "describe_table";

    runningCellId = cellId;
    runningSelectId = selectId;
    runningSelectKeyId = selectKeyId;
    runningIsSelect = isSelect;

    var arrayCellId = cellId.split("-");
    var arraySelectId = selectId.split("-");

    var table_name = $('#'+runningCellId).children('.inpt-grp').find('.' + runningSelectId).val();
    console.log('#'+runningCellId+selectId);
    // alert(runningCellName);
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name};
    console.log('describeTable', data);
    // alert(JSON.stringify(data));
    renderingIsFinished = false;
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "describeTable");
}

function responseDescribeTable(cellId, response){
    var obj1 = response;
    console.log("masuk kesini : "+runningCellId)
    loopingGetValueDescribeEven2 = loopingGetValueDescribeEven2 + 1;
    // console.log('obj1--responseShowTables', cellId, obj1);
    console.log(loopingGetValueDescribeEven2);
    var obj2 = obj1['data']['text/plain'].replace(/u'/g,'u"');
    var obj2 = obj2.replace(/'/g,'"');
    var obj2 = obj2.replace(/True/g,'"True"');
    var obj2 = obj2.replace(/False/g,'"False"');
    var obj2 = obj2.replace(/u"/g,'"');

    var param_catch ="";
    try{
        var obj2 = JSON.parse(obj2);
        param_catch="success";
    }catch(e){
        console.log("dalam catch : "+e);
        param_catch="failed";
    }
    
    // console.log("tampilin disini obj coyyy : "+obj2)
    if (renderingIsFinished == false){
        if(runningIsSelect == false){
            $('#'+runningCellId).children('.no-selected-box').empty();
                // '<div class="checkbox-layout-inline"><input id="sel-col-1" class="sel-col-container" type="checkbox" name="colname" value="colnameA"> <label for="sel-col-1">Age</label></div>'+
            var checkBoxId = 1;
            console.log('checkSession--', checkSession);
            if(loopingGetValueDescribeEven2 % 2 === 0){
                if(param_catch === "success"){
                    for (var column in obj2){
                        var checkboxStr = '<div class="checkbox-layout-inline" id="checkbox-' + cellId + '"><input id="sel-col-' + checkBoxId + '" class="sel-col-container" type="checkbox" name="' + cellId + '-columns[]" value="' +  obj2[column]["name"] + '"> <label for="sel-col-' + checkBoxId + '">' +  obj2[column]["name"] + '</label></div>';
                        $('#'+runningCellId).children('.no-selected-box').append(checkboxStr);
                        checkBoxId++;
                    }
                    loading("1");
                    renderingIsFinished = true;
                }
            }
           
        }else{
            $('#'+runningCellId).children('.inpt-grp').find('.' + runningSelectKeyId).empty();
            $('#'+runningCellId).children('.inpt-grp').find('.' + runningSelectKeyId).append('<option value="None">Select Column</option>');
            console.log(obj2);
            columnList = obj2;
            if(loopingGetValueDescribeEven2 % 2 === 0){
                if(param_catch === "success"){
                    for (var column in obj2){
                        // keys.push(k);
                        // console.log('#merge-module-' + runningSelectKeyId, runningSelectKeyId);
                        $('#'+runningCellId).children('.inpt-grp').find('.' + runningSelectKeyId).append('<option value="' + obj2[column]["name"] +  '">' + obj2[column]["name"]  + '</option>');  
                    } 
                    loading("1");
                    renderingIsFinished = true;
                }
            }
        }
        
    }
    else{
        //do something...
    }
    
}
/*
Merge Tables
*/
function mergeTables(cellId){
    url = gateway + "merge_tables";
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table1_name = $('#'+cellId).children('.inpt-grp').find('.from-merge-' + selectId).val();
    var on_table1 = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var how = $('#'+cellId).children('.inpt-grp').find('.method-merge-' + selectId).val();
    var table2_name = $('#'+cellId).children('.inpt-grp').find('.to-merge-' + selectId).val();
    var on_table2 = $('#'+cellId).children('.inpt-grp').find('.to-key-' + selectId).val();

    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table1_name": table1_name,
                "on_table1": on_table1,
                "how": how,
                "table2_name": table2_name,
                "on_table2": on_table2};

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "mergeTables");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    // $('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseMergeTables(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");

    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();

    console.log('obj2', runningCellId, id, status, obj2);
}

/*
Import FIle
*/
function importFile(cellId){
    url = gateway + "import_file";
    // alert(cellId);
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];

    var formData = new FormData();
    formData.append('file', $('#file-id-' + selectId)[0].files[0]);
    formData.append('user_id', user_id);
    formData.append('livy_id', livy_id);


    // alert(JSON.stringify(data));
    ajaxCallPost(url, formData, cellId, true, "importFile");
    console.log("import file :"+runningCellId);
    // $('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseImportFile(cellId, response){
    // console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");

    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();

    console.log('obj2', runningCellId, id, status, obj2);
}

/*
Select Column
*/
function selectcol(cellId){
    url = gateway + "selectcol";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-selectcol-' + selectId).val();
    // var output_col = $('#OutputCol-va'+selectId).val();
    var input_col = [];
    $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
        input_col.push("'" + $(this).val() + "'");
    });
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "input_columns": input_col
                // "output_col": output_col
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "selectcol");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseSelectCol(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/*
Select Row
*/
function selectRow(cellId){
    url = gateway + "select_row";
    // alert(cellId);
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-row-' + selectId).val();
    var name= $('#name-row' + selectId).val();
    var method= $('#method-row' + selectId).val();
    var value= $('#value-row' + selectId).val();

    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "name": name,
                "method": method,
                "value": value};

    // alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "row");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseSelectRow(cellId, response){
    // console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");

    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();

    console.log('obj2', runningCellId, id, status, obj2);
}
/*
Vector Assembler
*/
function vectorAssembler(cellId){
    url = gateway + "vector_assembler";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-va-' + selectId).val();
    var output_col = $('#OutputCol-va'+selectId).val();
    var input_col = [];
    $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
        input_col.push("'" + $(this).val() + "'");
    });
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "input_columns": input_col,
                "output_col": output_col
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "vectorAssembler");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseVectorAssembler(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/* Normalizer */
function normalizer(cellId){
    url = gateway + "normalizer";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-normalizer-' + selectId).val();
    var on_table = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-normalizer'+selectId).val();
    var p = $('#p-normalizer'+selectId).val();
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "p":p,
                "output_col": output_col,
                "on_table": on_table
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "normalizer");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseNormalizer(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/* Stopword */
function stopword(cellId){
    url = gateway + "stopword";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-stopword-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-stopword'+selectId).val();
    alert(output_col)
    // var input_col = [];
    // $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
    //     input_col.push("'" + $(this).val() + "'");
    // });
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "input_col" : input_col,
                "output_col": output_col,
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "stopword");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseStopword(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/* Missing Value */
function missingval(cellId){
    url = gateway + "missingval";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-missval-' + selectId).val();
    var radioValue = $("input[name='colname" + selectId + "']:checked").val();
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "radioValue": radioValue
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "missingval");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseMissingVal(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/* MinMax */
function minmax(cellId){
    url = gateway + "minmax";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-minmax-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-minmax'+selectId).val();
    alert(output_col)
    // var input_col = [];
    // $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
    //     input_col.push("'" + $(this).val() + "'");
    // });
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "input_col" : input_col,
                "output_col": output_col,
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "minmax");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseMinMax(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}


/* string indexer */
function stringindexer(cellId){
    url = gateway + "stringindexer";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-stringindexer-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-stringindexer'+selectId).val();
    var handleInvalid = $('#handleInvalid-stringindexer'+selectId).val();
    var stringOrderType = $('#stringOrderType-stringindexer'+selectId).val();

    alert(output_col)
    // var input_col = [];
    // $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
    //     input_col.push("'" + $(this).val() + "'");
    // });
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "input_col" : input_col,
                "output_col": output_col,
                "handleInvalid" : handleInvalid,
                "stringOrderType": stringOrderType
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "stringindexer");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseStringIndexer(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}
/* label indexer */
function labelindexer(cellId){
    url = gateway + "labelindexer";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-labelindexer-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-labelindexer'+selectId).val();
    var handleInvalid = $('#handleInvalid-labelindexer'+selectId).val();
    var stringOrderType = $('#stringOrderType-labelindexer'+selectId).val();

    alert(output_col)
    // var input_col = [];
    // $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
    //     input_col.push("'" + $(this).val() + "'");
    // });
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "input_col" : input_col,
                "output_col": output_col,
                "handleInvalid" : handleInvalid,
                "stringOrderType": stringOrderType
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "labelindexer");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseLabelIndexer(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}
/* OneHot */
function onehot(cellId){
    url = gateway + "onehot";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-onehot-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-onehot'+selectId).val();
    alert(output_col)
    // var input_col = [];
    // $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
    //     input_col.push("'" + $(this).val() + "'");
    // });
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "input_col" : input_col,
                "output_col": output_col,
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "onehot");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseOneHot(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/* Bucketizer */
function bucketizer(cellId){
    url = gateway + "bucketizer";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-bucket-' + selectId).val();
    var split = $('#split-bucket'+selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-bucket'+selectId).val();
    alert(output_col)
    // var input_col = [];
    // $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
    //     input_col.push("'" + $(this).val() + "'");
    // });
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "split": split,
                "input_col" : input_col,
                "output_col": output_col
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "bucketizer");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseBucketizer(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/* Standard Scaler */
function standardscaler(cellId){
    url = gateway + "standardscaler";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-scaler-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-scaler'+selectId).val();
    var withStd = $('#withStd'+selectId).val();
    var withMean = $('#withMean'+selectId).val();
    alert(output_col)
    // var input_col = [];
    // $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
    //     input_col.push("'" + $(this).val() + "'");
    // });
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "input_col" : input_col,
                "output_col": output_col,
                "withStd" : withStd,
                "withMean" : withMean
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "standardscaler");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseStandardScaler(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/* Tokenizer */

function tokenizer(cellId){
    url = gateway + "tokenizer";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-tokenizer-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-tokenizer'+selectId).val();
    alert(output_col)
    // var input_col = [];
    // $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
    //     input_col.push("'" + $(this).val() + "'");
    // });
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "input_col" : input_col,
                "output_col": output_col,
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "tokenizer");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();  
}

function responseTokenizer(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/* Hashing Tf */
function hashingTf(cellId){
    url = gateway + "hashingTf";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-hashingTf-' + selectId).val();
    var num_of_features = $('#num_of_features-hashingTf'+selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-hashingTf'+selectId).val();
    alert(output_col)
    // var input_col = [];
    // $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
    //     input_col.push("'" + $(this).val() + "'");
    // });
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "num_of_features":num_of_features,
                "input_col" : input_col,
                "output_col": output_col,
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "hashingTf");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseHashingTf(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/* idf */
function idf(cellId){
    url = gateway + "idf";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-idf-' + selectId).val();
    var min_doc_freq = $('#min_doc_freq-idf'+selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-idf'+selectId).val();
    alert(output_col)
    // var input_col = [];
    // $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
    //     input_col.push("'" + $(this).val() + "'");
    // });
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "min_doc_freq":min_doc_freq,
                "input_col" : input_col,
                "output_col": output_col,
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "idf");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseIdf(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/* Count Vectorizer */
function countvectorizer(cellId){
    url = gateway + "countvectorizer";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-cv-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-cv'+selectId).val();
    alert(output_col)
    // var input_col = [];
    // $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
    //     input_col.push("'" + $(this).val() + "'");
    // });
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "input_col" : input_col,
                "output_col": output_col,
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "cv");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseCountVectorizer(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/*
K -Means
*/
function kmeans(cellId){
    url = gateway + "kmeans";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-kmeans-' + selectId).val();
    var features_col= $('#featuresCol-kmeans' + selectId).val();
    var label_col= $('#labelCol-kmeans' + selectId).val();
    var prediction_col= $('#predictionCol-kmeans' + selectId).val();
    var init_mode= $('#initMode-kmeans' + selectId).val();
    var init_steps= $('#initSteps-kmeans' + selectId).val();
    var tol= $('#tol-kmeans' + selectId).val();
    var k= $('#k-kmeans' + selectId).val();
    var max_iter= $('#maxIter-kmeans' + selectId).val();
    var seed= $('#seed-kmeans' + selectId).val();
    var distance_measure= $('#distanceMeasure-kmeans' + selectId).val();

    data ={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "features_col":features_col,
        "label_col":label_col,
        "prediction_col":prediction_col,
        "init_mode":init_mode,
        "tol":tol,
        "k":k,
        "max_iter":max_iter,
        "seed":seed,
        "distance_measure":distance_measure
    }

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "kmeans");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseKmeans(cellId, response){
    console.log(response);
    var obj1 = response;

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/*
Gaussian Mixture Model
*/
function gmm(cellId){
    url = gateway + "gmm";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-gmm-' + selectId).val();
    var features_col= $('#featuresCol-gmm' + selectId).val();
    var label_col= $('#labelCol-gmm' + selectId).val();
    var prediction_col= $('#predictionCol-gmm' + selectId).val();
    var tol= $('#tol-gmm' + selectId).val();
    var k= $('#k-gmm' + selectId).val();
    var max_iter= $('#maxIter-gmm' + selectId).val();
    var seed= $('#seed-gmm' + selectId).val();
    var probability_col= $('#probabilityCol-gmm' + selectId).val();

    data ={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "features_col":features_col,
        "label_col":label_col,
        "prediction_col":prediction_col,
        "k":k,
        "probability_col":probability_col,
        "tol":tol,
        "max_iter":max_iter,
        "seed":seed
    }

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "gmm");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseGmm(cellId, response){
    console.log(response);
    var obj1 = response;


    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/*
Linear Regression
*/
function linearRegression(cellId){
    url = gateway + "linear_regression";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-linearreg-' + selectId).val();
    var features_col= $('#featuresCol-linearreg' + selectId).val();
    var label_col= $('#labelCol-linearreg' + selectId).val();
    var prediction_col= $('#predictionCol-linearreg' + selectId).val();
    var max_iter= $('#maxIter-linearreg' + selectId).val();
    var reg_param= $('#regParam-linearreg' + selectId).val();
    var elastic_net_param= $('#elasticNetParam-linearreg' + selectId).val();
    var tol= $('#tol-linearreg' + selectId).val();
    var fit_intercept= $('#fitIntercept-linearreg' + selectId).val();
    var standardization= $('#standardization-linearreg' + selectId).val();
    var solver= $('#solver-linearreg' + selectId).val();
    var weight_col= $('#weightCol-linearreg' + selectId).val();
    var aggregation_depth= $('#aggregationDepth-linearreg' + selectId).val();
    var loss= $('#loss-linearreg' + selectId).val();
    var epsilon= $('#epsilon-linearreg' + selectId).val();
    var train = $('#train-linearreg'+selectId).val();
    var test = $('#test-linearreg'+selectId).val();

    data ={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "features_col":features_col,
        "label_col":label_col,
        "prediction_col":prediction_col,
        "max_iter":max_iter,
        "reg_param":reg_param,
        "elastic_net_param":elastic_net_param,
        "tol":tol,
        "fit_intercept":fit_intercept,
        "standardization":standardization,
        "solver":solver,
        "weight_col":weight_col,
        "aggregation_depth":aggregation_depth,
        "loss":loss,
        "epsilon":epsilon,
        "train":train,
        "test":test
    }

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "linearRegression");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseLinearRegression(cellId, response){
    console.log(response);
    var obj1 = response;


    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}


/*
Logistic Regression
*/
function logisticRegression(cellId){
    url = gateway + "logistic_regression";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-logisticreg-' + selectId).val();
    // var features_col = $('#'+cellId).children('.inpt-grp').find('#featuresCol-logisticreg' + selectId).val();
    var features_col= $('#featuresCol-logisticreg' + selectId).val();
    var label_col= $('#labelCol-logisticreg' + selectId).val();
    var prediction_col= $('#predictionCol-logisticreg' + selectId).val();
    var max_iter= $('#maxIter-logisticreg' + selectId).val();
    var reg_param= $('#regParam-logisticreg' + selectId).val();
    var elastic_net_param= $('#elasticNetParam-logisticreg' + selectId).val();
    var tol= $('#tol-logisticreg' + selectId).val();
    var fit_intercept= $('#fitIntercept-logisticreg' + selectId).val();
    var threshold = $('#threshold-logisticreg' + selectId).val();
    var thresholds = $('#thresholds-logisticreg' + selectId).val();
    var probability_col = $('#probabilityCol-logisticreg' + selectId).val();
    var raw_prediction_col = $('#rawPredictionCol-logisticreg' + selectId).val();
    var standardization = $('#standardization-logisticreg' + selectId).val();
    var weight_col = $('#weightCol-logisticreg' + selectId).val();
    var aggregation_depth = $('#aggregationDepth-logisticreg' + selectId).val();
    var family = $('#family-logisticreg' + selectId).val();
    var lower_bounds_on_coefficients = $('#lowerBoundsOnCoefficients-logisticreg' + selectId).val();
    var upper_bounds_on_coefficients = $('#upperBoundsOnCoefficients-logisticreg' + selectId).val();
    var lower_bounds_on_intercepts = $('#lowerBoundsOnIntercepts-logisticreg' + selectId).val();
    var upper_bounds_on_intercepts = $('#upperBoundsOnIntercepts-logisticreg' + selectId).val();
    var train = $('#train-logisticreg'+selectId).val();
    var test = $('#test-logisticreg'+selectId).val();
   
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "features_col": features_col,
                "label_col": label_col,
                "prediction_col": prediction_col,
                "max_iter": max_iter,
                "reg_param": reg_param,
                "elastic_net_param": elastic_net_param,
                "tol": tol,
                "fit_intercept": fit_intercept,
                "threshold": threshold,
                "thresholds": thresholds,
                "probability_col": probability_col,
                "raw_prediction_col": raw_prediction_col,
                "standardization": standardization,
                "weight_col": weight_col,
                "aggregation_depth": aggregation_depth,
                "family": family,
                "lower_bounds_on_coefficients": lower_bounds_on_coefficients,
                "upper_bounds_on_coefficients": upper_bounds_on_coefficients,
                "lower_bounds_on_intercepts": lower_bounds_on_intercepts,
                "upper_bounds_on_intercepts": upper_bounds_on_intercepts,
                "train":train,
                "test":test
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "logisticRegression");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseLogisticRegression(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/*
Decision Tree
*/
function decisionTree(cellId){
    url = gateway + "decision_tree";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-decisiontree-' + selectId).val();
    var features_col= $('#featuresCol-decisiontree' + selectId).val();
    var label_col= $('#labelCol-decisiontree' + selectId).val();
    var prediction_col= $('#predictionCol-decisiontree' + selectId).val();
    var probability_col = $('#probabilityCol-decisiontree' + selectId).val();
    var raw_prediction_col = $('#rawPredictionCol-decisiontree' + selectId).val();
    var max_depth = $('#maxDepth-decisiontree' + selectId).val();
    var max_bins = $('#maxBins-decisiontree' + selectId).val();
    var min_instances_per_node = $('#minInstancesPerNode-decisiontree' + selectId).val();
    var min_info_gain = $('#minInfoGain-decisiontree' + selectId).val();
    var max_memory_in_mb = $('#maxMemoryInMB-decisiontree' + selectId).val();
    var cache_node_ids = $('#cacheNodeIds-decisiontree' + selectId).val();
    var checkpoint_interval = $('#checkpointInterval-decisiontree' + selectId).val();
    var impurity = $('#impurity-decisiontree' + selectId).val();
    var num_trees = $('#numTrees-decisiontree' + selectId).val();
    var seed = $('#seed-decisiontree' + selectId).val();
    var train = $('#train-decisiontree'+selectId).val();
    var test = $('#test-decisiontree'+selectId).val();

    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "features_col": features_col,
                "label_col": label_col,
                "prediction_col": prediction_col,
                "probability_col": probability_col,
                "raw_prediction_col": raw_prediction_col,
                "max_depth": max_depth,
                "max_bins": max_bins,
                "min_instances_per_node": min_instances_per_node,
                "min_info_gain": min_info_gain,
                "max_memory_in_mb": max_memory_in_mb,
                "cache_node_ids": cache_node_ids,
                "checkpoint_interval": checkpoint_interval,
                "impurity": impurity,
                "num_trees":num_trees,
                "seed": seed,
                "train":train,
                "test":test
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "decisionTree");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseDecisionTree(cellId, response){
    console.log(response);
    var obj1 = response;

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/*
Naive Bayes
*/
function naiveBayes(cellId){
    url = gateway + "naive_bayes";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-naivebayes-' + selectId).val();
    // var features_col = $('#'+cellId).children('.inpt-grp').find('#featuresCol-logisticreg' + selectId).val();
    var features_col= $('#featuresCol-naivebayes' + selectId).val();
    var label_col= $('#labelCol-naivebayes' + selectId).val();
    var prediction_col= $('#predictionCol-naivebayes' + selectId).val();
    var probability_col = $('#probabilityCol-naivebayes' + selectId).val();
    var raw_prediction_col = $('#rawPredictionCol-naivebayes' + selectId).val();
    var smoothing = $('#smoothing-naivebayes' + selectId).val();
    var weight_col = $('#weightCol-naivebayes' + selectId).val();
    var model_type = $('#modelType-naivebayes' + selectId).val();
    var thresholds = $('#thresholds-naivebayes' + selectId).val();
    var train = $('#train-naivebayes'+selectId).val();
    var test = $('#test-naivebayes'+selectId).val();

   
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "features_col": features_col,
                "label_col": label_col,
                "prediction_col": prediction_col,
                "thresholds": thresholds,
                "probability_col": probability_col,
                "raw_prediction_col": raw_prediction_col,
                "smoothing": smoothing,
                "weight_col": weight_col,
                "model_type": model_type,
                "train":train,
                "test":test
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "naiveBayes");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseNaiveBayes(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/*
Random Forest
*/
function randomForest(cellId){
    url = gateway + "random_forest";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-randomforest-' + selectId).val();
    var features_col= $('#featuresCol-randomforest' + selectId).val();
    var label_col= $('#labelCol-randomforest' + selectId).val();
    var prediction_col= $('#predictionCol-randomforest' + selectId).val();
    var probability_col = $('#probabilityCol-randomforest' + selectId).val();
    var raw_prediction_col = $('#rawPredictionCol-randomforest' + selectId).val();
    var max_depth = $('#maxDepth-randomforest' + selectId).val();
    var max_bins = $('#maxBins-randomforest' + selectId).val();
    var min_instances_per_node = $('#minInstancesPerNode-randomforest' + selectId).val();
    var min_info_gain = $('#minInfoGain-randomforest' + selectId).val();
    var max_memory_in_mb = $('#maxMemoryInMB-randomforest' + selectId).val();
    var cache_node_ids = $('#cacheNodeIds-randomforest' + selectId).val();
    var checkpoint_interval = $('#checkpointInterval-randomforest' + selectId).val();
    var impurity = $('#impurity-randomforest' + selectId).val();
    var num_trees = $('#numTrees-randomforest' + selectId).val();
    var feature_subset_strategy = $('#featureSubsetStrategy-randomforest' + selectId).val();
    var seed = $('#seed-randomforest' + selectId).val();
    var subsampling_rate = $('#subsamplingRate-randomforest' + selectId).val();
    var train = $('#train-randomforest'+selectId).val();
    var test = $('#test-randomforest'+selectId).val();

    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "features_col": features_col,
                "label_col": label_col,
                "prediction_col": prediction_col,
                "probability_col": probability_col,
                "raw_prediction_col": raw_prediction_col,
                "max_depth": max_depth,
                "max_bins": max_bins,
                "min_instances_per_node": min_instances_per_node,
                "min_info_gain": min_info_gain,
                "max_memory_in_mb": max_memory_in_mb,
                "cache_node_ids": cache_node_ids,
                "checkpoint_interval": checkpoint_interval,
                "impurity": impurity,
                "num_trees": num_trees,
                "feature_subset_strategy": feature_subset_strategy,
                "seed": seed,
                "subsampling_rate": subsampling_rate,
                "train":train,
                "test":test
               };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "randomForest");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseRandomForest(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/*
FPGrowth
*/
function fpgrowth(cellId){
    url = gateway + "fp_growth";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-fpgrowth-' + selectId).val();
    var splits = $('#splits-fpgrowth'+selectId).val();
    var min_support = $('#minSupport-fpgrowth' + selectId).val();
    var min_confidence = $('#minConfidence-fpgrowth' + selectId).val();
    var items_col = $('#itemsCol-fpgrowth' + selectId).val();
    var prediction_col = $('#predictionCol-fpgrowth' + selectId).val();
    var num_partitions = $('#numPartitions-fpgrowth' + selectId).val();

    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "splits": splits,
        "min_support": min_support,
        "min_confidence": min_confidence,
        "items_col": items_col,
        "prediction_col": prediction_col,
        "num_partitions": num_partitions,
    };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "fpGrowth");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseFpGrowth(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/*
Linear SVC
*/
function linearsvc(cellId){
    url = gateway + "linear_svc";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-linearsvc-' + selectId).val();
    var features_col = $('#featuresCol-linearsvc' + selectId).val();
    var label_col = $('#labelCol-linearsvc' + selectId).val();
    var prediction_col = $('#predictionCol-linearsvc' + selectId).val();
    var max_iter = $('#maxIter-linearsvc' + selectId).val();
    var reg_param = $('#regParam-linearsvc' + selectId).val();
    var tol = $('#tol-linearsvc' + selectId).val();
    var raw_prediction_col = $('#rawPredictionCol-linearsvc' + selectId).val();
    var fit_intercept = $('#fitIntercept-linearsvc' + selectId).val();
    var standardization = $('#standardization-linearsvc' + selectId).val();
    var threshold = $('#threshold-linearsvc' + selectId).val();
    var weight_col = $('#weightCol-linearsvc' + selectId).val();
    var aggregation_depth = $('#aggregationDepth-linearsvc' + selectId).val();
    var train = $('#train-linearsvc' + selectId).val();
    var test = $('#test-linearsvc' + selectId).val();


    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "features_col": features_col,
        "label_col": label_col,
        "prediction_col": prediction_col,
        "max_iter": max_iter,
        "reg_param": reg_param,
        "tol": tol,
        "raw_prediction_col": raw_prediction_col,
        "fit_intercept": fit_intercept,
        "standardization": standardization,
        "threshold": threshold,
        "weight_col": weight_col,
        "aggregation_depth": aggregation_depth,
        "train": train,
        "test":test
    };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "linearSvc");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseLinearSvc(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/*
ARIMA
*/
function arima(cellId){
    url = gateway + "arima";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-arima-' + selectId).val();
    var splits = $('#splits-arima' + selectId).val();
    var numberofpredict = $('#numberofpredict-arima' + selectId).val();
    var date_col = $('#dateCol-arima' + selectId).val();
    var timeseries_col = $('#timeseriesCol-arima' + selectId).val();
    var start_p = $('#start_p-arima' + selectId).val();
    var d = $('#d-arima' + selectId).val();
    var start_q = $('#start_q-arima' + selectId).val();
    var max_p = $('#max_p-arima' + selectId).val();
    var max_d = $('#max_d-arima' + selectId).val();
    var max_q = $('#max_q-arima' + selectId).val();
    var start_P = $('#start_P-arima' + selectId).val();
    var D = $('#D-arima' + selectId).val();
    var start_Q = $('#start_Q-arima' + selectId).val();
    var max_P = $('#max_P-arima' + selectId).val();
    var max_D = $('#max_D-arima' + selectId).val();
    var max_Q = $('#max_Q-arima' + selectId).val();
    var max_order = $('#max_order-arima' + selectId).val();
    var m = $('#m-arima' + selectId).val();
    var seasonal = $('#seasonal-arima' + selectId).val();
    var stationary = $('#stationary-arima' + selectId).val();
    var stepwise = $('#stepwise-arima' + selectId).val();
    var solver = $('#solver-arima' + selectId).val();
    var suppress_warnings = $('#suppress_warnings-arima' + selectId).val();
    var error_action = $('#error_action-arima' + selectId).val();
    var trace = $('#trace-arima' + selectId).val();
    var scoring = $('#scoring-arima' + selectId).val();
   
    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "splits": splits,
        "numberofpredict": numberofpredict,
        "date_col": date_col,
        "timeseries_col": timeseries_col,
        "start_p": start_p,
        "d": d,
        "start_q": start_q,
        "max_p": max_p,
        "max_d": max_d,
        "max_q": max_q,
        "start_P":start_P,
        "D": D,
        "start_Q": start_Q,
        "max_P": max_P,
        "max_D": max_D,
        "max_Q": max_Q,
        "max_order": max_order,
        "m": m,
        "seasonal": seasonal,
        "stationary": stationary,
        "stepwise": stepwise,
        "solver": solver,
        "suppress_warnings": suppress_warnings,
        "error_action": error_action,
        "trace": trace,
        "scoring":scoring
    };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "arima");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseArima(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();
    console.log('obj2', runningCellId, id, status, obj2);
}

/*
PCA
*/
function pca(cellId){
    url = gateway + "pca";
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var num_of_components = $('#'+cellId).children('.inpt-grp').find('.num-of-components-' + selectId).val();
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-pca-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-pca'+selectId).val();
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "num_of_components": num_of_components,
                "table_name": table_name,
                "input_col": input_col,
                "output_col": output_col};

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "pca");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responsePca(cellId, response){
    console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.error-ouput').html(obj2);
    $('#'+cellId).children('.output-card').find('.error-ouput').find('.dataframe').DataTable();

    console.log('obj2', runningCellId, id, status, obj2);
}
/*
Visualization
Line Chart
*/
function lineChartVisual(cellId){
    url = gateway + "line_chart_visual";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-linechart-' + selectId).val();
    var x = $('#x-linechart' + selectId).val();
    var y = $('#y-linechart' + selectId).val();
   

    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "x": x,
        "y": y
    };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "lineChartVisual");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseLineChartVisual(cellId, response){
    console.log(response);
    console.log(cellId);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    var testing = JSON.parse(obj2.replace(/\bNaN\b/g, "null"));
    console.log('obj2', runningCellId, id, status, obj2);
    var trace1 = {
                    x: testing.x,
                    y: testing.y,
                    type: 'scatter'
                  };
                  
    var data = [trace1];
    var arrayId = cellId.split("-");
    var number_id = arrayId[arrayId.length - 1];
    var name_module = arrayId[arrayId.length - 3];
    console.log(name_module+""+number_id);
    Plotly.newPlot(name_module+""+number_id , data);

    // $('#'+runningCellId).children('.output-card').find('.error-ouput').html(obj2);
}

/*
Bar chart
*/
function barChartVisual(cellId){
    url = gateway + "bar_chart_visual";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-barchart-' + selectId).val();
    var index = $('#index-barchart' + selectId).val();
    var columns = $('#columns-barchart' + selectId).val();
    var values = $('#values-barchart' + selectId).val();

    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "index": index,
        "columns": columns,
        "values": values
    };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "barChartVisual");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseBarChartVisual(cellId, response){
    console.log(response);
    console.log(cellId);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    if (status == 'ok'){
        var obj2 = obj1['data']['text/plain'];
        var testing = JSON.parse(obj2);
        var columns = JSON.stringify(testing.columns);
        var new_columns = columns.replace(/"/g, "'");
        console.log(new_columns);
        var value = new Array;
        var trace = [];
        for(var i=0;i < testing.index.length; i++){
            value[i] = {"x":new_columns,
                        "y":testing.data[i],
                        "name":testing.index[i],
                        "type":'bar'};
            trace.push(value[i]);
        }
        console.log(trace);
        var tangkap = JSON.stringify(trace);
        var arrayId = cellId.split("-");
        var number_id = arrayId[arrayId.length - 1];
        var name_module = arrayId[arrayId.length - 3];
        console.log(name_module+""+number_id);
        var layout = {barmode: 'stack'};
        Plotly.newPlot('barchart' + number_id, trace, layout, {showSendToCloud:true});
        // $('#'+runningCellId).children('.output-card').find('.error-ouput').html(obj2);
    }
    else if (status == 'error') {
        var ename = obj1.ename;
        var evalue = obj1.evalue;

        $('#'+cellId).children('.output-card').find('.error-ouput').html(ename + ' - <br>' + evalue);
    }
}

/*
Pie chart
*/
function pieChartVisual(cellId){
    url = gateway + "pie_chart_visual";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-piechart-' + selectId).val();
    var labels = $('#labels-piechart' + selectId).val();
    var values = $('#values-piechart' + selectId).val();

    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "labels": labels,
        "values": values
    };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "pieChartVisual");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responsePieChartVisual(cellId, response){
    console.log(response);
    console.log(cellId);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    var testing = JSON.parse(obj2);
    console.log(testing.data[0])
    var data_new = [];
    for(var k = 0; k < testing.data.length; k++){
        data_new.push(testing.data[k]);
    }
    var trace = [];
    var value = {"values":[1,2,3],
                "labels":testing.index,
                "type":'pie'};
    var trace = [value];
    var arrayId = cellId.split("-");
    var number_id = arrayId[arrayId.length - 1];
    var name_module = arrayId[arrayId.length - 3];
    console.log(name_module+""+number_id);
    var layout = {
                    height: 400,
                    width: 500
                    };
    Plotly.newPlot('piechart' + number_id, trace, layout);

    // $('#'+runningCellId).children('.output-card').find('.error-ouput').html(obj2);
}

/*
Histogram chart
*/
function histogramChartVisual(cellId){
    url = gateway + "histogram_chart_visual";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-histogram-' + selectId).val();
    var index = $('#index-histogram' + selectId).val();
    var columns = $('#columns-histogram' + selectId).val();
    var values = $('#values-histogram' + selectId).val();

    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "index": index,
        "columns": columns,
        "values": values
    };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "histogramChartVisual");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseHistogramChartVisual(cellId, response){
    console.log(response);
    console.log(cellId);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    var testing = JSON.parse(obj2);
    var columns = JSON.stringify(testing.columns);
    var new_columns = columns.replace(/"/g, "'");
    console.log(new_columns);
    var value = new Array;
    var trace = [];
    for(var i=0;i < testing.index.length; i++){
        value[i] = {
            // "x":new_columns,
                    "x":testing.data[i],
                    "name":testing.index[i],
                    "type":'histogram'};
        trace.push(value[i]);
    }
    console.log(trace);
    var tangkap = JSON.stringify(trace);
    console.log(tangkap)
    var arrayId = cellId.split("-");
    var number_id = arrayId[arrayId.length - 1];
    var name_module = arrayId[arrayId.length - 3];
    console.log(name_module+""+number_id);
    var layout = {barmode: 'stack'};
    Plotly.newPlot('histogram' + number_id, trace, layout);

    // $('#'+runningCellId).children('.output-card').find('.error-ouput').html(obj2);
}

/*
Violin chart
*/
function violinChartVisual(cellId){
    url = gateway + "violin_chart_visual";
    loopingDataViolin = 0;
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-violin-' + selectId).val();
    var x = $('#xaxis-violin' + selectId).val();
    var y = $('#yaxis-violin' + selectId).val();

    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "x": x,
        "y": y
    };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "violinChartVisual");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseViolinChartVisual(cellId, response){
    // console.log(response);
    // console.log(cellId);
    loopingDataViolin = loopingDataViolin + 1;
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));
    if(loopingDataViolin % 2 === 0){
        var id = obj1.execution_count;
        var status = obj1.status;
        var obj2 = obj1['data']['text/plain'];
        var testing = JSON.parse(obj2.replace(/\bNaN\b/g, "null"));
        // console.log('obj2', runningCellId, id, status, obj2);
        
        const new_x = testing.x;
        const xDistinct = [...new Set(new_x)];
        var value = new Array;
        var trace = [];
        for(var z = 0; z < xDistinct.length; z++){
            var random_color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            // console.log(random_color);
            value[z] = { "target":xDistinct[z], "value":"{line:color:{'"+random_color+"'}}"}
            console.log(value[z])
            trace.push(value[z]);
        }
        // var data = [trace1];
        var arrayId = cellId.split("-");
        var number_id = arrayId[arrayId.length - 1];
        var name_module = arrayId[arrayId.length - 3];
        // console.log(name_module+""+number_id);

        var data = [{
            type: 'violin',
            x: testing.x,
            y: testing.y,
            points: 'none',
            box: {
                visible: true
            },
            meanline: {
                visible: true
            },
            transforms: [{
                type: 'groupby',
                groups: testing.x,
                styles: trace
                }]
            }]

            var layout = {
            title: "Multiple Traces Violin Plot",
            yaxis: {
                zeroline: false
            }
            }

            Plotly.plot('violin' + number_id, data, layout);
    }
    

    // $('#'+runningCellId).children('.output-card').find('.error-ouput').html(obj2);
}

function scatterChartVisual(cellId){
    url = gateway + "scatter_chart_visual";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-scatter-' + selectId).val();
    var x = $('#xaxis-scatter' + selectId).val();
    var y = $('#yaxis-scatter' + selectId).val();
    var z = $('#zaxis-scatter' + selectId).val();

    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "x": x,
        "y": y,
        "z":z
    };

    alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "scatterChartVisual");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
}

function responseScatterChartVisual(cellId, response){
    console.log(response);
    console.log(cellId);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    var testing = JSON.parse(obj2.replace(/\bNaN\b/g, "null"));
    console.log('obj2', runningCellId, id, status, obj2);
    

    // var data = [trace1];
    var arrayId = cellId.split("-");
    var number_id = arrayId[arrayId.length - 1];
    var name_module = arrayId[arrayId.length - 3];
    console.log(name_module+""+number_id);

     var trace1 = {
        x:testing.x, y: testing.y, z: testing.z,
        mode: 'markers',
        marker: {
            size: 12,
            line: {
            color: 'rgba(217, 217, 217, 0.14)',
            width: 0.5},
            opacity: 0.8},
        type: 'scatter3d'
    };


    var data = [trace1];
    var layout = {margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
    }};
    Plotly.newPlot('scatter' + number_id, data, layout);

    // $('#'+runningCellId).children('.output-card').find('.error-ouput').html(obj2);
}

// /*
// Import File
// */

// function importFile(id){
//     // alert('helloo');
//     url =  gateway + "import_file";
//     var data = $('#file-id-'+id).val();
//     var datastring = new FormData($("#file-import-"+id)[0]);
//     // alert(datastring);
//     ajaxCallPost(url, datastring, sendFile=true);
// }


function ajaxCallGet(url, cellId=0, toDo){
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json', // added data type

        success: function(result) {
            // console.log(result);

            if (toDo == 'getSessionState'){
                responseGetSessionState(result);
            }
            else if (toDo == 'getStatementState'){
                responseGetStatementState(cellId, result);
            }
            // alert(res);
        },
        error: function(error) {
            console.log(error);
            responseToDoError(error, toDo);            
        }
    });
}
    

function ajaxCallPost(url, data, cellId=0, sendFile=false, toDo=""){  
    console.log(url);
    console.log(data);
    var contentType = ""; 
    var cache = "";
    var processData = "";  
    if (sendFile == true){
        cache = false;
        contentType = false;
        processData = false;
    }
    else{
        cache = true;
        contentType = 'application/json';
        processData = true;
    };
    console.log(url);
    console.log("todo : "+toDo);
    $.ajax({
      type: "POST",
      url: url,
      data: data,
      contentType: contentType,
      dataType: 'json',   //you may use jsonp for cross origin request
      crossDomain:true,
      cache:cache,
      processData:processData,
      success: function(response){
            console.log(response);
            responseToDoSuccess(cellId, response, toDo);            
      },
      error: function(error) {
            console.log(error);
            responseToDoError(cellId, error, toDo);            
      }
      // dataType: "json"
    });
}

function responseToDoSuccess(cellId, response, toDo){
    console.log("toDo response : "+toDo);
    if (toDo=='createSession'){
        responseCreateSession(response);
    }
    else if(toDo=='checkSession'){
        responseGetSessionState(response);
    }
    else{
        listenStatementResponse(cellId, response, toDo);
    }
    
}

function responseToDoError(cellId, response, toDo){
    console.log('Error occured...')
}

function setCurrentSession(livy_id){
    $("#livy_id").text();
}

