document.getElementById('loginBtn').addEventListener('click', function () {
const message= document.getElementById("message");
document.getElementById('message');
message.textContent = "Logging in...";

simulateLogin().then(response => {
    message.textContent= response;
});
});

function simulateLogin() {
    return new Promise(resolve => {
      setTimeout(() => {
     resolve('Welcome back');
      }, 2000);
    });
}