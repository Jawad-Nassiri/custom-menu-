const contextMenu = document.querySelector(".contextmenu");

document.addEventListener('contextmenu', (event) => {
  event.preventDefault()

  let contextMenuWidth = contextMenu.offsetWidth;
  let contextMenuHeight = contextMenu.getBoundingClientRect().height;

  contextMenu.style.display = 'block'
  contextMenu.style.left = `${event.pageX}px`
  contextMenu.style.top = `${event.pageY}px`



  if(event.pageX + contextMenuWidth >= innerWidth) {
    contextMenu.style.left = `${innerWidth - contextMenu.offsetWidth - 20}px`
  }

  if(event.pageY + contextMenuHeight >= innerHeight) {
    contextMenu.style.top = `${innerHeight - contextMenuHeight - 20}px`
  }
})

document.addEventListener('click', (event) => {
  if(!contextMenu.contains(event.target)) {
    contextMenu.style.display = 'none'
  }
})

document.addEventListener('keydown', (event) => {
  if(event.key === "Escape") {
    contextMenu.style.display = 'none'
  }
})
