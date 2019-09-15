/**
 * @author wonderlandpark
 * @version 0.1.3
 * @license MIT
 * @copyright Copyright (c) 2019 wonderlandpark
 * @github https://github.com/wonderlandpark/wonderlangpark
 * @see https://github.com/wonderlandpark/wonderlangpark/master/README.md
 */

'use static' // 엄격모드 진입
const { josa, getJosaPicker, makeJosaify } = require('josa')



const kr_wonder = require('./lang_data')
const wonder_kr = {}
Object.keys(kr_wonder).forEach(a=>{
    wonder_kr[kr_wonder[a]] = a
})

/**
 * 한글 -> 원더어
 * @param {String} string 번역하는 텍스트
 * 
 * @returns {Object} 출력값
 */

exports.towonder = (string) => {
    obj = { input : string  }  
    result = obj.input;
    Object.keys(kr_wonder).forEach(a=>{
        result = result.replace(new RegExp(a, 'gi'), kr_wonder[a])
    })
    // result = result.replace(/(을|를) /gi,'#{을} ').replace(/(은|는) /gi,'#{은} ').replace(/(이|가) /gi,'#{이} ').replace(/(와|과) /gi,'#{와} ').replace(/(이어|여) /gi,'#{여} ').replace(/(으로|로) /gi,'#{로} ').replace(/(이었|였|) /gi,'#{이었} ').replace(/(아|야) /gi,'#{아} ') 
    obj.output = josa(result.replace(/(을|를) /gi,'#{을} ').replace(/(은|는) /gi,'#{은} ').replace(/(이|가) /gi,'#{이} ').replace(/(와|과) /gi,'#{와} ').replace(/(이어|여) /gi,'#{여} ').replace(/(으로|로) /gi,'#{로} ').replace(/(아|야) /gi,'#{아} ') )
    return obj
}
/**
 * In Process
 * 원더어 -> 한글
 * @param {String} string 번역하는 텍스트
 * 
 * @returns {Object} 출력값
 */

// exports.fromwonder = (string) => {
//     obj = { input : string  }  
//     result = obj.input;
//     Object.keys(wonder_kr).forEach(a=>{
//         result = result.replace(new RegExp(a, 'gi'), wonder_kr[a])
//     })
//     result = result.replace(/(을|를) /gi,'#{을} ').replace(/(은|는) /gi,'#{은} ').replace(/(이|가) /gi,'#{이} ').replace(/(와|과) /gi,'#{와} ').replace(/(이어|여) /gi,'#{여} ').replace(/(으로|로) /gi,'#{로} ').replace(/(이에요|예요) /gi,'#{이에요} ').replace(/(이었|였|) /gi,'#{이었} ').replace(/(아|야) /gi,'#{아} ')
//     obj.output = josa(result)
//     return obj
// }
