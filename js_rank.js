const url = new URL(
    'https://script.google.com/macros/s/AKfycbwL_en_SoCxxfIXkwdUc9QEzDEtu8YvZ8MSF6BWghIh200tA1wqoWj-5RxiknXKgL7EhA/exec');
url.searchParams.append('type', 'rank');
fetch(url, {
  method: 'GET',
})
    .then(response => response.text())
    .then(text => {
      var arr = text.split(',');

      var table_ele_a = document.getElementById('rank-table-a');
      table_ele_a.deleteRow(-1);
      var tb = document.createElement('tbody');
      if (arr[0] == '') {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerText = '挑戦者募集中';
        td.setAttribute('colSpan', '3');
        tr.appendChild(td);
        tb.appendChild(tr);
      } else {
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.innerText = '平均点 ' + parseFloat(arr[90]).toFixed(3);
        th.setAttribute('colSpan', '3');
        th.classList.add('head_avg');
        tr.appendChild(th);
        tb.appendChild(tr);
      }
      for (var i = 0; i < 10; i++) {
        var tr = document.createElement('tr');
        if (arr[i * 3] == '') break;
        for (var j = 0; j < 3; j++) {
          var td = document.createElement('td');
          if (j == 0 || j == 2) td.classList.add('en');
          if (j < 2)
            td.innerText = arr[i * 3 + j];
          else
            td.innerText = parseFloat(arr[i * 3 + j]).toFixed(3);
          tr.appendChild(td);
        }
        tb.appendChild(tr);
      }
      table_ele_a.appendChild(tb);

      var table_ele_b = document.getElementById('rank-table-b');
      table_ele_b.deleteRow(-1);
      var tb = document.createElement('tbody');
      if (arr[30] == '') {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerText = '挑戦者募集中';
        td.setAttribute('colSpan', '3');
        tr.appendChild(td);
        tb.appendChild(tr);
      } else {
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.innerText = '平均点 ' + parseFloat(arr[91]).toFixed(3);
        th.setAttribute('colSpan', '3');
        th.classList.add('head_avg');
        tr.appendChild(th);
        tb.appendChild(tr);
      }
      for (var i = 0; i < 10; i++) {
        var tr = document.createElement('tr');
        if (arr[30 + i * 3] == '') break;
        for (var j = 0; j < 3; j++) {
          var td = document.createElement('td');
          if (j == 0 || j == 2) td.classList.add('en');
          if (j < 2)
            td.innerText = arr[30 + i * 3 + j];
          else
            td.innerText = parseFloat(arr[30 + i * 3 + j]).toFixed(3);
          tr.appendChild(td);
        }
        tb.appendChild(tr);
      }
      table_ele_b.appendChild(tb);

      var table_ele_c = document.getElementById('rank-table-c');
      table_ele_c.deleteRow(-1);
      var tb = document.createElement('tbody');
      if (arr[60] == '') {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerText = '挑戦者募集中';
        td.setAttribute('colSpan', '3');
        tr.appendChild(td);
        tb.appendChild(tr);
      } else {
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.innerText = '平均点 ' + parseFloat(arr[92]).toFixed(3);
        th.setAttribute('colSpan', '3');
        th.classList.add('head_avg');
        tr.appendChild(th);
        tb.appendChild(tr);
      }
      for (var i = 0; i < 10; i++) {
        var tr = document.createElement('tr');
        if (arr[60 + i * 3] == '') break;
        for (var j = 0; j < 3; j++) {
          var td = document.createElement('td');
          if (j == 0 || j == 2) td.classList.add('en');
          if (j < 2)
            td.innerText = arr[60 + i * 3 + j];
          else
            td.innerText = parseFloat(arr[60 + i * 3 + j]).toFixed(3);
          tr.appendChild(td);
        }
        tb.appendChild(tr);
      }
      table_ele_c.appendChild(tb);

      var table_ele_d = document.getElementById('rank-table-d');
      table_ele_d.deleteRow(-1);
      var tb = document.createElement('tbody');
      for (var i = 93; i < arr.length - 2; i++) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerText = arr[i];
        tr.appendChild(td);
        tb.appendChild(tr);
      }
      table_ele_d.appendChild(tb);
    });