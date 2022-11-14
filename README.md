# nexmo-client-iframe-example
This is a demo for how to use the `nexmo-client` from vonage in an iframe.

Please notice that we are using the `allow` attribute on the `<iframe>` [here](https://github.com/NatoNathan/nexmo-client-iframe-example/blob/85f625c35ad0ccd2e24f031a6d9fe538c1c8dcea/public/index.html#L10)

# Steps to run demo

You will need node installed.

1. Clone Repo
2. Update `token` [here](https://github.com/NatoNathan/nexmo-client-iframe-example/blob/6effbc6e2c3c67354fda4281fd99ce48ee2cdd20/iframe/index.js#L3) with a token for an exsting user in your application
3. Serve `./iframe` on port 3000 with `npx http-serve ./iframe -p 3000`
4. Open a new terminal and Serve `./public` on port 8080 with `npx http-serve ./public -p 8080`
5. Open `http://localhost:8080/` in a web browser
