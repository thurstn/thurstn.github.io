/*window.onscroll = function(){
    let els = document.getElementsByClassName("showonscroll");
    let logo = document.getElementById("logo");
    if (isInViewport(logo))
    {
        for (let i = 0; i < els.length; i++)
        {
            els[i].style.visibility = "hidden";
            els[i].style.opacity = 0;
        }
    }
    else
    {
        for (let i = 0; i < els.length; i++)
        {
            els[i].style.visibility = "visible";
            els[i].style.opacity = 1;
        }
    }

    
    if (window.scrollY >= sticky)
    {
        document.getElementById("navbar").classList.add("sticky");
    }
    else
    {
        document.getElementById("navbar").classList.remove("sticky");
    }
}*/

function isInViewport(element)
{
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}