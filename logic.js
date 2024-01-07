let MenuBtn=document.getElementById('MenuBtn')
MenuBtn.addEventListener('click',()=>
{
    document.querySelector('body').classList.toggle('menuActive')
    MenuBtn.classList.toggle('fa-xmark')
})
let type=new Typed('.auto-input',
{
    strings:['Front-End Developer..!','C++ Developer..!','UI Developer..!'],
    typeSpeed:100,
    backSpeed:50,
    backDelay:2000,
    loop:true,
})
const progressBars=document.querySelectorAll('.inner-line')
window.addEventListener('scroll',function()
{
    progressBars.forEach(function(progressBars)
    {
        const rect=progressBars.getBoundingClientRect()
        if(rect.top<window.innerHeight && rect.bottom>=0)
        {
            const width=progressBars.getAttribute('data-width')
            progressBars.style.width=width+'%'
        }
    })
})
let navLinks=document.querySelectorAll('header nav ul li a')
let sections=document.querySelectorAll('section')
window.addEventListener('scroll',()=>
{
    const scrollPos=window.scrollY+10
    sections.forEach(section=>
        {
            if(scrollPos>section.offsetTop && scrollPos <(section.offsetTop+section.offsetHeight))
            {
                navLinks.forEach(link=>
                    {
                        link.classList.remove('active')
                        if(section.getAttribute('id')===link.getAttribute('href').substring(1))
                        {
                            link.classList.add('active')
                        }
                    })
            }
        })
})
function toggleClass() {
    const project = document.getElementById('serrow');
    const internship = document.getElementById('serrowint');
    const checkbox = document.getElementById('tog');

    if (checkbox.checked) {
        project.style.display = 'none';
        project.style.opacity = '0';
        internship.style.display = 'grid';
        internship.style.opacity = '1';
    } else {
        project.style.display = 'grid';
        project.style.opacity = '1';
        internship.style.display = 'none';
        internship.style.opacity = '0';
    }
}

window.onload = function () {
    toggleClass();
};
