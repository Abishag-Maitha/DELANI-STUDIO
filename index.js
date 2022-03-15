$(document).ready(function(){
    let btn=$(".sbmt")
    btn.click(function(){
        let username=$("input[type=text]").val()
        let email=$("input[type=email]").val()
        let message=$("textarea").val()
        console.log(username,email,message)

        var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert(`Thank you for contacting us, ${username}. We will reach out to you via the email you have provided!`, 'success')
    
  })
}
    })
    
})
