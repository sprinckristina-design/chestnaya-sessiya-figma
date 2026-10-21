document.querySelectorAll('details').forEach(x=>x.addEventListener('toggle',()=>{if(x.open)document.querySelectorAll('details').forEach(y=>{if(y!==x)y.open=false})}));
