$(function() { 
  function goToDarkRSVP(){
    alert("magic");
    // document.body.className = document.body.className.replace("light","dark");
    document.body.className = 'dark';
    document.getElementById("light-password-section").classList.add('hide');

  }
});
