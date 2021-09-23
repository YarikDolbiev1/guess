let n=Math.floor(Math.random()*100);
let rand = Math.floor(Math.random()*n);
while (true){
  let x=prompt("Введите число,если хочешь выйти с игры введите !");
  if (x=="!"){
    alert("Вы покинули игру");
    break;
  } else if (isNaN(x)){
    alert("No!");
    break;
  }else if (x==rand){
    alert("Win");
    break;
  } else if (x<rand){
    alert("Число слишком маленькое");
  }else {
    alert("Число слишком большое");
  }
}



