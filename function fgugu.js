 function fgugu() {
// 구구단
    for(let dan=2; dan < 10; dan++) { //바깥쪽반복(단)
    console.log(dan+"단")
    for(let i=1; i<10; i++) console.log(dan + "*" + i + "=" + dan*i) 
    console.log("===")
        }}


         function fgugu2(dan) {
// 구구단
     console.log(dan+"단")
    for(let i=1; i<10; i++)
          console.log(dan + "*" + i + "=" + dan*i) 
    console.log("===")
    return "성공"
        }