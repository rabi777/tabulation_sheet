var header_1 = '{"Roll":[{"rowspan":"2", "colspan":"0"}], "Student Name":[{"rowspan":"2", "colspan":"0"}], "ban-1":[{"rowspan":"0", "colspan":"2"}], "Ban-2":[{"rowspan":"0", "colspan":"2"}], "Total":[{"rowspan":"2", "colspan":"0"}], "LG":[{"rowspan":"2", "colspan":"0"}]}';
var header_2 = '{"CQ": "CQ", "MCQ":"MCQ", "CQ1":"CQ", "MCQ1":"MCQ"}';
var t_body = '{"1":[{"1":"1", "Student Name":"MD. Rabiul Islam", "ban-1":["12" ,"13"], "ban-2":["12", "13"]}]}';


var data = '{"header_1": "[{"Roll", "Student Name", "ban-1":[{"rowspan":"2", "colspan":"0"}], "Ban-2":[{"rowspan":"2", "colspan":"0"}], "Total":[{"rowspan":"2", "colspan":"0"}], "LG":[{"rowspan":"2", "colspan":"0"}]}]", "header_2":[{"CQ", "MCQ", "CQ", "MCQ"}], "1":["1", "MD. Rabiul Islam", "ban-1":["12", "13"], "ban-2":["12", "13"]]}';


// function tableCreate() {
//     var body = document.getElementsByTagName('body')[0];
//     var tbl = document.createElement('table');
//     tbl.style.width = '100%';
//     tbl.setAttribute('border', '1');
//     var tbdy = document.createElement('tbody');
//
//     for (var i = 0; i < data.length; i++) {
//         var tr = document.createElement('tr');
//         if (i == 0){
//
//         }
//             for (var j = 0; j < 2; j++) {
//                 if (i == 2 && j == 1) {
//                     break
//                 } else {
//                     var td = document.createElement('td');
//                     td.appendChild(document.createTextNode('sds'))
//                     i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
//                     tr.appendChild(td)
//                 }
//             }
//         tbdy.appendChild(tr);
//     }
//     tbl.appendChild(tbdy);
//     body.appendChild(tbl)
// }
//
// tableCreate();


//You can pass the header list separately to your function and add following code


function createTableAndInsert(header_1, header_2, t_body) {
    var table = document.createElement('table');
    table.setAttribute('class', 'table');
    var thead = document.createElement('thead'); // Header row
    var tr = document.createElement('tr'); // Header row
    //
    Object.keys(header_1).forEach(function (key) {
        var data = typeof (header_1[key]);
        var th = document.createElement('th'); //column
        var text = document.createTextNode(key); //cell
        var row_data = header_1[key];
        if (data === 'object') {
            if (header_1[key][0]['rowspan'] != 0) {
                th.setAttribute('rowSpan', header_1[key][0]['rowspan']);
            }
            if (header_1[key][0]['colspan'] != 0) {
                th.setAttribute('colSpan', header_1[key][0]['colspan']);

            }

        }
        th.setAttribute('value', key);
        th.appendChild(text);
        tr.appendChild(th);
        thead.appendChild(tr);
    });

    var tr_1 = document.createElement('tr'); // Header row
    Object.keys(header_2).forEach(function (key) {
        var data = typeof (header_2[key]);
        var th = document.createElement('th'); //column
        var text = document.createTextNode(header_2[key]); //cell
        th.appendChild(text);
        tr_1.appendChild(th);
        thead.appendChild(tr_1);
    });

    table.appendChild(thead);

    var tbody = document.createElement('tbody');
    Object.keys(t_body).forEach(function (key) {
        var student_data = t_body[key][0];
        var tr = document.createElement('tr');
        Object.keys(student_data).forEach(function (key_1) {

            if (typeof (student_data[key_1]) === 'object') {
                var marks = student_data[key_1];
                Object.keys(marks).forEach(function (key_2) {
                    var td = document.createElement('td'); //column
                    var text = document.createTextNode(marks[key_2]); //cell
                    td.appendChild(text);
                    tr.appendChild(td);
                })
            } else {
                var td = document.createElement('td'); //column
                var text = document.createTextNode(student_data[key_1]); //cell
                td.appendChild(text);
                tr.appendChild(td);
                var index = $(this).index()+1;
                console.log($('table td:nth-child(' + index + '),table th:nth-child(' + index + ')'));

            }
        });
        tbody.appendChild(tr);

    });
    table.appendChild(tbody);
    document.getElementById('single_fine_view').appendChild(table);
}


var obj = JSON.parse(header_1);
var obj2 = JSON.parse(header_2);
var t_body = JSON.parse(t_body);
createTableAndInsert(obj, obj2, t_body);


//
//
// for (var i = 0; i < t_body[key].length; i++) {
//         var mark_data = t_body[key];
//         console.log(typeof (mark_data[0]));
//         if (data === 'object') {
//             Object.keys(mark_data[0]).forEach(function (mark) {
//                 console.log(mark_data['mark_data']);
//             });
//         }else{
//             var td = document.createElement('td'); //column
//             var text = document.createTextNode(t_body[key][0]); //cell
//             td.appendChild(text);
//             tr_2.appendChild(td);
//         }
//
//     table.appendChild(tr_2);
//     }