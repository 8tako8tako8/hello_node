/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sum_args.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kmorimot <kmorimot@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 21:06:26 by kmorimot          #+#    #+#             */
/*   Updated: 2021/01/28 15:28:11 by kmorimot         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*****
 * コマンドライン引数を足して合計をconsole.logする。
 */

if (process.argv.length < 3)
	return ;

/**
 * コマンドラインをparseIntで文字列を整数値にして足していく。
 * isNANが許可されてないので2aaaなどを足されても動いてしまう。
 * クラッシュしないので良しとした。
 */

let sum = 0;

for (let i = 2; i < process.argv.length; i++)
{
	sum += parseInt(process.argv[i]);
}

console.log(sum);
