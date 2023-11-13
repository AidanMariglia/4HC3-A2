// fake data
const studySpaces = [{
    name: "Thode",
    key: "thode",
},
{
    name: "Mills",
    key: "mills",
},
]

// get container
const resultsContainer = document.getElementById('study-spaces-container');

const getStudySpaces = (container, data) => {
    const divClasses = ['result-item'];
    data.forEach(item => {
        const itemElement = document.createElement('div');
        // change this classname
        itemElement.classList.add(...divClasses);
        itemElement.onclick = () => {
            redirectStudySpace(item.key)};

        const title = document.createElement('h2');
        title.textContent = item.name;


        itemElement.appendChild(title);


        container.appendChild(itemElement);
    });
}

const redirectStudySpace = (location) => {
    let url = 'review_page.html?location=' + encodeURIComponent(location);
    window.location.href = url;
};

document.onload = getStudySpaces(resultsContainer, studySpaces);