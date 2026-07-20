const CLIENT_ID =
"144642899181-rn6f8to2qlcnt3mfe2o62bbh94pk1a3o.apps.googleusercontent.com";

let currentUser = null;

window.onload = function () {

    google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.getElementById("googleSignInContainer"),
        {
            theme: "outline",
            size: "large",
            shape: "pill",
            text: "signin_with",
            width: 240
        }
    );

};

function handleCredentialResponse(response) {

    const user = parseJwt(response.credential);

    currentUser = user;

    console.log("Signed in:", user);

}

function parseJwt(token) {

    return JSON.parse(
        decodeURIComponent(
            atob(token.split(".")[1])
                .split("")
                .map(c =>
                    "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
                )
                .join("")
        )
    );

}
