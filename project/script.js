async function submit_index() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    try {
        const response = await fetch("http://localhost:8080/api/login", {
            method: "POST",
            // mode: "no-cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: pass }), // Changed 'pass' to 'password' for consistency with the server-side code
        });

        const data = await response.json();
        console.log(data); // Log the response data received from the server

        // Assuming the server returns a message indicating the login status
        if (data.message === "Login successful") {
            // Redirect the user to the dashboard or another page
            localStorage.setItem('email', email);
            window.location.href = "page1.html";
        } else {
            // Display an error message to the user
            alert("Invalid email or password");
        }
    } catch (error) {
        console.error("Error:", error);
        // Display an error message to the user
        alert("Failed to login. Please try again later.");
    }
}

async function submit_signup() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const category = document.getElementById("Category").value;
    const password = document.getElementById("pwd").value;
    const retypePassword = document.getElementById("rpwd").value;
    const enteredCaptcha = document.getElementById("ecaptcha").value;
    // Basic validation, you might want to add more checks
    if (!firstName || !lastName || !email || !category || !password || !retypePassword || !enteredCaptcha) {
        alert("Please fill in all fields");
        return;
    }

    // Additional validation, for example, checking if password and retype password match
    if (password !== retypePassword) {
        alert("Passwords do not match");
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/api/signup", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                category: category,
                password: password,
               
            }),
        });

        const data = await response.json();
        console.log(data); // Log the response data received from the server

        // Assuming the server returns a message indicating the signup status
        if (data.message === "Signup successful") {
            // Redirect the user to the login page or another page
            localStorage.setItem( "email" , email )
           
            window.location.href = "page1.html";
        } else {
            // Display an error message to the user
            alert("Signup failed. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        // Display an error message to the user
        alert("Failed to signup. Please try again later.");
    }
}
// if (window.location.href == "./index.html")
//     document.getElementById("loginButton").addEventListener("click", submit_index);
// if (window.location.href == "./signup.html")
    // document.getElementById("previous-button").addEventListener("onclick", submit_signup);


