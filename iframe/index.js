// import { NexmoClient } from "https://cdn.skypack.dev/nexmo-client/dist/nexmoClient.min.js";

const aliceJWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njg0MjMwNzMsIm5iZiI6MTY2ODQyMzA3MywiZXhwIjoxNjczNjA3MDczLCJqdGkiOjE2Njg0MjMwNzMsImFwcGxpY2F0aW9uX2lkIjoiY2IyOGIxYzMtNDlkMy00Njg4LTg1NjAtMTU2OGZiNDk4YTMwIiwiYWNsIjp7InBhdGhzIjp7Ii8qKiI6e319fSwic3ViIjoiYWxpY2UifQ.DQuFlx_Y02HAryEQaOaZIRJDKeSarDttaKKk4-Q8XeGwsL6-5MsQvI1K7eOE8eW8uH-l7hy2ZOuA9347U5VGCt96WP7m_w2x9hEuvTWlCrgwIbSpPREz0JtP1GfvP_6i8yGgxp8P5wFb96e4cB9X9cv4lY_c0PCIYvTlHDScmaEEX1VhgvGh8dmjxzQI-2iqe5wWq74nZS5-5gW5ORZcJi3Xuzkmrz274Svdc-gwo1XSNWCTXVmRSyYdeahcgX1TAjjgnBM2vYIS9dSxf71lbG5n2F6OzkfcuGYV3-rIGl_DvIKz0b5CeMC8h6XBKRtUaopXHHWE2cOy2CJWG34Eqw';

const btnCall = document.querySelector('#call');
const btnHangUp = document.querySelector('#hangup');
const app = new NexmoClient({ debug: true });
app.createSession(aliceJWT)
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