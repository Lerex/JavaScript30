const inbox = document.querySelector('.inbox')
  const itemlList = [...inbox.children].map(item => item.children[0])
  console.log(itemlList);
  const state = {last: null}
  const onClick = function(e) {
    if(e.target.tagName === 'INPUT' && e.target.checked) {
        const index = itemlList.indexOf(e.target)
        if(state.last === null) {
          state.last = index
          return
        }
        if(e.shiftKey) checkBetween(Math.min(index, state.last), Math.max(index, state.last))
        state.last = index
    }
  }
  function checkBetween(start, end) {
    for(let i = start; i <= end; i++) {
      itemlList[i].checked = true
    }
  }
  inbox.addEventListener('click', onClick)