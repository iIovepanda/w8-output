// localStorageにデータ保存
function saveToLocalStorage(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Credentials saved to localStorage!');
}
// localStorageをフォームに反映
function autoFillForm() {
  const savedEmail = localStorage.getItem('email');
  const savedPassword = localStorage.getItem('password');
  if(savedEmail){
    document.getElementById('email').value = savedEmail;
  } 
  if(savedPassword){
    document.getElementById('password').value = savedPassword;
  } 
}

window.onload = autoFillForm;