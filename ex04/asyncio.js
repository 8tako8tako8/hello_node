/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   asyncio.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kmorimot <kmorimot@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 21:06:02 by kmorimot          #+#    #+#             */
/*   Updated: 2021/01/28 15:54:00 by kmorimot         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/**
 * 非同期的なreadFileSyncを用いてファイルを読み込んでそのファイルに含まれる改行の数を数えて標準出力する課題
 */

/**
 * fs.readFile(path[, options], callback)
 * readFileで受け取ったdataの文字列をfor文を用いて改行を数えてconsole.log
 * 同期的なreadFileSyncでは、
 * 例えば、ファイルの読み込みに時間がかかった時でもそれが終了するまで次の行にはいけない。
 * それに対して、非同期的なreadFileでは、処理も待たずに次の行へ行く。このため例外処理にtry-catchは使えない。
 * しかし、引数にcallback関数があり、readFileの処理終了後に呼ばれる関数があるので、
 * 今回は読み込んだデータをcallback関数でconsole.logした。
 * 
 */

if (process.argv.length != 3)
	return ;

const fs = require('fs');
const file_name = process.argv[2];
let newline_i = 0;

fs.readFile(file_name, 'utf-8', (err, data) => {
	if (err)
	{
		console.log(err.message);
	}
	else
	{
		for (let i = 0; i < data.length; i++) {
			if (data[i] === '\n')
				newline_i++;			
		}
		console.log(newline_i);
	}
});
