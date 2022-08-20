const identityKey = '_identity_'
const identityForm = document.getElementById('form-identity')
const identityInput = document.getElementById('identity')
const saveButton = document.getElementById('button-save')
const welcomeTitle = document.getElementById('title-welcome')
let logout = document.getElementById('logout')

function showWelcome () {
  const identity = localStorage.getItem(identityKey)
  if (identity) {
    welcomeTitle.style.display = 'block'
    welcomeTitle.innerHTML = `Bem-vindo ${identity}!`
    identityForm.style.display = 'none'
  }
}

saveButton.addEventListener('click', function () {
  localStorage.setItem(identityKey, identityInput.value)

  showWelcome()
})


showWelcome()

logout.addEventListener('click', function(){
    localStorage.clear()
    identityForm.style.display = 'block'
    welcomeTitle.style.display = 'none'
})
