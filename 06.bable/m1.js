let a = 10;
let b = 20;
let c = 30;

function show(){
    console.log('show')
}

//默认导出模块
export default{
    a,
    b,
    show
}

/*
    每个模块只能使用一次 export default 否则会报错
    没有导入的话 导出默认对象{}
*/

//按需导出
export let s1 = 'a';
export let s2 = 'b';
export function say(){
    console.log('no')
}

/*
    在每个模块中可以使用多次按需导出
*/