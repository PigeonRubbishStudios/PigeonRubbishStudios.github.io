var cellNumber = 0;
var bgopt;
var backgroundOption;
var chopt;
var challengeOption;
var switchShow = 1;
var challengesElements = document.getElementsByClassName("Challenges");
var challengeLength = challengesElements.length;

if (localStorage.getItem("unitsDict") != null)
{
    var savedUnitsDict = JSON.parse(localStorage.getItem("unitsDict"));
}
else
{
    var savedUnitsDict = {};
}

if (localStorage.getItem("challengesDict") != null)
{
    var savedChallengesDict = JSON.parse(localStorage.getItem("challengesDict"));
}
else
{
    var savedChallengesDict = {};
}

const firstDaily = document.querySelector('#FirstDaily');
const secondDaily = document.querySelector('#SecondDaily');
const thirdDaily = document.querySelector('#ThirdDaily');

firstDaily.addEventListener('change', (event) => 
{
   savedChallengesDict["FirstDaily"] = firstDaily.value;
   localStorage.setItem("challengesDict", JSON.stringify(savedChallengesDict));
   console.log(`Saved with a value of ${firstDaily.value}`);
});

secondDaily.addEventListener('change', (event) => 
{
    savedChallengesDict["SecondDaily"] = secondDaily.value;
    localStorage.setItem("challengesDict", JSON.stringify(savedChallengesDict));
    console.log(`Saved with a value of ${secondDaily.value}`);
});

thirdDaily.addEventListener('change', (event) => 
{
    savedChallengesDict["ThirdDaily"] = thirdDaily.value;
    localStorage.setItem("challengesDict", JSON.stringify(savedChallengesDict));
    console.log(`Saved with a value of ${thirdDaily.value}`);
});

loadSaved();

function loadSaved()
{
    for (let i = 0; i < Object.keys(savedUnitsDict).length; i++) 
    {
        backgroundOption = Object.values(savedUnitsDict)[i];
        var cellToSet = document.getElementById(Object.keys(savedUnitsDict)[i]);
        cellToSet.style.backgroundImage = backgroundOption; 
        console.log(backgroundOption);
    }

    document.getElementById('FirstDaily').value = savedChallengesDict["FirstDaily"];
    document.getElementById('SecondDaily').value = savedChallengesDict["SecondDaily"];
    document.getElementById('ThirdDaily').value = savedChallengesDict["ThirdDaily"];

    document.getElementById('FirstDailyCheckbox').checked = savedCheckboxDict['FirstDailyCheckbox'];
}

async function setCell(i)
{
    cellNumber = i;
    return cellNumber
}

async function swapImage(unitName) 
{
    await setCell();
    var cellToSet = document.getElementById(cellNumber);
    if (unitName == "Blank")
    {
        backgroundOption = "none";
        cellToSet.style.backgroundImage = backgroundOption;
        cellToSet.style.backgroundColor = "#141419";
        bgopt = cellToSet.getAttribute('id')

        savedUnitsDict[bgopt] = backgroundOption;

        localStorage.setItem("unitsDict", JSON.stringify(savedUnitsDict));
        console.log(localStorage.length);
    }
    else
    {
        var unitURL = document.getElementById(unitName).getAttribute('src');
        backgroundOption = `url('../sites/gunevo-challenge-tracker/${unitURL}')`;
        // backgroundOption = `url('../${unitURL}')`;
        cellToSet.style.backgroundImage = backgroundOption;
        bgopt = cellToSet.getAttribute('id')

        savedUnitsDict[bgopt] = backgroundOption;

        localStorage.setItem("unitsDict", JSON.stringify(savedUnitsDict));
        console.log(localStorage.length);

        closeOtherDropdowns()
    }
}

async function closeOtherDropdowns()
{
    for (let i = 0; i < document.getElementsByClassName('dropdown-content').length; i++) 
    {
        var unitListClass = document.getElementsByClassName('dropdown-content').item(i).setAttribute('style', 'display=none;');
    }
    switchShow = 1;
}

async function showUnits(i)
{
    var unitListElement = document.getElementById(i);
    switch (switchShow) {
        case 0:
            await closeOtherDropdowns();
            unitListElement.style.display = "none";
            switchShow = 1;
            return switchShow;
        case 1:
            await closeOtherDropdowns();
            unitListElement.style.display = "block";
            switchShow = 0;
            return switchShow;
        default:
            unitListElement.style.display = "none";
            switchShow = 0;
            return switchShow;
    }
}

function clearSaves()
{
    for (let i = 0; i < Object.keys(savedUnitsDict).length; i++) 
    {
        var cellToSet = document.getElementById(Object.keys(savedUnitsDict)[i]);
        backgroundOption = "none";
        cellToSet.style.backgroundImage = backgroundOption;  
    } 
    localStorage.clear();
    for (const key in savedUnitsDict) 
    {
    delete savedUnitsDict[key];
    }
    for (const key in savedChallengesDict) 
    {
    delete savedChallengesDict[key];
    }

    document.getElementById('FirstDaily').value = -1;
    document.getElementById('SecondDaily').value = -1;
    document.getElementById('ThirdDaily').value = -1;
    console.log("Data Cleared");
}

function logSelectValue()
{
    console.log(document.getElementById("FirstDaily").value)
}


function fadeElements(n, i)
{
    if (!document.getElementById(n).checked) 
    {
        document.getElementById(i).style.opacity = 1;
    }
    else
    {
        document.getElementById(i).style.opacity = 0.25;
    }
}