const tempLoad =()=>{
    let temp=document.getElementById('temp');
    temp.innerHTML=`<i class="fas fa-smile"></i>`;
    temp.style.color="#d63031";
    setTimeout(()=>{
        temp.innerHTML=`<i class="fas fa-smile-wink"></i>`;
      },2000);
}
tempLoad();
setInterval(tempLoad,4000);
const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');
const generateJokes = async() => {
  try{
    const setHeader={
      headers: {
        Accept : "application/json"
      }
    }
    const res=await fetch('https://icanhazdadjoke.com',setHeader);
    const data = await res.json();
    jokes.innerHTML=data.joke;
  }catch(err){
    console.log(`the error is ${err}`);
  }
}
jokeBtn.addEventListener('click',generateJokes);
generateJokes();
jokeBtn.addEventListener('click',generateJokes);
generateJokes();  