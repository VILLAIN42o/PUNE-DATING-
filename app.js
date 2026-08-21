const people=[
{name:"Aisha",age:24,city:"Pune",interest:"Music & cafés",emoji:"👩🏻"},
{name:"Riya",age:27,city:"Pune",interest:"Travel & movies",emoji:"👩🏽"},
{name:"Neha",age:25,city:"Pune",interest:"Books & food",emoji:"👩🏼"},
{name:"Sneha",age:29,city:"Pune",interest:"Fitness & art",emoji:"👩🏾"}];
let liked=[];
function join(){const n=document.getElementById('name').value.trim(),a=+document.getElementById('age').value;
if(!n||a<18){alert("Please enter your name and confirm you are 18+.");return}
localStorage.setItem("pd_user",JSON.stringify({name:n,age:a}));
showApp();}
function showApp(){const u=JSON.parse(localStorage.getItem("pd_user"));if(!u)return;
document.getElementById("auth").hidden=true;document.getElementById("app").hidden=false;
document.getElementById("welcome").textContent=`Welcome, ${u.name} 💜`;
render();}
function render(){document.getElementById("profiles").innerHTML=people.map((p,i)=>`
<div class="profile"><div class="avatar">${p.emoji}</div><h3>${p.name}, ${p.age}</h3><p>📍 ${p.city}</p><p>✨ ${p.interest}</p>
<button onclick="like(${i})">${liked.includes(i)?"❤️ Liked":"❤️ Like"}</button>
<button class="secondary" onclick="report('${p.name}')">Report</button></div>`).join("");
document.getElementById("matches").innerHTML=liked.length?liked.map(i=>`<p>💜 <b>${people[i].name}</b> — It's a demo match! <button onclick="alert('Demo chat: Hi ${people[i].name}! 👋')">Open Chat</button></p>`).join(""):"Like someone to create a demo match.";}
function like(i){if(!liked.includes(i))liked.push(i);render();}
function report(n){alert(`Thanks. ${n} has been reported in this demo.`);}
function logout(){localStorage.removeItem("pd_user");location.reload();}
if(localStorage.getItem("pd_user"))showApp();