// callback

`아래 방식은 비동기-동기 순으로 작동시키고 싶을 때`
function a(b, c){ //비동기
    setTimeout(()=>{
        console.log("a")
        b() //동기
        c() //동기
    }, 1000)
}

a(function(){console.log("b")}, function(){console.log("c")});


//promise


//async await



