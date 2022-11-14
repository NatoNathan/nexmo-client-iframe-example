// import { NexmoClient } from "https://cdn.skypack.dev/nexmo-client/dist/nexmoClient.min.js";

const token = '';

const btnCall = document.querySelector('#call');
const btnHangUp = document.querySelector('#hangup');
const app = new NexmoClient({ debug: true });
app.createSession(token)
    .then(app => {
        btnCall.addEventListener("click", () => {
            console.log("Calling Bob...");
            app.callServer("Bob", "app");
        });
        app.on("member:call", (member, call) => {
            btnHangUp.addEventListener("click", () => {
                console.log("Hanging up...");
                call.hangUp();
            });
        });
    })
    .catch(console.error);