import Document, { Head, Main, NextScript } from 'next/document'
import htmlescape from 'htmlescape'
import '../src/styles/index.scss'

const { env } = process

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
          <script
            dangerouslySetInnerHTML={{ __html: `__ENV__= ${htmlescape(env)}` }}
          />
          <NextScript />
        </body>
      </html>
    )
  }
}