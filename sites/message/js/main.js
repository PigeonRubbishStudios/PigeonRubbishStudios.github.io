const d = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("day").innerHTML = days[d.getDay()];

let dayName = d.getDay();

if (dayName == 0)
{
    document.body.style.background = "url('https://pigeonrubbishstudios.github.io/sites/message/images/1.jpg')";
}
else if (dayName == 1)
{
    document.body.style.background = "url('https://pigeonrubbishstudios.github.io/sites/message/images/2.jpg')";
}
else if (dayName == 2)
{
    document.body.style.background = "url('https://pigeonrubbishstudios.github.io/sites/message/images/3.jpg')";
}
else if (dayName == 3)
{
    document.body.style.background = "url('https://pigeonrubbishstudios.github.io/sites/message/images/4.jpg')";
}
else if (dayName == 4)
{
    document.body.style.background = "url('https://pigeonrubbishstudios.github.io/sites/message/images/5.jpg')";
}
else if (dayName == 5)
{
    document.body.style.background = "url('https://pigeonrubbishstudios.github.io/sites/message/images/6.jpg')";
}
else if (dayName == 6)
{
    document.body.style.background = "url('https://pigeonrubbishstudios.github.io/sites/message/images/7.jpg')";
}

document.body.style.backgroundSize = "cover";