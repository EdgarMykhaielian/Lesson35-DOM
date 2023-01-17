let playList = [

    {

        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN"

    },

    {

        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY"

    },

    {

        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song: "BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song: "WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song: "ENTER SANDMAN"

    }

];
document.body.querySelector('.song__list').appendChild(document.createElement('ol')).append(...playList.map(item => {
    const li = document.createElement('li')
    li.append(item.author + ' \xa0 - \xa0 ' + item.song)
    return li
}))

// MODAL WINDOW
let btnOpen = document.getElementById('myBtnOpen')
let btnClose = document.getElementById('myBtnClose')
let modal = document.getElementById('myModal')

btnOpen.onclick = function () {
    modal.style.display = 'block'
    btnOpen.style.display = 'none'
}
btnClose.onclick = function () {
    modal.style.display = 'none'
    btnOpen.style.display = 'block'
}

// TRAFFIC LIGHTS
let btnColor = document.getElementById("traffic__btn")
let trafficLight = document.getElementById('lights__switcher')
let previousState = 'green'
function colorSwitch() {
    if (trafficLight.classList.contains("green")) {
        trafficLight.classList.toggle("green");
        trafficLight.classList.toggle("yellow");
        previousState = 'green'
        return;
    } else if (trafficLight.classList.contains("yellow")) {
        console.log(previousState)
        trafficLight.classList.toggle("yellow");
        if (previousState = 'green') {
            trafficLight.classList.toggle("red");
        } else {
            trafficLight.classList.toggle("green");
        }
        return;
    } else if (trafficLight.classList.contains("red")) {
        trafficLight.classList.toggle("red");
        trafficLight.classList.toggle("yellow");
        previousState = 'red'
        return;
    }
}
btnColor.onclick = colorSwitch