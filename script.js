function login(){
  const u = username.value;
  const p = password.value;

  if(u==="hansbaby" && p==="iloveyou"){
    window.location = "love.html";
  } else {
    error.innerText = "Wrong details 😢";
  }
}
