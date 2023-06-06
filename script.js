const buttons = document.querySelectorAll('.btn')
const boxes = document.querySelectorAll('.boxes')
const icons = document.getElementsByTagName('i')

buttons.forEach((button, idx) => {
    button.addEventListener('click', () => {
        if(boxes[idx].classList.contains('active')){
            boxes[idx].classList.remove('active')
            icons[idx].classList.remove('fa-times')
            icons[idx].classList.add('fa-angle-down')
        }
        else{
            boxes[idx].classList.add('active')
            icons[idx].classList.remove('fa-angle-down')
            icons[idx].classList.add('fa-times')
        }
    })
})
