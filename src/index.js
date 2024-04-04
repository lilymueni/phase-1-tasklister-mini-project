document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const target=document.getElementById('create-task-form');
  console.log(target);
});

//add tasks
const submit=document.getElementById('create-task-form');
submit.addEventListener('submit',function(e){
  e.preventDefault();
  const value=submit.querySelector(input[type='text']).value;
  console.log(value);
});


const tasks=document.querySelector('#tasks ul');
//delete tasks
tasks.addEventListener('click',function(e){
  if(e.target.id=="list"){
    const ul=e.target.parentElement;
    tasks.removeChild(ul);
  }
})