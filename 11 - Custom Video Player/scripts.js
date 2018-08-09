(function(){
    //grab element
    const player = document.querySelector('.player')
    const video = player.querySelector('.viewer')
    const progress = player.querySelector('.progress')
    const progressBar = player.querySelector('.progress__filled')
    const toggle = player.querySelector('.toggle')
    const skipButtons = player.querySelectorAll('[data-skip]')
    const ranges = player.querySelectorAll('.player__slider')

    //function
    function onPlayButton() {
        if(video.paused) {
            video.play()
        }else {
            video.pause()
        }
    }

    function changeButton() {
        toggle.textContent = !video.paused ? '▌▌' : '►'
    }

    function onSkip() {
        console.log(this.dataset.skip)
        video.currentTime += Number(this.dataset.skip)
    }

    function onRange() {
        video[this.name] = this.value
    }

    function updateProcessBar() {
        const percent = (video.currentTime / video.duration) * 100
        progressBar.style.flexBasis = `${percent}%` 
    }

    function scrub(e) {
        const time = (e.offsetX / progress.offsetWidth) * video.duration
        video.currentTime = time
    }

    let mousedown = false

    //handle Event
    video.addEventListener('click', onPlayButton)
    video.addEventListener('play', changeButton)
    video.addEventListener('pause', changeButton)
    video.addEventListener('timeupdate', updateProcessBar)
    toggle.addEventListener('click', onPlayButton)
    skipButtons.forEach(button => button.addEventListener('click', onSkip))
    ranges.forEach(range => range.addEventListener('change', onRange))
    ranges.forEach(range => range.addEventListener('mousemove', onRange))
    progress.addEventListener('mousemove',(e) => mousedown && scrub(e))
    progress.addEventListener('click',scrub)
    progress.addEventListener('mousedown', () => mousedown = true)
    progress.addEventListener('mouseup', () => mousedown = false)
})()