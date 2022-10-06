var cellNumber = 0;
var bgopt;
var backgroundOption;
var chopt;
var challengeOption;
var switchShow = 1;
var challengesElements = document.getElementsByClassName("Challenges");
var challengeLength = challengesElements.length;
var dailyChallengesDiv = document.getElementById("dailyChallengesDiv");
var weeklyChallengesDiv = document.getElementById("weeklyChallengesDiv");

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

const firstWeekly = document.querySelector('#FirstWeekly');
const secondWeekly = document.querySelector('#SecondWeekly');
const thirdWeekly = document.querySelector('#ThirdWeekly');
const fourthWeekly = document.querySelector('#FourthWeekly');
const fifthWeekly = document.querySelector('#FifthWeekly');
const sixthWeekly = document.querySelector('#SixthWeekly');

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


firstWeekly.addEventListener('change', (event) => 
{
   savedChallengesDict["FirstWeekly"] = firstWeekly.value;
   localStorage.setItem("challengesDict", JSON.stringify(savedChallengesDict));
   console.log(`Saved with a value of ${firstWeekly.value}`);
});

secondWeekly.addEventListener('change', (event) => 
{
    savedChallengesDict["SecondWeekly"] = secondWeekly.value;
    localStorage.setItem("challengesDict", JSON.stringify(savedChallengesDict));
    console.log(`Saved with a value of ${secondWeekly.value}`);
});

thirdWeekly.addEventListener('change', (event) => 
{
    savedChallengesDict["ThirdWeekly"] = thirdWeekly.value;
    localStorage.setItem("challengesDict", JSON.stringify(savedChallengesDict));
    console.log(`Saved with a value of ${thirdWeekly.value}`);
});

fourthWeekly.addEventListener('change', (event) => 
{
   savedChallengesDict["FourthWeekly"] = fourthWeekly.value;
   localStorage.setItem("challengesDict", JSON.stringify(savedChallengesDict));
   console.log(`Saved with a value of ${fourthWeekly.value}`);
});

fifthWeekly.addEventListener('change', (event) => 
{
    savedChallengesDict["FifthWeekly"] = fifthWeekly.value;
    localStorage.setItem("challengesDict", JSON.stringify(savedChallengesDict));
    console.log(`Saved with a value of ${fifthWeekly.value}`);
});

sixthWeekly.addEventListener('change', (event) => 
{
    savedChallengesDict["SixthWeekly"] = sixthWeekly.value;
    localStorage.setItem("challengesDict", JSON.stringify(savedChallengesDict));
    console.log(`Saved with a value of ${sixthWeekly.value}`);
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

    document.getElementById('FirstWeekly').value = savedChallengesDict["FirstWeekly"];
    document.getElementById('SecondWeekly').value = savedChallengesDict["SecondWeekly"];
    document.getElementById('ThirdWeekly').value = savedChallengesDict["ThirdWeekly"];
    document.getElementById('FourthWeekly').value = savedChallengesDict["FourthWeekly"];
    document.getElementById('FifthWeekly').value = savedChallengesDict["FifthWeekly"];
    document.getElementById('SixthWeekly').value = savedChallengesDict["SixthWeekly"];
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
        // backgroundOption = `url('../sites/gunevo-challenge-tracker/${unitURL}')`;
        backgroundOption = `url('${unitURL}')`;
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

function clearSaves(i, x)
{
    // for (let i = 0; i < Object.keys(savedUnitsDict).length; i++) 
    // {
    //     var cellToSet = document.getElementById(Object.keys(savedUnitsDict)[i]);
    //     backgroundOption = "none";
    //     cellToSet.style.backgroundImage = backgroundOption;  
    // } 
    // localStorage.clear();

    var cellToSet = document.getElementById(i);
    backgroundOption = "none";
    cellToSet.style.backgroundImage = backgroundOption; 

    delete savedUnitsDict[i];
    localStorage.setItem("unitsDict", JSON.stringify(savedUnitsDict));

    if (x == 'daily') 
    {
        document.getElementById('FirstDaily').value = -1;
        document.getElementById('SecondDaily').value = -1;
        document.getElementById('ThirdDaily').value = -1;
        savedChallengesDict["FirstDaily"] = -1;
        savedChallengesDict["SecondDaily"] = -1;
        savedChallengesDict["ThirdDaily"] = -1;
        localStorage.setItem("challengesDict", JSON.stringify(savedChallengesDict));
    }
    else if (x == 'weekly') 
    {
        document.getElementById('FirstWeekly').value = -1;
        document.getElementById('SecondWeekly').value = -1;
        document.getElementById('ThirdWeekly').value = -1;
        document.getElementById('FourthWeekly').value = -1;
        document.getElementById('FifthWeekly').value = -1;
        document.getElementById('SixthWeekly').value = -1;
        savedChallengesDict["FirstWeekly"] = -1;
        savedChallengesDict["SecondWeekly"] = -1;
        savedChallengesDict["ThirdWeekly"] = -1;
        savedChallengesDict["FourthWeekly"] = -1;
        savedChallengesDict["FifthWeekly"] = -1;
        savedChallengesDict["SixthWeekly"] = -1;
        localStorage.setItem("challengesDict", JSON.stringify(savedChallengesDict));
    }

    console.log("Data Cleared");
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

const tabSelector = document.querySelector('#challengeTabs');

tabSelector.addEventListener('change', (event) => 
{
    selectTabs();
});

selectTabs();

function selectTabs()
{
    var values = $('#challengeTabs').val();

    if (values == '0') 
    {
        dailyChallengesDiv.style.display = "block";
        weeklyChallengesDiv.style.display = "none";
        console.log("Daily");
    } 
    else if (values == '1')
    {
        dailyChallengesDiv.style.display = "none";
        weeklyChallengesDiv.style.display = "block";
        console.log("Weekly");
    }
    else
    {
        dailyChallengesDiv.style.display = "block";
        weeklyChallengesDiv.style.display = "block";
        console.log("Both");
    }
}