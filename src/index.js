////////////////////////
// module(モジュール) //
////////////////////////

// JSのインポート文のこと

import {msg, sum} from "./lib.js"
// ファイル丸ごとではなく関数や変数を呼び出す

console.log(msg);

sum("lib.jsの関数なり")

// Javascript prmer というサイトがまとまっている。

// export defaultをimportするとき
// import function from "ファイル"



//////////////////////////////
//  パッケージマネージャ   //
/////////////////////////////
//パッケージとはプログラミングを助ける機能がまとめられたファイル
//パッケージマネージャは数万に及ぶファイルの環境構築を自動で行ってくれる。

// yarnというパッケージマネージャを管理

// webpackをyarnでインストール
// JSのファイルを一つにまとめてくれる。

// webpack-dev-server検証用

console.log("startコマンドで表示中");

import "./style.scss"