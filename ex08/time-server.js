/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   time-server.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kmorimot <kmorimot@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/24 02:53:42 by kmorimot          #+#    #+#             */
/*   Updated: 2021/01/28 17:06:30 by kmorimot         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*****
 * ポート上のTCP通信を用いて、ポートに接続された時間を表示する。
 */

/**
 * net.createServer([options][, connectionListener])
 * は、新しいTCPまたはIPCサーバーを作成します。
 * TCP(Transmission Control Protocol) は、
 * IPと同様にインターネットにおいて標準的に利用されているプロトコルです。
 * TCPは、IPの上位プロトコルでトランスポート層で動作するプロトコル。
 * ネットワーク層のIPとセッション層以上のプロトコル（例：HTTP、FTP、Telnet)
 * の橋渡しをする形で動作しています。
 */

/**
 * socketとは、ユーザーとクライアント間で対話するためのもの。
 * socket.endは、例えば、FINパケットを送信します。 サーバは、データを送信することが可能です。
 * server.listenは、接続をリッスンするサーバーを起動します。
 */

/**
 * DateオブジェクトのgetFullyearなどを使えば、時間を取れる。
 * 基準となるのは、そのタイムゾーンの現地時間（ある地点の子午線を基準として定めた地方時）です。
 */

const net = require('net');

if (process.argv.length != 3)
	return (console.log('Invalid commandline arguments'));

let port_num = parseInt(process.argv[2]);

function add_zero(num) {
	if (num < 10)
	{
		return (num = '0' + num);
	}
	else
	{
		return (num);
	}
};

const server = net.createServer((socket) => {
		d = new Date();
		s = d.getFullYear() + "-" + (add_zero(d.getMonth() + 1)) + "-" + add_zero(d.getDate())
			+ " " + add_zero(d.getHours()) + ":" + add_zero(d.getMinutes()) + '\n';
		socket.end(s);
}).on('error', (err) => {
	console.log(err.message);
});

try {
	server.listen(port_num)
		.on('error', (err) => {
			console.log(err.message);
		});
} catch (e) {
	console.log(e.message);
}
