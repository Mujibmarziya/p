const flist=document.querySelectorAll("div");
for(const list of flist){
    list.style.color="red";
    list.style.backgroundColor="green";  

}
const mlist= document.getElementById("mlist");
const nlist =document.createElement("div");
const nul =document.createElement("ul");
const nli1 =document.createElement("li");
nli1.innerText="mun"
nli1.style.color="red"
nli1.style.backgroundColor="red"
const nli2 =document.createElement("li");
nli2.innerText="mun"
nli2.style.color="red"
nli2.style.backgroundColor="black"
const nli3 =document.createElement("li");
nli3.innerText="mun"
nli3.style.color="red"
nli3.style.backgroundColor="pink"
nul.appendChild(nli1);
nlist.appendChild(nul);
mlist.appendChild(nlist);

nul.appendChild(nli2);
nlist.appendChild(nul);
mlist.appendChild(nlist);

nul.appendChild(nli3);
nlist.appendChild(nul);
mlist.appendChild(nlist);
const main =document.getElementById("mlist");
const glist= document.createElement("section");

glist.innerHTML=`<p>hi</p>
<ul>
  <li>kinjjk</li>
  <li>kinjjk</li>
  <li>kinjjk</li>
  <li>kinjjk</li>
</ul>`
main.appendChild(glist)
glist.style.padding="15px"
glist.style.width="50%"
glist.style.margin="40px"
glist.style.backgroundColor="red"
glist.style.color="white"




