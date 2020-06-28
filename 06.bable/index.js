//默认导入模块
import m1 from './m1.js'

console.log(m1)

//按需导入
import {s1,s2 as ss2,say} from './m1.js';
console.log(s1);
console.log(ss2);
console.log(say)

//直接导出
import './m2.js'