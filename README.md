# Kouju Head Spa School Website

ドライヘッドスパ＆ブルーヒーリングのスクール「Kouju Head Spa School」の公式サイト。
ビルド不要の静的サイト（HTML / CSS / JavaScript）です。

## ページ構成

| ファイル | 内容 |
| --- | --- |
| `index.html` | トップページ |
| `about.html` | Koujuについて |
| `treatment.html` | 施術・料金 |
| `course.html` | 講座一覧 |
| `guide.html` | ご案内 |
| `support.html` | サポート |
| `contact.html` | お問い合わせ |

## ディレクトリ

```
assets/
  css/styles.css   スタイル
  js/script.js     スクリプト
  images/          画像
```

## ローカルでの確認

`index.html` をブラウザで直接開くか、簡易サーバーを起動します。

```bash
python -m http.server 8000
# http://localhost:8000
```

## デプロイ

Vercel で静的サイトとして公開しています（ビルドコマンドなし / 出力ディレクトリはリポジトリルート）。
