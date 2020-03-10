// myButton.addEventListener('click', (e)=>{
//     let request = new XMLHttpRequest()    // 创建一个请求对象
//     request.open('GET', '/xxxx')    // 配置参数
//     request.onreadystatechange = ()=>{
//         if(request.readyState === 4){
//             console.log('请求响应都结束了')

//             if(request.status >=200 && request.status < 300){
//                 console.log('请求成功。')
//                 console.log(request.responseText)    // 读取响应的第四部分
//                 console.log(typeof request.responseText)    // String

//                 let string = request.responseText
//                 // 把符合JSON语法的字符串转换成JS对应的值
//                 let object = window.JSON.parse(string)
//                 console.log(typeof object)
//                 console.log(object.note)
//                 console.log(object.note.from)

//             }else if(request.status >= 400){
//                 console.log('请求失败。')
//             }
//         }
//     }
    
//     request.send()    // 发送请求
// })
myButton.addEventListener('click', (e)=>{
    let request = new XMLHttpRequest()    // 创建一个请求对象
    request.open('GET', '/xxxx')    // 配置参数
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >=200 && request.status < 300){
                let string = request.responseText
                let object = window.JSON.parse(string)
            }
        }
    }
    request.send()    // 发送请求
})


myButton.addEventListener('click', ()=>{
    let request = new XMLRequest()
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >=200 && request.status <300){
                let string = request.responseText
                let object = window.JSON.parse(string)
            }
        }
    }
    request.open('GET', '/xxx')
    request.send()
})