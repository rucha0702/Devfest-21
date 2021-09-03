let newOrgs = [];
const addOrg = (e)=>{
    e.preventDefault();
    let org = {
        "id" : Date.now(),
        "Name" : document.getElementById("orgName").value,
        "State" : document.getElementById("state").value,
        "Website" : document.getElementById("website").value
    }
    newOrgs.push(org);
    let count =0;
    let info = document.getElementById("status-info");
    if(count==0)
    {
        info.style.display="none";
    }
    let inputOrg = document.getElementById("OrgInp");
    let inputStat = document.getElementById("OrgStatus");
    let val = document.getElementById("orgName");
    let ulist = document.getElementById("ulist");
    let p = document.createElement('p');
    let s = document.createElement('p');
    let orgTxt = document.createTextNode(val.value);
    let statTxt = document.createTextNode("Pending");
    let list = document.createElement('li');
    s.appendChild(statTxt);
    inputStat.appendChild(s);
    p.appendChild(orgTxt);
    inputOrg.appendChild(p);
    // s.classList.add('space');
    // p.classList.add('space');
    // ulist.classList.add('space');
   
    for(i=0;i<newOrgs.length + 1;i++)
    {
       if(val.value==newOrgs[i].Name)
       {
           count++;
           if(count>1)
           {
               alert('Organization already added');
               newOrgs.pop();
               
               s.style.display="none";
               p.style.display="none";
             
           }
       } 
    }
}


document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("orgBtn").addEventListener("click",addOrg);
    
});
console.log(newOrgs);
