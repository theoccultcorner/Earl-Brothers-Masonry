import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Earl Brothers Masonry was brought to you with 20 years of experience by three men born and built in Santa Maria, California. We may not be the largest company at the moment but our eyes are open to the bigger and greater futures of our customers and our company. We have experience in all phases of masonry that include brick, block, and stone. Do you need retaining walls or perhaps a block wall? Maybe a stone fire pit or a stone barbecue to make your friends jealous? We'll throw in a free estimate for brick to show you we mean business! We guarantee the quality and integrity of our jobs well done. We'll have local competitors shaking in their boots work boots. We believe that our quality of work will lead to a successful masonry company honored to service the central coast for years to come!" />
          <meta name="keywords" content="brick, 
                                 block, 
                                 stone, 
                                 masonry, 
                                 orcutt, 
                                 santa maria, 
                                 central coast, 
                                 retaining walls, 
                                 stone fire pit, 
                                 stone barbecue" />
          <meta name="author" content="Tom Earl, Chris Earl" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/img/favicon.png" />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/img/apple-icon.png"
          />
          {/* Fonts and icons */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;
