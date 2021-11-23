document.documentElement.addEventListener('resize', ()=> {
    if(document.documentElement.clientWidth < 500) {
        alert('< 500')
        alert('h')
    }
})