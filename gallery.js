upload.onchange=()=>{
  [...upload.files].forEach(f=>{
    const r=new FileReader();
    r.onload=()=>gallery.innerHTML+=`<img src="${r.result}">`;
    r.readAsDataURL(f);
  })
}
