/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   vars.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kmorimot <kmorimot@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 21:06:48 by kmorimot          #+#    #+#             */
/*   Updated: 2020/12/25 19:24:58 by kmorimot         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/**
 * いろいろな型を使ってconsole.logしてみる。
 */

/** 
 * 名前を付けられた値を集めたものをオブジェクト(Object)と呼びます。個々のデータ値をそのオブジェクトのプロパティを呼びます。
 * オブジェクトは new Object()、Object.create()、リテラル表記法 (initializer 表記法) を使用して初期化されます。
 * オブジェクト初期化子はオブジェクトのプロパティ名と関連した値のゼロ以上のペアのリストです。中括弧 ({}) で囲まれます。
 * オブジェクトリテラルは、{プロパティ1:値, プロパティ2:値}　で表す。
*/

/**
 * typeof はオブジェクトまたはプリミティブ型を表す式を返します。
 * データ型 typeof 演算子でプリミティブと判定できる 6 種類。
 * undefined : typeof instance === "undefined"
 * Boolean : typeof instance === "boolean"
 * Number : typeof instance === "number"
 * String : typeof instance === "string"
 * BigInt : typeof instance === "bigint"
 * Symbol : typeof instance === "symbol"
 */


/** 
 * Stringオブジェクトは文字の並びを表したり操作したりするために使用される。
 * const string1 = "文字列プリミティブ";
 * const string2 = new String("文字列オブジェクト");
 * 文字列リテラル (二重引用符または単一引用符で示されます)、
 * および String 関数をコンストラクター以外の場面で (すなわち new キーワードを使わずに) 
 * 呼び出した場合はプリミティブの文字列になります。
 * JavaScript では、必要に応じてプリミティブの文字列が自動的に String オブジェクトに変換されるので、
 * プリミティブの文字列に対して String オブジェクトのメソッドを使用することができます。
 * プリミティブの文字列に対して、メソッドの呼び出しやプロパティの参照が行われようとした場合、
 * JavaScript は自動的にプリミティブの文字列をオブジェクトでラップし、メソッドを呼び出したりプロパティの参照を行ったりします。
*/

var str = "42";
console.log(str + ' is a ' + (typeof str) + '.');// => 42 is a string.

var num = 42;
console.log(num + ' is a ' + (typeof num) + '.');// =>  42 is a number.

/**
 * Object() (Object コンストラクターは指定された値のオブジェクトラッパーを生成します。)
 * 数値としての42を保持したままオブジェクトにすることができる。
 */

var obj1 = new Object(42);
console.log(obj1 + ' is an ' + (typeof obj1) + '.');// => 42 is an object.

/** 
 * var object = {}; はプロパティを持たない空のオブジェクトを表す。
 * [object Object] は中身を指定されなかった時にdefaultで出るものっぽい
*/

var obj2 = {}
console.log(obj2 + ' is an ' + (typeof obj2) + '.');// => [object Object] is an object.


var bool = true;
console.log(bool + ' is a ' + (typeof bool) + '.');// => true is a boolean.

var u;
console.log(u + ' is an ' + (typeof u) + '.');// => undefined is an undefined.
