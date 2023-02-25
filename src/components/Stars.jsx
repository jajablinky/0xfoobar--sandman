const Stars = () => {
    const count = 5
    const location = document.querySelector('.landing-page--full-container')
    let i = 0

    while (i < count) {
        const star = document.createElement('i')
        const x = Math.floor(Math.random() * window.innerWidth)
        const y = Math.floor(Math.random() * window.innerHeight)

        const size = Math.random() * 4
        star.style.left = x + 'px'
        star.style.top = y + 'px'
        star.style.width = 1 + size + 'px'
        star.style.height = 1 + size + 'px'

        const duration = Math.random() * 4

        star.style.animationDuration = 2 + duration + 's'

        location.appendChild(star)
        i++
    }
}

export default Stars
