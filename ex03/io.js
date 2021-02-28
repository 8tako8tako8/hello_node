/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kmorimot <kmorimot@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 21:06:02 by kmorimot          #+#    #+#             */
/*   Updated: 2021/01/28 15:46:07 by kmorimot         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/**
 * 同期的な関数readFileSyncを用いてファイルを読み込んでそのファイルに含まれる改行の数を数えて標準出力する課題
 */

/**
 * requireは、NodeJSのモジュールで使用される特定のファイルまたはパッケージのインポートです。
 * fsモジュールをインポート
 * fs.readFileSync(path[, options])　ファイルの内容全体を同期的に読み取ります。
 * .lengthで配列の長さを取ってこれる。
 */

if (process.argv.length !== 3)
	return;

const fs = require('fs');
const file_name = process.argv[2];
let newline_i = 0;

try　{
		let file_text = fs.readFileSync(file_name, 'utf-8');
		for (let i = 0; i < file_text.length; i++)
		{
			if (file_text[i] === '\n')
			{
				newline_i++;
			}
		}
		console.log(newline_i);
}　catch(e)　{
	console.log(e.message);
}
