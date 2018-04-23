# vue.js テンプレート
vue.js & Express & Bootstrap4を使用したWebページを作成するためのテンプレート

## 構成ライブラリ
* express
* bootstrap: 4.x
* request: 2.85.0
* request-promise: 4.2.2
* font-awesome: 5.x

## サンプルページの種類
* index: スターターテンプレート（ナビバー固定）& DataTablesリスト

## ビルドスクリプト
~~~
npm run build
~~~

## リリーススクリプト
~~~
npm run release
~~~

## dockerへのインストール
リリーススクリプトを実行した際、./distにDockerfile・リリース用ソース圧縮ファイルが生成される。
これを使用してコンテナの作成が可能
