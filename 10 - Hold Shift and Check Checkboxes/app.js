
  const inbox = document.querySelector('.inbox')
  const itemlList = [...inbox.children].map(item => item.children[0])
  console.log(itemlList);
  const state = {last: null}
  const onClick = function(e) {
      console.log("checking")
    if(e.target.tagName === 'INPUT') {
        console.log(this.itemlList.indexOf(e.target))
    }
  }
  document.addEventListener('click', console.log('fuck'))
  inbox.addEventListener('click', this.onClick)
  inbox.onclick = this.onClick