document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click',function (e) { 
        e.preventDefault();
           document.querySelector(this.getAttribute ('href')).
        scrollIntoView({
           behavior:  'smooth' 
        });
    });
});

function showWellnessTracker (tabId){

const tabs = document.querySelectorAll('.dash-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabContents.forEach(content => content.classList.remove ('active-panel'));
tabs.forEach(tab => tab.classList.remove ('active-btn') );

document.getElementById(tabId).classList.add('active-panel');
document.getElementById('btn-' + tabId).classList.add('active-btn');

}