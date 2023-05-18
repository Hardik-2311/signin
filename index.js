let password = document.getElementById("password");
let email = document.getElementById("email");

function empty() {
    if (email.value >= 0 && email.value <8) {
      document.getElementById("email-error").innerHTML = "Email Kaun daalega?";
    }
    if (password.value <= 7) {
      document.getElementById("password-error").innerHTML = "Chhota hai brother!";
    }
  }

async function valid() {
    const emailcheck = /^[^ ]+@[a-z]+\.[a-z]{2,6}$/;
    const passcheck = /^[a-z]{8,11}$/;

    empty();

    if (!emailcheck.test(email.value)) {
        document.getElementById("email-error").innerHTML = "Invalid Email";
        return false;
    } else if (!passcheck.test(password.value)) {
        document.getElementById("password-error").innerHTML = "Invalid Password";
        return false;
    } else {
        let body = {
            email,
            pass,
        };
        console.log(JSON.stringify(body));
        await fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => {
             return response.json();
            })
            .then((data) => {
                console.log(data);
                if (data.error != undefined) {
                    document.getElementById("message") = data.error;
                } else {
                    document.getElementById("message") = "Login Succesfull";
                }
            });
            return false;
    }
}
