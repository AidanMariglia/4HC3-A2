// fake data
const studySpaces = [{
    name: "Thode",
    key: "thode",
    description: "This place sucks"
},
{
    name: "Mills",
    key: "mills",
    description: "This place sucks more"
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

        const paragraph = document.createElement('p');
        paragraph.textContent = item.description;

        itemElement.appendChild(title);
        itemElement.appendChild(paragraph);


        container.appendChild(itemElement);
    });
}

const redirectStudySpace = (location) => {
    let url = 'individual_view.html?location=' + encodeURIComponent(location);
    window.location.href = url;
};

document.onload = getStudySpaces(resultsContainer, studySpaces);