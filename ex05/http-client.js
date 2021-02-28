/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kmorimot <kmorimot@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 23:24:33 by kmorimot          #+#    #+#             */
/*   Updated: 2021/01/28 16:05:14 by kmorimot         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/**
 * 与えられたコマンドラインについてhttpGETrequrstを行う。
 * データに対して改行をしてconsole logする。
 */

/**
 * http.get(url[, options][, callback])
 * httpとは、HTTPとは、WebサーバとWebクライアントの間でデータの送受信を行うために用いられるプロトコル
 * プロトコルとは通信の取り決めなど。
 * http.getはhttp通信においてGETリクエストが行える。
 * GETは指定したリソースの表現を転送するようにリクエストするメソッドです。
 * つまり、何か情報を検索したり取得するために使うためのメソッドになります。
 */

/**
 * res(response)とは、このリクエストへの応答を受信すると発行されます。
 * このイベントは1回だけ発行されます。
 */

/**
 * イベントとは、JavaScriptにおけて発生するあらゆるアクションの総称です。
 */

/**
 * http.getで取ってきたdataをcallback関数でconsole.logする。
 * callback関数の引数で与えるresオブジェクトにある onメソッドで
 * 各イベントが発生した後に、第二引数を実行する。
 * dataのコールバックで受け取れるのは分けられてた"chunk"なので全てをつなぎ合わせてる
 * 受け取りが完了すると、endイベントが発火するのでconsole.logする。
 * .on('error', (err) はhttp.getの中でerrorイベントが発火すれば、拾えるようにするため。
 */

const http = require("http");

if (process.argv.length != 3)
	return ;

const dst_url = process.argv[2];

try {
	http.get(dst_url, (res) => {
		let raw_data = '';
		res.setEncoding('utf8');
		res.on('data', (chunk) => {
			raw_data = raw_data + chunk;
		});
		res.on('end', () => {
			console.log(raw_data);
		});
		res.on('error', (err) => {
			console.log(err.message);
		});
	}).on('error', (err) => {
		console.log(err.message);
	});
} catch (e) {
	console.log(e.message);
}
