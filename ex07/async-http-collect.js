/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kmorimot <kmorimot@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/24 02:22:46 by kmorimot          #+#    #+#             */
/*   Updated: 2021/01/28 16:35:43 by kmorimot         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*****
 * 3つのURLを与えてそのデータをそれぞれ順番通りにconsole.log
 */

/**
 * bl = buffer list
 * http.getは非同期な処理なので、
 * http.getでとってきたデータをresというオブジェクトのpipeによってstreamする。
 * toStringで文字列に直して、
 * 配列にデータを入れていき、３個目のURLが終わるとconsole.logする。
 * 
 */

const http = require('http');
const bl = require('bl');

if (process.argv.length != 5)
	return (console.log('Invalid commandline arguments'));

let dst_urls = [process.argv[2], process.argv[3], process.argv[4]];
let buf = [];
let url_i = 0;

function store_data(dst_urls, i) {
	try {
		http.get(dst_urls[i], (res) => {
			res.pipe(bl((err, data) => {
				if(err)
				{
					return console.log(err.message);
				}
				else
				{
					data = data.toString();
					buf[i] = data;
					url_i++;
					if (url_i == 3)
					{
						for (let j = 0; j < buf.length; j++)
						{
							console.log(buf[j]);
						}
					}
				}
			}));
		}).on('error', (err) => {
			console.log(err.message);
		});
	} catch(e) {
		console.log(e.message);
	}
}

for (let i = 0; i < 3; i++){
	store_data(dst_urls, i);
}
