document.addEventListener('DOMContentLoaded', (event) => {
  
  // Ensuring that anchors with an href of '#' don't cause the page to jump
  document.querySelectorAll('a').forEach( (anchor) => {
    
    if( anchor.attributes.href.value === '#' ) {
      
      anchor.addEventListener('click', (event) => {
        event.preventDefault();
      })
    }
    
  })
})