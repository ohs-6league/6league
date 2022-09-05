function escapeHTML(string) {
  return string.replace(/&/g, '')
      .replace(/</g, '')
      .replace(/>/g, '')
      .replace(/"/g, '')
      .replace(/'/g, '')
      .replace(/,/g, '');
}

const form = document.getElementById('form')
const submitButton = document.getElementById('submit-button')
submitButton.onclick = () => {
  const formData = new FormData(form)
  var flag = 0;
  const attention_text = document.getElementById('attention');
  var c = 0;
  for (item of formData) c++;
  var escname = escapeHTML(formData.get('Name'));
  document.getElementById('inputname').value = escname;
  formData.set('Name', escname);
  if (c != 3 || formData.get('Name') == '') flag = 1;
  if (c == 3 && formData.get('Name').length > 8) flag = 2;
  if (flag > 0) {
    attention_text.style.display = 'inline';
    if (flag == 1)
      attention_text.innerHTML = '全ての必要事項を入力して下さい<br>';
    if (flag == 2) attention_text.innerHTML = 'ニックネームは8文字以内です<br>';
    return;
  }
  submitButton.style.display = 'none';
  attention_text.style.display = 'inline';
  attention_text.innerHTML = '登録中…<br>';
  formData.append('type', 'register');
  const action = form.getAttribute('action')
  const options = {
    method: 'POST',
    body: formData,
  };
  fetch(action, options)
      .then(response => response.text())
      .then(text => {
        const resplace = document.getElementById('res');
        const IDplace = document.getElementById('userID');
        IDplace.innerText = text.padStart(4, '0');
        attention_text.style.display = 'none';
        resplace.style.display = 'block';
      })
      .catch(error => {
        alert('ERROR');
      })
}