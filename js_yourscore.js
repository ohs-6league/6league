const isNumber = function(value) {
  return ((typeof value === 'number') && (isFinite(value)));
};

const form = document.getElementById('form')
const submitButton = document.getElementById('view-button')

form.onkeypress =
    (e) => {
      // form1に入力されたキーを取得
      const key = e.keyCode || e.charCode || 0;
      // 13はEnterキーのキーコード
      if (key == 13) {
        // アクションを行わない
        e.preventDefault();
        submitButton.click();
      }
    }

           submitButton.onclick = () => {
      submitButton.disabled = true;
      var uid = document.getElementById('inputID').value;
      var flag = 0;
      if (!isFinite(uid)) flag = 1;
      if (!Number.isInteger(parseInt(uid))) flag = 1;
      if (flag > 0) {
        document.getElementById('attentinon_text_yourscore').innerText =
            '無効なIDです';
        submitButton.disabled = false;
        return;
      }
      var k = parseInt(uid);
      if (k <= 0) flag = 1;
      var d = [];
      for (var i = 0; i < 4; i++) {
        d[3 - i] = k % 10;
        k = Math.floor(k / 10);
        console.log(d[3 - i]);
      }
      if ((d[0] + d[1] * 2 + d[2] * 3 + d[3]) % 10 != 0) flag = 1;
      if (flag > 0) {
        document.getElementById('attentinon_text_yourscore').innerText =
            '無効なIDです';
        submitButton.disabled = false;
        return;
      }
      document.getElementById('attentinon_text_yourscore').innerText =
          '取得中…';
      const url = new URL(
          'https://script.google.com/macros/s/AKfycbwL_en_SoCxxfIXkwdUc9QEzDEtu8YvZ8MSF6BWghIh200tA1wqoWj-5RxiknXKgL7EhA/exec');
      url.searchParams.append('type', 'userdata');
      url.searchParams.append('ID', uid);
      fetch(url, {
        method: 'GET',
      })
          .then(response => response.text())
          .then(text => {
            var arr = text.split(',');
            if (arr[0] == '') {
              document.getElementById('attentinon_text_yourscore').innerText =
                  '無効なIDです';
              return;
            }
            form.style.display = 'none';
            document.getElementById('attentinon_text_yourscore').innerText = '';
            var table_ele = document.getElementById('res-table');


            var trw = document.createElement('tr');
            var tdw = document.createElement('td');
            tdw.innerText = 'シックスボンバー';
            tdw.classList.add('ha');
            tdw.classList.add('forsmall');
            tdw.setAttribute('colSpan', '3');
            trw.appendChild(tdw);
            table_ele.appendChild(trw);
            var tra = document.createElement('tr');
            var tda0 = document.createElement('td');
            tda0.innerText = 'シックスボンバー';
            tda0.classList.add('forbig');
            tda0.classList.add('ha');
            tra.appendChild(tda0);
            var tda1 = document.createElement('td');
            tda1.innerText = parseFloat(arr[4]) == -1 ?
                '未挑戦' :
                parseFloat(arr[4]).toFixed(3);
            tda1.dataset.label = 'スコア';
            tra.appendChild(tda1);
            var tda3 = document.createElement('td');
            tda3.innerText =
                parseFloat(arr[16]) == -1 ? '' : parseFloat(arr[16]).toFixed(3);
            tra.appendChild(tda3);
            var tda2 = document.createElement('td');
            tda2.innerText = arr[6];
            tra.appendChild(tda2);
            tra.classList.add('la');
            table_ele.appendChild(tra);

            var trx = document.createElement('tr');
            var tdx = document.createElement('td');
            tdx.innerText = '漢字ツアーズ';
            tdx.classList.add('hb');
            tdx.classList.add('forsmall');
            tdx.setAttribute('colSpan', '3');
            trx.appendChild(tdx);
            table_ele.appendChild(trx);
            var trb = document.createElement('tr');
            var tdb0 = document.createElement('td');
            tdb0.innerText = '漢字ツアーズ';
            tdb0.classList.add('forbig');
            tdb0.classList.add('hb');
            trb.appendChild(tdb0);
            var tdb1 = document.createElement('td');
            tdb1.innerText = parseFloat(arr[7]) == -1 ?
                '未挑戦' :
                parseFloat(arr[7]).toFixed(3);
            trb.appendChild(tdb1);
            var tdb3 = document.createElement('td');
            tdb3.innerText =
                parseFloat(arr[17]) == -1 ? '' : parseFloat(arr[17]).toFixed(3);
            trb.appendChild(tdb3);
            var tdb2 = document.createElement('td');
            tdb2.innerText = arr[9];
            trb.appendChild(tdb2);
            trb.classList.add('lb');
            table_ele.appendChild(trb);

            var trz = document.createElement('tr');
            var tdz = document.createElement('td');
            tdz.innerText = 'パーセントバルーン';
            tdz.classList.add('hc');
            tdz.classList.add('forsmall');
            tdz.setAttribute('colSpan', '3');
            trz.appendChild(tdz);
            table_ele.appendChild(trz);
            var trc = document.createElement('tr');
            var tdc0 = document.createElement('td');
            tdc0.innerText = 'パーセントバルーン';
            tdc0.classList.add('forbig');
            tdc0.classList.add('hc');
            trc.appendChild(tdc0);
            var tdc1 = document.createElement('td');
            tdc1.innerText = parseFloat(arr[10]) == -1 ?
                '未挑戦' :
                parseFloat(arr[10]).toFixed(3);
            trc.appendChild(tdc1);
            var tdc3 = document.createElement('td');
            tdc3.innerText =
                parseFloat(arr[18]) == -1 ? '' : parseFloat(arr[18]).toFixed(3);
            trc.appendChild(tdc3);
            var tdc2 = document.createElement('td');
            tdc2.innerText = arr[12];
            trc.appendChild(tdc2);
            trc.classList.add('lc');
            table_ele.appendChild(trc);

            var trv = document.createElement('tr');
            var tdv = document.createElement('td');
            tdv.innerText = 'トロッコアドベンチャー';
            tdv.classList.add('hd');
            tdv.classList.add('forsmall');
            tdv.setAttribute('colSpan', '3');
            trv.appendChild(tdv);
            table_ele.appendChild(trv);
            var trd = document.createElement('tr');
            var thd1 = document.createElement('th');
            thd1.classList.add('forbig');
            trd.appendChild(thd1);
            var thd2 = document.createElement('th');
            thd2.innerText = '満点獲得回数';
            thd2.setAttribute('colSpan', '2');
            trd.appendChild(thd2);
            var thd3 = document.createElement('th');
            thd3.innerText = '挑戦回数';
            trd.appendChild(thd3);
            table_ele.appendChild(trd);

            var tre = document.createElement('tr');
            var tde0 = document.createElement('td');
            tde0.innerText = 'トロッコアドベンチャー';
            tde0.classList.add('hd');
            tde0.classList.add('forbig')
            tre.appendChild(tde0);
            var tde1 = document.createElement('td');
            tde1.innerText = arr[10] =
                -1 ? '未挑戦' : Math.floor(arr[10] / 100000000);
            tde1.setAttribute('colSpan', '2');
            tre.appendChild(tde1);
            var tde2 = document.createElement('td');
            tde2.innerText = arr[12] % 100;
            tre.classList.add('ld');
            tre.appendChild(tde2);
            table_ele.appendChild(tre);

            table_ele.style.display = 'table';
            var h = arr[1] + ' さんの成績'
            var t =
                'http://twitter.com/share?url=https://ohs-6league.github.io/6league/index.html&text=' +
                arr[1] + '%20さんのスコア%0aシックスボンバー%20' +
                tda1.innerText + '%0a漢字ツアーズ%20' + tdb1.innerText +
                '%0aパーセントバルーン%20' + tdc1.innerText +
                '%0aトロッコアドベンチャー%20' +
                (arr[10] = -1 ? '未挑戦' : tde1.innerText) +
                '%0a&via=ohs_6league&hashtags=ロクリーグ';
            document.getElementById('u_head_text').innerHTML = h + ' ' +
                '<a class="tw_share" href=' + t +
                ' target="_blank">結果をツイート</a>';
          });
    }