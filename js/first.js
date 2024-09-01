const BackToTop = document.querySelector('.BackToTop')
const body = document.querySelector('body')
const progressBar = () => {
    const totalHeight = body.clientHeight - window.innerHeight
    const scrollPosition = window.scrollY
    const percentage = (100 / totalHeight) * scrollPosition
    if(percentage > 10){
        BackToTop.classList.add('active')
    }else{
        BackToTop.classList.remove('active')
    }

    BackToTop.style.backgroundImage = `conic-gradient(dodgerblue 0% ${percentage}%, #ccc 0% 100%)`

}

window.addEventListener('scroll', progressBar)