/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-collect.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kmorimot <kmorimot@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/24 01:06:48 by kmorimot          #+#    #+#             */
/*   Updated: 2020/12/25 23:30:45 by kmorimot         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*****
 * http通信でデータをとってきて、その文字数とデータを表示する。
 * 一つ前との違いはヒントにblがあること。文字数も必要ということ。
 * 一つ前と同様の方法でできるが、blを使ってみる。
 */

/**
 * bl = buffer list
 * バッファーを放出するストリームからバッファーを収集し、それらを消費するストリームにバッファーを放出できます。
 * res.pipe(bl(err, data))のようにpipeでblにデータを渡せるのは、
 * pipeメソッドがdataイベントを次のstreamに流し込むことができるから。
 * URL: https://www.npmjs.com/package/bl
 */

/**
 * Streamとは、Eventをつなぎ合わせたりデータのハンドリングや変換処理をしやすく
 * してくれるインターフェース。
 * http モジュールを例にとると、
 * リクエストを受け取る処理は Readable Stream、リクエストを送る処理は
 * Writable Stream で管理されています。このように連続するデータの流れを効率的に扱えるようにする
 * URL: https://qiita.com/koh110/items/0fba3acbce38916928f1
 */

/**
 * http.getでとってきたデータをresというオブジェクトのpipeによってblにstreamを流し込む。
 * toStringで文字列に直して、配列にデータを入れていき、３個目のURLが終わるとconsole.logする。
 */

const http = require('http');
const bl = require('bl');

if (process.argv.length != 3)
	return;

var dst_url = process.argv[2];

try {
	http.get(dst_url, (res) => {
		res.pipe(bl((err, data) => {
			if (err)
			{
				console.log(err.message);
			}
			else
			{
				data = data.toString();
				console.log(data.length);
				console.log(data);
			}
		}));
	}).on('error', (err) => {
		console.log(err.message);
	});
} catch (e) {
	console.log(e.message);
}
