let homerun=document.getElementById("home")
let guestrun=document.getElementById("guest")

let htotal=0;
let gtotal=0;

function home1()
{
    htotal++
    homerun.innerText=htotal
}
function home2()
{
    htotal+=2
    homerun.innerText=htotal
}
function home3()
{
    htotal+=3
    homerun.innerText=htotal
}

function guest1()
{
    gtotal+=1
    guestrun.innerText=gtotal
}
function guest2()
{
    gtotal+=2
    guestrun.innerText=gtotal
}
function guest3()
{
    gtotal+=3
    guestrun.innerText=gtotal
}

function clearer()
{
    htotal=0
    gtotal=0
    homerun.innerText="0"
    guestrun.innerText="0"
}


