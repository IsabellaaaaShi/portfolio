/*----------------------------------------------------------------------------------------
SELECTING "MY WORK" PROJECT ORGANIZATION
----------------------------------------------------------------------------------------*/
currentSortType = "type"; // Define default sorting and visualization

// The default display is set in currentSortType (by project type) so display as this first
sortProjects(currentSortType);

/*----------------------------------------------------------------------------------------
SELECTION AND DISPLAY FUNCTIONS
----------------------------------------------------------------------------------------*/

// Function to handle a new sorting selection from the main page "My Work" section
function makeSelection(thisButton, thisType) {

    // Retreive all of the button items (in "My Work" section) from the webpage 
    allButtons = document.querySelectorAll('.sortButton');

    // Iterate through each button and "deselect" any that are selected previously
    // Implemented by using a class called "selectedButton"
    allButtons.forEach(function updateButtons(currButton) {
        currButton.classList.remove("selectedButton");
    })

    // Add the "selectedButton" class to the button that was clicked and triggered this makeSelection() function
    thisButton.classList.add("selectedButton");

    // Send the type of selection (based on clicked button) to the sorting function sortProjects()
    sortProjects(thisType);
}

// Function to sort the projects based on selection, and display accordingly
function sortProjects(sortType) {

    // Copy the list of projects from the projectData projects object
    const sortedProjectList = projects;

    // All methods can be sorted by date:
    //      "By Type": are categorized by type in the displayTypeSort function, but are listed by date in categories
    //      "By Date": listed by date on timeline
    //      "By Location": the globe has no order and displays based on coordinates, so date sort has no effect
    // https://www.tutorialspoint.com/how-to-sort-order-keys-in-javascript-objects
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    const sortedProjects = Object.keys(projects).sort((a, b) => {
        return projects[b].date.localeCompare(projects[a].date);
    });

    // Based on the selected sortType, call a function to display the projects
    if (sortType == "type") {
        displayTypeSort(sortedProjects);
    } else if (sortType == "date") {
        displayDateSort(sortedProjects);
    } else if (sortType == "location") {
        displayLocSort(sortedProjects);
    } else {
        console.log("ERROR: Selection Logic");
    }

}

// Display the projects when user has selected to sort "By Type"
function displayTypeSort(typeSortedProjects) {

    // Get the DOM element that acts as a container for the projects
    projectListElement = document.getElementById("projectList");
    projectListElement.innerHTML = '';

    // Initialize object sets for each of the categories
    architectureProjects = {};
    hciProjects = {};
    researchProjects = {};

    // Sort each project by iterating through the sorted projects
    typeSortedProjects.forEach(projectKey => {

        // If the project type is architecture, add the project to the architectureProjects object set
        if (projects[projectKey].type == "Architecture") {
            architectureProjects[projectKey] = projects[projectKey];

        // If the project type is hci, add the project to the hciProjects object set
        } else if (projects[projectKey].type == "HCI") {
            hciProjects[projectKey] = projects[projectKey];

        // If the project type is research, add the project to the researchProjects object set
        } else if (projects[projectKey].type == "Research") {
            researchProjects[projectKey] = projects[projectKey];
        }
    })
    
    // Create a DOM element to title the Architecture section
    architectureHeader = document.createElement('div');
    architectureHeader.classList.add("typeSortHeader");
    architectureHeader.innerHTML = "Architecture";

    // Create a DOM element to title the HCI section
    hciHeader = document.createElement('div');
    hciHeader.classList.add("typeSortHeader");
    hciHeader.innerHTML = "HCI";

    // Create a DOM element to title the Research section
    researchHeader = document.createElement('div');
    researchHeader.classList.add("typeSortHeader");
    researchHeader.innerHTML = "Research";

    // Add the header, and sorted projects to the DOM (HCI)
    projectListElement.appendChild(hciHeader);
    projectListElement.appendChild(addSortedProjectsToDOM(Object.keys(hciProjects)));
    
    // Add the header, and sorted projects to the DOM (Architecture)
    projectListElement.appendChild(architectureHeader);
    projectListElement.appendChild(addSortedProjectsToDOM(Object.keys(architectureProjects)));
    
    // Add the header, and sorted projects to the DOM (Research)
    projectListElement.appendChild(researchHeader);
    projectListElement.appendChild(addSortedProjectsToDOM(Object.keys(researchProjects)));

}

// Display the projects when user has selected to sort "By Location"
function displayLocSort(locSortedProjects) {

    // Get the DOM element that acts as a container for the projects
    projectListElement = document.getElementById("projectList");
    projectListElement.innerHTML = '';

    // Create a DOM element to hold the globe, apply styling to center on the page, add to project list
    const centerMapDiv = document.createElement('div');
    centerMapDiv.classList.add("centerMapDiv");
    centerMapDiv.id = "centerMapDiv";
    projectListElement.appendChild(centerMapDiv);

    // Convert the projectData.js data structure to the array that the globe library expects
    const convertedData = [];

    // Iterate through each project and obtain the relevant key value pairs for the globe display
    locSortedProjects.forEach(projectKey => {

        const currProject = projects[projectKey]; // Obtain the project using the iterative project index

        // Obtain relevant variables
        loopObject = {
            year: currProject["date"],
            title: currProject["title"],
            image: currProject["projectIcon"],
            lat: currProject["lat"],
            lng: currProject["lng"],
            info: currProject["info"],
            simpleTitle: currProject["simpleTitle"],
            type: currProject["type"],
            location: currProject["location"]
        };

        convertedData.push(loopObject); // Add each project to the array

    });

    // Set the size of the globe container
    const globeWidth = window.innerWidth*0.60; // Width is 60% of the screen width (px)
    const globeHeight = window.innerWidth*0.30; // Width is 40% of the screen width (px)

    // Utilize an <svg> from the Globe.gl "HTML Markers" example
    // https://github.com/vasturiano/globe.gl/blob/master/example/html-markers/index.html
    const markerSvg = `<svg viewBox="-4 0 36 36"><path fill="#1C19C2" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path><circle fill="#FBF8F8" cx="14" cy="14" r="7"></circle></svg>`;

    // Create a Globe.GL library globe object and initizlize following the examples:
    // https://github.com/vasturiano/globe.gl/tree/master
    const world = Globe()
    .globeImageUrl('assets/globe.png') // Credit: NASA visibleearth.nasa.gov
    .backgroundColor("#FBF8F8") // Make globe background the same as the page background
    .htmlElementsData(convertedData) // HTML elements dictated by the array created above
    .width(globeWidth) // Set globe width
    .height(globeHeight) // Set globe height
    .htmlLat(convertedData.lat) // Latitude of the project markers set from the "lat" value
    .htmlLng(convertedData.lng) // Longitude of the project markers set from the "lng" value
    .htmlElement(project => {

        // Set the HTML elements that will be used to mark the projects 

        // Create a new HTML element container that will store the project icon/link 
        const projectImageLink = document.createElement('a'); // Create Image element

        // Display is different for research projects. If research, link to external site using DOI stored in "info" key:value pair
        if(project.type == "Research") {
            projectImageLink.href = project.info;
            projectImageLink.target="_blank"; // Set the link to open in a new tab

        // For non-research projects (architecture, HCI) the link will be to the projectDetail.html page with the URL param "project"
        } else {
            projectImageLink.href="./projectDetail.html?project=" + project.simpleTitle; // Set the link that will be used to display project details
        }

        // Create the icon using the sample <svg>
        const projectMarker = document.createElement('div');
        projectMarker.classList.add("projectMarker");
        projectMarker.innerHTML = markerSvg;

        // Create an image DOM element and populate with project icon
        const projectImage = document.createElement('img'); 
        projectImage.src = project.image; // Update image source based on link stored in object
        projectImage.alt= "Access " + project.title + " project clickable"; // Update alt text based on title stored in object
        projectImage.classList.add("projectListImageMap"); // Add a class to the image to assist with CSS styling

        // Create text that includes the project title
        const projectTitle = document.createElement('p');
        projectTitle.classList.add("projectListTitleMap");
        projectTitle.innerHTML = project.title + "<br/><br/>" + convertDateToLegibleString(project.location);
        
        // Add the image, marker, and title to the link container so they are all part of the project link
        projectImageLink.appendChild(projectImage);
        projectImageLink.appendChild(projectMarker);
        projectImageLink.appendChild(projectTitle);

        // For each project icon link, add an event to trigger hover effect (mouseover = appear)
        // https://www.w3schools.com/js/js_htmldom_events.asp
        // https://www.w3schools.com/js/js_htmldom_eventlistener.asp
        projectImageLink.addEventListener('mouseover', () => {
            projectImage.style.display = 'block';
            projectTitle.style.display = 'block';
        });

        // For each project icon link, add an event to trigger hover effect (mouseover = disappear)
        projectImageLink.addEventListener('mouseout', () => {
            projectImage.style.display = 'none';
            projectTitle.style.display = 'none';
        });

        // Create pointer and cursor behavior per Globe.GL library documentation, instructions, and samples
        projectImageLink.style['pointer-events'] = 'auto';
        projectImageLink.style.cursor = 'pointer';

    return projectImageLink;
    })
    (document.getElementById('centerMapDiv'));

    // Set the default location that is in view when the globe loads. From Globe.GL documentation
    world.pointOfView({ lat: 39.6, lng: -98.5, altitude: 2 });
}

// Display the projects when user has selected to sort "By Type"
function displayDateSort(dateSortedProjects) {

    // Get the DOM element that acts as a container for the projects
    const sortedProjectsListElement = document.getElementById("projectList");
    sortedProjectsListElement.innerHTML = '';

    // Structure must adhere to that of the squarechip timeline library.
    // Following example found at: https://github.com/squarechip/timeline
    
    // The main library element is a div with class "timeline". Create DOM element
    const timelineElement = document.createElement('div');
    timelineElement.classList.add("timeline");

    // Inside the "timeline" element is the "timeline__wrap" DOM element.
    const timelineWrapElement = document.createElement('div');
    timelineWrapElement.classList.add("timeline__wrap");

    // Next, inside the "timeline__wrap" element is the "timeline__items" DOM element
    const timelineItemsElement = document.createElement('div');
    timelineItemsElement.classList.add("timeline__items")

    // Track whether even or odd (timline elements switch top and bottom, act accordingly)
    evenOrOddTracker = 0; // start at 1, increment with each foreach iteration

    // Iterate through all the projects and add to the timeline
    dateSortedProjects.forEach(projectKey => {

        // The current structure is timeline->timeline__wrap->timeline__items. Within the last, all projects are added individally

        // Copy the project object specified by the iteration key (projects is an object of objects)
        const currProject = projects[projectKey];

        // Inside the "timeline__items" element, each project must be wrapped in a "timeline__item" DOM element
        const timelineItemElement = document.createElement('div');
        timelineItemElement.classList.add("timeline__item");

        // Inside each "timeline__item" element, the HTML content is wrapped in a "timeline__content" DOM element
        const timelineContentElement = document.createElement('div');
        timelineContentElement.classList.add("timeline__content");

        // Override some template styling to make items transparent with no border
        timelineContentElement.style.backgroundColor = "transparent"; 
        timelineContentElement.style.border = "none";

        // Create a new HTML element container that will store the project icon as a link 
        const projectImageLink = document.createElement('a');
        projectImageLink.classList.add("projectImageLinkTimeline");

        // Display is different for research projects. If research, link to external site using DOI stored in "info" key:value pair
        if(currProject["type"] == "Research") {
            projectImageLink.href = currProject["info"];
            projectImageLink.target="_blank"; // Set the link to open in a new tab

        // For non-research projects (architecture, HCI) the link will be to the projectDetail.html page with the URL param "project"
        } else {
            projectImageLink.href="./projectDetail.html?project=" + currProject.simpleTitle; // Set the link that will be used to display project details
        }

        // Create the image DOM element and populate with project icon
        const projectImage = document.createElement('img'); 
        projectImage.src = currProject.projectIcon; // Update image source based on link stored in object
        projectImage.alt= "Access " + currProject.title + " project clickable"; // Update alt text based on title stored in object
        projectImage.classList.add("projectListImageTimeline"); // Add a class to the image to assist with CSS styling

        // Create a DOM element to store the project title
        const projectTitle = document.createElement('div');
        projectTitle.innerHTML = currProject.title;

        projectImageLink.appendChild(projectImage); // Add image to the project icon link
        projectImageLink.appendChild(projectTitle); // Add project title to the project icon link

        // For each project icon link, add an event to trigger hover effect (mouseover = appear)
        // https://www.w3schools.com/js/js_htmldom_events.asp
        // https://www.w3schools.com/js/js_htmldom_eventlistener.asp
        projectImageLink.addEventListener('mouseover', () => {
            projectTitle.style.opacity = '1';
            projectImage.style.transform = 'scale(1.2)';
            projectImage.style.opacity = '0.4';
        });
        // For each project icon link, add an event to trigger hover effect (mouseout = disappear)
        projectImageLink.addEventListener('mouseout', () => {
            projectTitle.style.opacity = '0';
            projectImage.style.transform = 'scale(1)';
            projectImage.style.opacity = '1';
        });

        // Add a DOM element to store the project date to display on the timeline
        const projectDate = document.createElement('div');
        projectDate.innerHTML = convertDateToLegibleString(currProject.date);

        // Place date above or below based on position in timeline
        // Check if number is even: https://www.geeksforgeeks.org/javascript-program-to-check-if-a-number-is-odd-or-even/
        if (evenOrOddTracker % 2 == 0) {

            // Even, therefore place on top (timeline items start on top, index 0 which returns true)
            projectDate.classList.add("timelineDateTextTopRow");
            timelineContentElement.appendChild(projectImageLink);
            timelineContentElement.appendChild(projectDate);
            projectTitle.classList.add("timelineProjectItemsHoverTitleTopRow"); // Add class to display when hovered over

        } else {

            // Odd, therefore place on bottom (timeline items start on top)
            projectDate.classList.add("timelineDateTextBottomRow");
            timelineContentElement.appendChild(projectDate);
            timelineContentElement.appendChild(projectImageLink);
            projectTitle.classList.add("timelineProjectItemsHoverTitleBottomRow"); // Add class to display when hovered over

        }

        // Create the timeline structure expected by the library
        // timeline__item -> timeline__content -> Project icon link DOM structure, date
        timelineItemElement.appendChild(timelineContentElement);
        timelineItemsElement.appendChild(timelineItemElement);

        // Update the counter variable
        evenOrOddTracker++;

    });

    // Finalize the timeline structure expected by the library (timeline -> timeline__wrap -> timeline__items -> timeline__item -> timeline__content)
    timelineWrapElement.appendChild(timelineItemsElement);
    timelineElement.appendChild(timelineWrapElement);
    sortedProjectsListElement.appendChild(timelineElement);

    // Initialize the timeline (per example above)
    timeline(document.querySelectorAll('.timeline'), {
        mode: 'horizontal', // Default direction: horizontal
        visibleItems: 4, // Only 4 items visible across the screen, responsive spacing
        forceVerticalMode: 800 // Screen width (px) below which the timeline becomes vertical
    });

}

/*----------------------------------------------------------------------------------------
UTILITY FUNCTIONS
----------------------------------------------------------------------------------------*/

// Dates have the format [YYYY]_(1/2) where 1 is spring, 2 is fall, or there is no suffix
function convertDateToLegibleString(inputString) {

    // Split the string based on _ delimeter
    stringArray = inputString.split("_"); 
    returnString = ""; // Create a string to return with stylized date

    // Check if the split array has length 1, if so no semester included, so just return year
    if (stringArray.length == 1) {
        returnString = inputString;

    // If the array has a second element and it is 1, add Spring text to date
    } else if (stringArray[1] == 1) {
        returnString = "Spring " + stringArray[0];

    // If the array has a second element and it is 2, add Fall text to date
    } else if (stringArray[1] == 2) {
        returnString = "Fall " + stringArray[0];

    // No date in project data structure, return default text
    } else {
        returnString = "Undated";
    }

    return returnString;
}

// Loop through each project and add to the DOM. Used to display "By Type"
function addSortedProjectsToDOM(listOfProjects) {

    // Create a container div to hold projects
    const sortedListElement = document.createElement('div'); 
    sortedListElement.classList.add("sortedListElement");

    // Iterate through each of the projects in the newly sorted list
    // forEach doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    // forEach iterates through each key (projectKey) in the "sortedProjects" object
    listOfProjects.forEach(projectKey => {

        // Copy the project object specified by the iteration key (projects is an object of objects)
        const currProject = projects[projectKey];

        // Create a new HTML element container that will help with grid placement
        const imageInGrid = document.createElement('div'); // Create the DOM element
        imageInGrid.classList.add("centerImagesInGrid"); // Style the container

        // Create a new HTML element container that will store the project icon/link 
        const projectImageLink = document.createElement('a'); // Create the DOM element
        projectImageLink.classList.add("projectImageLink"); // Style the container

        // Display is different for research projects. If research, link to external site using DOI stored in "info" key:value pair
        if(currProject["type"] == "Research") {
            projectImageLink.href = currProject["info"];
            projectImageLink.target="_blank"; // Set the link to open in a new tab

        // For non-research projects (architecture, HCI) the link will be to the projectDetail.html page with the URL param "project"
        } else {
            projectImageLink.href="./projectDetail.html?project=" + currProject.simpleTitle; // Set the link that will be used to display project details
        }

        // Create an image element that will be added to the project links
        const projectImage = document.createElement('img'); // Create DOM element
        projectImage.src = currProject.projectIcon; // Update image source based on link stored in object
        projectImage.alt= "Access " + currProject.title + " project clickable"; // Update alt text based on title stored in object
        projectImage.classList.add("projectListImage"); // Style the image

        // Add a title to the project gallery grid
        const projectTitle = document.createElement('div');
        projectTitle.innerText = currProject.title;
        projectTitle.classList.add("projectListTitleTypeSort");

        // For each project icon link, add an event to trigger hover effect (mouseover = appear)
        // https://www.w3schools.com/js/js_htmldom_events.asp
        // https://www.w3schools.com/js/js_htmldom_eventlistener.asp
        projectImageLink.addEventListener('mouseover', () => {
            projectTitle.style.opacity = '1';
            projectImage.style.transform = 'scale(1.2)';
            projectImage.style.opacity = '0.4';
        });

        // For each project icon link, add an event to trigger hover effect (mouseout = disappear)
        projectImageLink.addEventListener('mouseout', () => {
            projectTitle.style.opacity = '0';
            projectImage.style.transform = 'scale(1)';
            projectImage.style.opacity = '1';
        });

        // Add the image to the link container, add the link container and title to the grid
        projectImageLink.appendChild(projectImage);
        projectImageLink.appendChild(projectTitle);
        imageInGrid.appendChild(projectImageLink);
        //imageInGrid.appendChild(projectTitle);
        sortedListElement.appendChild(imageInGrid); 

    });

    // Return the DOM element containing type sorted projects
    return sortedListElement;
}






/*
let currentSection = "aboutMeID";
console.log(currentSection);

localStorage.clear();

// TO-DO
const projectHeaderTest = document.getElementById("aboutMeID");

// check local storage for cart information
if (localStorage.getItem('selectedSection') != null) {
    retrieveFromLocalStorage();
} else {
    selectedNavBarItem = "#top";
    projectHeaderTest.style.backgroundColor = "orange";
    console.log(selectedNavBarItem);
    console.log("EMPTY");
}

function retrieveFromLocalStorage() {
    console.log("something in storage?");
    const testString = localStorage.getItem('selectedSection');
    console.log(testString)
}

// Create a function that will update the styling of navigation bar links. Selected section will become underlined and bolded
function updateHeaderText(headerElement) {

    currentSection = headerElement.id;
    console.log(currentSection);

    // Obtain all navigation bar elements that currently are selected as the current page (should only be one element)
    otherHeaderElements = document.querySelectorAll(".navCurrPage");

    // Remove the current page CSS style (.navCurrPage) for all headers
    otherHeaderElements.forEach(eachElement => {
        eachElement.classList.remove("navCurrPage");
    })

    // Add the current page navigation bar styling to the element that was clicked and triggered this function
    headerElement.classList.add("navCurrPage"); 
}
*/