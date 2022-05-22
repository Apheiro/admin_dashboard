const size = document.querySelector('html');
const topBar = document.querySelector('#searchUser');
const navBar = document.querySelector('#search')
const sideBar = document.querySelector('#sidebar');
const page = document.querySelector('#page')
const indexConfigOption = document.querySelector('#indexConfigOptions')
const sideBarBtn = document.createElement('button');



function lostFocus(e) {
    const svg = sideBarBtn.lastChild
    if (e.target == sideBar || e.target == sideBar.children[0] || e.target == sideBar.children[1]) {
        return
    } else if (sideBar.className == "sidebar open") {
        if (e.target == svg || e.target == sideBarBtn || e.target == svg.firstChild) {
            return
        } else {
            sideBar.classList.add('close')
            sideBar.classList.remove('open')
        }
    }
}


function addBtn(e) { 
    if (size.scrollWidth <= 1420) {
        sideBar.classList.add('close')
        sideBar.classList.remove('open')
        sideBarBtn.classList.add('tinyBtn');
        sideBarBtn.classList.add('sideBarBtn');
        sideBarBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>';
        topBar.insertBefore(sideBarBtn, navBar);
        addEventListener('click', lostFocus);
    } else {
        sideBar.classList.remove('close')
        if (topBar.children[0] == sideBarBtn) { topBar.removeChild(sideBarBtn) }
        else { return }

    }

    
}
addBtn()
window.addEventListener('resize', addBtn)


function showSideBar(e) {
    sideBar.classList.remove('close')
    sideBar.classList.add('open')
}
sideBarBtn.addEventListener('click', showSideBar);

