// module(モジュール)
// index.jsにインポートさせたい

let msg = "こんにちは"

const sum = (text) => {
    console.log(text);
}

export {msg, sum }
// 送る関数や変数を記述する必要がある。

// exportする関数が一つだけの時
// export default sum