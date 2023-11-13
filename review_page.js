const studyLocation = decodeURIComponent(new URLSearchParams(window.location.search).get('location'));
console.log("the location is " + studyLocation);

const resultsContainer = document.getElementById('individual-view-container');
const reviewsContainer = document.getElementById('individual-view-reviews-container');

const spaceData = {
    "thode": {
        title: "THODE",
        description: "THIS PLACE SUCKS"
    },
    "mills": {
        title: "MILLS",
        description: "THIS PLACE ALSO SUCKS"
    }
};

const loadData = (data, container) => {
    const mainClasses = [];
    const mainDiv = document.createElement('div');
    mainDiv.classList.add(...mainClasses);

    const heading = document.createElement('h1');
    heading.textContent = data.title;

    const body = document.createElement('p');
    body.textContent = data.description;

    mainDiv.appendChild(heading);
    mainDiv.appendChild(body);

    container.appendChild(mainDiv);
};

window.onload = function(){
    console.log("loading complete");
    loadData(spaceData[studyLocation], resultsContainer);
};
