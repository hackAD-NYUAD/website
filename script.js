let yearSemesterList = ['Spring 2018', 'Fall 2018', 'Spring 2019', 'Fall 2019', 'Spring 2020', 'Fall 2020', 'Spring 2021', 'Fall 2021', 'Spring 2022'];
let count = 0;
let countLeftBtn = 0;
let i = 0;
let txt = 'Past Events'; /* The text */
let speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("past-event-heading").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.addEventListener('load', () => {
    let rightBtn = document.getElementById('right-arrow-btn');
    let leftBtn = document.getElementById('left-arrow-btn');
    let yearTxt = document.getElementById('year-semester-heading');
    let child = document.getElementById('events-spring2018');
    let parent = child.parentNode;
    let children = parent.children;

    rightBtn.addEventListener('click', () => {
        children[count].style.display = 'none';
        count++;
        count = count % yearSemesterList.length;
        yearTxt.innerHTML = yearSemesterList[count];
        children[count].style.display = 'block';
    })

    leftBtn.addEventListener('click', () => {
        children[count].style.display = 'none';
        count--;
        if (count<0){
            countLeftBtn = yearSemesterList.length;
            count = countLeftBtn-1;
        }
        count = count % yearSemesterList.length;
        yearTxt.innerHTML = yearSemesterList[count];
        children[count].style.display = 'block';
    })

    typeWriter();


    // document.getElementById('event-txt').addEventListener('click', () => {
    //     typeWriter();

    // })


})