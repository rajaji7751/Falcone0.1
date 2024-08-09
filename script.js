function validateForm() {
    const studentId = document.getElementById("studentId").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    if (studentId === "" || password === "") {
        errorMsg.textContent = "Both fields are required!";
        return false;
    }

    // For demo purposes, we'll assume a fixed ID and password
    if (studentId === "12345" && password === "password") {
        alert("Login successful!");
        return true; 
    } else {
        errorMsg.textContent = "Invalid Student ID or Password!";
        return false; 
    }
}
