function add(ele)
{
   document.getElementById('int').value=document.getElementById('int').value+ele;
    // document.getElementById('int').value+=ele; ope shorted
}

function exe()
{
document.getElementById('int').value=eval(document.getElementById('int').value);
}

function clr()
{
    document.getElementById('int').value="";
}