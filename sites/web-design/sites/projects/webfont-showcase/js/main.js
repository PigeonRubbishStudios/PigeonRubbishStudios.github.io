$(document).ready(function()
{
    $('header nav a').click(function()
    {
        event.preventDefault()

        var nameOfSectionToScrollTo = $(this).attr('href')
        var howFarToScroll = $(nameOfSectionToScrollTo).offset().top

        $('html,body').animate({scrollTop: howFarToScroll},500)
    })

    // setTimeout(switchBillboard(), 2500);
})

// var activeText = 0;
// var alphabetText = document.getElementById("alphabet");
// var numbersText = document.getElementById("numbers");

// function switchBillboard()
// {
//     if(activeText == 0)
//     {
//         alphabetText.style.display = "none";
//         numbersText.style.display = "block";
//         activeText = 1;
//     }
//     else
//     {
//         alphabetText.style.display = "block";
//         numbersText.style.display = "none";
//         activeText = 0;
//     }
// }