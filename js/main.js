function sendData(){ 
  const element = document.getElementById("button")
  element.setAttribute('value', 'Enviado')
  element.setAttribute('class', 'btn btn-secondary')

  var name = document.getElementById("name").value
  var lastname = document.getElementById("lastname").value
  var subject = document.getElementById("subject").value
  var message = document.getElementById("message").value

  alert(
    'Nome: ' + name + '\n' +
    'Sobrenome: ' + lastname + '\n' +
    'Assunto: ' + subject + '\n' +
    'Mensagem: ' + message + '\n'
  )

}