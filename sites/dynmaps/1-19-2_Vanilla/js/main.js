function headToggle()
{
    var heads = document.getElementsByClassName("top-flex");
    var hideText = document.getElementById("hide-text");

    if(heads.classname == "top-flex")
    {
        heads.classname += " hidden";
        document.getElementById("hide").style.display = "none";
        hideText.textContent = "Show Heads";
    }
    else
    {
        heads.classname = "top-flex";
        document.getElementById("hide").style.display = "flex";
        hideText.textContent = "Hide Heads";
    }
}