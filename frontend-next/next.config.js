// Nuxt でいうconfigファイル
// Next.js サーバーとビルドフェーズで使用 ブラウザのビルドでは使われない

const isProd = process.env.NODE_ENV === "production";

module.exports = ({
  // rewrite でpath の書き換えができる
  // source: 着信要求パスパターン, destination: ルーティング指定のパス
  async rewrites() {
    return [
      {
        // TODO:: ajax 使う場合は指定先を注意したほうがいいかも
        source: '/ajax/:path',
        destination: isProd ? 'https://www.sample.co.jp/ajax/:path' : 'http://nginx/ajax/:path',
      },
      {
        source: '/api/:path*',
        destination: isProd ? 'https://www.sample.co.jp/api/:path*' : 'http://nginx/api/:path*',
      },
    ]
  },
})