

let demo = document.getElementById("demo");


for (let i =1; i <=100; i ++){

    if((i%3 ==0) && (i%5 == 0)){
    demo.innerHTML += `<li> ${i} - Ciao, Mondo </li>`;
}else if (i%3 ==0){
    demo.innerHTML += `<li> ${i} - Ciao </li>`;
}else if(i%5 == 0){
    demo.innerHTML += `<li> ${i} - Mondo </li>`;
}else{
    demo.innerHTML += `<li> ${i} </li>`;
}}
