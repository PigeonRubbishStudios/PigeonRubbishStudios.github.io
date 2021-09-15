const d = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("day").innerHTML = days[d.getDay()];

let dayName = d.getDay();

if (dayName == 0)
{
    document.body.style.background = "url('https://pigeonrubbishstudios.github.io/sites/pick-up-times/images/1.jpg')";
    document.getElementById("class1").innerHTML = "No Classes Today!";
    document.getElementById("class2").style.display = "none";
    document.getElementById("class3").style.display = "none";
}
else if (dayName == 1)
{
    document.body.style.background = "url('https://pigeonrubbishstudios.github.io/sites/pick-up-times/images/2.jpg')";
    document.getElementById("class1").innerHTML = "No Classes Today!";
    document.getElementById("class2").style.display = "none";
    document.getElementById("class3").style.display = "none";
}
else if (dayName == 2)
{
    document.body.style.background = "url('https://pigeonrubbishstudios.github.io/sites/pick-up-times/images/7.jpg')";
    document.getElementById("class1").innerHTML = "9:00–11:50";
    document.getElementById("class2").innerHTML = "13:00–15:00";
    document.getElementById("class3").style.display = "none";
}
else if (dayName == 3)
{
    document.body.style.background = "url('https://pigeonrubbishstudios.github.io/sites/pick-up-times/images/4.jpg')";
    document.getElementById("class1").innerHTML = "8:00–10:50";
    document.getElementById("class2").innerHTML = "13:00–15:50";
    document.getElementById("class3").innerHTML = "17:00–18:30";
}
else if (dayName == 4)
{
    document.body.style.background = "url('https://pigeonrubbishstudios.github.io/sites/pick-up-times/images/5.jpg')";
    document.getElementById("class1").innerHTML = "No Classes Today!";
    document.getElementById("class2").style.display = "none";
    document.getElementById("class3").style.display = "none";
}
else if (dayName == 5)
{
    document.body.style.background = "url('https://pigeonrubbishstudios.github.io/sites/pick-up-times/images/6.jpg')";
    document.getElementById("class1").innerHTML = "No Classes Today!";
    document.getElementById("class2").style.display = "none";
    document.getElementById("class3").style.display = "none";
}
else if (dayName == 6)
{
    document.body.style.background = "url('https://pigeonrubbishstudios.github.io/sites/pick-up-times/images/3.jpg')";
    document.getElementById("class1").innerHTML = "No Classes Today!";
    document.getElementById("class2").style.display = "none";
    document.getElementById("class3").style.display = "none";
}

document.body.style.backgroundSize = "cover";