(function(){
    const spanEl = document.querySelector('main h2 span')
    const txtArr = ['"Web Publisher"', '"HeeJin"', '"graphic Designer"', '"Director"'];
    index = 0;

    let currentTxt = txtArr[index].split('')

    function writeTxt(){
        spanEl.textContent += currentTxt.shift();        
        if(currentTxt.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random() * 100))
        }

        else {
            currentTxt = spanEl.textContent.split('');
            setTimeout(deleteTxt, 2500)
        }
    }

    function deleteTxt(){
        currentTxt.pop()
        spanEl.textContent = currentTxt.join('')
        if(currentTxt.length !== 0){
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
        }
        else {
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split('')
            writeTxt();
        }
    }

    writeTxt()
})()

const headerEl = document.querySelector('header')

window.addEventListener('scroll', function(){
    this.requestAnimationFrame(scrollCheck)
});

function scrollCheck(){
    let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset
    if(browserScrollY > 0){
        headerEl.classList.add('active')
    }
    
    else {
        headerEl.classList.remove('active')
    }
}

const animationMove = function(selector){
    const targetEl = document.querySelector(selector)
    const bScrollY = window.pageYOffset;
    const targetScrollY = targetEl.getBoundingClientRect().top + bScrollY
    window.scrollTo({ top: targetScrollY, behavior: 'smooth'})
}

const scrollMove = document.querySelectorAll('[data-animation-scroll="true"]')
for(let i = 0; i < scrollMove.length; i++){
    scrollMove[i].addEventListener('click', function(){
        const target = this.dataset.target
        animationMove(target)
    })
}