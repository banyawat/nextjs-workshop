import Document, { Head, Main, NextScript } from 'next/document'
import '../src/styles/index.scss'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <title>Hello world</title>
          <link
            rel='stylesheet'
            href='/_next/static/style.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}