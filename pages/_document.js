import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600&family=Pacifico&family=Source+Sans+Pro:wght@400;600;700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
            crossOrigin="true"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossOrigin="true"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
