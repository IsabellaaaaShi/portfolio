currentSortType = "type"; // Define default sorting and visualization

// Function to handle a new sorting selection from the main page "My Work" section
function makeSelection(thisButton, thisType) {

    // Retreive all of the button items (in "My Work" section) from the webpage 
    allButtons = document.querySelectorAll('.sortButton');
    console.log(allButtons);

    // Iterate through each button and "deselect" any that are selected previously
    // Implemented by using a class called "selectedButton"
    allButtons.forEach(function updateButtons(currButton) {
        currButton.classList.remove("selectedButton")
    })

    // Add the "selectedButton" class to the button that was clicked and triggered this makeSelection() function
    thisButton.classList.add("selectedButton");

    // Send the type of selection (based on clicked button) to the sorting function sortProjets()
    sortProjects(thisType)
}

// Function to sort the projects based on selection, and display accordingly
function sortProjects(sortType) {

    // Copy the list of projects from the projectData projects object
    const sortedProjectList = projects;

    console.log("Sorting by" + sortType) // Debug current sort type

    // Remove any existing project display from the "My Work" section to allow for new display
    projectListElement = document.getElementById("projectList");
    projectListElement.innerHTML = '';

    // Debug selection type
    if (sortType == "type") {
        console.log("type again");
    } else if (sortType == "date") {
        console.log("date again") ;
    } else if (sortType == "location") {
        console.log("location again");
    } else {
        console.log("ERROR: Selection Logic");
    }

    // https://www.tutorialspoint.com/how-to-sort-order-keys-in-javascript-objects
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    const sortedProjects = Object.keys(projects).sort((a, b) => {
        if (sortType === 'type') {
            return projects[a].type.localeCompare(projects[b].type);
        } else if (sortType === 'date') {
            return projects[a].date.localeCompare(projects[b].date);
        } else if (sortType === 'location') {
            return projects[a].location.localeCompare(projects[b].location);
        }
    });

    // Iterate through each of the projects in the newly sorted list
    // forEach doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        // forEach iterates through each key (projectKey) in the "sortedProjects" object
    sortedProjects.forEach(projectKey => {

        // Copy the project object specified by the iteration key (projects is an object of objects)
        const currProject = projects[projectKey];

        // Create a new HTML element (img) that will store the project icon/link 
        const projectImageLink = document.createElement('a'); // Create Image element

        console.log(currProject) // Debug current project

        projectImageLink.href="./projectDetail.html?project=" + currProject.simpleTitle; // Set the link that will be used to display project details
        projectImageLink.target="_blank"; // Set the link to open in a new tab

        // Create an image element that will be added to the project links
        const projectImage = document.createElement('img'); 
        projectImage.src = currProject.projectIcon; // Update image source based on link stored in object
        projectImage.alt= "Access " + currProject.title + " project clickable"; // Update alt text based on title stored in object
        projectImage.classList.add("projectListImage"); // Add a class to the image to assist with CSS styling
        projectListElement.appendChild(projectImageLink); // Add link to the project list HTML
        projectImageLink.appendChild(projectImage); // Add image to the project list HTML link

        console.log(projectImage); // Debug image src and alt
    });

}

// The default display is set in currentSortType (by project type) so display as this first
sortProjects(currentSortType);