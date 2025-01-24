var Login = document.getElementById("Login")
function Hide(element) {
    element.style.display = "" 

}
Login.addEventListener("click", function(){
    var LoginPage = document.getElementById("Login-Page") 
    if (LoginPage.style.display == "") {
        var Overlay = document.createElement("div")
        Object.assign(Overlay.style, {
            position: "fixed", 
            height: "100%", 
            width: "100%", 
            backgroundColor: "rgba(0, 0, 0, 1)", 
            top: "0", 
            left: "0", 
            zIndex: "1", 
            opacity: "0", 
            transition: "opacity 0.3s" 
        }); 
        document.body.appendChild(Overlay) 
        Overlay.addEventListener("click", function() {
            Hide(LoginPage) 
            document.body.removeChild(Overlay) 
        }); 
        setTimeout(() => {
            LoginPage.style.display = "block" 
            Overlay.style.opacity = "0.7" 
        }); 
    }
}); 