/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-json-api-server.js                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kmorimot <kmorimot@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/24 02:53:42 by kmorimot          #+#    #+#             */
/*   Updated: 2021/01/28 17:18:50 by kmorimot         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/**
 * GETリクエストを受信したときにJSONデータを提供するHTTPサーバーを作成します。
 * JSONというデータ形式で表示する。
 * キー付き（iso）ISO形式の時間のクエリ文字列が含まれていることを期待してください
 */

/**
 * http.createServerでは、requestとresponseという引数で渡された関数中で、
 * urlオブジェクトのparseメソッドを用いて、プロトコル、クエリなどに分けて取ってこれる。
 * この時、(req.url, true)であるので、isoより後ろはquery.isoに入る。
 * 参考URL: http://info-i.net/url-parse
 * getUTCHoursなどでロンドンの標準時刻が取ってこれる。getTimeでunixtimeが取ってこれる。
 * 「writeHead」は、responseオブジェクトのメソッドで、ヘッダー情報をレスポンスに
 * 書き出すものです。第１引数にはステータスコードを指定し、第２引数にヘッダー情報を
 * 連想配列でまとめたものを指定します。
 * JSON.stringify()メソッドは、あるJavaScriptのオブジェクトや値をJSON文字列に変換します。
 * 置き換え関数を指定して値を置き換えたり、置き換え配列を指定して指定されたプロパティのみを
 * 含むようにしたりすることもできます。
 * 
 */

const http = require('http');
const url = require('url');

if (process.argv.length != 3)
	return (console.log('Invalid commandline arguments'));

var port_num = parseInt(process.argv[2]);

try {
	const server = http.createServer((req, res) => {
		var p_url = url.parse(req.url, true);
		var date = new Date(p_url.query.iso);
		if (p_url.pathname  === '/api/parsetime') {
			res.writeHead(200, { 'Content-Type': 'application/json'});
			var output = {
				hour: date.getUTCHours(),
				minute: date.getUTCMinutes(),
				second: date.getUTCSeconds()
			}
		}
		else if (p_url.pathname === '/api/unixtime') {
			res.writeHead(200, { 'Content-Type': 'application/json'});
			var output = {
				unixtime: date.getTime()
			}
		}
		else
		{
			res.end();
			return ;
		}
		res.end(JSON.stringify(output));
	}).on('error', (err) => {
		console.log(err.message);
	});

	server.listen(port_num)
		.on('error', (err) => {
			console.log(err.message);
	});
} catch (e) {
	console.log(e.message);
}
