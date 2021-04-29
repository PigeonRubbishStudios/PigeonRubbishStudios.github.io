$(document).ready(function()
{
    $('header nav a').click(function()
    {
        event.preventDefault()

        var nameOfSectionToScrollTo = $(this).attr('href')
        var howFarToScroll = $(nameOfSectionToScrollTo).offset().top

        $('html,body').animate({scrollTop: howFarToScroll - 188},500)
    })
})