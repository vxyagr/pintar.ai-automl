
var editor = null;
// var valRunAll = 0;

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
             $('#nightmode').click(function(){
                $('body').toggleClass('darkmode');
                $(this).text($(this).text() == 'Light mode' ? 'Night mode' : 'Light mode');
                $(this).toggleClass('lightbtn');
            });
        },

        otheFunction: function() {
        },

        panelfunction: function() {
            // import-db
            $("#imprt-db").click(function(e){
                loading("3");
                var newId = getActiveId("column-db");
                // var newId = $('.column-db').length + 1;

                // var input_col = [];
                // $(".column-db").each(function(){
                //     var cellId = $(this).attr('id');
                //     var params = cellId.split("-");
                //     var new_params = parseInt(params[3]) + 1;
                //     input_col.push(new_params);
                // });
                // var unique = input_col.filter(function(elem, index, self) {
                //         return index === self.indexOf(elem);
                //     })
                // if(unique.length === 0){
                //     newId = 1;
                // }else{
                //     newId = unique.reverse()[0];
                // }
                // var newId = $('.column-db').length + 1;

                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    // valRunAll = valRunAll + 1;
                    $(".active-column")
                    .after(
                    
                    '<div class="panel-coloumn column-db" id="import-db-module-' +newId+ '"><h4>[<span id="statementId-' + newId + '"></span>] Import Database</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-newId'+newId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    // '<textarea id="markdown-newId'+newId+'"></textarea>'+
                    // '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-newId'+newId+'"></textarea></div><div class="mdepreview"></div><button class="save-markdown" onclick="save_text(\'import-db-module-' +newId+ '\')">Save</button><br/></div>'+
                    '<div class="inpt-grp"><label>Database Type</label><select  id="db-type' +newId+ '"><option value="postgres">PostgreSql</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>Database URL</label><input type="text" id="db-url' +newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Database Name</label><input type="text" id="db-name' +newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Database Table</label><input type="text" id="db-table'+newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Username</label><input type="text" id="db-user'+newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Password</label><input type="password" id="db-pass'+newId+'" class="ip1"></div> '+
                    '<div class="function-call" style="display:none;">importDatabase,import-db-module-' +newId+ ',markdown-newId'+newId+'</div>'+
                    '<button type="button" onclick="importDatabase(\'import-db-module-' +newId+ '\',\'markdown-newId'+newId+'\')" id="run-import-db'+newId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="explore-import-db'+newId+'" class="trigger-explore"  data-toggle="tooltip" title="Explore table"><i class="fas fa-table"></i></button>'+
                    '<button type="button" id="del'+newId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="explore" id="exp-tb-db'+newId+'" style="display:none;z-index:1000000000">'+
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
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="progress-bar' + newId + '" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    // valRunAll = valRunAll + 1;
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn column-db" id="import-db-module-' +newId+ '"><h4>[<span id="statementId-' + newId + '"></span>] Import Database</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-newId'+newId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    // '<textarea id="markdown-newId'+newId+'"></textarea>'+
                    // '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-newId'+newId+'"></textarea></div><div class="mdepreview"></div><button class="save-markdown" onclick="save_text(\'import-db-module-' +newId+ '\')">Save</button><br/></div>'+
                    '<div class="inpt-grp"><label>Database Type</label><select  id="db-type' +newId+ '"><option value="postgres">PostgreSql</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>Database URL</label><input type="text" id="db-url' +newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Database Name</label><input type="text" id="db-name' +newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Database Table</label><input type="text" id="db-table'+newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Username</label><input type="text" id="db-user'+newId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Password</label><input type="password" id="db-pass'+newId+'" class="ip1"></div> '+
                    '<div class="function-call" style="display:none;">importDatabase,import-db-module-' +newId+ ',markdown-newId'+newId+'</div>'+
                    '<button type="button" onclick="importDatabase(\'import-db-module-' +newId+ '\',\'markdown-newId'+newId+'\')" id="run-import-db'+newId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="explore-import-db'+newId+'" class="trigger-explore"  data-toggle="tooltip" title="Explore table"><i class="fas fa-table"></i></button>'+
                    '<button type="button" id="del'+newId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="explore" id="exp-tb-db'+newId+'" style="display:none; z-index:1000000000">'+
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
                    '<span class="stat">Progress</span>'+
                    // '<div class="progress"><div id="progress-bar' + newId + '" class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '<div class="progress"><div id="progress-bar' + newId + '" class="progress-bar" role="progressbar" style="width: 0%" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                // alert(document.getElementById("markdown-newId" + newId));
                var simplemde = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-newId" + newId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                input_col=[];
              activeColumn("import-db-module-"+newId);
            });
 

            //import file
            $("#imprt-fl").click(function(){
                loading("3");

                // var idFile = $('.column-fl').length + 1;
                var idFile = getActiveId("column-fl");

                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn column-fl" id="import-module-' +idFile+ '"><h4>[<span id="statementId-' + idFile + '"></span>] Import Files</h4>'+
                     //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-idFile'+idFile+'"></textarea></div><div class="mdepreview"></div></div>'+
                    // '<form action="/file-upload"class="dropzone" id="import-file-box-' +idFile+ '"></form>'+
                    '<div class="inpt-grp long-width"><label>Database Type</label><input class="inpt-file" id="file-id-'+idFile+'" type="file" name="myFile"></div>'+
                    '<div class="inpt-grp thre-width"><label>Delimiter</label><select id="delimiter-'+idFile+'"><option value=","> , </option><option value="|"> | </option><option value=";"> ; </option></option><option value="\\"> \\ </option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Header</label><select id="header-'+idFile+'"><option value="true"> true </option><option value="false"> false </option></select></div>'+
                    '<div class="function-call" style="display:none;">importFile,import-module-' +idFile+ ',markdown-idFile'+idFile+'</div>'+
                    '<button type="button" id="run-import-file'+idFile+'" onclick="importFile(\'import-module-' +idFile+ '\', \'markdown-idFile'+idFile+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    
                    // '<button type="button" id="explore-import-db'+idFile+'" class="trigger-explore" data-toggle="tooltip" title="Explore table"><i class="fas fa-table"></i></button>'+
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
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="progress-bar' + idFile + '" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                } else {
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn column-fl" id="import-module-' +idFile+ '"><h4>[<span id="statementId-' + idFile + '"></span>] Import Files</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-idFile'+idFile+'"></textarea></div><div class="mdepreview"></div></div>'+
                    
                    '<div class="inpt-grp long-width"><label>Database Type</label><input class="inpt-file" id="file-id-'+idFile+'" type="file" name="myFile"></div>'+
                    '<div class="inpt-grp thre-width"><label>Delimiter</label><select id="delimiter-'+idFile+'"><option value=","> , </option><option value="|"> | </option><option value=";"> ; </option></option><option value="\\"> \\ </option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Header</label><select id="header-'+idFile+'"><option value="true"> true </option><option value="false"> false </option></select></div>'+
                    '<div class="function-call" style="display:none;">importFile,import-module-' +idFile+ ',markdown-idFile'+idFile+'</div>'+
                    '<button type="button" id="run-import-file'+idFile+'" onclick="importFile(\'import-module-' +idFile+ '\', \'markdown-idFile'+idFile+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="explore-import-db'+idFile+'" class="trigger-explore"  data-toggle="tooltip" title="Explore table"><i class="fas fa-table"></i></button>'+
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
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }

                var simplemdefile = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-idFile"+idFile),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("import-module-"+idFile);
            });


            //data merge
            $("#data-merge").click(function(){
                // var idMerge = $('.column-data-merge').length + 1;
                var idMerge = getActiveId("column-data-merge");
                showTables('merge-module-' + idMerge);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {

                    // onclick="showTables(\'data-merge-module-' + idMerge + '\')" 
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn column-data-merge"  id="merge-module-'+idMerge+'"><h4>[<span id="statementId-' + idMerge + '"></span>] Data Merge</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-idMerge'+idMerge+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'merge-module-'+idMerge+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>Data Table 1</label><select onchange="describeTable(\'merge-module-' + idMerge + '\',\'from-merge-' + idMerge + '\',\'from-key-' + idMerge + '\',true)" class="from-merge-'+idMerge+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Key Table 1</label><select class="from-key-'+idMerge+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Join Type</label><select class="method-merge-'+idMerge+'"><option value="inner join">Inner Join</option><option value="left join">Left Join</option><option value="right join">Right Join</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table 2</label><select onchange="describeTable(\'merge-module-' + idMerge + '\',\'to-merge-' + idMerge + '\',\'to-key-' + idMerge + '\',true)" class="to-merge-'+idMerge+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Key Table 2</label><select class="to-key-'+idMerge+'"></select></div>'+
                    '<div class="function-call" style="display:none;">mergeTables,merge-module-' +idMerge+ ',markdown-idMerge'+idMerge+'</div>'+
                    '<button type="button" onclick="mergeTables(\'merge-module-' +idMerge+ '\', \'markdown-idMerge'+idMerge+'\')"  id="run-data-merge'+idMerge+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+idMerge+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                } else {
                    var idMerge = $('.column-data-merge').length + 1;
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn column-data-merge"  id="merge-module-'+idMerge+'"><h4>[<span id="statementId-' + idMerge + '"></span>] Data Merge</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-idMerge'+idMerge+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'merge-module-'+idMerge+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>Data Table 1</label><select onchange="describeTable(\'merge-module-' + idMerge + '\',\'from-merge-' + idMerge + '\',\'from-key-' + idMerge + '\',true)" class="from-merge-'+idMerge+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Key Table 1</label><select class="from-key-'+idMerge+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Join Type</label><select class="method-merge-'+idMerge+'"><option value="inner join">Inner Join</option><option value="left join">Left Join</option><option value="right join">Right Join</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table 2</label><select onchange="describeTable(\'merge-module-' + idMerge + '\',\'to-merge-' + idMerge + '\',\'to-key-' + idMerge + '\',true)" class="to-merge-'+idMerge+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Key Table 2</label><select class="to-key-'+idMerge+'"></select></div>'+
                    '<div class="function-call" style="display:none;">mergeTables,merge-module-' +idMerge+ ',markdown-idMerge'+idMerge+'</div>'+
                    '<button type="button" onclick="mergeTables(\'merge-module-' +idMerge+ '\', \'markdown-idMerge'+idMerge+'\')"  id="run-data-merge'+idMerge+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+idMerge+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
    
                }

                var simplemdefile = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-idMerge"+idMerge),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("merge-module-"+idMerge);
            });

            //select-col
            $("#select-col").click(function(e){
                //loading("3");
                // var selectColId = $('.selectcol').length + 1;
                var selectColId = getActiveId("selectcol");
                showTables('selectcol-module-' + selectColId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn selectcol" id="selectcol-module-' +selectColId+ '"><h4>[<span id="statementId-' + selectColId + '"></span>] Select Column</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-idSelcol'+selectColId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-idSelcol'+selectColId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'selectcol-module-' + selectColId + '\',\'from-selectcol-' + selectColId + '\',\'from-key-' + selectColId + '\',false)" class="from-selectcol-'+selectColId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'selectcol-module-'+selectColId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="no-selected-box">'+
                    '</div>'+
                    '<div class="function-call" style="display:none;">selectcol,selectcol-module-' +selectColId+ ',markdown-idSelcol'+selectColId+'</div>'+
                    '<button type="button" id="run-selectcol'+selectColId+'" onclick="selectcol(\'selectcol-module-' +selectColId+ '\',\'markdown-idSelcol'+selectColId+'\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+selectColId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                } else {
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn selectcol" id="selectcol-module-' +selectColId+ '"><h4>[<span id="statementId-' + selectColId + '"></span>] Select Column</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-idSelcol'+selectColId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'selectcol-module-' + selectColId + '\',\'from-selectcol-' + selectColId + '\',\'from-key-' + selectColId + '\',false)" class="from-selectcol-'+selectColId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'selectcol-module-'+selectColId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="no-selected-box">'+
                        '</div>'+
                        '<div class="function-call" style="display:none;">selectcol,selectcol-module-' +selectColId+ ',markdown-idSelcol'+selectColId+'</div>'+
                        '<button type="button" id="run-selectcol'+selectColId+'" onclick="selectcol(\'selectcol-module-' +selectColId+ '\', \'markdown-idSelcol'+selectColId+'\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+selectColId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }

                var simplemdefile = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-idSelcol"+selectColId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("selectcol-module-"+selectColId);
            });


            //Select-row
            $("#select-row").click(function(){
                // var idSelrow = $('.column-select-row').length + 1;
                var idSelrow = getActiveId("column-select-row");
                showTables('row-module-' + idSelrow);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn column-select-row" id="row-module-'+idSelrow+'"><h4>[<span id="statementId-' + idSelrow + '"></span>] Select Row</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-idSelrow'+idSelrow+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'row-module-' + idSelrow + '\',\'from-row-' + idSelrow + '\',\'from-key-' + idSelrow + '\',true)" class="from-row-'+idSelrow+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'row-module-'+idSelrow+'\')">Refresh Datatable</button></div><br/>'+
                    // '<div class="inpt-grp thre-width"><label>Row Name</label><input type="text" id="row-name'+idSelrow+'" class="ip1"></div>'+
                    '<div class="inpt-grp thre-width"><label>Row Name</label><select id="name-row'+idSelrow+'" class="from-key-'+idSelrow+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Conditon</label><select id="method-row'+idSelrow+'"><option value="="> = </option><option value="<"> < </option><option value=">"> > </option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Value</label><input type="text" id="value-row'+idSelrow+'" class="ip1"></div>'+
                    '<div class="function-call" style="display:none;">selectRow,row-module-' +idSelrow+ ',markdown-idSelrow'+idSelrow+'</div>'+
                    '<button type="button" id="run-select-row'+idSelrow+'" onclick="selectRow(\'row-module-' +idSelrow+ '\',\'markdown-idSelrow' +idSelrow+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+idSelrow+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="progress-bar' + idSelrow + '" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                } else {
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn column-select-row" id="row-module-'+idSelrow+'"><h4>[<span id="statementId-' + idSelrow + '"></span>] Select Row</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-idSelrow'+idSelrow+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'row-module-' + idSelrow + '\',\'from-row-' + idSelrow + '\',\'from-key-' + idSelrow + '\',true)" class="from-row-'+idSelrow+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'row-module-'+idSelrow+'\')">Refresh Datatable</button></div><br/>'+
                        // '<div class="inpt-grp thre-width"><label>Row Name</label><input type="text" id="row-name'+idSelrow+'" class="ip1"></div>'+
                        '<div class="inpt-grp thre-width"><label>Row Name</label><select id="name-row'+idSelrow+'" class="from-key-'+idSelrow+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Conditon</label><select id="method-row'+idSelrow+'"><option value="="> = </option><option value="<"> < </option><option value=">"> > </option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Value</label><input type="text" id="value-row'+idSelrow+'" class="ip1"></div>'+
                        '<div class="function-call" style="display:none;">selectRow,row-module-' +idSelrow+ ',markdown-idSelrow'+idSelrow+'</div>'+
                        '<button type="button" id="run-select-row'+idSelrow+'" onclick="selectRow(\'row-module-' +idSelrow+ '\',\'markdown-idSelrow' +idSelrow+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+

                        '<button type="button" id="del'+idSelrow+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="progress-bar' + idSelrow + '" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                var simplemdefile = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-idSelrow"+idSelrow),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("row-module-"+idSelrow);
            });

            // custom-query
            $("#data-query").click(function(e){
                
                //loading cell time//
                setTimeout(function(){
                    $('.loading-cell').fadeOut();
                }, 1000);

                // var queryid = $('.column-query').length + 1 ;
                var queryid = getActiveId("column-query");
                var totalcolumn = $(".panel-coloumn").length + 1;
                var random_out_data = "out_data_"+random_string(10).toLowerCase();
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn column-query" id="customQuery-module-' +queryid+ '"><h4>[<span id="statementId-' + queryid + '"></span>] Custom Script</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-queryid'+queryid+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-queryid'+queryid+'"></textarea></div><div class="mdepreview"></div></div>'+
                    // '<div class="inpt-grp thre-width"><label>Select Type</label><select class="from-merge-'+queryid+'"><option value="temp">Temporary</option><option value="Persist">Persist</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Output Dataframe Name</label><input type="text" id="dataframe-name'+queryid+'" class="ip1" value="'+random_out_data+'" readonly></div>'+
                    '</br>'+
                    '<div class="inpt-grp full-w-label parent-query"><label>Custom Query</label><div id="myeditor" class="editor query-editor custom-'+queryid+'">import pandas as pd, io&#13;&#10;str_io = io.StringIO()&#13;&#10;&#13;&#10;"""&#13;&#10;Write your custom codes here...&#13;&#10;&#13;&#10;your_data_frame = ...&#13;&#10;"""&#13;&#10;&#13;&#10;'+random_out_data+' = your_data_frame&#13;&#10;'+random_out_data+'.createOrReplaceTempView("'+random_out_data+'")&#13;&#10;df_ = '+random_out_data+'.limit(1000).toPandas()&#13;&#10;df_.to_html(buf=str_io, classes="table dataframe", index=False)&#13;&#10;html_str = str_io.getvalue()&#13;&#10;print("<b>Dataframe name : '+random_out_data+'</b><br>")&#13;&#10;print("<br><b>Number of rows: </b>")&#13;&#10;print( '+random_out_data+'.count())&#13;&#10;print(html_str)&#13;&#10;</div><div class="output-save" style="display:none"></div></div>'+   
                    '</br>'+
                    '<div class="function-call" style="display:none;">customQuery,customQuery-module-' +queryid+ ',markdown-queryid'+queryid+'</div>'+
                    '<button type="button" id="run-select-row'+queryid+'" onclick="temporaryCustomQuery(\'customQuery-module-' +queryid+ '\', \'markdown-queryid'+queryid+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+queryid+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="progress-bar' + queryid + '" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn column-query" id="customQuery-module-' +queryid+ '"><h4>[<span id="statementId-' + queryid + '"></span>] Custom Script</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-queryid'+queryid+'"></textarea></div><div class="mdepreview"></div></div>'+

                    // '<div class="inpt-grp thre-width"><label>Select Type</label><select class="from-merge-'+queryid+'"><option value="temp">Temporary</option><option value="Persist">Persist</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Output Dataframe Name</label><input type="text" id="dataframe-name'+queryid+'" class="ip1" value="'+random_out_data+'" readonly></div>'+
                    '</br>'+
                    '<div class="inpt-grp full-w-label parent-query"><label>Custom Query</label><div id="myeditor" class="editor query-editor custom-'+queryid+'">import pandas as pd, io&#13;&#10;str_io = io.StringIO()&#13;&#10;&#13;&#10;"""&#13;&#10;Write your custom codes here...&#13;&#10;&#13;&#10;your_data_frame = ...&#13;&#10;"""&#13;&#10;&#13;&#10;'+random_out_data+' = your_data_frame&#13;&#10;'+random_out_data+'.createOrReplaceTempView("'+random_out_data+'")&#13;&#10;df_ = '+random_out_data+'.limit(1000).toPandas()&#13;&#10;df_.to_html(buf=str_io, classes="table dataframe", index=False)&#13;&#10;html_str = str_io.getvalue()&#13;&#10;print("<b>Dataframe name : '+random_out_data+'</b><br>")&#13;&#10;print("<br><b>Number of rows: </b>")&#13;&#10;print( '+random_out_data+'.count())&#13;&#10;print(html_str)&#13;&#10;</div><div class="output-save" style="display:none"></div></div>'+   
                    '</br>'+ 

                    // '<button type="button" id="run-data-query'+queryid+'" class="run" onclick="customQuery(\'customQuery-module-' +queryid+ '\')"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="del'+queryid+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    // '<div class="stat-progress" style="display:none;">'+
                    // '<span class="stat">Progress</span>'+
                    // '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    // '</div>'+
                    // '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                    '<div class="function-call" style="display:none;">customQuery,customQuery-module-' +queryid+ ',markdown-queryid'+queryid+'</div>'+
                    '<button type="button" id="run-select-row'+queryid+'" onclick="temporaryCustomQuery(\'customQuery-module-' +queryid+ '\', \'markdown-queryid'+queryid+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+queryid+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="progress-bar' + queryid + '" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }


                var simplemde = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-queryid" + queryid),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });

                    
                    $('.custom-'+queryid).each(function( index ) {
                        editor = ace.edit(this);
                    });
                    editor.setOptions({
                    mode: 'ace/mode/python', // string: path to language mode 
                    maxLines: 100
                });
                activeColumn("customQuery-module-"+queryid);
            });

             //  bigquery
            $("#bigquery").click(function(e){
                //loading cell time//
                setTimeout(function(){
                    $('.loading-cell').fadeOut();
                }, 1000);

                var bigqueryId = $('.bigquery').length + 1;
                var totalcolumn = $(".panel-coloumn").length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn bigquery" id="bigquery-module-' +bigqueryId+ '"><h4>[<span id="statementId-' + bigqueryId + '"></span>] Big Query</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<textarea id="markdown-bigqueryId'+bigqueryId+'"></textarea>'+
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-bigqueryId'+bigqueryId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp"><label>Project API Key</label><input type="file" class="custom-file-input" id="customFile' +bigqueryId+'"></div> '+
                        '<div class="inpt-grp"><label>Dataset Name</label><input type="text" id="dataset-bigquery' +bigqueryId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>Database</label><input type="text" id="database-bigquery' +bigqueryId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>Table Name</label><input type="text" id="tablename-bigquery-'+bigqueryId+'" class="ip1"></div> '+
                        '<div class="inpt-grp full-w-label"><label>Custom Query</label><textarea id="custom-query'+bigqueryId+'" class="txt-area"></textarea></div>'+
                        '<button type="button" id="run-bigquery'+bigqueryId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        '<button type="button" id="del'+bigqueryId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-column-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn bigquery" id="bigquery-module-' +bigqueryId+ '"><h4>[<span id="statementId-' + bigqueryId + '"></span>] Big Query</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-bigqueryId'+bigqueryId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp"><label>Project API Key</label><input type="file" class="custom-file-input" id="customFile' +bigqueryId+'"></div> '+
                    '<div class="inpt-grp"><label>Dataset Name</label><input type="text" id="dataset-bigquery' +bigqueryId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Database</label><input type="text" id="database-bigquery' +bigqueryId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Table Name</label><input type="text" id="tablename-bigquery-'+bigqueryId+'" class="ip1"></div> '+
                    '<div class="inpt-grp full-w-label"><label>Custom Query</label><textarea id="custom-query'+bigqueryId+'" class="txt-area"></textarea></div>'+
                    '<button type="button" id="run-bigquery'+bigqueryId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="del'+bigqueryId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-column-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                var simplemdebigqueryId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-bigqueryId"+bigqueryId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
            });

            // Convert
            $("#convert").click(function(e){

                //loading cell time//
                //setTimeout(function(){
                //    $('.loading-cell').fadeOut();
                //}, 1000);

                // var convertid = $('.column-convert').length + 1 ;
                var convertid = getActiveId("column-convert");
                var totalcolumn = $(".panel-coloumn").length + 1;
                showTables('convert-module-' + convertid);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn column-convert" id="convert-module-' +convertid+ '"><h4>[<span id="statementId-' + convertid + '"></span>] Data Type Conversion</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<textarea id="markdown-convertid'+convertid+'"></textarea>'+
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-convertid'+convertid+'"></textarea></div><div class="mdepreview"></div></div>'+
                        // '<div class="inpt-grp thre-width"><label>Select Dataframe</label><select class="convert-dataframe-'+convertid+'"><option value="temp">Temporary</option><option value="Persist">Persist</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'convert-module-' + convertid + '\',\'from-convert-' + convertid + '\',\'from-key-' + convertid + '\',false)" class="from-convert-'+convertid+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'convert-module-'+convertid+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="table-responsive" id="table-convert"></div>'+
                        '</br>'+
                        '<div class="function-call" style="display:none;">convertTable,convert-module-' +convertid+ ',markdown-convertid'+convertid+'</div>'+
                        '<button type="button" id="run-data-query'+convertid+'" class="run" onclick="convertTable(\'convert-module-' +convertid+ '\', \'markdown-convertid'+convertid+'\')"><i class="fas fa-play" title="Run Process"></i></button>'+
                        
                        '<button type="button" id="del'+convertid+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="progress-bar' + convertid + '" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn column-convert" id="convert-module-' +convertid+ '"><h4>[<span id="statementId-' + convertid + '"></span>] Data Type Conversion</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<textarea id="markdown-convertid'+convertid+'"></textarea>'+
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-convertid'+convertid+'"></textarea></div><div class="mdepreview"></div></div>'+
                        // '<div class="inpt-grp thre-width"><label>Select Dataframe</label><select class="convert-dataframe-'+convertid+'"><option value="temp">Temporary</option><option value="Persist">Persist</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'convert-module-' + convertid + '\',\'from-convert-' + convertid + '\',\'from-key-' + convertid + '\',false)" class="from-convert-'+convertid+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'convert-module-'+convertid+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="table-responsive" id="table-convert"></div>'+
                        '</br>'+
                        '<div class="function-call" style="display:none;">convertTable,convert-module-' +convertid+ ',markdown-convertid'+convertid+'</div>'+
                        '<button type="button" id="run-data-query'+convertid+'" class="run" onclick="convertTable(\'convert-module-' +convertid+ '\', \'markdown-convertid'+convertid+'\')"><i class="fas fa-play" title="Run Process"></i></button>'+
                        
                        '<button type="button" id="del'+convertid+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="progress-bar' + convertid + '" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }


                var simplemde = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-convertid" + convertid),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });

                activeColumn("convert-module-"+convertid);
            });

             //  hivetable
            $("#hivetable").click(function(e){
                //loading cell time//
               
                // var hivetableId = $('.hivetable').length + 1;
                var hivetableId = getActiveId("hivetable");
                var totalcolumn = $(".panel-coloumn").length + 1;
                showTables('hivetable-module-' + hivetableId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn hivetable" id="hivetable-module-' +hivetableId+ '"><h4>[<span id="statementId-' + hivetableId + '"></span>] Save to Hive table</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<textarea id="markdown-hivetableId'+hivetableId+'"></textarea>'+
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-hivetableId'+hivetableId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table</label><select id="dataframe-hivetable' +hivetableId+'" class="from-hivetable-'+hivetableId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'hivetable-module-'+hivetableId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="function-call" style="display:none;">hivetable,hivetable-db-module-' +hivetableId+ ',markdown-hivetableId'+hivetableId+'</div>'+
                        '<button type="button" id="run-hivetable'+hivetableId+'" onclick="hivetable(\'hivetable-module-' +hivetableId+ '\', \'markdown-hivetableId'+hivetableId+'\')" class="run">Convert</button>'+
                        
                        '<button type="button" id="del'+hivetableId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn hivetable" id="hivetable-module-' +hivetableId+ '"><h4>[<span id="statementId-' + hivetableId + '"></span>] Save to Hive table</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-hivetableId'+hivetableId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table</label><select id="dataframe-hivetable' +hivetableId+'" class="from-hivetable-'+hivetableId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'hivetable-module-'+hivetableId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="function-call" style="display:none;">hivetable,hivetable-db-module-' +hivetableId+ ',markdown-hivetableId'+hivetableId+'</div>'+
                    '<button type="button" id="run-hivetable'+hivetableId+'" onclick="hivetable(\'hivetable-module-' +hivetableId+ '\', \'markdown-hivetableId'+hivetableId+'\')" class="run">Convert</button>'+
                    
                    '<button type="button" id="del'+hivetableId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                var simplemdehivetableId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-hivetableId"+hivetableId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("hivetable-module-"+hivetableId);
            });


            ////////// PREPROCESS ////////

            // Hypothesis Testing
            $("#hypothesistesting").click(function(e){
                // var standarScalerId = $('.scaler').length + 1;
                var hypothesisTestingId = getActiveId("hypothesis");
                showTables('hypothesis-module-' + hypothesisTestingId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn hypothesis" id="hypothesis-module-' +hypothesisTestingId+ '"><h4>[<span id="statementId-' + hypothesisTestingId + '"></span>] Hypothesis Testing</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-standarScalerId'+standarScalerId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-hypothesisTestingId'+hypothesisTestingId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'hypothesis-module-' + hypothesisTestingId + '\',\'from-hypothesis-' + hypothesisTestingId + '\',\'from-key-' + hypothesisTestingId + '\',true)" class="from-hypothesis-'+hypothesisTestingId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'hypothesis-module-'+hypothesisTestingId+'\')">Refresh Datatable</button></div><br/>'+
                    // '<div class="inpt-grp"><label>outputCol</label><input type="text" id="OutputCol-hyphothesis'+hypothesisTestingId+'" class="ip1" value="va_features"></div> '+
                    '<div class="inpt-grp thre-width"><label>OutputCol</label><select id="outputCol-hypothesis'+hypothesisTestingId+'" class="from-key-'+hypothesisTestingId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Labels</label><select id="labels-hypothesis'+hypothesisTestingId+'" class="from-key-'+hypothesisTestingId+'"></select></div>'+
                    // '<div class="no-selected-box">'+
                    // '</div>'+
                    '<div class="function-call" style="display:none;">hypothesistesting,hypothesis-module-' +hypothesisTestingId+ ',markdown-hypothesisTestingId'+hypothesisTestingId+'</div>'+
                    '<button type="button" id="run-hypothesis'+hypothesisTestingId+'" onclick="hypothesis(\'hypothesis-module-' +hypothesisTestingId+ '\', \'markdown-hypothesisTestingId'+hypothesisTestingId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    
                    '<button type="button" id="del'+hypothesisTestingId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn hypothesis" id="hypothesis-module-' +hypothesisTestingId+ '"><h4>[<span id="statementId-' + hypothesisTestingId + '"></span>] Hypothesis Testing</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-standarScalerId'+standarScalerId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-hypothesisTestingId'+hypothesisTestingId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'hypothesis-module-' + hypothesisTestingId + '\',\'from-hypothesis-' + hypothesisTestingId + '\',\'from-key-' + hypothesisTestingId + '\',true)" class="from-hypothesis-'+hypothesisTestingId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'hypothesis-module-'+hypothesisTestingId+'\')">Refresh Datatable</button></div><br/>'+
                    // '<div class="inpt-grp"><label>outputCol</label><input type="text" id="OutputCol-hyphothesis'+hypothesisTestingId+'" class="ip1" value="va_features"></div> '+
                    '<div class="inpt-grp thre-width"><label>OutputCol</label><select id="outputCol-hypothesis'+hypothesisTestingId+'" class="from-key-'+hypothesisTestingId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Labels</label><select id="labels-hypothesis'+hypothesisTestingId+'" class="from-key-'+hypothesisTestingId+'"></select></div>'+
                    // '<div class="no-selected-box">'+
                    // '</div>'+
                    '<div class="function-call" style="display:none;">hypothesistesting,hypothesis-module-' +hypothesisTestingId+ ',markdown-hypothesisTestingId'+hypothesisTestingId+'</div>'+
                    '<button type="button" id="run-hypothesis'+hypothesisTestingId+'" onclick="hypothesis(\'hypothesis-module-' +hypothesisTestingId+ '\', \'markdown-hypothesisTestingId'+hypothesisTestingId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    
                    '<button type="button" id="del'+hypothesisTestingId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }

                var simplemdefile = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-hypothesisTestingId"+hypothesisTestingId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("hypothesis-module-"+hypothesisTestingId);
            });

            // Standard Scaler
            $("#standardscaler").click(function(e){
                // var standarScalerId = $('.scaler').length + 1;
                var standarScalerId = getActiveId("scaler");
                showTables('scaler-module-' + standarScalerId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn scaler" id="scaler-module-' +standarScalerId+ '"><h4>[<span id="statementId-' + standarScalerId + '"></span>] Standard Scaler</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-standarScalerId'+standarScalerId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-standarScalerId'+standarScalerId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'scaler-module-' + standarScalerId + '\',\'from-scaler-' + standarScalerId + '\',\'from-key-' + standarScalerId + '\', true)" class="from-scaler-'+standarScalerId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'scaler-module-'+standarScalerId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>inputCol </label><select class="from-key-'+standarScalerId+'"></select></div>'+
                    '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol-scaler'+standarScalerId+'" class="ip1" value="scaled"></div> '+
                    '<div class="inpt-grp"><label>withStd</label><input type="text" id="withStd'+standarScalerId+'" class="ip1" value="True"></div> '+
                    '<div class="inpt-grp"><label>withMean</label><input type="text" id="withMean'+standarScalerId+'" class="ip1" value="False"></div> '+
                    '<div class="function-call" style="display:none;">standardscaler,scaler-module-' +standarScalerId+ ',markdown-standarScalerId'+standarScalerId+'</div>'+
                    '<button type="button" id="run-scaler'+standarScalerId+'" onclick="standardscaler(\'scaler-module-' +standarScalerId+ '\', \'markdown-standarScalerId'+standarScalerId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    
                    '<button type="button" id="del'+standarScalerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn scaler" id="scaler-module-' +standarScalerId+ '"><h4>[<span id="statementId-' + standarScalerId + '"></span>] Standard Scaler</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-standarScalerId'+standarScalerId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'scaler-module-' + standarScalerId + '\',\'from-scaler-' + standarScalerId + '\',\'from-key-' + standarScalerId + '\', true)" class="from-scaler-'+standarScalerId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'scaler-module-'+standarScalerId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp thre-width"><label>inputCol </label><select class="from-key-'+standarScalerId+'"></select></div>'+
                        '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol-scaler'+standarScalerId+'" class="ip1" value="scaled"></div> '+
                        '<div class="inpt-grp"><label>withStd</label><input type="text" id="withStd'+standarScalerId+'" class="ip1" value="True"></div> '+
                        '<div class="inpt-grp"><label>withMean</label><input type="text" id="withMean'+standarScalerId+'" class="ip1" value="False"></div> '+
                        '<div class="function-call" style="display:none;">standardscaler,scaler-module-' +standarScalerId+ ',markdown-standarScalerId'+standarScalerId+'</div>'+
                        '<button type="button" id="run-scaler'+standarScalerId+'" onclick="standardscaler(\'scaler-module-' +standarScalerId+ '\', \'markdown-standarScalerId'+standarScalerId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        
                        '<button type="button" id="del'+standarScalerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }

                var simplemdefile = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-standarScalerId"+standarScalerId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("scaler-module-"+standarScalerId);
            });

             // MissingVal
            $("#missingval").click(function(e){
                // var missValId = $('.missval').length + 1;
                var missValId = getActiveId("missval");
                showTables('missval-module-' + missValId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn missval" id="missval-module-' +missValId+ '"><h4>[<span id="statementId-' + missValId + '"></span>] Missing Value</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<textarea id="markdown-missValId'+missValId+'"></textarea>'+
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-missValId'+missValId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Source</label><select class="from-missval-'+missValId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'missval-module-'+missValId+'\')">Refresh Datatable</button></div><br/>'+
                        // '<div class="no-selected-box">'+
                        '<div class="inpt-grp thre-width"><label>Action</label><select class="action-db-'+missValId+'" id="missval'+missValId+'"><option selected disable>Select Action</option><option value="remove">Remove</option><option value="average">Average</option><option value="default">Default</option></select></div><br/>'+
                        // '<div class="checkbox-layout-inline"><input id="missval'+missValId+'" class="sel-col-container" type="radio" name="colname'+missValId+'" value="remove"> <label for="missval-1">Remove</label></div>'+
                        // '<div class="checkbox-layout-inline"><input id="missval'+missValId+'" class="sel-col-container" type="radio" name="colname'+missValId+'" value="average"> <label for="missval-2">Average</label></div>'+
                        // '<div class="checkbox-layout-inline"><input id="missval'+missValId+'" class="sel-col-container" type="radio" name="colname'+missValId+'" value="default"> <label for="missval-3">Default</label></div>'+
                        // '</div>'+
                        '<div class="function-call" style="display:none;">missingval,missval-module-' +missValId+ ',markdown-missValId'+missValId+'</div>'+
                        '<button type="button" id="run-missval'+missValId+'" onclick="missingval(\'missval-module-' +missValId+ '\', \'markdown-missValId'+missValId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+missValId+'" class="run" onclick="showTables(\'missval-module-'+missValId+'\')">Refresh Data Table</button>'+
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
                    '<div class="panel-coloumn missval" id="missval-module-' +missValId+ '"><h4>[<span id="statementId-' + missValId + '"></span>] Missing Value</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-missValId'+missValId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select class="from-missval-'+missValId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'missval-module-'+missValId+'\')">Refresh Datatable</button></div><br/>'+
                    // '<div class="no-selected-box">'+
                    '<div class="inpt-grp thre-width"><label>Action</label><select class="action-db-'+missValId+'" id="missval'+missValId+'"><option selected disable>Select Action</option><option value="remove">Remove</option><option value="average">Average</option><option value="default">Default</option></select></div><br/>'+
                    // '<div class="checkbox-layout-inline"><input id="missval'+missValId+'" class="sel-col-container" type="radio" name="colname'+missValId+'" value="remove"> <label for="missval-1">Remove</label></div>'+
                    // '<div class="checkbox-layout-inline"><input id="missval'+missValId+'" class="sel-col-container" type="radio" name="colname'+missValId+'" value="average"> <label for="missval-2">Average</label></div>'+
                    // '<div class="checkbox-layout-inline"><input id="missval'+missValId+'" class="sel-col-container" type="radio" name="colname'+missValId+'" value="default"> <label for="missval-3">Default</label></div>'+
                    // '</div>'+
                    '<div class="function-call" style="display:none;">missingval,missval-module-' +missValId+ ',markdown-missValId'+missValId+'</div>'+
                    '<button type="button" id="run-missval'+missValId+'" onclick="missingval(\'missval-module-' +missValId+ '\', \'markdown-missValId'+missValId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+missValId+'" class="run" onclick="showTables(\'missval-module-'+missValId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+missValId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }

                var simplemdemv = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-missValId"+missValId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("missval-module-"+missValId);
            });

            //  MinMax
            $("#minmax").click(function(e){
                // var minMax = $('.minmax').length + 1;
                var minMax = getActiveId("minmax");
                showTables('minmax-module-' + minMax);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn minmax" id="minmax-module-' +minMax+ '"><h4>[<span id="statementId-' + minMax + '"></span>] MinMax</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-minMax'+minMax+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-minMax'+minMax+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'minmax-module-' + minMax + '\',\'from-minmax-' + minMax + '\',\'from-key-' + minMax + '\',true)" class="from-minmax-'+minMax+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'minmax-module-'+minMax+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>inputCol </label><select class="from-key-'+minMax+'"></select></div>'+
                    '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol-minmax'+minMax+'" class="ip1" value="scaled"></div> '+
                    '<div class="function-call" style="display:none;">minmax,minmax-module-' +minMax+ ',markdown-minMax'+minMax+'</div>'+
                    '<button type="button" id="run-minmax'+minMax+'" onclick="minmax(\'minmax-module-' +minMax+ '\', \'markdown-minMax'+minMax+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+minMax+'" class="run" onclick="showTables(\'minmax-module-'+minMax+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+minMax+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn minmax" id="minmax-module-' +minMax+ '"><h4>[<span id="statementId-' + minMax + '"></span>] MinMax</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-minMax'+minMax+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-minMax'+minMax+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'minmax-module-' + minMax + '\',\'from-minmax-' + minMax + '\',\'from-key-' + minMax + '\',true)" class="from-minmax-'+minMax+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'minmax-module-'+minMax+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>inputCol </label><select class="from-key-'+minMax+'"></select></div>'+
                    '<div class="inpt-grp"><label>OutputCol</label><input type="text" id="outputCol-minmax'+minMax+'" class="ip1" value="scaled"></div> '+
                    '<div class="function-call" style="display:none;">minmax,minmax-module-' +minMax+ ',markdown-minMax'+minMax+'</div>'+
                    '<button type="button" id="run-minmax'+minMax+'" onclick="minmax(\'minmax-module-' +minMax+ '\', \'markdown-minMax'+minMax+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+minMax+'" class="run" onclick="showTables(\'minmax-module-'+minMax+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+minMax+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }
                var simplemdeminmax = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-minMax"+minMax),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("minmax-module-"+minMax);
            });

            //  Bucketizer
            $("#bucketizer").click(function(e){
                // var bucketId = $('.bucket').length + 1;
                var bucketId = getActiveId("bucket");
                showTables('bucket-module-' + bucketId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn bucket" id="bucket-module-' +bucketId+ '"><h4>[<span id="statementId-' + bucketId + '"></span>] Bucketizer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-bucketId'+bucketId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-bucketId'+bucketId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'bucket-module-' + bucketId + '\',\'from-bucket-' + bucketId + '\',\'from-key-' + bucketId + '\',true)" class="from-bucket-'+bucketId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'bucket-module-'+bucketId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp"><label>Split</label><input type="text" id="split-bucket' +bucketId+'" class="ip1" value="0.2, 0.4"></div> '+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+bucketId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-bucket'+bucketId+'" class="ip1" value="buckets"></div> '+
                    '<div class="function-call" style="display:none;">bucketizer,bucket-module-' +bucketId+ ',markdown-bucketId'+bucketId+'</div>'+
                    '<button type="button" id="run-bucket'+bucketId+'" onclick="bucketizer(\'bucket-module-' +bucketId+ '\', \'markdown-bucketId'+bucketId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+bucketId+'" class="run" onclick="showTables(\'bucket-module-'+bucketId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+bucketId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn bucket" id="bucket-module-' +bucketId+ '"><h4>[<span id="statementId-' + bucketId + '"></span>] Bucketizer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-bucketId'+bucketId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'bucket-module-' + bucketId + '\',\'from-bucket-' + bucketId + '\',\'from-key-' + bucketId + '\',true)" class="from-bucket-'+bucketId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'bucket-module-'+bucketId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp"><label>Split</label><input type="text" id="split-bucket' +bucketId+'" class="ip1" value="0.2, 0.4"></div> '+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+bucketId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-bucket'+bucketId+'" class="ip1" value="buckets"></div> '+
                    '<div class="function-call" style="display:none;">bucketizer,bucket-module-' +bucketId+ ',markdown-bucketId'+bucketId+'</div>'+
                    '<button type="button" id="run-bucket'+bucketId+'" onclick="bucketizer(\'bucket-module-' +bucketId+ '\', \'markdown-bucketId'+bucketId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+bucketId+'" class="run" onclick="showTables(\'bucket-module-'+bucketId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+bucketId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }

                 var simplemdebucketId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-bucketId"+bucketId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                 activeColumn("bucket-module-"+bucketId);
            });


            //  vectorassembler
            $("#vectorassembler").click(function(e){
                // var vaId = $('.va').length + 1;
                var vaId = getActiveId("va");
                showTables('va-module-' + vaId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn va" id="va-module-' +vaId+ '"><h4>[<span id="statementId-' + vaId + '"></span>] Vector Assembler</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-vaId'+vaId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-vaId'+vaId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'va-module-' + vaId + '\',\'from-va-' + vaId + '\',\'from-key-' + vaId + '\',false)" class="from-va-'+vaId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'va-module-'+vaId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="OutputCol-va'+vaId+'" class="ip1" value="va_features"></div> '+
                    '<div class="no-selected-box">'+
                    '</div>'+
                    '<div class="function-call" style="display:none;">vectorAssembler,va-module-' +vaId+ ',markdown-vaId'+vaId+'</div>'+
                    '<button type="button" id="run-va'+vaId+'" onclick="vectorAssembler(\'va-module-' +vaId+ '\', \'markdown-vaId'+vaId+'\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+vaId+'" class="run" onclick="showTables(\'va-module-'+vaId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+vaId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn va" id="va-module-' +vaId+ '"><h4>[<span id="statementId-' + vaId + '"></span>] Vector Assembler</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-vaId'+vaId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'va-module-' + vaId + '\',\'from-va-' + vaId + '\',\'from-key-' + vaId + '\',false)" class="from-va-'+vaId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'va-module-'+vaId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="OutputCol-va'+vaId+'" class="ip1" value="va_features"></div> '+
                    '<div class="no-selected-box">'+                   
                    '</div>'+
                    '<div class="function-call" style="display:none;">vectorAssembler,va-module-' +vaId+ ',markdown-vaId'+vaId+'</div>'+
                    '<button type="button" id="run-va'+vaId+'" onclick="vectorAssembler(\'va-module-' +vaId+ '\', \'markdown-vaId'+vaId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+vaId+'" class="run" onclick="showTables(\'va-module-'+vaId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+vaId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                   
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }
                var simplemdevaId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-vaId"+vaId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("va-module-"+vaId);
            });

             //  PCA
             $("#pca").click(function(e){

                // var pcaId = $('.pca').length + 1;
                var pcaId = getActiveId("pca");
                showTables('pca-module-' + pcaId);

                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn pca" id="pca-module-' +pcaId+ '"><h4>[<span id="statementId-' + pcaId + '"></span>] PCA</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<textarea id="markdown-pcaId'+pcaId+'"></textarea>'+
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-pcaId'+pcaId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'pca-module-' + pcaId +  '\',\'from-pca-' + pcaId + '\',\'from-key-' + pcaId + '\', true)"  class="from-pca-'+pcaId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'pca-module-'+pcaId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp"><label>NumOfComponents</label><input type="text" id="num-of-components-' +pcaId+'" class="num-of-components-' +pcaId+'" value="2"></div> '+
                        '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+pcaId+'"></select></div>'+
                        '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-pca' +pcaId+'" class="ip1" value="pca_feature"></div> '+
                        '<div class="function-call" style="display:none;">pca,pca-module-' +pcaId+ ',markdown-pcaId'+pcaId+'</div>'+
                        '<button type="button" id="run-pca'+pcaId+'" onclick="pca(\'pca-module-' +pcaId+ '\', \'markdown-pcaId'+pcaId+'\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+pcaId+'" class="run" onclick="showTables(\'pca-module-'+pcaId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+pcaId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn pca" id="pca-module-' +pcaId+ '"><h4>[<span id="statementId-' + pcaId + '"></span>] PCA</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-pcaId'+pcaId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'pca-module-' + pcaId +  '\',\'from-pca-' + pcaId + '\',\'from-key-' + pcaId + '\', true)" class="from-pca-'+pcaId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'pca-module-'+pcaId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp"><label>NumOfComponents</label><input type="text" id="num-of-components-' +pcaId+'" class="num-of-components-' +pcaId+'" value="2"></div> '+
                        '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+pcaId+'"></select></div>'+
                        '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-pca' +pcaId+'" class="ip1" value="pca_feature"></div> '+
                        '<div class="function-call" style="display:none;">pca,pca-module-' +pcaId+ ',markdown-pcaId'+pcaId+'</div>'+
                        '<button type="button" id="run-pca'+pcaId+'" onclick="pca(\'pca-module-' +pcaId+ '\', \'markdown-pcaId'+pcaId+'\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+pcaId+'" class="run" onclick="showTables(\'pca-module-'+pcaId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+pcaId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                var simplemdepcaId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-pcaId"+pcaId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("pca-module-"+pcaId);
            });

            //  tokenizer
            $("#tokenizer").click(function(e){
                // var tokenizerId = $('.tokenizer').length + 1;
                var tokenizerId = getActiveId("tokenizer");
                showTables('tokenizer-module-' + tokenizerId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn tokenizer" id="tokenizer-module-' +tokenizerId+ '"><h4>[<span id="statementId-' + tokenizerId + '"></span>] Tokenizer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-tokenizerId'+tokenizerId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-tokenizerId'+tokenizerId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'tokenizer-module-' + tokenizerId +  '\',\'from-tokenizer-' + tokenizerId + '\',\'from-key-' + tokenizerId + '\', true)"  class="from-tokenizer-'+tokenizerId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'tokenizer-module-'+tokenizerId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+tokenizerId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-tokenizer'+tokenizerId+'" class="ip1" value="tokenized"></div> '+
                    '<div class="function-call" style="display:none;">tokenizer,tokenizer-module-' +tokenizerId+ ',markdown-tokenizerId'+tokenizerId+'</div>'+
                    '<button type="button" id="run-tokenizer'+tokenizerId+'" onclick="tokenizer(\'tokenizer-module-' +tokenizerId+ '\', \'markdown-tokenizerId'+tokenizerId+'\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+tokenizerId+'" class="run" onclick="showTables(\'tokenizer-module-'+tokenizerId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+tokenizerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn tokenizer" id="tokenizer-module-' +tokenizerId+ '"><h4>[<span id="statementId-' + tokenizerId + '"></span>] Tokenizer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-tokenizerId'+tokenizerId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-tokenizerId'+tokenizerId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'tokenizer-module-' + tokenizerId +  '\',\'from-tokenizer-' + tokenizerId + '\',\'from-key-' + tokenizerId + '\', true)"  class="from-tokenizer-'+tokenizerId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'tokenizer-module-'+tokenizerId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+tokenizerId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-tokenizer'+tokenizerId+'" class="ip1" value="tokenized"></div> '+
                    '<div class="function-call" style="display:none;">tokenizer,tokenizer-module-' +tokenizerId+ ',markdown-tokenizerId'+tokenizerId+'</div>'+
                    '<button type="button" id="run-tokenizer'+tokenizerId+'" onclick="tokenizer(\'tokenizer-module-' +tokenizerId+ '\', \'markdown-tokenizerId'+tokenizerId+'\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+tokenizerId+'" class="run" onclick="showTables(\'tokenizer-module-'+tokenizerId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+tokenizerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }

                var simplemdetokenizerId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-tokenizerId"+tokenizerId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("tokenizer-module-"+tokenizerId);
            });

            //  stopword
            $("#stopword").click(function(e){
                // var stopwordId = $('.stopword').length + 1;
                var stopwordId = getActiveId("stopword");
                showTables('stopword-module-' + stopwordId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn stopword" id="stopword-module-' +stopwordId+ '"><h4>[<span id="statementId-' + stopwordId + '"></span>] StopWordRemover</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-stopword'+stopword+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-stopword'+stopword+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'stopword-module-' + stopwordId +  '\',\'from-stopword-' + stopwordId + '\',\'from-key-' + stopwordId + '\', true)"  class="from-stopword-'+stopwordId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'stopword-module-'+stopwordId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+stopwordId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-stopword'+stopwordId+'" class="ip1" value="stopword_feature"></div> '+
                    '<div class="function-call" style="display:none;">stopword,stopword-module-' +stopwordId+ ',markdown-stopwordId'+stopwordId+'</div>'+
                    '<button type="button" id="run-stopword'+stopwordId+'" onclick="stopword(\'stopword-module-' +stopwordId+ '\', \'markdown-stopwordId'+stopwordId+'\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+stopwordId+'" class="run" onclick="showTables(\'stopword-module-'+stopwordId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+stopwordId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn stopword" id="stopword-module-' +stopwordId+ '"><h4>[<span id="statementId-' + stopwordId + '"></span>] StopWordRemover</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-stopword'+stopword+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-stopword'+stopword+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'stopword-module-' + stopwordId +  '\',\'from-stopword-' + stopwordId + '\',\'from-key-' + stopwordId + '\', true)"  class="from-stopword-'+stopwordId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'stopword-module-'+stopwordId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>InputCol</label><select class="from-key-'+stopwordId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-stopword'+stopwordId+'" class="ip1" value="stopword_feature"></div> '+
                    '<div class="function-call" style="display:none;">stopword,stopword-module-' +stopwordId+ ',markdown-stopwordId'+stopwordId+'</div>'+
                    '<button type="button" id="run-stopword'+stopwordId+'" onclick="stopword(\'stopword-module-' +stopwordId+ '\', \'markdown-stopwordId'+stopwordId+'\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+stopwordId+'" class="run" onclick="showTables(\'stopword-module-'+stopwordId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+stopwordId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                var simplemdestopword = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-stopwordId"+stopwordId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("stopword-module-"+stopwordId);
            });


            //  onehot
            $("#onehot").click(function(e){
                // var onehotId = $('.onehot').length + 1;
                var onehotId = getActiveId("onehot");
                showTables('onehot-module-' + onehotId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn onehot" id="onehot-module-' +onehotId+ '"><h4>[<span id="statementId-' + onehotId + '"></span>] OneHotEncoder</h4><b style="color:red"> Note : Must be String Indexer First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-onehotId'+onehotId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-onehotId'+onehotId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'onehot-module-' + onehotId +  '\',\'from-onehot-' + onehotId + '\',\'from-key-' + onehotId + '\', true)"  class="from-onehot-'+onehotId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'onehot-module-'+onehotId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+onehotId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-onehot'+onehotId+'" class="ip1" value="encoded"></div> '+
                    '<div class="function-call" style="display:none;">onehot,onehot-module-' +onehotId+ ',markdown-onehotId'+onehotId+'</div>'+
                    '<button type="button" id="run-onehot'+onehotId+'" onclick="onehot(\'onehot-module-' +onehotId+ '\', \'markdown-onehotId'+onehotId+'\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+onehotId+'" class="run" onclick="showTables(\'onehot-module-'+onehotId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+onehotId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn onehot" id="onehot-module-' +onehotId+ '"><h4>[<span id="statementId-' + onehotId + '"></span>] OneHotEncoder</h4><b style="color:red"> Note : Must be String Indexer First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-onehotId'+onehotId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'onehot-module-' + onehotId +  '\',\'from-onehot-' + onehotId + '\',\'from-key-' + onehotId + '\', true)"  class="from-onehot-'+onehotId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'onehot-module-'+onehotId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+onehotId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-onehot'+onehotId+'" class="ip1" value="encoded"></div> '+
                    '<div class="function-call" style="display:none;">onehot,onehot-module-' +onehotId+ ',markdown-onehotId'+onehotId+'</div>'+
                    '<button type="button" id="run-onehot'+onehotId+'" onclick="onehot(\'onehot-module-' +onehotId+ '\', \'markdown-onehotId'+onehotId+'\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+onehotId+'" class="run" onclick="showTables(\'onehot-module-'+onehotId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+onehotId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }

                var simplemdeonehotId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-onehotId"+onehotId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("onehot-module-"+onehotId);
            });

            //  normalizer
            $("#normalizer").click(function(e){
                // var normalizerId = $('.normalizer').length + 1;
                var normalizerId = getActiveId("normalizer");
                showTables('normalizer-module-' + normalizerId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn normalizer" id="normalizer-module-' +normalizerId+ '"><h4>[<span id="statementId-' + normalizerId + '"></span>] Normalizer</h4><b style="color:red"> Note : Must be Vector Assembler First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    // //loading-bar//
                    // '<textarea id="markdown-normalizerId'+normalizerId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-normalizerId'+normalizerId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'normalizer-module-' + normalizerId + '\',\'from-normalizer-' + normalizerId + '\',\'from-key-' + normalizerId + '\', true)" class="from-normalizer-'+normalizerId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'normalizer-module-'+normalizerId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+normalizerId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-normalizer'+normalizerId+'" class="ip1" value="normalized"></div> '+
                    '<div class="inpt-grp"><label>P</label><input type="text" id="p-normalizer'+normalizerId+'" class="ip1" value="2"></div> '+
                    '<div class="function-call" style="display:none;">normalizer,normalizer-module-' +normalizerId+ ',markdown-normalizerId'+normalizerId+'</div>'+
                    '<button type="button" id="run-normalizer'+normalizerId+'" onclick="normalizer(\'normalizer-module-' +normalizerId+ '\', \'markdown-normalizerId'+normalizerId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+normalizerId+'" class="run" onclick="showTables(\'normalizer-module-'+normalizerId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+normalizerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn normalizer" id="normalizer-module-' +normalizerId+ '"><h4>[<span id="statementId-' + normalizerId + '"></span>] Normalizer</h4><b style="color:red"> Note : Must be Vector Assembler First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-normalizerId'+normalizerId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'normalizer-module-' + normalizerId + '\',\'from-normalizer-' + normalizerId + '\',\'from-key-' + normalizerId + '\', true)" class="from-normalizer-'+normalizerId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'normalizer-module-'+normalizerId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+normalizerId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-normalizer'+normalizerId+'" class="ip1" value="normalized"></div> '+
                    '<div class="inpt-grp"><label>P</label><input type="text" id="p-normalizer'+normalizerId+'" class="ip1" value="2"></div> '+
                    '<div class="function-call" style="display:none;">normalizer,normalizer-module-' +normalizerId+ ',markdown-normalizerId'+normalizerId+'</div>'+
                    '<button type="button" id="run-normalizer'+normalizerId+'" onclick="normalizer(\'normalizer-module-' +normalizerId+ '\', \'markdown-normalizerId'+normalizerId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+normalizerId+'" class="run" onclick="showTables(\'normalizer-module-'+normalizerId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+normalizerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                var simplemdenormalizerId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-normalizerId"+normalizerId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("normalizer-module-"+normalizerId);
            });
            
            //  Random Split
            $("#randomsplit").click(function(e){
                var totalcolumn = $(".panel-coloumn").length + 1;
                var randomsplitId = $('.va').length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn va" id="random-split-module-' +randomsplitId+ '"><h4>[<span id="statementId-' + randomsplitId + '"></span>] Random Split</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-randomsplitId'+randomsplitId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-randomsplitId'+randomsplitId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp"><label>Data Source</label><select id="datasource-random-split' +randomsplitId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp"><label>Train</label><input type="text" id="train-random-split' +randomsplitId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Test</label><input type="text" id="test-random-split'+randomsplitId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>Seed</label><input type="text" id="seed-random-split' +randomsplitId+'" class="ip1"></div> '+
                    '<div class="inpt-grp"><label>output</label><input type="text" id="output-random-split'+randomsplitId+'" class="ip1"></div> '+
                    '<button type="button" id="run-random-split'+randomsplitId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+randomsplitId+'" class="run" >Refresh Data Table</button>'+
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
                        '<div class="panel-coloumn va" id="random-split-module-' +randomsplitId+ '"><h4>[<span id="statementId-' + randomsplitId + '"></span>] Random Split</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-randomsplitId'+randomsplitId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp"><label>Data Source</label><select id="datasource-random-split' +randomsplitId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>Train</label><input type="text" id="train-random-split' +randomsplitId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>Test</label><input type="text" id="test-random-split'+randomsplitId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>Seed</label><input type="text" id="seed-random-split' +randomsplitId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>output</label><input type="text" id="output-random-split'+randomsplitId+'" class="ip1"></div> '+
                        '<button type="button" id="run-random-split'+randomsplitId+'" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+randomsplitId+'" class="run">Refresh Data Table</button>'+
                        '<button type="button" id="del'+randomsplitId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-random-split-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }
                var simplemderandomsplitId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-randomsplitId"+randomsplitId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("random-split-module-"+randomsplitId);
            });
            
            $("#stringindexer").click(function(e){
                var totalcolumn = $(".panel-coloumn").length + 1;
                // var stringindexerId = $('.stringindexer').length + 1;
                var stringindexerId = getActiveId("stringindexer");
                showTables('stringindexer-module-' + stringindexerId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn stringindexer" id="stringindexer-module-' +stringindexerId+ '"><h4>[<span id="statementId-' + stringindexerId + '"></span>] String Indexer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-stringindexerId'+stringindexerId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-stringindexerId'+stringindexerId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'stringindexer-module-' + stringindexerId + '\',\'from-stringindexer-' + stringindexerId + '\',\'from-key-' + stringindexerId + '\', false)" class="from-stringindexer-'+stringindexerId+'"></select></div>'+
                    //'<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+stringindexerId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'stringindexer-module-'+stringindexerId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="no-selected-box">'+
                    '</div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-stringindexer'+stringindexerId+'" class="ip1" value="indexed"></div> '+
                    // '<div class="inpt-grp"><label>handleInvalid</label><input type="text" id="handleInvalid-stringindexer' +stringindexerId+'" class="ip1" value="error"></div> '+
                    // '<div class="inpt-grp"><label>stringOrderType</label><input type="text" id="stringOrderType-stringindexer'+stringindexerId+'" class="ip1" value="frequencyDesc"></div> '+
                    '<div class="function-call" style="display:none;">stringindexer,stringindexer-module-' +stringindexerId+ ',markdown-stringindexerId'+stringindexerId+'</div>'+
                    '<button type="button" id="run-stringindexer'+stringindexerId+'" onclick="stringindexer(\'stringindexer-module-' +stringindexerId+ '\', \'markdown-stringindexerId'+stringindexerId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+stringindexerId+'" class="run" onclick="showTables(\'stringindexer-module-'+stringindexerId+'\')">Refresh Data Table</button>'+
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
                        '<div class="panel-coloumn stringindexer" id="stringindexer-module-' +stringindexerId+ '"><h4>[<span id="statementId-' + stringindexerId + '"></span>] String Indexer</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-stringindexerId'+stringindexerId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'stringindexer-module-' + stringindexerId + '\',\'from-stringindexer-' + stringindexerId + '\',\'from-key-' + stringindexerId + '\', false)" class="from-stringindexer-'+stringindexerId+'"></select></div>'+
                        //'<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+stringindexerId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'stringindexer-module-'+stringindexerId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="no-selected-box">'+
                        '</div>'+
                        '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-stringindexer'+stringindexerId+'" class="ip1" value="indexed"></div> '+
                        // '<div class="inpt-grp"><label>handleInvalid</label><input type="text" id="handleInvalid-stringindexer' +stringindexerId+'" class="ip1" value="error"></div> '+
                        // '<div class="inpt-grp"><label>stringOrderType</label><input type="text" id="stringOrderType-stringindexer'+stringindexerId+'" class="ip1" value="frequencyDesc"></div> '+
                        '<div class="function-call" style="display:none;">stringindexer,stringindexer-module-' +stringindexerId+ ',markdown-stringindexerId'+stringindexerId+'</div>'+
                        '<button type="button" id="run-stringindexer'+stringindexerId+'" onclick="stringindexer(\'stringindexer-module-' +stringindexerId+ '\', \'markdown-stringindexerId'+stringindexerId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+stringindexerId+'" class="run" onclick="showTables(\'stringindexer-module-'+stringindexerId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+stringindexerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-stringindexer-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }
                var simplemdestringindexerId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-stringindexerId"+stringindexerId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("stringindexer-module-"+stringindexerId);
            });
            // Label Indexer
            $("#labelindexer").click(function(e){
                loading("3");

                var totalcolumn = $(".panel-coloumn").length + 1;
                // var labelindexerId = $('.labelindexer').length + 1;
                var labelindexerId = getActiveId("labelindexer");
                showTables('labelindexer-module-' + labelindexerId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn labelindexer" id="labelindexer-module-' +labelindexerId+ '"><h4>[<span id="statementId-' + labelindexerId + '"></span>] Label Indexer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-labelindexerId'+labelindexerId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-labelindexerId'+labelindexerId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'labelindexer-module-' + labelindexerId + '\',\'from-labelindexer-' + labelindexerId + '\',\'from-key-' + labelindexerId + '\', true)" class="from-labelindexer-'+labelindexerId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'labelindexer-module-'+labelindexerId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+labelindexerId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-labelindexer'+labelindexerId+'" class="ip1" value="indexed"></div> '+
                    '<div class="inpt-grp"><label>handleInvalid</label><input type="text" id="handleInvalid-labelindexer' +labelindexerId+'" class="ip1" value="error"></div> '+
                    '<div class="inpt-grp"><label>stringOrderType</label><input type="text" id="stringOrderType-labelindexer'+labelindexerId+'" class="ip1" value="frequencyDesc"></div> '+
                    '<div class="function-call" style="display:none;">labelindexer,labelindexer-module-' +labelindexerId+ ',markdown-labelindexerId'+labelindexerId+'</div>'+
                    '<button type="button" id="run-labelindexer'+labelindexerId+'" onclick="labelindexer(\'labelindexer-module-' +labelindexerId+ '\', \'markdown-labelindexerId'+labelindexerId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+labelindexerId+'" class="run" onclick="showTables(\'labelindexer-module-'+labelindexerId+'\')">Refresh Data Table</button>'+
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
                        '<div class="panel-coloumn labelindexer" id="labelindexer-module-' +labelindexerId+ '"><h4>[<span id="statementId-' + labelindexerId + '"></span>] Label Indexer</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-labelindexerId'+labelindexerId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'labelindexer-module-' + labelindexerId + '\',\'from-labelindexer-' + labelindexerId + '\',\'from-key-' + labelindexerId + '\', true)" class="from-labelindexer-'+labelindexerId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'labelindexer-module-'+labelindexerId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+labelindexerId+'"></select></div>'+
                        '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-labelindexer'+labelindexerId+'" class="ip1" value="indexed"></div> '+
                        '<div class="inpt-grp"><label>handleInvalid</label><input type="text" id="handleInvalid-labelindexer' +labelindexerId+'" class="ip1" value="error"></div> '+
                        '<div class="inpt-grp"><label>stringOrderType</label><input type="text" id="stringOrderType-labelindexer'+labelindexerId+'" class="ip1" value="frequencyDesc"></div> '+
                        '<div class="function-call" style="display:none;">labelindexer,labelindexer-module-' +labelindexerId+ ',markdown-labelindexerId'+labelindexerId+'</div>'+
                        '<button type="button" id="run-labelindexer'+labelindexerId+'" onclick="labelindexer(\'labelindexer-module-' +labelindexerId+ '\', \'markdown-labelindexerId'+labelindexerId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+labelindexerId+'" class="run" onclick="showTables(\'labelindexer-module-'+labelindexerId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+labelindexerId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-labelindexer-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }
                var simplemdelabelindexerId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-labelindexerId"+labelindexerId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("labelindexer-module-"+labelindexerId);
            });
            // Label Converter
            $("#labelconverter").click(function(e){
                loading("3");

                var totalcolumn = $(".panel-coloumn").length + 1;
                // var labelconverterId = $('.labelconverter').length + 1;
                var labelconverterId = getActiveId("labelconverter");
                showTables('labelconverter-module-' + labelconverterId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn labelconverter" id="labelconverter-module-' +labelconverterId+ '"><h4>[<span id="statementId-' + labelconverterId + '"></span>] Label Converter</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-labelconverterId'+labelconverterId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-labelconverterId'+labelconverterId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'labelconverter-module-' + labelconverterId + '\',\'from-labelconverter-' + labelconverterId + '\',\'from-key-' + labelconverterId + '\', true)" class="from-labelconverter-'+labelconverterId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'labelconverter-module-'+labelconverterId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+labelconverterId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-labelconverter'+labelconverterId+'" class="ip1" value="indexed"></div> '+
                    '<div class="inpt-grp"><label>labels</label><input type="text" id="labels-labelconverter'+labelconverterId+'" class="ip1" value="labels"></div> '+
                    '<div class="function-call" style="display:none;">labelconverter,labelconverter-module-' +labelconverterId+ ',markdown-labelconverterId'+labelconverterId+'</div>'+
                    '<button type="button" id="run-labelconverter'+labelconverterId+'" onclick="labelConverter(\'labelconverter-module-' +labelconverterId+ '\', \'markdown-labelconverterId'+labelconverterId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+labelconverterId+'" class="run" onclick="showTables(\'labelconverter-module-'+labelconverterId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+labelconverterId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-labelconverter-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn labelconverter" id="labelconverter-module-' +labelconverterId+ '"><h4>[<span id="statementId-' + labelconverterId + '"></span>] Label Converter</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-labelconverterId'+labelconverterId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'labelconverter-module-' + labelconverterId + '\',\'from-labelconverter-' + labelconverterId + '\',\'from-key-' + labelconverterId + '\', true)" class="from-labelconverter-'+labelconverterId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'labelconverter-module-'+labelconverterId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+labelconverterId+'"></select></div>'+
                        '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-labelconverter'+labelconverterId+'" class="ip1" value="indexed"></div> '+
                        '<div class="inpt-grp"><label>labels</label><input type="text" id="labels-labelconverter'+labelconverterId+'" class="ip1" value="labels"></div> '+
                        '<div class="function-call" style="display:none;">labelconverter,labelconverter-module-' +labelconverterId+ ',markdown-labelconverterId'+labelconverterId+'</div>'+
                        '<button type="button" id="run-labelconverter'+labelconverterId+'" onclick="labelConverter(\'labelconverter-module-' +labelconverterId+ '\', \'markdown-labelconverterId'+labelconverterId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+labelconverterId+'" class="run" onclick="showTables(\'labelconverter-module-'+labelconverterId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+labelconverterId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-labelconverter-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');

                }
                var simplemdelabelconverterId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-labelconverterId"+labelconverterId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("labelconverter-module-"+labelconverterId);
            });
            //HASHING TF
            
            $("#hashingtf").click(function(e){
                // var hashingTfId = $('.hashingTf').length + 1;
                var hashingTfId = getActiveId("hashingTf");
                showTables('hashingTf-module-' + hashingTfId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn hashingTf" id="hashingTf-module-' +hashingTfId+ '"><h4>[<span id="statementId-' + hashingTfId + '"></span>] Hashing TF</h4><b style="color:red"> Note : Must be Tokenizer First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-hashingTfId'+hashingTfId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-hashingTfId'+hashingTfId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'hashingTf-module-' + hashingTfId + '\',\'from-hashingTf-' + hashingTfId + '\',\'from-key-' + hashingTfId + '\', true)" class="from-hashingTf-'+hashingTfId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'hashingTf-module-'+hashingTfId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp"><label>Number of Features</label><input type="text" id="num_of_features-hashingTf'+hashingTfId+'" class="ip1" value="10"></div> '+
                    '<div class="inpt-grp thre-width"><label>inputCol </label><select class="from-key-'+hashingTfId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-hashingTf'+hashingTfId+'" class="ip1" value="tf"></div> '+
                    '<div class="function-call" style="display:none;">hashingTf,hashingTf-module-' +hashingTfId+ ',markdown-hashingTfId'+hashingTfId+'</div>'+
                    '<button type="button" id="run-hashingTf'+hashingTfId+'" onclick="hashingTf(\'hashingTf-module-' +hashingTfId+ '\', \'markdown-hashingTfId'+hashingTfId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+hashingTfId+'" class="run" onclick="showTables(\'hashingTf-module-'+hashingTfId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+hashingTfId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn hashingTf" id="hashingTf-module-' +hashingTfId+ '"><h4>[<span id="statementId-' + hashingTfId + '"></span>] Hashing TF</h4><b style="color:red"> Note : Must be Tokenizer First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-hashingTfId'+hashingTfId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-hashingTfId'+hashingTfId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'hashingTf-module-' + hashingTfId + '\',\'from-hashingTf-' + hashingTfId + '\',\'from-key-' + hashingTfId + '\', true)" class="from-hashingTf-'+hashingTfId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'hashingTf-module-'+hashingTfId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp"><label>Number of Features</label><input type="text" id="num_of_features-hashingTf'+hashingTfId+'" class="ip1" value="10"></div> '+
                    '<div class="inpt-grp thre-width"><label>inputCol </label><select class="from-key-'+hashingTfId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-hashingTf'+hashingTfId+'" class="ip1" value="tf"></div> '+
                    '<div class="function-call" style="display:none;">hashingTf,hashingTf-module-' +hashingTfId+ ',markdown-hashingTfId'+hashingTfId+'</div>'+
                    '<button type="button" id="run-hashingTf'+hashingTfId+'" onclick="hashingTf(\'hashingTf-module-' +hashingTfId+ '\', \'markdown-hashingTfId'+hashingTfId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+hashingTfId+'" class="run" onclick="showTables(\'hashingTf-module-'+hashingTfId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+hashingTfId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');

                }

                var simplemdehashingTfId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-hashingTfId"+hashingTfId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("hashingTf-module-"+hashingTfId);
            });

            //IDF
            
            $("#idf").click(function(e){
                // var idfId = $('.idf').length + 1;
                var idfId = getActiveId("idf");
                showTables('idf-module-' + idfId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn idf" id="idf-module-' +idfId+ '"><h4>[<span id="statementId-' + idfId + '"></span>] IDF</h4><b style="color:red"> Note : Must be Tokenizer First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-idfId'+idfId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-idfId'+idfId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'idf-module-' + idfId + '\',\'from-idf-' + idfId + '\',\'from-key-' + idfId + '\', true)" class="from-idf-'+idfId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'idf-module-'+idfId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp"><label>Minimum Document Frequency</label><input type="text" id="min_doc_freq-idf'+idfId+'" class="ip1" value="3"></div> '+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+idfId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-idf'+idfId+'" class="ip1" value="idf"></div> '+
                    '<div class="function-call" style="display:none;">idf,idf-module-' +idfId+ ',markdown-idfId'+idfId+'</div>'+
                    '<button type="button" id="run-idf'+idfId+'" onclick="idf(\'idf-module-' +idfId+ '\', \'markdown-idfId'+idfId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+idfId+'" class="run" onclick="showTables(\'idf-module-'+idfId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+idfId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn idf" id="idf-module-' +idfId+ '"><h4>[<span id="statementId-' + idfId + '"></span>] IDF</h4><b style="color:red"> Note : Must be Tokenizer First.</b><br>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-idfId'+idfId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-idfId'+idfId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table</label><select onchange="describeTable(\'idf-module-' + idfId + '\',\'from-idf-' + idfId + '\',\'from-key-' + idfId + '\', true)" class="from-idf-'+idfId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'idf-module-'+idfId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp"><label>Minimum Document Frequency</label><input type="text" id="min_doc_freq-idf'+idfId+'" class="ip1" value="3"></div> '+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+idfId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-idf'+idfId+'" class="ip1" value="idf"></div> '+
                    '<div class="function-call" style="display:none;">idf,idf-module-' +idfId+ ',markdown-idfId'+idfId+'</div>'+
                    '<button type="button" id="run-idf'+idfId+'" onclick="idf(\'idf-module-' +idfId+ '\', \'markdown-idfId'+idfId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+idfId+'" class="run" onclick="showTables(\'idf-module-'+idfId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+idfId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');

                }

                var simplemdeidfId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-idfId"+idfId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("idf-module-"+idfId);
            });

            //  Count Vectorizer
            $("#countvectorizer").click(function(e){
                // var cvId = $('.cv').length + 1;
                var cvId = getActiveId("cv");
                showTables('cv-module-' + cvId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn cv" id="cv-module-' +cvId+ '"><h4>[<span id="statementId-' + cvId + '"></span>] Count Vectorizer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-cvId'+cvId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-cvId'+cvId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'cv-module-' + cvId +  '\',\'from-cv-' + cvId + '\',\'from-key-' + cvId + '\', true)"  class="from-cv-'+cvId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'cv-module-'+cvId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+cvId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-cv'+cvId+'" class="ip1" value="count_vectorized"></div> '+
                    '<div class="function-call" style="display:none;">cv,cv-module-' +cvId+ ',markdown-cvId'+cvId+'</div>'+
                    '<button type="button" id="run-cv'+cvId+'" onclick="countvectorizer(\'cv-module-' +cvId+ '\', \'markdown-cvId'+cvId+'\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+cvId+'" class="run" onclick="showTables(\'cv-module-'+cvId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+cvId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn cv" id="cv-module-' +cvId+ '"><h4>[<span id="statementId-' + cvId + '"></span>] Count Vectorizer</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-cvId'+cvId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Source</label><select onchange="describeTable(\'cv-module-' + cvId +  '\',\'from-cv-' + cvId + '\',\'from-key-' + cvId + '\', true)"  class="from-cv-'+cvId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'cv-module-'+cvId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>inputCol</label><select class="from-key-'+cvId+'"></select></div>'+
                    '<div class="inpt-grp"><label>outputCol</label><input type="text" id="outputCol-cv'+cvId+'" class="ip1" value="count_vectorized"></div> '+
                    '<div class="function-call" style="display:none;">cv,cv-module-' +cvId+ ',markdown-cvId'+cvId+'</div>'+
                    '<button type="button" id="run-cv'+cvId+'" onclick="countvectorizer(\'cv-module-' +cvId+ '\', \'markdown-cvId'+cvId+'\')"class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+cvId+'" class="run" onclick="showTables(\'cv-module-'+cvId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+cvId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }

                var simplemdeidfId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-cvId"+cvId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("cv-module-"+cvId);
            });

            //////// MODELING ///////

            //  kmeans
            $("#kmeans").click(function(e){
                // var kmeansId = $('.kmeans').length + 1;
                var kmeansId = getActiveId("kmeans");
                showTables('kmeans-module-' + kmeansId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn kmeans" id="kmeans-module-' +kmeansId+ '"><h4>[<span id="statementId-' + kmeansId + '"></span>] KMeans</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-kmeansId'+kmeansId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-kmeansId'+kmeansId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'kmeans-module-' + kmeansId + '\',\'from-kmeans-' + kmeansId + '\',\'from-key-' + kmeansId + '\',true)" class="from-kmeans-'+kmeansId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'kmeans-module-'+kmeansId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>features</label><select id="featuresCol-kmeans' +kmeansId+'" class="from-key-'+kmeansId+'"></select></div>'+
                    // '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-kmeans' +kmeansId+'" class="from-key-'+kmeansId+'"></select></div>'+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-kmeans'+kmeansId+'" class="ip1" value="prediction"></div> '+
                    // '<div class="inpt-grp"><label>initMode</label><input type="text" id="initMode-kmeans'+kmeansId+'" class="ip1" value="k-means++"></div> '+
                    // '<div class="inpt-grp"><label>initSteps</label><input type="text" id="initSteps-kmeans'+kmeansId+'" class="ip1" value="2"></div> '+
                    // '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-kmeans'+kmeansId+'" class="ip1" value="0.0001"></div> '+
                    '<div class="inpt-grp"><label>K</label><input type="text" id="k-kmeans'+kmeansId+'" class="ip1" value="2"></div> '+
                    // '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-kmeans'+kmeansId+'" class="ip1" value="20"></div> '+
                    '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-kmeans'+kmeansId+'" class="ip1" value="None"></div> '+
                    // '<div class="inpt-grp"><label>distanceMeasure</label><input type="text" id="distanceMeasure-kmeans'+kmeansId+'" class="ip1" value="euclidean"></div> '+
                    // '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-kmeans'+kmeansId+'" class="ip1" value="0.75"></div> '+
                    // '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-kmeans'+kmeansId+'" class="ip1" value="0.25"></div> '+
                    '<div class="function-call" style="display:none;">kmeans,kmeans-module-' +kmeansId+ ',markdown-kmeansId'+kmeansId+'</div>'+
                    '<button type="button" id="run-kmeans'+kmeansId+'"  onclick="kmeans(\'kmeans-module-' +kmeansId+ '\', \'markdown-kmeansId'+kmeansId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+kmeansId+'" class="run" onclick="showTables(\'kmeans-module-'+kmeansId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+kmeansId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn kmeans" id="kmeans-module-' +kmeansId+ '"><h4>[<span id="statementId-' + kmeansId + '"></span>] KMeans</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-kmeansId'+kmeansId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'kmeans-module-' + kmeansId + '\',\'from-kmeans-' + kmeansId + '\',\'from-key-' + kmeansId + '\',true)" class="from-kmeans-'+kmeansId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'kmeans-module-'+kmeansId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp thre-width"><label>featuresCol</label><select id="featuresCol-kmeans' +kmeansId+'" class="from-key-'+kmeansId+'"></select></div>'+
                        // '<div class="inpt-grp thre-width"><label>labelCol</label><select id="labelCol-kmeans' +kmeansId+'" class="from-key-'+kmeansId+'"></select></div>'+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-kmeans'+kmeansId+'" class="ip1" value="prediction"></div> '+
                        // '<div class="inpt-grp"><label>initMode</label><input type="text" id="initMode-kmeans'+kmeansId+'" class="ip1" value="k-means++"></div> '+
                        // '<div class="inpt-grp"><label>initSteps</label><input type="text" id="initSteps-kmeans'+kmeansId+'" class="ip1" value="2"></div> '+
                        // '<div class="inpt-grp"><label>tol</label><input type="text" id="tol-kmeans'+kmeansId+'" class="ip1" value="0.0001"></div> '+
                        '<div class="inpt-grp"><label>K</label><input type="text" id="k-kmeans'+kmeansId+'" class="ip1" value="2"></div> '+
                        // '<div class="inpt-grp"><label>maxIter</label><input type="text" id="maxIter-kmeans'+kmeansId+'" class="ip1" value="20"></div> '+
                        '<div class="inpt-grp"><label>seed</label><input type="text" id="seed-kmeans'+kmeansId+'" class="ip1" value="None"></div> '+
                        // '<div class="inpt-grp"><label>distanceMeasure</label><input type="text" id="distanceMeasure-kmeans'+kmeansId+'" class="ip1" value="euclidean"></div> '+
                        // '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-kmeans'+kmeansId+'" class="ip1" value="0.75"></div> '+
                        // '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-kmeans'+kmeansId+'" class="ip1" value="0.25"></div> '+
                        '<div class="function-call" style="display:none;">kmeans,kmeans-module-' +kmeansId+ ',markdown-kmeansId'+kmeansId+'</div>'+
                        '<button type="button" id="run-kmeans'+kmeansId+'"  onclick="kmeans(\'kmeans-module-' +kmeansId+ '\', \'markdown-kmeansId'+kmeansId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+kmeansId+'" class="run" onclick="showTables(\'kmeans-module-'+kmeansId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+kmeansId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                var simplemdekmeansId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-kmeansId"+kmeansId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("kmeans-module-"+kmeansId);
            });

            //  gmm
            $("#gmm").click(function(e){
                // var gmmId = $('.gmm').length + 1;
                var gmmId = getActiveId("gmm");
                showTables('gmm-module-' + gmmId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn gmm" id="gmm-module-' +gmmId+ '"><h4>[<span id="statementId-' + gmmId + '"></span>] Gaussian Mixture Model</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-gmmId'+gmmId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-gmmId'+gmmId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'gmm-module-' + gmmId + '\',\'from-gmm-' + gmmId + '\',\'from-key-' + gmmId + '\',true)" class="from-gmm-'+gmmId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'gmm-module-'+gmmId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>featuresCol</label><select id="featuresCol-gmm' +gmmId+'" class="from-key-'+gmmId+'"></select></div>'+
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
                    '<div class="function-call" style="display:none;">gmm,gmm-module-' +gmmId+ ',markdown-gmmId'+gmmId+'</div>'+
                    '<button type="button" id="run-gmm'+gmmId+'" onclick="gmm(\'gmm-module-' +gmmId+ '\', \'markdown-gmmId'+gmmId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+gmmId+'" class="run" onclick="showTables(\'gmm-module-'+gmmId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+gmmId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn gmm" id="gmm-module-' +gmmId+ '"><h4>[<span id="statementId-' + gmmId + '"></span>] Gaussian Mixture Model</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-gmmId'+gmmId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'gmm-module-' + gmmId + '\',\'from-gmm-' + gmmId + '\',\'from-key-' + gmmId + '\',true)" class="from-gmm-'+gmmId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'gmm-module-'+gmmId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp thre-width"><label>featuresCol</label><select id="featuresCol-gmm' +gmmId+'" class="from-key-'+gmmId+'"></select></div>'+
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
                        '<div class="function-call" style="display:none;">gmm,gmm-module-' +gmmId+ ',markdown-gmmId'+gmmId+'</div>'+
                        '<button type="button" id="run-gmm'+gmmId+'" onclick="gmm(\'gmm-module-' +gmmId+ '\', \'markdown-gmmId'+gmmId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+gmmId+'" class="run" onclick="showTables(\'gmm-module-'+gmmId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+gmmId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                var simplemdegmmId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-gmmId"+gmmId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("gmm-module-"+gmmId);
            });

            //  linear-reg
            $("#linearreg").click(function(e){
                // var linearregId = $('.linearreg').length + 1;
                var linearregId = getActiveId("linearreg");
                showTables('linearreg-module-' + linearregId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn linearreg" id="linearreg-module-' +linearregId+ '"><h4>[<span id="statementId-' + linearregId + '"></span>] Linear Regression</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-linearregId'+linearregId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-linearregId'+linearregId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'linearreg-module-' + linearregId + '\',\'from-linearreg-' + linearregId + '\',\'from-key-' + linearregId + '\',true)" class="from-linearreg-'+linearregId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'linearreg-module-'+linearregId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>featuresCol</label><select id="featuresCol-linearreg' +linearregId+'" class="from-key-'+linearregId+'"></select></div>'+
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
                    '<div class="function-call" style="display:none;">linearRegression,linearreg-module-' +linearregId+ ',markdown-linearregId'+linearregId+'</div>'+
                    '<button type="button" id="run-linearreg'+linearregId+'" onclick="linearRegression(\'linearreg-module-' +linearregId+ '\', \'markdown-linearregId'+linearregId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+linearregId+'" class="run" onclick="showTables(\'linearreg-module-'+linearregId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+linearregId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn linearreg" id="linearreg-module-' +linearregId+ '"><h4>[<span id="statementId-' + linearregId + '"></span>] Linear Regression</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-linearregId'+linearregId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'linearreg-module-' + linearregId + '\',\'from-linearreg-' + linearregId + '\',\'from-key-' + linearregId + '\',true)" class="from-linearreg-'+linearregId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'linearreg-module-'+linearregId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>featuresCol</label><select id="featuresCol-linearreg' +linearregId+'" class="from-key-'+linearregId+'"></select></div>'+
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
                    '<div class="function-call" style="display:none;">linearRegression,linearreg-module-' +linearregId+ ',markdown-linearregId'+linearregId+'</div>'+
                    '<button type="button" id="run-linearreg'+linearregId+'" onclick="linearRegression(\'linearreg-module-' +linearregId+ '\', \'markdown-linearregId'+linearregId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+linearregId+'" class="run" onclick="showTables(\'linearreg-module-'+linearregId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+linearregId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                var simplemdelinearregId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-linearregId"+linearregId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn("linearreg-module-"+linearregId);
            });


            //  logisticreg
            $("#logisticreg").click(function(e){
                // var logisticregId = $('.logisticreg').length + 1;
                var logisticregId = getActiveId("logisticreg");
                showTables('logisticreg-module-' + logisticregId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn logisticreg" id="logisticreg-module-' +logisticregId+ '"><h4>[<span id="statementId-' + logisticregId + '"></span>] Logistic Regression</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-logisticregId'+logisticregId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-logisticregId'+logisticregId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'logisticreg-module-' + logisticregId + '\',\'from-logisticreg-' + logisticregId + '\',\'from-key-' + logisticregId + '\',true)" class="from-logisticreg-'+logisticregId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'logisticreg-module-'+logisticregId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>featuresCol</label><select id="featuresCol-logisticreg' +logisticregId+'" class="from-key-'+logisticregId+'"></select></div>'+
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
                    '<div class="function-call" style="display:none;">logisticRegression,logisticreg-module-' +logisticregId+ ',markdown-logisticregId'+logisticregId+'</div>'+
                    '<button type="button" id="run-logisticreg'+logisticregId+'" onclick="logisticRegression(\'logisticreg-module-' +logisticregId+ '\', \'markdown-logisticregId'+logisticregId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+logisticregId+'" class="run" onclick="showTables(\'logisticreg-module-'+logisticregId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+logisticregId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn logisticreg" id="logisticreg-module-' +logisticregId+ '"><h4>[<span id="statementId-' + logisticregId + '"></span>] Logistic Regression</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-logisticregId'+logisticregId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'logisticreg-module-' + logisticregId + '\',\'from-logisticreg-' + logisticregId + '\',\'from-key-' + logisticregId + '\',true)" class="from-logisticreg-'+logisticregId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'logisticreg-module-'+logisticregId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp thre-width"><label>featuresCol</label><select id="featuresCol-logisticreg' +logisticregId+'" class="from-key-'+logisticregId+'"></select></div>'+
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
                        '<div class="function-call" style="display:none;">logisticRegression,logisticreg-module-' +logisticregId+ ',markdown-logisticregId'+logisticregId+'</div>'+
                        '<button type="button" id="run-logisticreg'+logisticregId+'" onclick="logisticRegression(\'logisticreg-module-' +logisticregId+ '\',\'markdown-logisticregId'+logisticregId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+logisticregId+'" class="run" onclick="showTables(\'logisticreg-module-'+logisticregId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+logisticregId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                var simplemdelogisticregId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-logisticregId"+logisticregId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn('logisticreg-module-' + logisticregId);
            });


            //  decisiontree
            $("#decisiontree").click(function(e){
                // var decisiontreeId = $('.decisiontree').length + 1;
                var decisiontreeId = getActiveId("decisiontree");
                showTables('decisiontree-module-' + decisiontreeId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn decisiontree" id="decisiontree-module-' +decisiontreeId+ '"><h4>[<span id="statementId-' + decisiontreeId + '"></span>] Decision Tree</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-decisiontreeId'+decisiontreeId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-decisiontreeId'+decisiontreeId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'decisiontree-module-' + decisiontreeId + '\',\'from-decisiontree-' + decisiontreeId + '\',\'from-key-' + decisiontreeId + '\',true)" class="from-decisiontree-'+decisiontreeId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'decisiontree-module-'+decisiontreeId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>featuresCol</label><select id="featuresCol-decisiontree' +decisiontreeId+'" class="from-key-'+decisiontreeId+'"></select></div>'+
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
                    '<div class="function-call" style="display:none;">decisionTree,decisiontree-module-' +decisiontreeId+ ',markdown-decisiontreeId'+decisiontreeId+'</div>'+
                    '<button type="button" id="run-decisiontree'+decisiontreeId+'" onclick="decisionTree(\'decisiontree-module-' +decisiontreeId+ '\', \'markdown-decisiontreeId'+decisiontreeId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+decisiontreeId+'" class="run" onclick="showTables(\'decisiontree-module-'+decisiontreeId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+decisiontreeId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn decisiontree" id="decisiontree-module-' +decisiontreeId+ '"><h4>[<span id="statementId-' + decisiontreeId + '"></span>] Decision Tree</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-decisiontreeId'+decisiontreeId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'decisiontree-module-' + decisiontreeId + '\',\'from-decisiontree-' + decisiontreeId + '\',\'from-key-' + decisiontreeId + '\',true)" class="from-decisiontree-'+decisiontreeId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'decisiontree-module-'+decisiontreeId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp thre-width"><label>featuresCol</label><select id="featuresCol-decisiontree' +decisiontreeId+'" class="from-key-'+decisiontreeId+'"></select></div>'+
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
                        '<div class="function-call" style="display:none;">decisionTree,decisiontree-module-' +decisiontreeId+ ',markdown-decisiontreeId'+decisiontreeId+'</div>'+
                        '<button type="button" id="run-decisiontree'+decisiontreeId+'" onclick="decisionTree(\'decisiontree-module-' +decisiontreeId+ '\', \'markdown-decisiontreeId'+decisiontreeId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+decisiontreeId+'" class="run" onclick="showTables(\'decisiontree-module-'+decisiontreeId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+decisiontreeId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                var simplemdedecisiontreeId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-decisiontreeId"+decisiontreeId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn('decisiontree-module-' + decisiontreeId);
            });

            //  randomforest
            $("#randomforest").click(function(e){
                // var randomforestId = $('.randomforest').length + 1;
                var randomforestId = getActiveId("randomforest");
                showTables('randomforest-module-' + randomforestId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn randomforest" id="randomforest-module-' +randomforestId+ '"><h4>[<span id="statementId-' + randomforestId + '"></span>] Random Forest</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-randomforestId'+randomforestId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-randomforestId'+randomforestId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'randomforest-module-' + randomforestId + '\',\'from-randomforest-' + randomforestId + '\',\'from-key-' + randomforestId + '\',true)" class="from-randomforest-'+randomforestId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'randomforest-module-'+randomforestId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>featuresCol</label><select id="featuresCol-randomforest' +randomforestId+'" class="from-key-'+randomforestId+'"></select></div>'+
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
                    '<div class="function-call" style="display:none;">randomForest,randomforest-module-' +randomforestId+ ',markdown-randomforestId'+randomforestId+'</div>'+
                    '<button type="button" id="run-randomforest'+randomforestId+'" onclick="randomForest(\'randomforest-module-' +randomforestId+ '\', \'markdown-randomforestId'+randomforestId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+randomforestId+'" class="run" onclick="showTables(\'randomforest-module-'+randomforestId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+randomforestId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn randomforest" id="randomforest-module-' +randomforestId+ '"><h4>[<span id="statementId-' + randomforestId + '"></span>] Random Forest</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-randomforestId'+randomforestId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'randomforest-module-' + randomforestId + '\',\'from-randomforest-' + randomforestId + '\',\'from-key-' + randomforestId + '\',true)" class="from-randomforest-'+randomforestId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'randomforest-module-'+randomforestId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp thre-width"><label>featuresCol</label><select id="featuresCol-randomforest' +randomforestId+'" class="from-key-'+randomforestId+'"></select></div>'+
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
                        '<div class="function-call" style="display:none;">randomForest,randomforest-module-' +randomforestId+ ',markdown-randomforestId'+randomforestId+'</div>'+
                        '<button type="button" id="run-randomforest'+randomforestId+'" onclick="randomForest(\'randomforest-module-' +randomforestId+ '\', \'markdown-randomforestId'+randomforestId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+randomforestId+'" class="run" onclick="showTables(\'randomforest-module-'+randomforestId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+randomforestId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                var simplemderandomforestId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-randomforestId"+randomforestId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn('randomforest-module-'+randomforestId);
            });


            //  naivebayes
            $("#naivebayes").click(function(e){
                // var naivebayesId = $('.naivebayes').length + 1;
                var naivebayesId = getActiveId("naivebayes");
                showTables('naivebayes-module-' + naivebayesId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn naivebayes" id="naivebayes-module-' +naivebayesId+ '"><h4>[<span id="statementId-' + naivebayesId + '"></span>] Naive Bayes</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-naivebayesId'+naivebayesId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-naivebayesId'+naivebayesId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'naivebayes-module-' + naivebayesId + '\',\'from-naivebayes-' + naivebayesId + '\',\'from-key-' + naivebayesId + '\',true)" class="from-naivebayes-'+naivebayesId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'naivebayes-module-'+naivebayesId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>featuresCol</label><select id="featuresCol-naivebayes' +naivebayesId+'" class="from-key-'+naivebayesId+'"></select></div>'+
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
                    '<div class="function-call" style="display:none;">naiveBayes,naivebayes-module-' +naivebayesId+ ',markdown-naivebayesId'+naivebayesId+'</div>'+
                    '<button type="button" id="run-naivebayes'+naivebayesId+'" onclick="naiveBayes(\'naivebayes-module-' +naivebayesId+ '\', \'markdown-naivebayesId'+naivebayesId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+naivebayesId+'" class="run" onclick="showTables(\'naivebayes-module-'+naivebayesId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+naivebayesId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn naivebayes" id="naivebayes-module-' +naivebayesId+ '"><h4>[<span id="statementId-' + naivebayesId + '"></span>] Naive Bayes</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-naivebayesId'+naivebayesId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'naivebayes-module-' + naivebayesId + '\',\'from-naivebayes-' + naivebayesId + '\',\'from-key-' + naivebayesId + '\',true)" class="from-naivebayes-'+naivebayesId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'naivebayes-module-'+naivebayesId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp thre-width"><label>featuresCol</label><select id="featuresCol-naivebayes' +naivebayesId+'" class="from-key-'+naivebayesId+'"></select></div>'+
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
                        '<div class="function-call" style="display:none;">naiveBayes,naivebayes-module-' +naivebayesId+ ',markdown-naivebayesId'+naivebayesId+'</div>'+
                        '<button type="button" id="run-naivebayes'+naivebayesId+'" onclick="naiveBayes(\'naivebayes-module-' +naivebayesId+ '\', \'markdown-naivebayesId'+naivebayesId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+naivebayesId+'" class="run" onclick="showTables(\'naivebayes-module-'+naivebayesId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+naivebayesId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                var simplemdenaivebayesId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-naivebayesId"+naivebayesId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn('naivebayes-module-' + naivebayesId);
            });


            //  fpgrowth
            $("#fpgrowth").click(function(e){
                // var fpgrowthId = $('.fpgrowth').length + 1;
                var fpgrowthId = getActiveId("fpgrowth");
                showTables('fpgrowth-module-' + fpgrowthId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn fpgrowth" id="fpgrowth-module-' +fpgrowthId+ '"><h4>[<span id="statementId-' + fpgrowthId + '"></span>] FP Growth</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-fpgrowthId'+fpgrowthId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-fpgrowthId'+fpgrowthId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'fpgrowth-module-' + fpgrowthId + '\',\'from-fpgrowth-' + fpgrowthId + '\',\'from-key-' + fpgrowthId + '\',true)" class="from-fpgrowth-'+fpgrowthId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'fpgrowth-module-'+fpgrowthId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp"><label>splits</label><input type="text" id="splits-fpgrowth' +fpgrowthId+'" class="ip1" value="None"></div> '+
                    '<div class="inpt-grp"><label>minSupport</label><input type="text" id="minSupport-fpgrowth' +fpgrowthId+'" class="ip1" value="0.3"></div> '+
                    '<div class="inpt-grp"><label>minConfidence</label><input type="text" id="minConfidence-fpgrowth'+fpgrowthId+'" class="ip1" value="0.8"></div> '+
                    '<div class="inpt-grp"><label>itemsCol</label><input type="text" id="itemsCol-fpgrowth'+fpgrowthId+'" class="ip1" value="items"></div> '+
                    '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-fpgrowth'+fpgrowthId+'" class="ip1" value="prediction"></div> '+
                    '<div class="inpt-grp"><label>numPartitions</label><input type="text" id="numPartitions-fpgrowth'+fpgrowthId+'" class="ip1" value="None"></div> '+
                    '<div class="function-call" style="display:none;">fpgrowth,fpgrowth-module-' +fpgrowthId+ ',markdown-fpgrowthId'+fpgrowthId+'</div>'+
                    '<button type="button" id="run-fpgrowth'+fpgrowthId+'" onclick="fpgrowth(\'fpgrowth-module-' +fpgrowthId+ '\', \'markdown-fpgrowthId'+fpgrowthId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+fpgrowthId+'" class="run" onclick="showTables(\'fpgrowth-module-'+fpgrowthId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+fpgrowthId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn fpgrowth" id="fpgrowth-module-' +fpgrowthId+ '"><h4>[<span id="statementId-' + fpgrowthId + '"></span>] FP Growth</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-fpgrowthId'+fpgrowthId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'fpgrowth-module-' + fpgrowthId + '\',\'from-fpgrowth-' + fpgrowthId + '\',\'from-key-' + fpgrowthId + '\',true)" class="from-fpgrowth-'+fpgrowthId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'fpgrowth-module-'+fpgrowthId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp"><label>splits</label><input type="text" id="splits-fpgrowth' +fpgrowthId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>minSupport</label><input type="text" id="minSupport-fpgrowth' +fpgrowthId+'" class="ip1" value="0.3"></div> '+
                        '<div class="inpt-grp"><label>minConfidence</label><input type="text" id="minConfidence-fpgrowth'+fpgrowthId+'" class="ip1" value="0.8"></div> '+
                        '<div class="inpt-grp"><label>itemsCol</label><input type="text" id="itemsCol-fpgrowth'+fpgrowthId+'" class="ip1" value="items"></div> '+
                        '<div class="inpt-grp"><label>predictionCol</label><input type="text" id="predictionCol-fpgrowth'+fpgrowthId+'" class="ip1" value="prediction"></div> '+
                        '<div class="inpt-grp"><label>numPartitions</label><input type="text" id="numPartitions-fpgrowth'+fpgrowthId+'" class="ip1" value="None"></div> '+
                        '<div class="function-call" style="display:none;">fpgrowth,fpgrowth-module-' +fpgrowthId+ ',markdown-fpgrowthId'+fpgrowthId+'</div>'+
                        '<button type="button" id="run-fpgrowth'+fpgrowthId+'" onclick="fpgrowth(\'fpgrowth-module-' +fpgrowthId+ '\', \'markdown-fpgrowthId'+fpgrowthId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+fpgrowthId+'" class="run" onclick="showTables(\'fpgrowth-module-'+fpgrowthId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+fpgrowthId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }

                var simplemdefpgrowthId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-fpgrowthId"+fpgrowthId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn('fpgrowth-module-' + fpgrowthId);
            });
            
             //  linearsvc
            $("#linearsvc").click(function(e){
                // var linearsvcId = $('.linearsvc').length + 1;
                var linearsvcId = getActiveId("linearsvc");
                showTables('linearsvc-module-' + linearsvcId);
                var totalcolumn = $(".panel-coloumn").length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn linearsvc" id="linearsvc-module-' +linearsvcId+ '"><h4>[<span id="statementId-' + linearsvcId + '"></span>] Linear SVM</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<textarea id="markdown-linearsvcId'+linearsvcId+'"></textarea>'+
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-linearsvcId'+linearsvcId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'linearsvc-module-' + linearsvcId + '\',\'from-linearsvc-' + linearsvcId + '\',\'from-key-' + linearsvcId + '\',true)" class="from-linearsvc-'+linearsvcId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'linearsvc-module-'+linearsvcId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>featuresCol</label><select id="featuresCol-linearsvc' +linearsvcId+'" class="from-key-'+linearsvcId+'"></select></div>'+
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
                    '<div class="function-call" style="display:none;">linearsvc,linearsvc-module-' +linearsvcId+ ',markdown-linearsvcId'+linearsvcId+'</div>'+
                    '<button type="button" id="run-linearsvc'+linearsvcId+'" onclick="linearsvc(\'linearsvc-module-' +linearsvcId+ '\', \'markdown-linearsvcId'+linearsvcId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+linearsvcId+'" class="run" onclick="showTables(\'linearsvc-module-'+linearsvcId+'\')">Refresh Data Table</button>'+
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
                    '<div class="panel-coloumn linearsvc" id="linearsvc-module-' +linearsvcId+ '"><h4>[<span id="statementId-' + linearsvcId + '"></span>] Linear SVM</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-linearsvcId'+linearsvcId+'"></textarea></div><div class="mdepreview"></div></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'linearsvc-module-' + linearsvcId + '\',\'from-linearsvc-' + linearsvcId + '\',\'from-key-' + linearsvcId + '\',true)" class="from-linearsvc-'+linearsvcId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'linearsvc-module-'+linearsvcId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>featuresCol</label><select id="featuresCol-linearsvc' +linearsvcId+'" class="from-key-'+linearsvcId+'"></select></div>'+
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
                    // '<div class="inpt-grp"><label>Train Set</label><input type="text" id="train-linearsvc'+linearsvcId+'" class="ip1" value="0.75"></div> '+
                    // '<div class="inpt-grp"><label>Test Set</label><input type="text" id="test-linearsvc'+linearsvcId+'" class="ip1" value="0.25"></div> '+   
                    '<br/>'+
                    '<div class="function-call" style="display:none;">linearsvc,linearsvc-module-' +linearsvcId+ ',markdown-linearsvcId'+linearsvcId+'</div>'+
                    '<button type="button" id="run-linearsvc'+linearsvcId+'" onclick="linearsvc(\'linearsvc-module-' +linearsvcId+ '\', \'markdown-linearsvcId'+linearsvcId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+linearsvcId+'" class="run" onclick="showTables(\'linearsvc-module-'+linearsvcId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+linearsvcId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-column-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                var simplemdelinearsvcId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-linearsvcId"+linearsvcId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn('linearsvc-module-' + linearsvcId);
            });

            //  arima
            $("#arima").click(function(e){
                // var arimaId = $('.arima').length + 1;
                var arimaId = getActiveId("arima");
                showTables('arima-module-' + arimaId);
                var totalcolumn = $(".panel-coloumn").length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn arima" id="arima-module-' +arimaId+ '"><h4>[<span id="statementId-' + arimaId + '"></span>] ARIMA</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<textarea id="markdown-arima'+arimaId+'"></textarea>'+
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-arimaId'+arimaId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'arima-module-' + arimaId + '\',\'from-arima-' + arimaId + '\',\'from-key-' + arimaId + '\',true)" class="from-arima-'+arimaId+'"></select></div>'+
                        // '<div class="inpt-grp thre-width"><label>Data Table </label><select  class="from-arima-'+arimaId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'arima-module-'+arimaId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp"><label>splits</label><input type="text" id="splits-arima'+arimaId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>numberofpredict</label><input type="text" id="numberofpredict-arima'+arimaId+'" class="ip1" value="0"></div> '+
                        // '<div class="inpt-grp"><label>dateCol</label><input type="text" id="dateCol-arima'+arimaId+'" class="ip1" value="dateCol"></div> '+
                        '<div class="inpt-grp thre-width"><label>dateCol</label><select id="dateCol-arima' +arimaId+'" class="from-key-'+arimaId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>timeseriesCol</label><select id="timeseriesCol-arima' +arimaId+'" class="from-key-'+arimaId+'"></select></div>'+
                        // '<div class="inpt-grp"><label>timeseriesCol</label><input type="text" id="timeseriesCol-arima'+arimaId+'" class="ip1" value="timeserisCol"></div> '+
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
                        '<div class="inpt-grp"><label>business</label><input type="text" id="business-arima'+arimaId+'" class="ip1" value="False"></div> '+
                        '<div class="inpt-grp thre-width"><label>By </label><select  id="by-arima'+arimaId+'"><option value="days">days</option><option value="weeks">weeks</option><option value="months">months</option><option value="years">years</option></select></div>'+
                        '<div class="function-call" style="display:none;">arima,arima-module-' +arimaId+ ',markdown-arimaId'+arimaId+'</div>'+
                        '<button type="button" id="run-arima'+arimaId+'" onclick="arima(\'arima-module-' +arimaId+ '\', \'markdown-arimaId'+arimaId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+arimaId+'" class="run" onclick="showTables(\'arima-module-'+arimaId+'\')">Refresh Data Table</button>'+
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
                        '<div class="panel-coloumn arima" id="arima-module-' +arimaId+ '"><h4>[<span id="statementId-' + arimaId + '"></span>] ARIMA</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-arimaId'+arimaId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'arima-module-' + arimaId + '\',\'from-arima-' + arimaId + '\',\'from-key-' + arimaId + '\',true)" class="from-arima-'+arimaId+'"></select></div>'+
                        // '<div class="inpt-grp thre-width"><label>Data Table </label><select class="from-arima-'+arimaId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'arima-module-'+arimaId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp"><label>splits</label><input type="text" id="splits-arima'+arimaId+'" class="ip1" value="None"></div> '+
                        '<div class="inpt-grp"><label>numberofpredict</label><input type="text" id="numberofpredict-arima'+arimaId+'" class="ip1" value="0"></div> '+
                        // '<div class="inpt-grp"><label>dateCol</label><input type="text" id="dateCol-arima'+arimaId+'" class="ip1" value="dateCol"></div> '+
                        // '<div class="inpt-grp"><label>timeseriesCol</label><input type="text" id="timeseriesCol-arima'+arimaId+'" class="ip1" value="timeserisCol"></div> '+
                        '<div class="inpt-grp thre-width"><label>dateCol</label><select id="dateCol-arima' +arimaId+'" class="from-key-'+arimaId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>timeseriesCol</label><select id="timeseriesCol-arima' +arimaId+'" class="from-key-'+arimaId+'"></select></div>'+
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
                        '<div class="inpt-grp"><label>business</label><input type="text" id="business-arima'+arimaId+'" class="ip1" value="False"></div> '+
                        '<div class="inpt-grp thre-width"><label>By </label><select  id="by-arima'+arimaId+'"><option value="days">days</option><option value="weeks">weeks</option><option value="months">months</option><option value="years">years</option></select></div>'+
                        '<div class="function-call" style="display:none;">arima,arima-module-' +arimaId+ ',markdown-arimaId'+arimaId+'</div>'+
                        '<button type="button" id="run-arima'+arimaId+'" onclick="arima(\'arima-module-' +arimaId+ '\', \'markdown-arimaId'+arimaId+'\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+arimaId+'" class="run" onclick="showTables(\'arima-module-'+arimaId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+arimaId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-column-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p></div></div>');
                }
                var simplemdearimaId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-arimaId"+arimaId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn('arima-module-' + arimaId);
            });


            //  saveModel
            $("#saveModel").click(function(e){
                //loading cell time//
                // setTimeout(function(){
                //     $('.loading-cell').fadeOut();
                // }, 1000);
                // var saveModelId = $('.saveModel').length + 1;
                var saveModelId = getActiveId("saveModel");
                var totalcolumn = $(".panel-coloumn").length + 1;
                
                getPipelineStages('saveModel-module-' + saveModelId);
                // 
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn saveModel" id="saveModel-module-' +saveModelId+ '"><h4>[<span id="statementId-' + saveModelId + '"></span>] Save Model</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<div class="inpt-grp thre-width"><label>Data Source</label><select class="from-saveModel-'+saveModelId+'"></select></div>'+
                        
                        // '<textarea id="markdown-saveModelId'+saveModelId+'"></textarea>'+
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-saveModelId'+saveModelId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<h4>Select Item for Pipeline</h4>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select  class="from-saveModel-'+saveModelId+'" id="dataframe-saveModel'+saveModelId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'saveModel-module-'+saveModelId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="multiselect-item">'+
                        '<div class="row">'+
                        '<div class="col-md-6">'+
                        '<h4>Avaliable Item</h4>'+
                        '<select id="sbOne'+saveModelId+'" multiple="multiple">'+
                        '</select>'+
                        '</div>'+
                        '<div class="col-md-6">'+
                        '<h4>Selected Item</h4>'+
                        '<select id="sbTwo'+saveModelId+'" multiple="multiple">'+
                        '</select>'+
                        '</div>'+
                        '</div>'+
                        '<div class="sm-btn">'+
                        '<input type="button" id="left'+saveModelId+'" value="<" /><br/>'+
                        '<input type="button" id="right'+saveModelId+'" value=">" /><br/>'+
                        '<input type="button" id="leftall'+saveModelId+'" value="<<" /><br/>'+
                        '<input type="button" id="rightall'+saveModelId+'" value=">>" /><br/>'+
                        '</div>'+
                        '</div>'+

                        '<div class="inpt-grp"><label>File Name</label><input type="text" id="filename-saveModel' +saveModelId+'" class="ip1" value="'+project_name+'" readonly></div> '+
                        '<div class="function-call" style="display:none;">saveModel,saveModel-module-' +saveModelId+ ',markdown-saveModelId'+saveModelId+'</div>'+
                        '<button type="button" id="save-saveModel'+saveModelId+'" onclick="saveModel(\'saveModel-module-' +saveModelId+ '\', \'markdown-saveModelId'+saveModelId+'\')" class="run"><i class="far fa-save"></i></button>'+
                        // '<button type="button" id="refresh'+saveModelId+'" class="run" onclick="showTables(\'saveModel-module-'+saveModelId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+saveModelId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-column-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn saveModel" id="saveModel-module-' +saveModelId+ '"><h4>[<span id="statementId-' + saveModelId + '"></span>] Save Model</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<div class="inpt-grp thre-width"><label>Data Source</label><select class="from-saveModel-'+saveModelId+'"></select></div>'+
                        // '<div class="inpt-grp thre-width"><label>Data Table </label><select  class="from-saveModel-'+saveModelId+'"></select></div>'+
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-saveModelId'+saveModelId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<h4>Select Item for Pipeline</h4>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select  class="from-saveModel-'+saveModelId+'"  id="dataframe-saveModel'+saveModelId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'saveModel-module-'+saveModelId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="multiselect-item">'+
                        // '<h4>Select Item for Pipeline</h4>'+
                        '<div class="row">'+
                        '<div class="col-md-6">'+
                        '<h4>Avaliable Item</h4>'+
                        '<select id="sbOne'+saveModelId+'" multiple="multiple">'+
                        '</select>'+
                        '</div>'+
                        '<div class="col-md-6">'+
                        '<h4>Selected Item</h4>'+
                        '<select id="sbTwo'+saveModelId+'" multiple="multiple">'+
                        '</select>'+
                        '</div>'+
                        '</div>'+
                        '<div class="sm-btn">'+
                        '<input type="button" id="left'+saveModelId+'" value="<" />'+
                        '<input type="button" id="right'+saveModelId+'" value=">" />'+
                        '<input type="button" id="leftall'+saveModelId+'" value="<<" />'+
                        '<input type="button" id="rightall'+saveModelId+'" value=">>" />'+
                        '</div>'+
                        '</div>'+

                        '<div class="inpt-grp"><label>File Name</label><input type="text" id="filename-saveModel' +saveModelId+'" class="ip1" value="'+project_name+'" readonly></div> '+
                        '<div class="function-call" style="display:none;">saveModel,saveModel-module-' +saveModelId+ ',markdown-saveModelId'+saveModelId+'</div>'+
                        '<button type="button" id="save-saveModel'+saveModelId+'" onclick="saveModel(\'saveModel-module-' +saveModelId+ '\', \'markdown-saveModelId'+saveModelId+'\')" class="run"><i class="far fa-save"></i></button>'+
                        // '<button type="button" id="refresh'+saveModelId+'" class="run" onclick="showTables(\'saveModel-module-'+saveModelId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+saveModelId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-column-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }

                //multipleselect
                $(function () {
                    function moveItems(origin, dest) {
                        $(origin).find(':selected').appendTo(dest);
                    }
        
                    function moveAllItems(origin, dest) {
                        $(origin).children().appendTo(dest);
                    }
                    
                    $(document).on('click', '#left' + saveModelId, function(e) {
                        moveItems('#sbTwo' + saveModelId, '#sbOne' + saveModelId);
                    });
                    $("#left" + saveModelId).click();

                    $(document).on('click', '#right' + saveModelId, function(e) {
                        moveItems('#sbOne' + saveModelId, '#sbTwo' + saveModelId);
                    });
                    $("#right" + saveModelId).click();

                    $(document).on('click', '#leftall' + saveModelId, function(e) {
                        moveAllItems('#sbTwo' + saveModelId, '#sbOne' + saveModelId);
                    });
                    $("#leftall" + saveModelId).click();

                    $(document).on('click', '#rightall' + saveModelId, function(e) {
                        moveAllItems('#sbOne' + saveModelId, '#sbTwo' + saveModelId);
                    });
                    $("#rightall" + saveModelId).click();
                });
            


                var simplemdesaveModelId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-saveModelId"+saveModelId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
                activeColumn('saveModel-module-' + saveModelId);
            });



            //  publishApi
            $("#publishApi").click(function(e){
                //loading cell time//
                setTimeout(function(){
                    $('.loading-cell').fadeOut();
                }, 1000);

                // var publishApiId = $('.publishApi').length + 1;
                var publishApiId = getActiveId("publishApi");
                var totalcolumn = $(".panel-coloumn").length + 1;

                // var fileName = $('#saveModel-module-'+publishApiId).find('#filename-saveModel'+publishApiId).val();
                // ////console.log("tangkap sini ",fileName);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn publishApi" id="publishApi-module-' +publishApiId+ '"><h4>[<span id="statementId-' + publishApiId + '"></span>] Publish API</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<textarea id="markdown-publishApiId'+publishApiId+'"></textarea>'+
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-publishApiId'+publishApiId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp"><label>Project Name</label><input type="text" id="modelsave' +publishApiId+'" class="ip1" value="'+project_name+'" readonly></div> '+
                        // '<div class="inpt-grp"><label>Model</label><select id="moldesave'+publishApiId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>Context Name</label><input type="text" id="context-name-publishApi' +publishApiId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>Token</label><input type="text" id="token-publishApi' +publishApiId+'" class="ip1" value="'+random_string(20)+'" readonly></div> '+
                        '<br/>'+
                        '<div class="inpt-grp"><label>Category</label>' +
                           '<select id="category-publishApi' +publishApiId+'">' +
                             '<option value="agriculture">Agriculture</option>' +
                             '<option value="banking">Banking and Finance</option>' +
                             '<option value="health">Health</option>' +
                             '<option value="social">Audi</option>' +
                             '<option value="others">Others</option>' +
                           '</select> ' +
                       '</div> '+
                        '<div class="inpt-grp"><label>Pricing</label><input type="text" id="pricing-publishApi' +publishApiId+'" class="ip1" style="text-align: right" value="0.00"></div> '+
                        '<div class="inpt-grp"><label>Active</label><input type="checkbox" id="active-publishApi' +publishApiId+'" class="ip1"></div> '+                        
                        '<div class="inpt-grp full-width-grp"><label>Documentation</label><textarea class="big-textarea" id="documentation-publishApi' +publishApiId+'"></textarea></div>'+
                        '<div class="function-call" style="display:none;">publishApi,publishApi-module-' +publishApiId+ ',markdown-publishApiId'+publishApiId+'</div>'+
                        '<button type="button" id="pubs-publishApi'+publishApiId+'" onclick="publishApi(\'publishApi-module-' +publishApiId+ '\', \'markdown-publishApiId'+publishApiId+'\')" class="save">Publish</button>'+
                        '<button type="button" id="del'+publishApiId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-column-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn publishApi" id="publishApi-module-' +publishApiId+ '"><h4>[<span id="statementId-' + publishApiId + '"></span>] Publish API</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<div class="container-mde"><div class="container-hide-mde"><textarea class="markdown-txtarea" id="markdown-publishApiId'+publishApiId+'"></textarea></div><div class="mdepreview"></div></div>'+
                        '<div class="inpt-grp"><label>Project Name</label><input type="text" id="modelsave' +publishApiId+'" class="ip1" value="'+project_name+'" readonly></div> '+
                        // '<div class="inpt-grp"><label>Model</label><select id="moldesave'+publishApiId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>Context Name</label><input type="text" id="context-name-publishApi' +publishApiId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>Token</label><input type="text" id="token-publishApi' +publishApiId+'" class="ip1" value="'+random_string(20)+'" readonly></div> '+
                        '<br/>'+
                        '<div class="inpt-grp"><label>Category</label>' +
                           '<select id="category-publishApi' +publishApiId+'">' +
                             '<option value="agriculture">Agriculture</option>' +
                             '<option value="banking">Banking and Finance</option>' +
                             '<option value="health">Health</option>' +
                             '<option value="social">Audi</option>' +
                             '<option value="others">Others</option>' +
                           '</select> ' +
                       '</div> '+
                        '<div class="inpt-grp"><label>Pricing</label><input type="text" id="pricing-publishApi' +publishApiId+'" class="ip1" style="text-align: right" value="0.00"></div> '+
                        '<div class="inpt-grp"><label>Active</label><input type="checkbox" id="active-publishApi' +publishApiId+'" class="ip1"></div> '+ 
                        '<div class="inpt-grp full-width-grp"><label>Documentation</label><textarea class="big-textarea" id="documentation-publishApi' +publishApiId+'"></textarea></div>'+
                        '<div class="function-call" style="display:none;">publishApi,publishApi-module-' +publishApiId+ ',markdown-publishApiId'+publishApiId+'</div>'+
                        '<button type="button" id="pubs-publishApi'+publishApiId+'" onclick="publishApi(\'publishApi-module-' +publishApiId+ '\', \'markdown-publishApiId'+publishApiId+'\')" class="save">Publish</button>'+
                        '<button type="button" id="del'+publishApiId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-column-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                var simplemdepublishApiId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-publishApiId"+publishApiId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
            });

            //VISUALIZATION

            //  BarChart
            $("#barchart").click(function(e){
                
                var totalcolumn = $(".panel-coloumn").length + 1;
                // var barchartId = $('.barchart').length + 1;
                var barchartId = getActiveId("barchart");
                showTables('barchart-module-' + barchartId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn barchart" id="barchart-module-' +barchartId+ '"><h4>[<span id="statementId-' + barchartId + '"></span>] BarChart</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-barchart' +barchartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'barchart-module-' + barchartId + '\',\'from-barchart-' + barchartId + '\',\'from-key-' + barchartId + '\',true)" class="from-barchart-'+barchartId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'barchart-module-'+barchartId+'\')">Refresh Datatable</button></div><br/>'+
                    // '<div class="inpt-grp"><label>X-Axis</label><select id="x-axis-barchart' +barchartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    // '<div class="inpt-grp"><label>Y-Axis</label><select id="y-axis-barchart' +barchartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Index</label><select id="index-barchart' +barchartId+'" class="from-key-'+barchartId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Columns</label><select id="columns-barchart' +barchartId+'" class="from-key-'+barchartId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Values</label><select id="agg-barchart'+barchartId+'"><option value="sum">Sum</option><option value="count">Count</option><option value="avg">Average</option></select></div>'+
                    '<div class="function-call" style="display:none;">barChartVisual,barchart-module-' +barchartId+ '</div>'+
                    '<button type="button" id="run-barchart'+barchartId+'" onclick="barChartVisual(\'barchart-module-' +barchartId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+barchartId+'" class="run" onclick="showTables(\'barchart-module-'+barchartId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+barchartId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-barchart-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="barchart'+barchartId+'"></div></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                    '<div class="panel-coloumn barchart" id="barchart-module-' +barchartId+ '"><h4>[<span id="statementId-' + barchartId + '"></span>] BarChart</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-barchart' +barchartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'barchart-module-' + barchartId + '\',\'from-barchart-' + barchartId + '\',\'from-key-' + barchartId + '\',true)" class="from-barchart-'+barchartId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'barchart-module-'+barchartId+'\')">Refresh Datatable</button></div><br/>'+
                    // '<div class="inpt-grp"><label>X-Axis</label><select id="x-axis-barchart' +barchartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    // '<div class="inpt-grp"><label>Y-Axis</label><select id="y-axis-barchart' +barchartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Index</label><select id="index-barchart' +barchartId+'" class="from-key-'+barchartId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Columns</label><select id="columns-barchart' +barchartId+'" class="from-key-'+barchartId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Values</label><select id="agg-barchart'+barchartId+'"><option value="sum">Sum</option><option value="count">Count</option><option value="avg">Average</option></select></div>'+
                    // '<div class="inpt-grp thre-width"><label>Values</label><select id="values-barchart' +barchartId+'" class="from-key-'+barchartId+'"></select></div>'+
                    '<div class="function-call" style="display:none;">barChartVisual,barchart-module-' +barchartId+ '</div>'+
                    '<button type="button" id="run-barchart'+barchartId+'" onclick="barChartVisual(\'barchart-module-' +barchartId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+barchartId+'" class="run" onclick="showTables(\'barchart-module-'+barchartId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+barchartId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-barchart-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="barchart'+barchartId+'"></div></div></div>');
                }
                activeColumn('barchart-module-' + barchartId);
            });

            //  piechart
            $("#piechart").click(function(e){
                //loading cell time//
                var totalcolumn = $(".panel-coloumn").length + 1;
                // var piechartId = $('.piechart').length + 1;
                var piechartId = getActiveId("piechart");
                showTables('piechart-module-' + piechartId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn piechart" id="piechart-module-' +piechartId+ '"><h4>[<span id="statementId-' + piechartId + '"></span>] piechart</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-piechart' +piechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'piechart-module-' + piechartId + '\',\'from-piechart-' + piechartId + '\',\'from-key-' + piechartId + '\',true)" class="from-piechart-'+piechartId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'piechart-module-'+piechartId+'\')">Refresh Datatable</button></div><br/>'+
                    // '<div class="inpt-grp"><label>values</label><select id="values-piechart' +piechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    // '<div class="inpt-grp"><label>Labels / Index</label><select id="labels-piechart' +piechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    // '<div class="inpt-grp thre-width"><label>values</label><select id="values-piechart' +piechartId+'" class="from-key-'+piechartId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Values</label><select id="agg-piechart'+piechartId+'"><option value="sum">Sum</option><option value="count">Count</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Labels / Index</label><select id="values-piechart' +piechartId+'" class="from-key-'+piechartId+'"></select></div>'+
                    '<div class="function-call" style="display:none;">pieChartVisual,piechart-module-' +piechartId+ '</div>'+
                    '<button type="button" id="run-piechart'+piechartId+'" onclick="pieChartVisual(\'piechart-module-' +piechartId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+piechartId+'" class="run" onclick="showTables(\'piechart-module-'+piechartId+'\')">Refresh Data Table</button>'+
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
                        '<div class="panel-coloumn piechart" id="piechart-module-' +piechartId+ '"><h4>[<span id="statementId-' + piechartId + '"></span>] piechart</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-piechart' +piechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'piechart-module-' + piechartId + '\',\'from-piechart-' + piechartId + '\',\'from-key-' + piechartId + '\',true)" class="from-piechart-'+piechartId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'piechart-module-'+piechartId+'\')">Refresh Datatable</button></div><br/>'+
                        // '<div class="inpt-grp"><label>values</label><select id="values-piechart' +piechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        // '<div class="inpt-grp"><label>Labels / Index</label><select id="labels-piechart' +piechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        
                        // '<div class="inpt-grp thre-width"><label>Labels / Index</label><select id="labels-piechart' +piechartId+'" class="from-key-'+piechartId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Values</label><select id="agg-piechart'+piechartId+'"><option value="sum">Sum</option><option value="count">Count</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Labels / Index</label><select id="values-piechart' +piechartId+'" class="from-key-'+piechartId+'"></select></div>'+
                        '<div class="function-call" style="display:none;">pieChartVisual,piechart-module-' +piechartId+ '</div>'+
                        '<button type="button" id="run-piechart'+piechartId+'" onclick="pieChartVisual(\'piechart-module-' +piechartId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+piechartId+'" class="run" onclick="showTables(\'piechart-module-'+piechartId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+piechartId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-piechart-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="piechart'+piechartId+'"></div></div></div>');
                }
                activeColumn('piechart-module-' + piechartId);
            });



            //  linechart
            $("#linechart").click(function(e){
                //loading cell time//

                var totalcolumn = $(".panel-coloumn").length + 1;
                // var linechartId = $('.linechart').length + 1;
                var linechartId = getActiveId("linechart");
                showTables('linechart-module-' + linechartId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn linechart" id="linechart-module-' +linechartId+ '"><h4>[<span id="statementId-' + linechartId + '"></span>] linechart</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-linechart' +linechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'linechart-module-' + linechartId + '\',\'from-linechart-' + linechartId + '\',\'from-key-' + linechartId + '\',false)" class="from-linechart-'+linechartId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'linechart-module-'+linechartId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp thre-width"><label>X</label><select id="x-linechart' +linechartId+'" class="from-key-'+linechartId+'"></select></div>'+
                        // '<div class="inpt-grp thre-width"><label>Y1</label><select id="y1-linechart' +linechartId+'" class="from-key-'+linechartId+'"></select></div>'+
                        // '<div class="inpt-grp thre-width"><label>Y2</label><select id="y2-linechart' +linechartId+'" class="from-key-'+linechartId+'"></select></div>'+
                        '<br><label>Y</label><div class="no-selected-box">'+
                        '</div>'+
                        // '<div class="inpt-grp"><label>X</label><select id="x-linechart' +linechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        // '<div class="inpt-grp"><label>Y</label><select id="y-linechart' +linechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="function-call" style="display:none;">lineChartVisual,linechart-module-' +linechartId+ '</div>'+
                        '<button type="button" id="run-linechart'+linechartId+'" onclick="lineChartVisual(\'linechart-module-' +linechartId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+linechartId+'" class="run" onclick="showTables(\'linechart-module-'+linechartId+'\')">Refresh Data Table</button>'+
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
                         '<div class="panel-coloumn linechart" id="linechart-module-' +linechartId+ '"><h4>[<span id="statementId-' + linechartId + '"></span>] linechart</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-linechart' +linechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'linechart-module-' + linechartId + '\',\'from-linechart-' + linechartId + '\',\'from-key-' + linechartId + '\',false)" class="from-linechart-'+linechartId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'linechart-module-'+linechartId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp thre-width"><label>X</label><select id="x-linechart' +linechartId+'" class="from-key-'+linechartId+'"></select></div>'+
                        // '<div class="inpt-grp thre-width"><label>Y1</label><select id="y1-linechart' +linechartId+'" class="from-key-'+linechartId+'"></select></div>'+
                        // '<div class="inpt-grp thre-width"><label>Y2</label><select id="y2-linechart' +linechartId+'" class="from-key-'+linechartId+'"></select></div>'+
                        '<br><label>Y</label><div class="no-selected-box">'+
                        '</div>'+
                        // '<div class="inpt-grp"><label>X</label><select id="x-linechart' +linechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        // '<div class="inpt-grp"><label>Y</label><select id="y-linechart' +linechartId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="function-call" style="display:none;">lineChartVisual,linechart-module-' +linechartId+ '</div>'+
                        '<button type="button" id="run-linechart'+linechartId+'" onclick="lineChartVisual(\'linechart-module-' +linechartId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+linechartId+'" class="run" onclick="showTables(\'linechart-module-'+linechartId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+linechartId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-linechart-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="linechart'+linechartId+'"></div></div></div>');
                }

                //start plotly
                //linechart
                activeColumn('linechart-module-' + linechartId);
            });


            //  histogram
            $("#histogram").click(function(e){
                var totalcolumn = $(".panel-coloumn").length + 1;
                // var histogramId = $('.histogram').length + 1;
                var histogramId = getActiveId("histogram");
                showTables('histogram-module-' + histogramId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn histogram" id="histogram-module-' +histogramId+ '"><h4>[<span id="statementId-' + histogramId + '"></span>] histogram</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-histogram' +histogramId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'histogram-module-' + histogramId + '\',\'from-histogram-' + histogramId + '\',\'from-key-' + histogramId + '\',true)" class="from-histogram-'+histogramId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'histogram-module-'+histogramId+'\')">Refresh Datatable</button></div><br/>'+
                    // '<div class="inpt-grp"><label>x1</label><select id="x1-histogram' +histogramId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    // '<div class="inpt-grp"><label>x2</label><select id="x2-histogram' +histogramId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>X1</label><select id="x1-histogram' +histogramId+'" class="from-key-'+histogramId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>X2</label><select id="x2-histogram' +histogramId+'" class="from-key-'+histogramId+'"></select></div>'+
                    // '<div class="inpt-grp thre-width"><label>Values</label><select id="values-histogram' +histogramId+'" class="from-key-'+histogramId+'"></select></div>'+
                    '<div class="function-call" style="display:none;">histogramChartVisual,histogram-module-' +histogramId+ '</div>'+
                    '<button type="button" id="run-histogram'+histogramId+'" onclick="histogramChartVisual(\'histogram-module-' +histogramId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+histogramId+'" class="run" onclick="showTables(\'histogram-module-'+histogramId+'\')">Refresh Data Table</button>'+
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
                    '<div class="panel-coloumn histogram" id="histogram-module-' +histogramId+ '"><h4>[<span id="statementId-' + histogramId + '"></span>] histogram</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-histogram' +histogramId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'histogram-module-' + histogramId + '\',\'from-histogram-' + histogramId + '\',\'from-key-' + histogramId + '\',true)" class="from-histogram-'+histogramId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'histogram-module-'+histogramId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>X1</label><select id="x1-histogram' +histogramId+'" class="from-key-'+histogramId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>X2</label><select id="x2-histogram' +histogramId+'" class="from-key-'+histogramId+'"></select></div>'+
                    // '<div class="inpt-grp thre-width"><label>Index</label><select id="index-histogram' +histogramId+'" class="from-key-'+histogramId+'"></select></div>'+
                    // '<div class="inpt-grp thre-width"><label>Columns</label><select id="columns-histogram' +histogramId+'" class="from-key-'+histogramId+'"></select></div>'+
                    // '<div class="inpt-grp thre-width"><label>Values</label><select id="values-histogram' +histogramId+'" class="from-key-'+histogramId+'"></select></div>'+
                    '<div class="function-call" style="display:none;">histogramChartVisual,histogram-module-' +histogramId+ '</div>'+
                    '<button type="button" id="run-histogram'+histogramId+'" onclick="histogramChartVisual(\'histogram-module-' +histogramId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+histogramId+'" class="run" onclick="showTables(\'histogram-module-'+histogramId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+histogramId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-histogram-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="histogram'+histogramId+'"></div></div></div>');
                }

                activeColumn('histogram-module-' + histogramId);
            });


            //  violin
            $("#violin").click(function(e){
                var totalcolumn = $(".panel-coloumn").length + 1;
                // var violinId = $('.violin').length + 1;
                var violinId = getActiveId("violin");
                showTables('violin-module-' + violinId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn violin" id="violin-module-' +violinId+ '"><h4>[<span id="statementId-' + violinId + '"></span>] violin</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-violin' +violinId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'violin-module-' + violinId + '\',\'from-violin-' + violinId + '\',\'from-key-' + violinId + '\',true)" class="from-violin-'+violinId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'violin-module-'+violinId+'\')">Refresh Datatable</button></div><br/>'+
                    '<div class="inpt-grp thre-width"><label>X</label><select id="xaxis-violin' +violinId+'" class="from-key-'+violinId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Hue</label><select id="yaxis-violin' +violinId+'" class="from-key-'+violinId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Y</label><select id="zaxis-violin' +violinId+'" class="from-key-'+violinId+'"></select></div>'+
                    // '<div class="inpt-grp"><label>X</label><select id="xaxis-violin' +violinId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    // '<div class="inpt-grp"><label>Y</label><select id="yaxis-violin' +violinId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="function-call" style="display:none;">violinChartVisual,violin-module-' +violinId+ '</div>'+
                    '<button type="button" id="run-violin'+violinId+'" onclick="violinChartVisual(\'violin-module-' +violinId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+violinId+'" class="run" onclick="showTables(\'violin-module-'+violinId+'\')">Refresh Data Table</button>'+
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
                    '<div class="panel-coloumn violin" id="violin-module-' +violinId+ '"><h4>[<span id="statementId-' + violinId + '"></span>] violin</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    // '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-violin' +violinId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'violin-module-' + violinId + '\',\'from-violin-' + violinId + '\',\'from-key-' + violinId + '\',true)" class="from-violin-'+violinId+'"></select></div>'+
                    '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'violin-module-'+violinId+'\')">Refresh Datatable</button></div><br/>'+
                    // '<div class="inpt-grp"><label>X</label><select id="xaxis-violin' +violinId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    // '<div class="inpt-grp"><label>Y</label><select id="yaxis-violin' +violinId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>X</label><select id="xaxis-violin' +violinId+'" class="from-key-'+violinId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Hue</label><select id="yaxis-violin' +violinId+'" class="from-key-'+violinId+'"></select></div>'+
                    '<div class="inpt-grp thre-width"><label>Y</label><select id="zaxis-violin' +violinId+'" class="from-key-'+violinId+'"></select></div>'+
                    '<div class="function-call" style="display:none;">violinChartVisual,violin-module-' +violinId+ '</div>'+
                    '<button type="button" id="run-violin'+violinId+'" onclick="violinChartVisual(\'violin-module-' +violinId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+violinId+'" class="run" onclick="showTables(\'violin-module-'+violinId+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+violinId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-violin-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="violin'+violinId+'"></div></div></div>');
                }
                activeColumn('violin-module-' + violinId);
            });

            //  scatter
            $("#scatter").click(function(e){
                var totalcolumn = $(".panel-coloumn").length + 1;
                // var scatterId = $('.scatter').length + 1;
                var scatterId = getActiveId("scatter");
                showTables('scatter-module-' + scatterId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn scatter" id="scatter-module-' +scatterId+ '"><h4>[<span id="statementId-' + scatterId + '"></span>] scatter</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'scatter-module-' + scatterId + '\',\'from-scatter-' + scatterId + '\',\'from-key-' + scatterId + '\',true)" class="from-scatter-'+scatterId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'scatter-module-'+scatterId+'\')">Refresh Datatable</button></div><br/>'+
                        // '<div class="inpt-grp"><label>X</label><select id="xaxis-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        // '<div class="inpt-grp"><label>Y</label><select id="yaxis-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        // '<div class="inpt-grp"><label>Z</label><select id="zaxis-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>X</label><select id="xaxis-scatter' +scatterId+'" class="from-key-'+scatterId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Y</label><select id="yaxis-scatter' +scatterId+'" class="from-key-'+scatterId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Z</label><select id="zaxis-scatter' +scatterId+'" class="from-key-'+scatterId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Category</label><select id="category-scatter' +scatterId+'" class="from-key-'+scatterId+'"></select></div>'+
                        '<div class="function-call" style="display:none;">scatterChartVisual,scatter-module-' +scatterId+ '</div>'+
                        '<button type="button" id="run-scatter'+scatterId+'" onclick="scatterChartVisual(\'scatter-module-' +scatterId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+scatterId+'" class="run" onclick="showTables(\'scatter-module-'+scatterId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+scatterId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-scatter-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><div id="scatter'+scatterId+'"></div></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn scatter" id="scatter-module-' +scatterId+ '"><h4>[<span id="statementId-' + scatterId + '"></span>] scatter</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<div class="inpt-grp"><label>Select Datasource</label><select id="datasource-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'scatter-module-' + scatterId + '\',\'from-scatter-' + scatterId + '\',\'from-key-' + scatterId + '\',true)" class="from-scatter-'+scatterId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'scatter-module-'+scatterId+'\')">Refresh Datatable</button></div><br/>'+
                        // '<div class="inpt-grp"><label>X</label><select id="xaxis-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        // '<div class="inpt-grp"><label>Y</label><select id="yaxis-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        // '<div class="inpt-grp"><label>Z</label><select id="zaxis-scatter' +scatterId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>X</label><select id="xaxis-scatter' +scatterId+'" class="from-key-'+scatterId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Y</label><select id="yaxis-scatter' +scatterId+'" class="from-key-'+scatterId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Z</label><select id="zaxis-scatter' +scatterId+'" class="from-key-'+scatterId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Category</label><select id="category-scatter' +scatterId+'" class="from-key-'+scatterId+'"></select></div>'+
                        '<div class="function-call" style="display:none;">scatterChartVisual,scatter-module-' +scatterId+ '</div>'+
                        '<button type="button" id="run-scatter'+scatterId+'" onclick="scatterChartVisual(\'scatter-module-' +scatterId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+scatterId+'" class="run" onclick="showTables(\'scatter-module-'+scatterId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+scatterId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-scatter-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><div id="scatter'+scatterId+'"></div></div></div>');
                }
                activeColumn('scatter-module-' + scatterId);
            });

            //  prediction
            $("#prediction").click(function(e){
                //loading cell time//
                setTimeout(function(){
                    $('.loading-cell').fadeOut();
                }, 1000);

                var predictionId = $('.prediction').length + 1;
                var totalcolumn = $(".panel-coloumn").length + 1;
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn prediction" id="prediction-module-' +predictionId+ '"><h4>[<span id="statementId-' + predictionId + '"></span>] Prediction</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<textarea id="markdown-predictionId'+predictionId+'"></textarea>'+
                        '<div class="inpt-grp"><label>Model</label><select id="moldesave'+predictionId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>Context Name</label><input type="text" id="context-name-prediction' +predictionId+'" class="ip1"></div> '+
                        '<div class="inpt-grp"><label>Token</label><input type="text" id="token-prediction' +predictionId+'" class="ip1"></div> '+
                        '<button type="button" id="pubs-prediction'+predictionId+'" class="publish-btn">Publish</button>'+
                        '<button type="button" id="del'+predictionId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-column-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn prediction" id="prediction-module-' +predictionId+ '"><h4>[<span id="statementId-' + predictionId + '"></span>] Prediction</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        '<textarea id="markdown-predictionId'+predictionId+'"></textarea>'+
                        '<div class="inpt-grp"><label>Input Data</label><select id="input-prediction'+predictionId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>Select Feature Col</label><select id="select-feature-prediciton'+predictionId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp"><label>Model</label><select id="model-prediction'+predictionId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<button type="button" id="pubs-prediction'+predictionId+'" class="run">Preview</button>'+
                        '<button type="button" id="pubs-prediction'+predictionId+'" class="save"><i class="fas fa-save"></i></button>'+
                        '<button type="button" id="del'+predictionId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-column-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">error-ouput</p></div></div>');
                }
                var simplemdepredictionId = new SimpleMDE({
                    autofocus: true,
                    blockStyles: {
                        bold: "__",
                        italic: "_"
                    },
                    element: document.getElementById("markdown-predictionId"+predictionId),
                    forceSync: true,
                    hideIcons: ["guide", "heading"],
                    indentWithTabs: false,
                    insertTexts: {
                        horizontalRule: ["", "\n\n-----\n\n"],
                        image: ["![](http://", ")"],
                        link: ["[", "](http://)"],
                        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                    },
                    lineWrapping: false,
                    parsingConfig: {
                        allowAtxHeaderWithoutSpace: true,
                        strikethrough: false,
                        underscoresBreakWords: true,
                    },
                    placeholder: "Type your documentation here...",
                    previewRender: function(plainText) {
                        return customMarkdownParser(plainText); // Returns HTML from a custom parser
                    },
                    previewRender: function(plainText, preview) { // Async method
                        setTimeout(function(){
                            preview.innerHTML = customMarkdownParser(plainText);
                        }, 250);
    
                        return "Loading...";
                    },
                    promptURLs: true,
                    renderingConfig: {
                        singleLineBreaks: false,
                        codeSyntaxHighlighting: true,
                    },
                    shortcuts: {
                        drawTable: "Cmd-Alt-T"
                    },
                    showIcons: ["code", "table"],
                    spellChecker: false,
                    status: false,
                    styleSelectedText: false,
                    tabSize: 4,
                    toolbar: false,
                    toolbarTips: false,
                });
            });

             //  wordcloud
            $("#wordcloud").click(function(e){
                //loading cell time//
                // setTimeout(function(){
                //     $('.loading-cell').fadeOut();
                // }, 1000);
                var totalcolumn = $(".panel-coloumn").length + 1;
                // var wordcloudId = $('.wordcloud').length + 1;
                var wordcloudId = getActiveId("wordcloud");
                showTables('wordcloud-module-' + wordcloudId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn wordcloud" id="wordcloud-module-' +wordcloudId+ '"><h4>[<span id="statementId-' + wordcloudId + '"></span>] Word Cloud</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<div class="inpt-grp"><label>Dataframe</label><select id="dataframe-wordcloud' +wordcloudId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'wordcloud-module-' + wordcloudId + '\',\'from-wordcloud-' + wordcloudId + '\',\'from-key-' + wordcloudId + '\',true)" class="from-wordcloud-'+wordcloudId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'wordcloud-module-'+wordcloudId+'\')">Refresh Datatable</button></div><br/>'+
                        // '<div class="inpt-grp"><label>Text Column</label><select id="text-column-wordcloud' +wordcloudId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Text Column</label><select id="column-wordcloud' +wordcloudId+'" class="from-key-'+wordcloudId+'"></select></div>'+
                        '<div class="function-call" style="display:none;">wordCloud,wordcloud-module-' +wordcloudId+ '</div>'+
                        '<button type="button" id="run-wordcloud'+wordcloudId+'" onclick="wordCloud(\'wordcloud-module-' +wordcloudId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+wordcloudId+'" class="run" onclick="showTables(\'wordcloud-module-'+wordcloudId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+wordcloudId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        // '<div class="progress"><div id="prog-bar-wordcloud-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        // '</div>'+
                        // '<div class="output-card" style="display: none"><div class="output-card__inner"><div id="wordClouds'+wordcloudId+'"></div></div></div>');
                        '<div class="progress"><div id="prog-bar-scatter-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="wordClouds'+wordcloudId+'"></div></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn wordcloud" id="wordcloud-module-' +wordcloudId+ '"><h4>[<span id="statementId-' + wordcloudId + '"></span>] Word Cloud</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<div class="inpt-grp"><label>Dataframe</label><select id="dataframe-wordcloud' +wordcloudId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'wordcloud-module-' + wordcloudId + '\',\'from-wordcloud-' + wordcloudId + '\',\'from-key-' + wordcloudId + '\',true)" class="from-wordcloud-'+wordcloudId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'wordcloud-module-'+wordcloudId+'\')">Refresh Datatable</button></div><br/>'+
                        // '<div class="inpt-grp"><label>Text Column</label><select id="text-column-wordcloud' +wordcloudId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Text Column</label><select id="column-wordcloud' +wordcloudId+'" class="from-key-'+wordcloudId+'"></select></div>'+
                        '<div class="function-call" style="display:none;">wordCloud,wordcloud-module-' +wordcloudId+ '</div>'+
                        '<button type="button" id="run-wordcloud'+wordcloudId+'" onclick="wordCloud(\'wordcloud-module-' +wordcloudId+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+wordcloudId+'" class="run" onclick="showTables(\'wordcloud-module-'+wordcloudId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+wordcloudId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-scatter-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="wordClouds'+wordcloudId+'"></div></div></div>');
                }
                activeColumn('wordcloud-module-' + wordcloudId);
            });

            $("#decisiontree-visual").click(function(e){
                
                 //loading cell time//
                setTimeout(function(){
                    $('.loading-cell').fadeOut();
                }, 1000);
                var totalcolumn = $(".panel-coloumn").length + 1;
                var dectreevisual = $('.dectreevisual').length + 1;
                // showTables('dectreevisual-module-' + barchartId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                    '<div class="panel-coloumn barchart" id="dectreevisual-module-' +dectreevisual+ '"><h4>[<span id="statementId-' + dectreevisual + '"></span>] Decision Tree Visual</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Filled</label><select id="filled-dectreevisual' +dectreevisual+'"><option value="True">True</option><option value="False">False</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>roundedCorners</label><select id="roundedCorners-dectreevisual' +dectreevisual+'"><option value="True">True</option><option value="False">False</option></select></div>'+
                    
                    '<div class="inpt-grp thre-width"><label>roundLeaves</label><select id="roundLeaves-dectreevisual' +dectreevisual+'"><option value="True">True</option><option value="False">False</option></select></div>'+
                    '<button type="button" id="run-dectreevisual'+dectreevisual+'" onclick="decisionTreeVisual(\'dectreevisual-module-' +dectreevisual+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    // '<button type="button" id="refresh'+dectreevisual+'" class="run" onclick="showTables(\'dectreevisual-module-'+dectreevisual+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+dectreevisual+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-barchart-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="dectreevisual'+dectreevisual+'"></div></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                     '<div class="panel-coloumn barchart" id="dectreevisual-module-' +dectreevisual+ '"><h4>[<span id="statementId-' + dectreevisual + '"></span>] Decision Tree Visual</h4>'+
                    //loading-bar//
                    '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                    //loading-bar//
                    '<div class="inpt-grp thre-width"><label>Filled</label><select id="filled-dectreevisual' +dectreevisual+'"><option value="True">True</option><option value="False">False</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>roundedCorners</label><select id="roundedCorners-dectreevisual' +dectreevisual+'"><option value="True">True</option><option value="False">False</option></select></div>'+
                    '<div class="inpt-grp thre-width"><label>roundLeaves</label><select id="roundLeaves-dectreevisual' +dectreevisual+'"><option value="True">True</option><option value="False">False</option></select></div>'+
                    '<button type="button" id="run-dectreevisual'+dectreevisual+'" onclick="decisionTreeVisual(\'dectreevisual-module-' +dectreevisual+ '\')" class="run"><i class="fas fa-play" title="Run Process"></i></button>'+
                    '<button type="button" id="refresh'+dectreevisual+'" class="run" onclick="showTables(\'dectreevisual-module-'+dectreevisual+'\')">Refresh Data Table</button>'+
                    '<button type="button" id="del'+dectreevisual+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                    '<div class="stat-progress" style="display:none;">'+
                    '<span class="stat">Progress</span>'+
                    '<div class="progress"><div id="prog-bar-barchart-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                    '</div>'+
                    '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="dectreevisual'+dectreevisual+'"></div></div></div>');
                }

            });

            //  maps
            $("#maps").click(function(e){
                //loading cell time//
                setTimeout(function(){
                    $('.loading-cell').fadeOut();
                }, 1000);
                

                var totalcolumn = $(".panel-coloumn").length + 1;
                // var mapsId = $('.maps').length + 1;
                var mapsId = getActiveId("maps");
                showTables('maps-module-' + mapsId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn maps" id="maps-module-' +mapsId+ '"><h4>[<span id="statementId-' + mapsId + '"></span>] Maps</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                        // '<div class="inpt-grp"><label>Dataframe</label><select id="dataframe-maps' +mapsId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        // '<div class="inpt-grp"><label>Longitude</label><select id="Longitude-maps' +mapsId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        // '<div class="inpt-grp"><label>Latitude</label><select id="Latitude-maps' +mapsId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        // '<div class="inpt-grp"><label>Caption</label><select id="caption-maps' +mapsId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        // '<div class="inpt-grp"><label>Color by</label><select id="Color-by-maps' +mapsId+'"><option value="sql">SQL</option><option value="mysql">MYSQL</option></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'maps-module-' + mapsId + '\',\'from-maps-' + mapsId + '\',\'from-key-' + mapsId + '\',true)" class="from-maps-'+mapsId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'maps-module-'+mapsId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp thre-width"><label>Category</label><select id="category-maps' +mapsId+'" class="from-key-'+mapsId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Longitude</label><select id="longitude-maps' +mapsId+'" class="from-key-'+mapsId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Latitude</label><select id="latitude-maps' +mapsId+'" class="from-key-'+mapsId+'"></select></div>'+
                        // '<div class="inpt-grp"><label>Longitude</label><input type="text" id="longitude-maps' +mapsId+'" class="ip1"></div> '+
                        // '<div class="inpt-grp"><label>Latitude</label><input type="text" id="latitude-maps' +mapsId+'" class="ip1"></div> '+
                        '<div class="function-call" style="display:none;">maps,maps-module-' +mapsId+ '</div>'+
                        '<button type="button" id="run-maps'+mapsId+'" class="run" onclick="maps(\'maps-module-' +mapsId+ '\')"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+mapsId+'" class="run" onclick="showTables(\'maps-module-'+mapsId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+mapsId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-barchart-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div class="leaflet-maps" id="map'+mapsId+'"></div></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn maps" id="maps-module-' +mapsId+ '"><h4>[<span id="statementId-' + mapsId + '"></span>] Maps</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                       
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'maps-module-' + mapsId + '\',\'from-maps-' + mapsId + '\',\'from-key-' + mapsId + '\',true)" class="from-maps-'+mapsId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'maps-module-'+mapsId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp thre-width"><label>Category</label><select id="category-maps' +mapsId+'" class="from-key-'+mapsId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Longitude</label><select id="longitude-maps' +mapsId+'" class="from-key-'+mapsId+'"></select></div>'+
                        '<div class="inpt-grp thre-width"><label>Latitude</label><select id="latitude-maps' +mapsId+'" class="from-key-'+mapsId+'"></select></div>'+
                        // '<div class="inpt-grp"><label>Longitude</label><input type="text" id="longitude-maps' +mapsId+'" class="ip1"></div> '+
                        // '<div class="inpt-grp"><label>Latitude</label><input type="text" id="latitude-maps' +mapsId+'" class="ip1"></div> '+
                        '<div class="function-call" style="display:none;">maps,maps-module-' +mapsId+ '</div>'+
                        '<button type="button" id="run-maps'+mapsId+'" class="run" onclick="maps(\'maps-module-' +mapsId+ '\')"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+mapsId+'" class="run" onclick="showTables(\'maps-module-'+mapsId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+mapsId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-barchart-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div class="leaflet-maps" id="map'+mapsId+'"></div></div></div>');
                }

                activeColumn('maps-module-' + mapsId);
            });

            //  Correlation Analysis
            $("#correlationanalysis").click(function(e){
                //loading cell time//
                setTimeout(function(){
                    $('.loading-cell').fadeOut();
                }, 1000);
                

                var totalcolumn = $(".panel-coloumn").length + 1;
                // var mapsId = $('.maps').length + 1;
                var correlationId = getActiveId("correlation");
                showTables('correlation-module-' + correlationId);
                if ($("#canvas-template").children(".panel-coloumn").hasClass("active-column")) {
                    $(".active-column")
                    .after(
                        '<div class="panel-coloumn correlation" id="correlation-module-' +correlationId+ '"><h4>[<span id="statementId-' + correlationId + '"></span>] Correlation Analysis</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                       
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'correlation-module-' + correlationId + '\',\'from-correlation-' + correlationId + '\',\'from-key-' + correlationId + '\',true)" class="from-correlation-'+correlationId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'correlation-module-'+correlationId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp thre-width"><label>OutputCol</label><select id="features-correlation'+correlationId+'" class="from-key-'+correlationId+'"></select></div>'+
                        '<div class="function-call" style="display:none;">correlation,correlation-module-' +correlationId+ '</div>'+
                        '<button type="button" id="correlation-maps'+correlationId+'" class="run" onclick="correlation(\'correlation-module-' +correlationId+ '\')"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+mapsId+'" class="run" onclick="showTables(\'maps-module-'+mapsId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+correlationId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-correlation-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="correlation'+correlationId+'"></div></div></div>');
                }
                else{
                    $("#canvas-template")
                    .append(
                        '<div class="panel-coloumn correlation" id="correlation-module-' +correlationId+ '"><h4>[<span id="statementId-' + correlationId + '"></span>] Correlation Analysis</h4>'+
                        //loading-bar//
                        '<div class="loading-cell"><h4>Please wait ...</h4></div>'+
                        //loading-bar//
                       
                        '<div class="inpt-grp thre-width"><label>Data Table </label><select onchange="describeTable(\'correlation-module-' + correlationId + '\',\'from-correlation-' + correlationId + '\',\'from-key-' + correlationId + '\',true)" class="from-correlation-'+correlationId+'"></select></div>'+
                        '<div class="inpt-grp"><button class="refresh-data" onclick="showTables(\'correlation-module-'+correlationId+'\')">Refresh Datatable</button></div><br/>'+
                        '<div class="inpt-grp thre-width"><label>OutputCol</label><select id="features-correlation'+correlationId+'" class="from-key-'+correlationId+'"></select></div>'+
                        '<div class="function-call" style="display:none;">correlation,correlation-module-' +correlationId+ '</div>'+
                        '<button type="button" id="correlation-maps'+correlationId+'" class="run" onclick="correlation(\'correlation-module-' +correlationId+ '\')"><i class="fas fa-play" title="Run Process"></i></button>'+
                        // '<button type="button" id="refresh'+mapsId+'" class="run" onclick="showTables(\'maps-module-'+mapsId+'\')">Refresh Data Table</button>'+
                        '<button type="button" id="del'+correlationId+'" class="del"><i class="far asasasas fa-trash-alt"></i></button>'+
                        '<div class="stat-progress" style="display:none;">'+
                        '<span class="stat">Progress</span>'+
                        '<div class="progress"><div id="prog-bar-correlation-'+totalcolumn+'" class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'+
                        '</div>'+
                        '<div class="output-card" style="display: none"><div class="output-card__inner"><p class="error-ouput">running . . .</p><div id="correlation'+correlationId+'"></div></div></div>');
                }

                activeColumn('correlation-module-' + correlationId);
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
                var column = $(this).find('.function-call').text();
                console.log("masuk on : ",column);
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
            
            var project_file = $('#projectfile').data("projectfile");
            // //alert(project_file);
            // ////console.log("tes : ",project_file);
            // if(projectfile == None"){
            //     $('#canvas-template').html();
            // }else{
                // $('#canvas-template').html(project_file);
            // }
            //
            if(project_file == "None"){
                ////console.log("masuk");
                $('#canvas-template').html();
            }else{
                ////console.log("tidak masuk");
                $('#canvas-template').html(project_file);
                $('.CodeMirror').remove();
                    $('.markdown-txtarea').each(function(){
                        var simplemde = new SimpleMDE({
                            element: this,
                        });
                        simplemde.render();
                });
            }
            ////console.log('livy_id: ---------------------' + livy_id);


            //del notif//
            $(document).on('click', '#close-ntf', function(e) {
                $(this).parents(".notification").remove();
            });
            $("#close-ntf").click();

           

            // $(window).scroll(function(){
            //   ////console.log($(window).scrollTop() );

            //   if ($(window).scrollTop() == 0){
            //       $("#left-panel").stop().animate({"marginTop": ($(window).scrollTop() + 0) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "fast" )  
            //   }
            //   else{
            //       $("#left-panel").stop().animate({"marginTop": ($(window).scrollTop() - 100) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "fast" );
            //   }
            // });
           
            
        },
    };
    var livy_id = 0;
    $(document).ready(function() {

        // var editor;
        global_functions.init();
        $('.query-editor').each(function( index ) {
            editor = ace.edit(this);
            editor.setValue($(this).parent().find('.output-save').html()); 
            editor.setOptions({
                mode: 'ace/mode/python', // string: path to language mode 
                maxLines: 100
            });
        });


    });
    //SAVE CLICK FUNCTION
    $("#float-save").click(function(){
        if(changeTextarea() === "success"){
            var file = $('input[type=file]');
            var txtarea = $('.txt-area');
            file.attr('value', file.val());
            txtarea.attr('value', txtarea.val());
            var projectFile =  $('#canvas-template').html();
            saveProjectFile(projectFile);
            return false;
        }
    });

    //STOP CLICK FUNCTION
    $("#float-stop").click(function(){
        stopSession();
        return false;
    });

     //build button//
   

     // $('textarea').on('keyup', function(e) {
     //      var abc = document.getElementById("markdown-newId1").value;
     //      console.log("masuk : ",abc)
     //    })
    // savefunction markdown
    // $(document).on('click', '.save-markdown', function(e) {
    //     // $(this).parent('.container-hide-mde').remove();
    //     var abc = document.getElementById("markdown-newId1").value;
    //     // console.log("abc : ",abc);
    //     // var mdetextarea = $(this).parent('.container-hide-mde').children('.markdown-txtarea');
    //     $('#import-db-module-1').find('#markdown-newId1').html(abc);
    //     $('#import-db-module-1').find('#markdown-newId1').attr("value",abc)

    //     // $('import-db-module-1').children('.container-hide-mde').find('.markdown-txtarea').html("hahahahahahahahahaha");
    //     // $('.markdown-txtarea').html("hahahahahahahahahaha");

    //     // abc.attr('value', abc).html(abc);
    // });
    // $(".save-markdown").click();

    $(document).ready(function(){
        
    });

})(jQuery);


var gateway = "http://surveyor.pintar.ai/";
// var gateway = "http://35.232.38.183:5000/";
// var gateway ="http://127.0.0.1:5006/"
// var gateway = "https://pintar.ai/";
// var gateway = "http://88.99.253.49:5005/";
var user_id =  $('#sessionname').data("sessionname");
var project_name = $('#projectname').data("projectname");
var project_description = $('#projectdescription').data("projectdescription");
var livy_id = $('#livyid').data("livyid").toString();
var num_of_core = $('#numofcore').data("numofcore");
var num_of_mem = $('#numofmem').data("numofmem");
var is_new = $('#isnew').data("isnew");
// var project_file = $('#projectfile').data("projectfile");

// $("#livy_id").text(livy_id);

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
var loopingDataViolin;
var loopingPipeline;
var getParamError;



function getCurrentSession(){
    return livy_id.toString();
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
    ////console.log('send request get check_statement' );
    $('#lab_status').text('busy');

    ajaxCallGet(url, cellId=runningCellId, toDo="getStatementState");
}


setInterval(function() {
    // var result = 
    ////console.log(user_id + livy_id + project_name);
    url = gateway + "check_session/" + user_id + "/" + livy_id + "/" + project_name;
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
    ////console.log(obj2.result.code);

    if (obj2.result.code != 'livy-0'){
        if (obj2.result.code == 'livy-5'){
            $('#lab_status').text('Session not found');
                showNotification('Notification', 'Session not found, try to recreate session', '1');
            $('#recreate_session').show();
        }
        $('.card-panel').attr('style','pointer-events:none');
        $('.float-side-bar').attr('style','pointer-events:none');
    }
    else{
        if(obj3.state == 'dead'){
            $('#recreate_session').show();
            $('#lab_status').text(obj3.state);
             $('.loading-process-page').removeClass('loading-show');
        }else if(obj3.state == 'idle'){
            $('#recreate_session').hide();
            $('#lab_status').text(obj3.state);
            $('.card-panel').attr('style','pointer-events:auto');
            $('.float-side-bar').attr('style','pointer-events:auto');
            // $('.loading-process-page').removeClass('loading-show');
        }else{
            $('#recreate_session').hide();
            $('#lab_status').text(obj3.state);
            // $('.loading-process-page').removeClass('loading-show');
        }
    }
}

function responseGetStatementState(cellId, result){
    var obj1 = JSON.stringify(result);
    var obj2 = JSON.parse(obj1);
    var obj3 = JSON.parse(obj2.result.description);
    var obj4 = obj3.output;
    // console.log('responseGetStatementState-->obj3--->',obj3);

    
    if (obj3.state=='available'){
        var status = obj4.status;
        // ////alert(status);
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
            else if (runningToDo=='convert'){
                responseConvert(cellId, obj4);
            }
            else if (runningToDo=='importFile'){
                responseImportFile(cellId, obj4);
            }
            else if (runningToDo=='customQuery'){
                responseCustomQuery(cellId, obj4);
            }
             else if (runningToDo=='hivetable'){
                responseHivetable(cellId, obj4);
            }
            else if (runningToDo=='pca'){
                responsePca(cellId, obj4);
            }
            else if (runningToDo=='getPipelineStages'){
                responseGetPipelineStages(cellId, obj4);
            }
            else if (runningToDo=='vectorAssembler'){
                responseVectorAssembler(cellId, obj4);
            }
            else if (runningToDo=='hypothesis'){
                responseHypothesis(cellId, obj4);
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
            else if (runningToDo=='labelindexer'){
                responseLabelIndexer(cellId, obj4);
            }
            else if (runningToDo=='labelconverter'){
                responseLabelIndexer(cellId, obj4);
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
            else if (runningToDo=='saveModel'){
                responseSaveModel(cellId, obj4);
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
            else if (runningToDo=='decisionTreeVisual'){
                responseDecisionTreeVisual(cellId, obj4);
            }
            else if (runningToDo=='wordCloud'){
                responseWordCloud(cellId, obj4);
            }
            else if(runningToDo=='maps'){
                responseMaps(cellId, obj4);
            }
            else if(runningToDo=='correlation'){
                responseCorrelation(cellId, obj4);
            }
            // publis api

        }
        else if (status == 'error'){
            var ename = obj4.ename;
            var evalue = obj4.evalue;
            console.log("running : ",runningToDo);
            // console.log("masuk param : "+getParamError);
            // console.log("masuk param 2 : "+cellId);
            if(getParamError === 0){
                $('#' +runningCellId).children('.output-card').find('.output-card__inner').text(obj4['ename'] + " - " + obj4['evalue']);
                if(runningToDo == "saveModel"){
                    showNotification('Notification', 'Error save as model...', '1');
                }
            }else{
                $('#' +runningCellId).children('.output-card').find('.error-ouput').text(obj4['ename'] + " - " + obj4['evalue']);
            }
           
            $('.loading-process-page').removeClass('loading-show');
            // ////console.log('obj2', runningCellId, id, status, obj2);
        }

        // console.log("isi obj3",obj3);
        var progress = obj3.progress;
        var progress_new = progress*100;
        ////console.log("masuk sini : "+progress_new);
        var arrayId = cellId.split("-");
        var id = arrayId[arrayId.length - 1];
        var id_statement = obj3.id;
        var id_statement_new = id_statement + 1;

        $('#'+cellId).find('#statementId-'+id).html(id_statement_new);
        $('#'+runningCellId).children('.stat-progress').find('.progress-bar').attr('aria-valuenow', progress*100).attr('style','width: ' + progress*100 + '%');
        // $('#'+runningCellId).children('.stat-progress').find('.progress-bar').attr('style','width: ' + progress*100 + '%');
    }
    else if(obj3.state=='running' || obj3.state=='waiting'){
        var progress = obj3.progress;
        $('#'+runningCellId).children('.stat-progress').find('.progress-bar').attr('aria-valuenow', progress*100).attr('style','width: ' + progress*100 + '%');
        $('#'+runningCellId).children('.output-card').find('.error-ouput').text('running...');
        checkSession=false;
    }
}

function listenStatementResponse(cellId, response, toDo, paramError){
    var obj1 = JSON.parse(JSON.stringify(response));
    ////console.log('obj1', cellId, obj1.result.description);

    var obj2 = JSON.parse(obj1.result.description);
    var id = obj2.id;

    var state = obj2.state;
    var output = obj2.output;
    var progress = obj2.progress;
    ////console.log('obj2', id, state, output, progress, cellId);

    // $('#output-card' + cellId).text(id);
    checkSession = false;

    runningStatementId = id;
    runningCellId = cellId;
    runningToDo = toDo;
    getParamError = paramError;
    ////console.log("masuk listen statement : "+runningCellId);
}

/*
Create Session
*/
function createSession(is_new, num_of_core, num_of_mem){
    url = gateway + "create_session";

    var data = {"is_new": is_new,
                "user_id": user_id,
                "package_id": package_id,
                "project_name": project_name, 
                "project_description": project_description, 
                "encapsulation": encapsulation, //1-private //2-public 
                "num_of_core": num_of_core, 
                "num_of_memory": num_of_mem};

    ////console.log('create session', JSON.stringify(data));

    // alert("masuk sini : ");
    showNotification('Notification', 'Creating new Spark session, please wait...', '2');
    ajaxCallPost(url, JSON.stringify(data), cellId=0, sendFile=false, toDo="createSession");
    $('.loading-process-page').addClass('loading-show');
}


function responseCreateSession(response){
    var obj1 = response;
    ////console.log('obj1', obj1['result']);
    var obj2 = obj1.result.description;
    livy_id = obj1.result.description.id;

    if (obj1.result.code == 'livy-0' | obj1.result.code == 'livy-5' | obj1.result.code == 'livy-3'){
        ////console.log('obj2', obj2);
        ////console.log('livy_id', livy_id);

        // $("#livy_id").text(obj2.id);
        $("#lab_status").text(obj1.result.description.state);
        // console.log("cek : ",obj2.state);
        
        // $("#notification_area").text(obj1.result.code + ' - ' + JSON.stringify(obj2));
        if (obj2.state == 'starting'){
            sessionHealth = 1;
            showNotification('Notification', 'Starting new Spark session...', '3');
            var intervalId ;

            intervalId = setInterval(function () {
                var catch_param = $('#lab_status').text();
                if(catch_param=="idle"){
                     clearInterval(intervalId);
                     $('.loading-process-page').removeClass('loading-show');
                }
            }, 1000);
        }else{

        }
        checkSession = true;
    }
    else{
        $("#notification_area").text(obj1.result.code + ' - ' + obj1.result.description);
    }
    // $('.loading-process-page').removeClass('loading-show');
}

/*
Save Project File
*/
function saveProjectFile(projectFile, type=0){
    url = gateway + "save_project";
    showNotification('Notification', 'Saving project...', '2');

    var data = {"user_id": user_id,
                "project_name": project_name,
                "project_file": projectFile
                };
    

    if(type === 0){
        ajaxCallPost(url, JSON.stringify(data), cellId=0, sendFile=false, toDo="saveProjectFile");
        $('.loading-process-page').addClass('loading-show');
    }else{
        ajaxCallPost(url, JSON.stringify(data), cellId=1, sendFile=false, toDo="saveProjectFile");
    }
    
}


function responseSaveProject(response, cellId){
    // $("#notification_area").text(response.result);
    ////console.log("response save project",response);
    
    showNotification('Notification', response.result, '3');
    if(cellId === 0){
        $('.loading-process-page').removeClass('loading-show');
    }  
    
    
    ////console.log(response);
}
/*
Import Database
*/
function importDatabase(cellId, txtId){
    // console.log("cell id : "+cellId);
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
    // ////alert(JSON.stringify(data));
    ////console.log("import file :"+runningCellId);
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "importDatabase");
    saveText(cellId, txtId);
    // timeLoading(cellId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).find('#statementId-'+id).html("*");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('.loading-process-page').addClass('loading-show');
}   

function responseImportDatabase(cellId, response){
    ////console.log(response);
    saveText(cellId);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}



/*
Show Tables
*/
function showTables(cellId){
    url = gateway + "show_tables";
    var arrayId = cellId.split("-");
    var id = arrayId[arrayId.length - 1];

    loopingGetValueShowTablesEven2 = 0;

    var data = {"user_id": user_id,
                "livy_id": livy_id};
    ////console.log('show table',JSON.stringify(data));
    // timeLoading(cellId, "showTables");
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "showTables");
    $('#'+cellId).find('#statementId-'+id).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseShowTables(cellId, response){
    ////console.log(response);
    var obj1 = response;
    loopingGetValueShowTablesEven2 = loopingGetValueShowTablesEven2 + 1;
    //console.log(loopingGetValueShowTablesEven2);
    // ////alert(cellId);
    var arrayId = cellId.split("-");
    var moduleName =  arrayId[0];
    var selectId = arrayId[arrayId.length - 1];
    // console.log('obj1--responseShowTables', cellId, obj1);

    var param_catch ="";
    try{
        var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));
        param_catch="success";
    }catch(e){
        ////console.log("dalam catch : "+e);
        param_catch="failed";
    }

    

    var id = obj1.execution_count;
    var status = obj1.status;
    if(param_catch === "success"){
        if(loopingGetValueShowTablesEven2 % 2 === 0 || loopingGetValueShowTablesEven2 < 2){
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
            renderingIsFinished = true;

            loading("1"); 
        }
    
        
        $('#'+runningCellId).children('.output-card').find('.error-ouput').html(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'",""));
        $('.loading-process-page').removeClass('loading-show'); 
    }
    
    ////console.log('obj2', id, status, obj2);   
}

/*
Describe Table
*/
function describeTable(cellId, selectId, selectKeyId, isSelect){
    // ////alert('describe table');
    loopingGetValueDescribeEven2 = 0;
    loading("2",runningCellId);
    url = gateway + "describe_table";
    var arrayId = cellId.split("-");
    var id = arrayId[arrayId.length - 1];

    runningCellId = cellId;
    runningSelectId = selectId;
    runningSelectKeyId = selectKeyId;   
    runningIsSelect = isSelect;

    var arrayCellId = cellId.split("-");
    var arraySelectId = selectId.split("-");

    var table_name = $('#'+runningCellId).children('.inpt-grp').find('.' + runningSelectId).val();
    ////console.log('#'+runningCellId+selectId);
    // ////alert(runningCellName);
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name};
    ////console.log('describeTable', data);
    // ////alert(JSON.stringify(data));
    renderingIsFinished = false;
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "describeTable");
    $('#'+cellId).find('#statementId-'+id).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseDescribeTable(cellId, response){
    var obj1 = response;
    ////console.log("masuk kesini : "+cellId)
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 3];
    console.log("masuk kesin2 : "+selectId)
    loopingGetValueDescribeEven2 = loopingGetValueDescribeEven2 + 1;
    // ////console.log('obj1--responseShowTables', cellId, obj1);
    ////console.log(loopingGetValueDescribeEven2);
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
        ////console.log("dalam catch : "+e);
        param_catch="failed";
    }
    
    // ////console.log("tampilin disini obj coyyy : "+obj2)
    if (renderingIsFinished == false){
        if(runningIsSelect == false){
            $('#'+runningCellId).children('.no-selected-box').empty();
                // '<div class="checkbox-layout-inline"><input id="sel-col-1" class="sel-col-container" type="checkbox" name="colname" value="colnameA"> <label for="sel-col-1">Age</label></div>'+
            var checkBoxId = 1;
            ////console.log('checkSession--', checkSession);
            if(loopingGetValueDescribeEven2 % 2 === 0){
            // if(loopingGetValueDescribeEven2 % 2 === 0 || loopingGetValueDescribeEven2 < 2){
                if(param_catch === "success"){
                    if(selectId === "linechart"){
                        $('#'+runningCellId).children('.inpt-grp').find('.' + runningSelectKeyId).empty();
                        $('#'+runningCellId).children('.inpt-grp').find('.' + runningSelectKeyId).append('<option value="None">Select Column</option>');
                        ////console.log(obj2);
                        for (var column in obj2){
                        var checkboxStr = '<div class="checkbox-layout-inline" id="checkbox-' + cellId + '"><input id="sel-col-' + checkBoxId + '" class="sel-col-container" type="checkbox" name="' + cellId + '-columns[]" value="' +  obj2[column]["name"] + '"> <label for="sel-col-' + checkBoxId + '">' +  obj2[column]["name"] + '</label></div>';
                        $('#'+runningCellId).children('.no-selected-box').append(checkboxStr);
                        checkBoxId++;
                        $('#'+runningCellId).children('.inpt-grp').find('.' + runningSelectKeyId).append('<option value="' + obj2[column]["name"] +  '">' + obj2[column]["name"]  + '</option>');
                        }

                    }else if(selectId === "convert"){
                        $('#'+runningCellId).find('#table-convert').empty();
                        console.log("masuk dalam");
                        var tableStr = '<table class="table"><thead>'+
                                '<tr><th>Field Name</th><th>Field Type</th><th style="color: rgb(10,255,155)">New Field Name</th><th  style="color: rgb(10,255,155)">New Field Type</th></tr>'+
                                '</thead>';
                        for (var column in obj2){
                            tableStr +=
                                '<tbody>'+ 
                                '<tr><td><div class="inpt-grp"><input type="text" readonly value="' + obj2[column]["name"] +  '"></div></td>'+
                                '<td><div class="inpt-grp"><input type="text" readonly value="' + obj2[column]["type"] +  '"></div></td>'+
                                '<td><div class="inpt-grp"><input type="text" value="' + obj2[column]["name"] + '" placeholder="New Field Name"></div></td>'+
                                '<td><div class="inpt-grp"><input type="text" value="' + obj2[column]["type"] + '" placeholder="New Field Type"></div></td>'+
                                '</tr>'+
                                '</tbody>';

                        //checkBoxId++;
                        }
                        tableStr += '</table>';
                        console.log("id",runningCellId);
                        console.log("masuk table",tableStr);
                        $('#'+runningCellId).find('#table-convert').append(tableStr);
                    }else{
                        for (var column in obj2){
                        var checkboxStr = '<div class="checkbox-layout-inline" id="checkbox-' + cellId + '"><input id="sel-col-' + checkBoxId + '" class="sel-col-container" type="checkbox" name="' + cellId + '-columns[]" value="' +  obj2[column]["name"] + '"> <label for="sel-col-' + checkBoxId + '">' +  obj2[column]["name"] + '</label></div>';
                        $('#'+runningCellId).children('.no-selected-box').append(checkboxStr);
                        checkBoxId++;
                        }
                    }
                    loading("1");
                    renderingIsFinished = true;
                }
            }
           
        }else{
            $('#'+runningCellId).children('.inpt-grp').find('.' + runningSelectKeyId).empty();
            $('#'+runningCellId).children('.inpt-grp').find('.' + runningSelectKeyId).append('<option value="None">Select Column</option>');
            ////console.log(obj2);
            columnList = obj2;
            if(loopingGetValueDescribeEven2 % 2 === 0 || loopingGetValueDescribeEven2 < 2){
                if(param_catch === "success"){
                    for (var column in obj2){
                        // keys.push(k);
                        // ////console.log('#merge-module-' + runningSelectKeyId, runningSelectKeyId);
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
    $('.loading-process-page').removeClass('loading-show');   
}

/*
Publish API
*/
function publishApi(cellId, txtId){
    url = gateway + "publish_api";
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];

    var model= $('#modelsave' + selectId).val();
    var context= $('#context-name-publishApi' + selectId).val();
    var token= $('#token-publishApi' + selectId).val();
    var documentation= $('#documentation-publishApi' + selectId).val();
    var category=$('#category-publishApi'+selectId).val();
    var pricing=$('#pricing-publishApi' + selectId).val();
    var active=$('#active-publishApi' + selectId).val();
    var data = {"model": model,
                "context": context,
                "token": token,
                "documentation": documentation,
                "category": category,
                "pricing": pricing,
                "active": active};
    showNotification('Notification', 'Saving and publishing API...', '2');
    saveText(cellId, txtId);
    ajaxCallPost(url, JSON.stringify(data), cellId=0, sendFile=false, toDo="publishApi");
    $('.loading-process-page').addClass('loading-show');
    // $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    // $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    // $('#modelsave'+selectId).val("tambah");
    
}

function responsePublishApi(response){
    // ////console.log(response);
    // var obj1 = response;

    // // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    // var id = obj1.execution_count;
    // var status = obj1.status;
    // ////console.log('stageList 0');
    
    // showNotification('Notification', 'Save as publih api done...', '3');
    

    // var obj2 = obj1['data']['text/plain'];
    // $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2.result.description);
    ////console.log("response save project",response);
    showNotification('Notification', response.result, '3');
    $('.loading-process-page').removeClass('loading-show');  
    
    ////console.log(response);
}

/*
Convert Table
*/

function convertTable(cellId, txtId){
    url = gateway + "convert";
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-convert-' + selectId).val();
    // var table = $('.table').prop('outerHTML');
    // var table = document.getElementById("table-convert").innerHTML;
    var table = $('#'+cellId).find('#table-convert').html();

    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name":table_name,
                "table": table};

    ajaxCallPost(url, JSON.stringify(data), cellId, false, "convert");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseConvert(cellId, response){
    console.log("masuk convert")
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');

    ////console.log('obj2', runningCellId, id, status, obj2);
}
/*
Merge Tables
*/
function mergeTables(cellId, txtId){
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "mergeTables");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
    // $('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseMergeTables(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
Import FIle
*/
function importFile(cellId, txtId){
    url = gateway + "import_file";
    // ////alert(cellId);
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];

    var formData = new FormData();
    formData.append('file', $('#file-id-' + selectId)[0].files[0]);
    formData.append('delimiter', $('#delimiter-'+selectId).val());
    formData.append('header', $('#header-'+selectId).val());
    formData.append('user_id', user_id);
    formData.append('livy_id', livy_id);


    // ////alert(JSON.stringify(data));
    ajaxCallPost(url, formData, cellId, true, "importFile");
    saveText(cellId, txtId);
    ////console.log("import file :"+runningCellId);
    // $('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseImportFile(cellId, response){
    // ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
Select Column
*/
function selectcol(cellId, txtId){
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "selectcol");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseSelectCol(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
Select Row
*/
function selectRow(cellId, txtId){
    url = gateway + "select_row";
    // ////alert(cellId);
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

    // ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "row");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseSelectRow(cellId, response){
    // ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
Custom Query
*/
function customQuery(cellId, txtId){
    url = gateway + "custom_query";
    // ////alert(cellId);
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    // var table_name = $('#'+cellId).children('.inpt-grp').find('.from-row-' + selectId).val();
    var dataframe = $('#dataframe-name' + selectId).val();
    // var custom = $('#custom-query' + selectId).val();
    // var custom =  editor.getValue();
    var custom = $('#'+cellId).find('.output-save').html();
    console.log(custom)

    var data = {"user_id": user_id,
                "livy_id": livy_id,
                // "table_name": table_name,
                "dataframe": dataframe,
                "custom": custom};

    // ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "customQuery");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    // $('#'+cellId).find('.output-save').html(editor.getValue());
    $('.loading-process-page').addClass('loading-show');
}

function responseCustomQuery(cellId, response){
    ////console.log("in custom here");
    var obj1 = response;
    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    obj2 = obj2.replace("dataframe ", "");
    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
     // $('#'+runningCellId).children('.output-card').find('.error-ouput').html(obj2);

    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
Hive Table
*/
function hivetable(cellId, txtId){
    url = gateway + "hivetable";
    // ////alert(cellId);
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var dataframe = $('#dataframe-hivetable' + selectId).val();

    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "dataframe": dataframe
            };

    // ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "hivetable");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseHivetable(cellId, response){
    ////console.log("hivetable");
    var obj1 = response;
    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
     // $('#'+runningCellId).children('.output-card').find('.error-ouput').html(obj2);

    ////console.log('obj2', runningCellId, id, status, obj2);
}


/*
Vector Assembler
*/
function vectorAssembler(cellId, txtId){
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "vectorAssembler");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseVectorAssembler(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
Hypothesis Testing
*/
function hypothesis(cellId, txtId){
    url = gateway + "hypothesis";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-hypothesis-' + selectId).val();
    var output_col = $('#outputCol-hypothesis'+selectId).val();
    var labels = $('#labels-hypothesis'+selectId).val();
    
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "output_col": output_col,
                "labels": labels
               };

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "hypothesis");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseHypothesis(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/* Normalizer */
function normalizer(cellId, txtId){
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "normalizer");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseNormalizer(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/* Stopword */
function stopword(cellId, txtId){
    url = gateway + "stopword";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-stopword-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-stopword'+selectId).val();
    ////alert(output_col)
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "stopword");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseStopword(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/* Missing Value */
function missingval(cellId, txtId){
    url = gateway + "missingval";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-missval-' + selectId).val();
    var radioValue = $('#'+cellId).children('.inpt-grp').find('#missval' + selectId).val();
    // var radioValue = $("input[name='colname" + selectId + "']:checked").val();
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "radioValue": radioValue
               };

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "missingval");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseMissingVal(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/* MinMax */
function minmax(cellId, txtId){
    url = gateway + "minmax";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-minmax-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-minmax'+selectId).val();
    ////alert(output_col)
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "minmax");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseMinMax(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}


/* string indexer */
function stringindexer(cellId, txtId){
    url = gateway + "stringindexer";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-stringindexer-' + selectId).val();
    var input_col = [];
    $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
        input_col.push("'" + $(this).val() + "'");
    });
    var output_col = $('#outputCol-stringindexer'+selectId).val();
    // var handleInvalid = $('#handleInvalid-stringindexer'+selectId).val();
    // var stringOrderType = $('#stringOrderType-stringindexer'+selectId).val();

    ////alert(output_col)
    // var input_col = [];
    // $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
    //     input_col.push("'" + $(this).val() + "'");
    // });
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "input_col" : input_col,
                "output_col": output_col
                // "handleInvalid" : handleInvalid,
                // "stringOrderType": stringOrderType
               };

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "stringindexer");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseStringIndexer(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}
/* label indexer */
function labelindexer(cellId, txtId){
    url = gateway + "labelindexer";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-labelindexer-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-labelindexer'+selectId).val();
    var handleInvalid = $('#handleInvalid-labelindexer'+selectId).val();
    var stringOrderType = $('#stringOrderType-labelindexer'+selectId).val();

    ////alert(output_col)
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "labelindexer");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseLabelIndexer(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/* label converter */
function labelConverter(cellId, txtId){
    url = gateway + "labelconverter";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-labelconverter-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-labelconverter'+selectId).val();
    var labels = $('#labels-labelconverter'+selectId).val();

    ////alert(output_col)
    // var input_col = [];
    // $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
    //     input_col.push("'" + $(this).val() + "'");
    // });
    
    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "table_name": table_name,
                "input_col" : input_col,
                "output_col": output_col,
                "labels" : labels
               };

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "labelconverter");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseLabelConverter(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}
// /* free query*/
// function freequery(cellId){
//     url = gateway + "freequery";

//     var arrayId = cellId.split("-");
//     var query = $('#'+cellId).children('.inpt-grp').find('.').val();
  

//     ////alert(output_col)
//     // var input_col = [];
//     // $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
//     //     input_col.push("'" + $(this).val() + "'");
//     // });
    
//     var data = {"user_id": user_id,
//                 "livy_id": livy_id,
//                 "table_name": table_name,
//                 "input_col" : input_col,
//                 "output_col": output_col,
//                 "labels" : labels
//                };

//     ////alert(JSON.stringify(data));
//     ajaxCallPost(url, JSON.stringify(data), cellId, false, "labelconverter");
//     $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
//     $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
//     //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
// }

// function responseLabelConverter(cellId, response){
//     ////console.log(response);
//     var obj1 = response;

//     // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

//     var id = obj1.execution_count;
//     var status = obj1.status;
//     var obj2 = obj1['data']['text/plain'];
//     // obj2 = obj2.replace(/\n/g, "<br>");
//     // obj2 = obj2.replace(/"/g, "");
//     // obj2 = obj2.replace(/None/g, "");
//     // obj2 = obj2.replace(/\s/g, "&nbsp;");
//     obj2 = obj2.replace("dataframe ", "");

//     $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
//     $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
//     ////console.log('obj2', runningCellId, id, status, obj2);
// }
/* OneHot */
function onehot(cellId, txtId){
    url = gateway + "onehot";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-onehot-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-onehot'+selectId).val();
    ////alert(output_col)
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "onehot");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseOneHot(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/* Bucketizer */
function bucketizer(cellId, txtId){
    url = gateway + "bucketizer";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-bucket-' + selectId).val();
    var split = $('#split-bucket'+selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-bucket'+selectId).val();
    ////alert(output_col)
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "bucketizer");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseBucketizer(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/* Standard Scaler */
function standardscaler(cellId, txtId){
    url = gateway + "standardscaler";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-scaler-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-scaler'+selectId).val();
    var withStd = $('#withStd'+selectId).val();
    var withMean = $('#withMean'+selectId).val();
    ////alert(output_col)
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "standardscaler");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();
}

function responseStandardScaler(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/* Tokenizer */

function tokenizer(cellId, txtId){
    url = gateway + "tokenizer";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-tokenizer-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-tokenizer'+selectId).val();
    ////alert(output_col)
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "tokenizer");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
    //$('#'+runningCellId).children('.output-card').find('.error-ouput').empty();  
}

function responseTokenizer(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/* Hashing Tf */
function hashingTf(cellId, txtId){
    url = gateway + "hashingTf";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-hashingTf-' + selectId).val();
    var num_of_features = $('#num_of_features-hashingTf'+selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-hashingTf'+selectId).val();
    ////alert(output_col)
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "hashingTf");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseHashingTf(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/* idf */
function idf(cellId, txtId){
    url = gateway + "idf";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-idf-' + selectId).val();
    var min_doc_freq = $('#min_doc_freq-idf'+selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-idf'+selectId).val();
    ////alert(output_col)
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "idf");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseIdf(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/* Count Vectorizer */
function countvectorizer(cellId, txtId){
    url = gateway + "countvectorizer";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-cv-' + selectId).val();
    var input_col = $('#'+cellId).children('.inpt-grp').find('.from-key-' + selectId).val();
    var output_col = $('#outputCol-cv'+selectId).val();
    ////alert(output_col)
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "cv");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseCountVectorizer(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
K -Means
*/
function kmeans(cellId, txtId){
    url = gateway + "kmeans";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-kmeans-' + selectId).val();
    var features_col= $('#featuresCol-kmeans' + selectId).val();
    // var label_col= $('#labelCol-kmeans' + selectId).val();
    var prediction_col= $('#predictionCol-kmeans' + selectId).val();
    // var init_mode= $('#initMode-kmeans' + selectId).val();
    // var init_steps= $('#initSteps-kmeans' + selectId).val();
    // var tol= $('#tol-kmeans' + selectId).val();
    var k= $('#k-kmeans' + selectId).val();
    // var max_iter= $('#maxIter-kmeans' + selectId).val();
    var seed= $('#seed-kmeans' + selectId).val();
    // var distance_measure= $('#distanceMeasure-kmeans' + selectId).val();

    data ={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "features_col":features_col,
        // "label_col":label_col,
        "prediction_col":prediction_col,
        // "init_mode":init_mode,
        // "tol":tol,
        "k":k,
        // "max_iter":max_iter,
        "seed":seed
        // "distance_measure":distance_measure
    }

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "kmeans");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseKmeans(cellId, response){
    ////console.log(response);
    var obj1 = response;

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
Gaussian Mixture Model
*/
function gmm(cellId, txtId){
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "gmm");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseGmm(cellId, response){
    ////console.log(response);
    var obj1 = response;


    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
Linear Regression
*/
function linearRegression(cellId, txtId){
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "linearRegression");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseLinearRegression(cellId, response){
    ////console.log(response);
    var obj1 = response;


    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}


/*
Logistic Regression
*/
function logisticRegression(cellId, txtId){
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "logisticRegression");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseLogisticRegression(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
Decision Tree
*/
function decisionTree(cellId, txtId){
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "decisionTree");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseDecisionTree(cellId, response){
    ////console.log(response);
    var obj1 = response;

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // obj2 = obj2.replace(/\s/g, "&nbsp;");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
Naive Bayes
*/
function naiveBayes(cellId, txtId){
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "naiveBayes");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseNaiveBayes(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
Random Forest
*/
function randomForest(cellId, txtId){
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "randomForest");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseRandomForest(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
FPGrowth
*/
function fpgrowth(cellId, txtId){
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "fpGrowth");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseFpGrowth(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
Linear SVC
*/
function linearsvc(cellId, txtId){
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "linearSvc");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseLinearSvc(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
ARIMA
*/
function arima(cellId, txtId){
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
    var business = $('#business-arima' + selectId).val();
    var by = $('#by-arima' + selectId).val();
   
    alert ("tes : "+by);
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
        "scoring":scoring,
        "business":business,
        "by":by
    };

    //alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "arima");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseArima(cellId, response){
    ////console.log(response);
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

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}

/*
PCA
*/
function pca(cellId, txtId){
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

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "pca");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responsePca(cellId, response){
    ////console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    obj2 = obj2.replace("dataframe ", "");

    $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();
    $('.loading-process-page').removeClass('loading-show');
    ////console.log('obj2', runningCellId, id, status, obj2);
}
/*
Get Pipeline Stages
*/
function getPipelineStages(cellId, txtId){
    loopingPipeline = 0;
    url = gateway + "get_pipeline_stages";
    ////console.log('getPipelineStages');
    
    var data = {"user_id": user_id,
                "livy_id": livy_id};

    ajaxCallPost(url, JSON.stringify(data), cellId, false, "getPipelineStages");
    saveText(cellId, txtId);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('.loading-process-page').addClass('loading-show');
}

function responseGetPipelineStages(cellId, response){
    ////console.log(response);
    var obj1 = response;
    loopingPipeline = loopingPipeline + 1;
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));
    //console.log("jumlah looping : ",loopingPipeline);
    var id = obj1.execution_count;
    var status = obj1.status;
    ////console.log('stageList 0');

    var obj2 = obj1['data']['text/plain'];
    // obj2 = obj2.replace(/\n/g, "<br>");
    // obj2 = obj2.replace(/"/g, "");
    // obj2 = obj2.replace(/None/g, "");
    // ////console.log('stageList 1');

    var stageList = JSON.parse(obj2);
    //console.log('stageList--------------------', stageList.stages);
    // $('#'+cellId).children('.inpt-grp').find('.from-saveModel-' + selectId).append('<option value="None">Select Table</option>');
    for (var k in stageList.stages){
        // keys.push(k);
        if(loopingPipeline % 2 === 0 || loopingPipeline < 2){
        // if(loopingPipeline % 2 === 0){
            $('#'+cellId).children('.multiselect-item').find('#sbOne'+selectId).append('<option value="' + stageList.stages[k] +  '">' + stageList.stages[k] + '</option>');
            // $('#'+cellId).children('.inpt-grp').find('.from-saveModel-' + selectId).append('<option value="' + stageList.stages[k] +  '">' + stageList.stages[k] + '</option>');
            showTables('saveModel-module-' + selectId);
        }
    } 
    // $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2);
    // $('#'+cellId).children('.output-card').find('.output-card__inner').find('.dataframe').DataTable();

    // ////console.log('obj2', runningCellId, id, status, obj2);
    $('.loading-process-page').removeClass('loading-show');
}
/*
Save Model
*/
function saveModel(cellId, txtId){
    console.log("masuk sini");
    url = gateway + "save_model";
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    // //console.log(cellId);

    var stages = $('#'+cellId).find('#sbTwo'+selectId+'>option').map(function() { return $(this).val(); });
    // //console.log("masuk : ",stages);

    new_stages = []
    for(i=0; i < stages.length; i++){
        new_stages.push(stages[i]);
    }
    // //console.log("masuk 2 : ",new_stages);
    // var stages = $('#'+cellId).find('#sbTwo'+selectId).val();
    // var stages = [];
    // $('#'+cellId).each($('#sbTwo'+selectId).children('option'), function() {
    //     stages.push($(this).attr("id"));
    // });
    // alert(stages.join(", "));
    var fileName = $('#'+cellId).find('#filename-saveModel'+selectId).val();
    var dataframe = $('#'+cellId).find('#dataframe-saveModel'+selectId).val();

    var data = {"user_id": user_id,
                "livy_id": livy_id,
                "file_name": fileName,
                "stages": new_stages,
                "dataframe": dataframe
            };

    ajaxCallPost(url, JSON.stringify(data), cellId, false, "saveModel");
    saveText(cellId, txtId);
    showNotification('Notification', 'Saving pipeline as a model...', '2');

    ////console.log(stages);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseSaveModel(cellId, response){
    // console.log(response);
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    ////console.log('stageList 0');
    showNotification('Notification', 'Save as model done...', '3');
    

    var obj2 = obj1['data']['text/plain'];
    // $('#'+cellId).children('.output-card').find('.output-card__inner').html(obj2.result.description);
    $('#'+cellId).children('.output-card').find('.output-card__inner').html("Save as model done...");
    $('.loading-process-page').removeClass('loading-show');
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
    // var y1 = $('#y1-linechart' + selectId).val();
    // var y2 = $('#y2-linechart' + selectId).val();
    var y = [];
    $("input[name='"+ cellId + "-columns[]']:checked").each(function () {
        y.push("'" + $(this).val() + "'");
    });

    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "x": x,
        "y":y
        // "y1": y1,
        // "y2": y2
    };
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "lineChartVisual", 1);

    ////alert(JSON.stringify(data));
    // $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#linechart'+selectId).empty();
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseLineChartVisual(cellId, response){
    ////console.log(response);
    ////console.log(cellId);
    var obj1 = response;
    $('#'+cellId).children('.output-card').find('.error-ouput').empty();
    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    obj2 = obj2.replace(/\bNaN\b/g, "null");
    var testing = JSON.parse(obj2);
    ////console.log('obj2', runningCellId, id, status, obj2);
    var arrayId = cellId.split("-");
    var number_id = arrayId[arrayId.length - 1];
    var name_module = arrayId[arrayId.length - 3];
    ////console.log("masuk y looping : ",testing.y);
    ////console.log("ukuran coba : ",testing.y.length);

    var value = new Array;

    var trace = [];
    for(var i=0;i < testing.y.length ; i++){
        ////console.log("masuk looping",testing.y[i]);
        value[i] = {'x':testing.x,
                    'y':testing.y[i].result,
                    'name':testing.y[i].name,
                    'type':'scatter'};
        trace.push(value[i]);
    }


    var arrayId = cellId.split("-");
    var number_id = arrayId[arrayId.length - 1];
    ////console.log(name_module+""+number_id);
    Plotly.newPlot('linechart'+number_id , trace);
    $('.loading-process-page').removeClass('loading-show');
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
    var agg = $('#agg-barchart' + selectId).val();

    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "index": index,
        "columns": columns,
        "agg": agg
    };

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "barChartVisual", 1);
    // $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#barchart'+selectId).empty();
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseBarChartVisual(cellId, response){
    ////console.log(response);
    ////console.log(cellId);
    var obj1 = response;
    $('#'+cellId).children('.output-card').find('.error-ouput').empty();
    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));
    var arrayId = cellId.split("-");
    var number_id = arrayId[arrayId.length - 1];
    var name_module = arrayId[arrayId.length - 3];
    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    var testing = JSON.parse(obj2);
    var cols = testing.columns;
    
    var agg = $('#agg-barchart' + number_id).val();


    x_new = []
    x_marker = []
    for(var h=0;h < testing.index.length ; h++){
        var random_color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        x_new.push(testing.data[h][0]);
        x_marker.push(random_color);
    }

    var value = new Array;
    var trace = [];
    if(agg === "count"){
        cols.splice(0, 1);
        for(var i=0;i < testing.index.length ; i++){
            var new_data = testing.data[i];
            new_data.splice(0, 1);
            value[i] = {"x":cols,
                        "y":new_data,
                        "name":x_new[i],
                        "type":'bar'};
            trace.push(value[i]);
        }

        var tangkap = JSON.stringify(trace);
        var layout = {barmode: 'group'};
        Plotly.newPlot('barchart' + number_id, trace, layout, {showSendToCloud:true});
     }else{
        for(var i=0;i < testing.columns.length ; i++){
            var new_data = testing.data[i];
            // new_data.splice(0, 1);
            value[i] = {"x":testing.index,
                        "y":x_new,
                        "marker":{color:x_marker},
                        // "name":x_new[i],
                        "type":'bar'};
            trace.push(value[i]);
        }

        var tangkap = JSON.stringify(trace);
        Plotly.newPlot('barchart' + number_id, trace);
     }
     $('.loading-process-page').removeClass('loading-show');
    // $('#'+runningCellId).children('.output-card').find('.output-card__inner').html(obj2);
}

/*
Pie chart
*/
function pieChartVisual(cellId){
    url = gateway + "pie_chart_visual";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-piechart-' + selectId).val();
    var agg = $('#agg-piechart' + selectId).val();
    var values = $('#values-piechart' + selectId).val();

    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "agg": agg,
        "values": values
    };

    ajaxCallPost(url, JSON.stringify(data), cellId, false, "pieChartVisual", 1);
    // $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#piechart'+selectId).empty();
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responsePieChartVisual(cellId, response){
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));
    $('#'+cellId).children('.output-card').find('.error-ouput').empty();
    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    var testing = JSON.parse(obj2);
    var labels = [];
    var values = [];
    for(var k = 0; k < testing.data.length; k++){
        labels.push(testing.data[k][0]);
        values.push(testing.data[k][1]);
    }
    var value = {"values":values,
                "labels":labels,
                "type":'pie'};
    var trace = [value];
    var arrayId = cellId.split("-");
    var number_id = arrayId[arrayId.length - 1];
    var name_module = arrayId[arrayId.length - 3];
    var layout = {
                    showlegend: true,
                      legend: {
                        x: 1,
                        y: 1
                      },
                    height: 600,
                    width: 800
                    };
    Plotly.newPlot('piechart' + number_id, trace, layout);
    $('.loading-process-page').removeClass('loading-show');
    // $('#'+runningCellId).children('.output-card').find('.output-card__inner').html(obj2);
}

/*
Histogram chart
*/
function histogramChartVisual(cellId){
    url = gateway + "histogram_chart_visual";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-histogram-' + selectId).val();
    var x1 = $('#x1-histogram' + selectId).val();
    var x2 = $('#x2-histogram' + selectId).val();
    var new_x2;

    if(x2 === "None"){
        new_x2 = x1;
    }else{
        new_x2 = x2; 
    }
    // var values = $('#values-histogram' + selectId).val();

    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "x1": x1,
        "x2": new_x2
    };

    ////alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "histogramChartVisual", 1);
    // $('#'+cellId).children('.output-card').find('.output-card__inner').html("running . . .");
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#histogram'+selectId).empty();
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseHistogramChartVisual(cellId, response){
    var obj1 = response;
    $('#'+cellId).children('.output-card').find('.error-ouput').empty();
    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));

    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    var testing = JSON.parse(obj2);
    // var columns = JSON.stringify(testing.columns);
    // var new_columns = columns.replace(/"/g, "'");
    // var value = new Array;
    // var trace = [];
    // for(var i=0;i < testing.index.length; i++){
    //     value[i] = {
    //                 "x":testing.data[i],
    //                 "name":testing.index[i],
    //                 "type":'histogram'};
    //     trace.push(value[i]);
    // }

    // var arrayId = cellId.split("-");
    // var number_id = arrayId[arrayId.length - 1];
    // var name_module = arrayId[arrayId.length - 3];
    // var layout = {barmode: 'stack'};
    // Plotly.newPlot('histogram' + number_id, trace, layout);
    // $('.loading-process-page').removeClass('loading-show');
    // $('#'+runningCellId).children('.output-card').find('.output-card__inner').html(obj2);

    // var value = new Array;
    var arrayId = cellId.split("-");
    var number_id = arrayId[arrayId.length - 1];
    var name_module = arrayId[arrayId.length - 3];
    var x1 = $('#x1-histogram' + number_id).val();
    var x2 = $('#x2-histogram' + number_id).val();
    var trace = [];
    if(testing.x1[0] === testing.x2[0]){
        var value = {
                "x": testing.x1,
                "name":x1,
                "type": "histogram",
        };
        trace.push(value)
    }else{
        var value = new Array;
        for(var i=0;i<2; i++){
            var name ;
            var new_x;
            if(i === 0){
                name = x1;
                new_x = testing.x1;
            }else{
                name = x2;
                new_x= testing.x2;
            }
            value[i] = {
                        "x":new_x,
                        "name":name,
                        "type":'histogram'};
            trace.push(value[i]);
        }
    }
    

    console.log("trace yang diterima : ",trace)
    var layout = {barmode: 'stack'};
    Plotly.newPlot('histogram' + number_id, trace, layout);
    $('.loading-process-page').removeClass('loading-show');
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
    var z = $('#zaxis-violin' + selectId).val();

    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "x": x,
        "y": y,
        "z": z
    };

    //alert(JSON.stringify(data));
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "violinChartVisual", 1);
    // timeLoading(cellId);
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#violin'+selectId).empty();
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseViolinChartVisual(cellId, response){
    loopingDataViolin = loopingDataViolin + 1;
    if(loopingDataViolin % 2 === 0 || loopingDataViolin < 2){
        $('#'+cellId).children('.output-card').find('.error-ouput').empty();
        var obj1 = response;
        var id = obj1.execution_count;
        var status = obj1.status;
        var obj2 = obj1['data']['text/plain'];
        var testing = JSON.parse(obj2.replace(/\bNaN\b/g, "null"));

        const new_z = testing.z;
        const zDistinct = [...new Set(new_z)];

        var value_y = new Array;
        var new_y = []
        for(var i = 0; i < testing.y.length; i++){
            value_y[i] = [testing.y[i],testing.z[i]]
            new_y.push(value_y[i])
        }

        var value = new Array;
        var trace = [];
        for(var z = 0; z < zDistinct.length; z++){
            var new_yy = [];
            for(var i =0; i < new_y.length; i++){
                if(new_y[i][1] === zDistinct[z]){
                    new_yy.push(new_y[i][0]);
                }
            }
            var random_color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);


            value[z] =  {'type':'violin',
                        x:testing.x,
                        y:new_yy,
                        legendgroup:zDistinct[z],
                        scalegroup:zDistinct[z],
                        name: zDistinct[z],
                        box:{
                            visible:true
                            },
                        line:{
                            color: "'"+random_color+"'",
                            },
                        meanline: {
                            visible:true
                            }
                        }
            trace.push(value[z]);
        }

        var arrayId = cellId.split("-");
        var number_id = arrayId[arrayId.length - 1];
        var table_name = $('#'+cellId).children('.inpt-grp').find('.from-violin-' + number_id).val();
        var data = trace;
        var layout = {
              title: table_name,
              yaxis: {
                zeroline: false
              },
              violinmode: 'group'
            }

            Plotly.plot('violin' + number_id, data, layout);
        }

        $('.loading-process-page').removeClass('loading-show');
    // $('#'+runningCellId).children('.output-card').find('.output-card__inner').html(obj2);
}

function scatterChartVisual(cellId){
    url = gateway + "scatter_chart_visual";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-scatter-' + selectId).val();
    var x = $('#xaxis-scatter' + selectId).val();
    var y = $('#yaxis-scatter' + selectId).val();
    var z = $('#zaxis-scatter' + selectId).val();
    var category = $('#category-scatter' + selectId).val();

    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "x": x,
        "y": y,
        "z":z,
        "category":category
    };

    ajaxCallPost(url, JSON.stringify(data), cellId, false, "scatterChartVisual", 1);
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#scatter'+selectId).empty();
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseScatterChartVisual(cellId, response){
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));
    $('#'+cellId).children('.output-card').find('.error-ouput').empty();
    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    var testing = JSON.parse(obj2.replace(/\bNaN\b/g, "null"));

    var value = new Array;
    var trace = [];
    for(var i = 0; i < testing.values.length; i++){
        var random_color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        value[i] = { "x":testing.values[i].x, "y":testing.values[i].y, "z":testing.values[i].z,
                    "mode":"markers",
                    "name":testing.values[i].category,
                    "type":"scatter3d",
        }
        trace.push(value[i]);
    }

    var arrayId = cellId.split("-");
    var number_id = arrayId[arrayId.length - 1];
    var name_module = arrayId[arrayId.length - 3];

    // var data = [trace1];
    var layout = {margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
    }};
    Plotly.newPlot('scatter' + number_id, trace, layout);
    $('.loading-process-page').removeClass('loading-show');
    // $('#'+runningCellId).children('.output-card').find('.error-ouput').html(obj2);
}

//Decision Tree Visual
function decisionTreeVisual(cellId){
    url = gateway + "decision_tree_visual";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    // var table_name = $('#'+cellId).children('.inpt-grp').find('.from-scatter-' + selectId).val();
    var filled = $('#filled-dectreevisual' + selectId).val();
    var roundedCorners = $('#roundedCorners-dectreevisual' + selectId).val();
    var roundLeaves = $('#roundLeaves-dectreevisual' + selectId).val();

    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "filled": filled,
        "roundedCorners": roundedCorners,
        "roundLeaves": roundLeaves
    };

    ajaxCallPost(url, JSON.stringify(data), cellId, false, "decisionTreeVisual", 1);
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    // $('#'+cellId).find('#scatter'+selectId).empty();
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseDecisionTreeVisual(cellId, response){
    var obj1 = response;

    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));
    $('#'+cellId).children('.output-card').find('.error-ouput').empty();
    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    var testing = JSON.parse(obj2);
    $('.loading-process-page').removeClass('loading-show');
}

//World Cloud 
function wordCloud(cellId){
    url = gateway + "word_cloud";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-wordcloud-' + selectId).val();
    var text_column = $('#column-wordcloud' + selectId).val();


    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "text_column": text_column
    };
    console.log(cellId);
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "wordCloud", 1);
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#wordClouds'+selectId).empty();
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseWordCloud(cellId, response){
    var obj1 = response;
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));
    $('#'+cellId).children('.output-card').find('.error-ouput').empty();
    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    var testing = JSON.parse(obj2);
    console.log("masuk : "+testing.values)
    var image = '<img id="imageWord" src="data:image/png;base64,'+testing.values+'">';
    $('#'+cellId).children('.output-card').find('#wordClouds'+selectId).html(image);
    $('.loading-process-page').removeClass('loading-show');
}
/*maps*/

function maps(cellId){
    url = gateway + "maps";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-maps-' + selectId).val();
    var category = $('#category-maps' + selectId).val();
    var longitude = $('#longitude-maps' + selectId).val();
    var latitude = $('#latitude-maps' + selectId).val();


    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "category": category,
        "longitude": longitude,
        "latitude": latitude
    };
    console.log(cellId);
    ajaxCallPost(url, JSON.stringify(data), cellId, false, "maps", 1);
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    // $('#'+cellId).find('#maps'+selectId).empty();
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    // document.getElementById('map').outerHTML = "<div class='leaflet-maps' id='map"+selectId+"'></div>";
    $('#'+cellId).find("#map"+selectId).replaceWith("<div class='leaflet-maps' id='map"+selectId+"'></div>");
    $('.loading-process-page').addClass('loading-show');
}

function responseMaps(cellId, response){
    var obj1 = response;
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));
    $('#'+cellId).children('.output-card').find('.error-ouput').empty();
    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];

    // var testing = JSON.parse(obj2);
   
    // geoLayer = L.geoJson({
    // var trace = [];
    // for(var i = 0; i < testing.category.length; i++){
    //     var random_color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    //     trace.push(random_color);
    // }
    // var longitude = testing.values[0].longitude;
    var testing = JSON.parse(obj2);
    var map = L.map('map' + selectId).setView([testing.features[0].geometry.coordinates[1], testing.features[0].geometry.coordinates[0]], 14);
                // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                // }).addTo(map);
                L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 18,
                id: 'mapbox.streets'
                }).addTo(map);
    // // console.log("maps : ",map);
    // // console.log("jumlah : "+testing.values.length);
    // for(var j = 0; j < testing.values.length; j++){
    //     var get_category = testing.category.indexOf(testing.values[j].category);
    //     var get_color = trace[get_category];
    //     // var icon = L.divIcon({
    //     //             className: 'custom-div-icon',
    //     //             html: "<div style='background-color:"+get_color+" !important;' class='marker-pin'></div>",
    //     //             iconSize: [30, 42],
    //     //             iconAnchor: [15, 42]
    //     //         });
    //     // L.marker([testing.values[j].latitude, testing.values[j].longitude], { icon: icon }).bindPopup(""+testing.values[j].category+"").addTo(map);
        // $.getJSON('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson', function(json) {
        //         console.log("cek",json);
      




    function onEachFeature(feature, layer) {
        var popupContent = "<p>"+feature.properties.category + "!</p>";

        if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.category;
        }

        layer.bindPopup(popupContent);
    }

    L.geoJSON(testing, {

        style: function (feature) {
            return feature.properties && feature.properties.style;
        },

        onEachFeature: onEachFeature,

        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: 10,
                fillColor: feature.properties.color,
                color: "#000",
                weight: 3,
                opacity: 1,
                fillOpacity: 0.8
            });
        }
    }).addTo(map);
   

    setInterval(function (){
        map.invalidateSize();
    }, 100);
    $('.loading-process-page').removeClass('loading-show');
}

//Correlation Analysis
function correlation(cellId){
    url = gateway + "correlation";

    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    var table_name = $('#'+cellId).children('.inpt-grp').find('.from-correlation-' + selectId).val();
    var features = $('#features-correlation' + selectId).val();
    var data={
        "user_id": user_id,
        "livy_id": livy_id,
        "table_name": table_name,
        "features":features
    };

    ajaxCallPost(url, JSON.stringify(data), cellId, false, "correlation", 1);
    $('#'+cellId).children('.output-card').find('.error-ouput').html("running . . .");
    $('#'+cellId).children('.stat-progress').find('.progress-bar').attr('style','width:0%');
    $('#'+cellId).find('#correlation'+selectId).empty();
    $('#'+cellId).find('#statementId-'+selectId).html("*");
    $('.loading-process-page').addClass('loading-show');
}

function responseCorrelation(cellId, response){  
    var obj1 = response;
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    // var obj2 = JSON.parse(JSON.parse(JSON.stringify(obj1['data']['text/plain'].replace("'","")).replace("'","")));
    $('#'+cellId).children('.output-card').find('.error-ouput').empty();
    var id = obj1.execution_count;
    var status = obj1.status;
    var obj2 = obj1['data']['text/plain'];
    // console.log("masuk obj2 : ",obj2);   
    var testing = JSON.parse(obj2);
    // console.log("masuk : ",testing.y)
    var data = [
      {
        z: testing.z,
        x: testing.y,
        y: testing.y,
        type: 'heatmap'
      }
    ];

    Plotly.newPlot('correlation'+selectId, data);
    $('.loading-process-page').removeClass('loading-show');
    // var image = '<img id="imageWord" src="data:image/png;base64,'+testing.values+'">';
    // $('#'+cellId).children('.output-card').find('#wordClouds'+selectId).html(image);
   
}

/*
Stop Session
*/
function stopSession(){
    url = gateway + "stop_session";
    showNotification('Notification', 'Stopping session...', '3');
    var data = {"livy_id": livy_id,};
    ajaxCallPost(url, JSON.stringify(data), cellId=0, sendFile=false, toDo="stopSession");
}
function responseStopSession(response){   
    showNotification('Notification', response.result, '2');
}
// /*
// Import File
// */

// function importFile(id){
//     // ////alert('helloo');
//     url =  gateway + "import_file";
//     var data = $('#file-id-'+id).val();
//     var datastring = new FormData($("#file-import-"+id)[0]);
//     // ////alert(datastring);
//     ajaxCallPost(url, datastring, sendFile=true);
// }


function ajaxCallGet(url, cellId=0, toDo){
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json', // added data type

        success: function(result) {
            // ////console.log(result);

            if (toDo == 'getSessionState'){
                responseGetSessionState(result);
            }
            else if (toDo == 'getStatementState'){
                responseGetStatementState(cellId, result);
            }
        },
        error: function(error) {
            ////console.log(error);
            var action = "get";
            responseToDoError(action, error, toDo);            
        }
    });
}
    

function ajaxCallPost(url, data, cellId=0, sendFile=false, toDo="", paramError=0){  
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
            responseToDoSuccess(cellId, response, toDo, paramError);            
      },
      error: function(error) {
            var action = "post";
            responseToDoError(action ,cellId, error, toDo);            
      }
      // dataType: "json"
    });
}



function responseToDoSuccess(cellId, response, toDo, paramError){
    ////console.log("toDo response : "+toDo);
    if (toDo=='createSession'){
        responseCreateSession(response);
    }
    else if(toDo=='checkSession'){
        responseGetSessionState(response);
    }
    else if(toDo=='saveProjectFile'){
        responseSaveProject(response,cellId);
    }
    else if(toDo=='stopSession'){
        responseStopSession(response);
    } 
    else if (toDo=='publishApi'){
        responsePublishApi(response);
    }
    else{
        listenStatementResponse(cellId, response, toDo, paramError);
    }
}

function responseToDoError(action, cellId, response, toDo){
    if(action === "post"){
        alert('Internal Server Error, Error ' + toDo + ' has occured...');
        ('.loading-process-page').removeClass('loading-show');
    }else{
        showNotification('Notification', 'Lost Connection . . .', '1');
    }
    
    // console.log('Error ' + toDo + ' has occured...')
}

function setCurrentSession(livy_id){
    // $("#livy_id").text();
}


function showNotification(title, message, id_notif){
    // $("#canvas-template").append('<div class="notification"><h4>' + title + '</h4><p>' + message + '</p><span id="close-ntf">close</span></div>');
    //     setTimeout(function(){
    //         $('.notification').addClass('visible-ntf');
    // }, 200);
    
    // setTimeout(function(){
    //     if($('.notification').hasClass('visible-ntf')) {
    //         $('.notification').removeClass('visible-ntf');
    //     }
    //     $('.notification').remove();
    // }, 5000);

    var notif;
    if (id_notif === '1'){
        notif = '<p class="error-notif"><i class="fas fa-times"></i> ' + message + '</p>';
    }else if (id_notif === '2'){
        notif = '<p class="warning-notif"><i class="fas fa-exclamation-triangle"></i> ' + message + '</p>';
    }else{
        notif = '<p class="success-notif"><i class="fas fa-check-circle"></i> ' + message + '</p>';
    }

    $(".button-bar-tool").html(notif);
        setTimeout(function(){
            $('.error-notif').addClass('visible-ntf');
    }, 200);
    
    setTimeout(function(){
        if($('.error-notif').hasClass('visible-ntf')) {
            $('.error-notif').removeClass('visible-ntf');
        }
        // else{
        //     $('.success-notif').removeClass('visible-ntf');
        // }
        
        $('.error-notif').remove();
        $('.success-notif').remove();
    }, 5000);
}

function random_string(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function logout(){
    var r = confirm("Are you sure want to logout ?");
    if(r == true){
        document.location.href = "/logout";
    }
}

function saveText(cellId, txtId){
    // var abc = document.getElementById("markdown-newId1").value;
    // var arrayId = cellId.split("-");
    // var selectId = arrayId[arrayId.length - 1];
    var get_txtarea =  $('#'+cellId).find('#'+txtId).val()
    $('#'+cellId).find('#'+txtId).html(get_txtarea);
    $('#'+cellId).find('#'+txtId).attr("value",get_txtarea);
    // alert("masuk sini");
};

function timeLoading(cellId, process){
    console.log("masuk sini : ",cellId);
    var intervalId ;
    var time = 0;
    var arrayId = cellId.split("-");
    var moduleName =  arrayId[0];
    var selectId = arrayId[arrayId.length - 1];

    intervalId = setInterval(function () {
        var load = $('.loading-show').html();
        if(load !== "undefined"){
            var dataTable = $('#'+cellId).children('.inpt-grp').find('.from-' + moduleName +  '-' + selectId).map(function(){
                return this.value
            }).get();
            console.log("Data Table : ",dataTable[0]);

            time = time + 1;
            console.log("waktu",time)
            if(process === "showTables" && time===180 && dataTable[0] !=="None"){
                $('.loading-process-page').removeClass('loading-show');
                clearInterval(intervalId);
                $('#'+cellId).parent('.panel-coloumn').remove();
            }
        }
        
        }, 1000);
    
}

function temporaryCustomQuery(cellId,txtId,type=0){    
    var arrayId = cellId.split("-");
    var selectId = arrayId[arrayId.length - 1];
    $('.custom-'+selectId).each(function( index ) {
        editor = ace.edit(this);
    });
    $('#'+cellId).find('.output-save').html(editor.getValue());
    if(type === 0){
        customQuery(cellId,txtId);
    }
    
    // console.log("masu temporaryCustomQuery : ",editor.getValue());
}

function activeColumn(cell1, type=0){
    if (type === 0){
        $(".function-call").each(function(){
        var cellId = $(this).text();

        var params = cellId.split(",");
        var fnName = params[1];

        var activeClass = $('#'+fnName).attr('class');
        var combine = fnName+','+activeClass; 
            if(combine.indexOf('active-column') != -1){
                var params2 = combine.split(",");
                $('#'+params2[0]).removeClass("active-column");
            }   
        });
        $('#'+cell1).addClass("active-column");
   }else{
        var push_array = [];
        $(".function-call").each(function(){
        var cellId = $(this).text();

        var params = cellId.split(",");
        var fnName = params[1];

        var activeClass = $('#'+fnName).attr('class');
        var combine = fnName+','+activeClass; 
            if(combine.indexOf('active-column') != -1){
                var params2 = combine.split(",");
                $('#'+params2[0]).removeClass("active-column");
                
            } 
        push_array.push(fnName);  
        });
        var position = push_array.indexOf(cell1);
        var new_position = parseInt(position) + 1;
        var next_cell = push_array[new_position];
        $('#'+next_cell).addClass("active-column"); 
   }
   
}

function changeTextarea(){
    // $('.function-call').each(function(){
    //     var cellId = $(this).text();
    //     var params = cellId.split(",");
    //     if(params.length === 3){
    //         var text = $('#'+params[1]).find('.CodeMirror-line').text();
    //         $('#'+params[2]).text(text);
    //         console.log(text);
    //     }
    // });
    $('.function-call').each(function(){
        var cellId = $(this).text();
        var params = cellId.split(",");
        var push_array = [];
        var text;
        if(params.length === 3){
            if(params[0] === "customQuery"){
                temporaryCustomQuery(params[1],params[2],1);
            }

            $('#'+params[1]).find('.CodeMirror-line').each(function(){
                var lol = $(this).text();
                if(parseInt(lol.length) > 1){
                    push_array.push(lol);
                }  
            });

            for(var i = 0; i < push_array.length; i++){
                text += ''+push_array[i]+'\n';
            }

            try{
                text = text.replace(/undefined/g, "");
                text = text.replace(/null/g, "");
                $('#'+params[2]).text(text);
            }catch(e){

            }
        }
        push_array = [];

    });
    return "success";
}

function getActiveId(nameClass){
    var newId;
    var input_col = [];
    // console.log(nameClass)
    $("."+nameClass).each(function(){
        var cellId = $(this).attr('id');
        var arrayId = cellId.split("-");
        var params = arrayId[arrayId.length - 1];
        var new_params = parseInt(params) + 1;
        input_col.push(new_params);
    });
    var unique = input_col.filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        })
    // console.log("unique : "+unique);
    if(unique.length === 0){
        newId = 1;
    }else{
        newId = Math.max( ...unique );
        // console.log("masuk unique newId : ", newId);
    }

    return newId
}