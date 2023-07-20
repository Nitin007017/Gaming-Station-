
  var slidingLineElements = document.querySelectorAll('.sliding-line');
  slidingLineElements.forEach(function(element) {
    element.addEventListener('mouseover', function() {
      this.classList.add('sliding-line-hover');
    });

    element.addEventListener('mouseout', function() {
      this.classList.remove('sliding-line-hover');
    });
  });

  


// function changename()
// {
// const data = document.getElementById('name');
// const curr= document.getElementById('navbar');
// curr.innerHTML=data.value;
// }
