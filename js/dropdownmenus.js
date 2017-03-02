
  // ================DROPDOWN MENUS===============
  
  var shift = document.querySelector('.shift');
 
  var titleElement = shift.querySelectorAll('.title');
 
  for(var i=0; i < titleElement.length; i ++){
 
    titleElement[i].addEventListener("click", function(e){
 
      var element = e.target;
 
      console.log(element);
      var dropDown = shift.querySelector('#'+element.id+"-Dropdown");
      dropDown.classList.toggle("show");
    });
     
  }