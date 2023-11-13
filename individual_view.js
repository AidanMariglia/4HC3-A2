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

const spaceReviews = {
    "thode": [
        {
            user: "Declan Young",
            rating: 3,
            text: "Thode is alright I guess"
        },
        {
            user: "Aidan Mariglia",
            rating: 2,
            text: "Thode sucks"
        }],
    "mills": [
        {
            user: "Declan Young",
            rating: 3,
            text: "mills is alright I guess"
        },
        {
            user: "Aidan Mariglia",
            rating: 2,
            text: "mills sucks"
        }
    ]
}

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

const loadReviews = (reviews, container) => {  
    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        const heading = document.createElement('h3');
        heading.textContent = review.user;

        const rating = document.createElement('h4');
        rating.textContent = review.rating;

        const body = document.createElement('p');
        body.textContent = review.text;

        reviewDiv.appendChild(heading);
        reviewDiv.appendChild(rating);
        reviewDiv.appendChild(body);

        container.appendChild(reviewDiv);
        
    });

};

window.onload = function(){
    console.log("loading complete");
    loadData(spaceData[studyLocation], resultsContainer);
    loadReviews(spaceReviews[studyLocation], reviewsContainer);
};
