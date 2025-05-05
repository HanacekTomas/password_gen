function generatePassword() {
    const length = document.getElementById("length").value;
    const useLower = document.getElementById("lowercase").checked;
    const useUpper = document.getElementById("uppercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;
  
    let chars = "";
    if (useLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (useUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useNumbers) chars += "0123456789";
    if (useSymbols) chars += "!@#$%^&*()_+[]{}<>?";
  
    if (chars === "") {
      alert("Vyber alespoň jednu možnost!");
      return;
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    document.getElementById("passwordOutput").value = password;
  }
  
  function copyPassword() {
    const passwordField = document.getElementById("passwordOutput");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // pro mobily
    document.execCommand("copy");
    alert("Heslo zkopírováno do schránky!");
  }
  