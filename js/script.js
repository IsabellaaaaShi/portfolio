/*----------------------------------------------------------------------------------------
SELECTING "MY WORK" PROJECT ORGANIZATION
----------------------------------------------------------------------------------------*/
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

    // https://www.tutorialspoint.com/how-to-sort-order-keys-in-javascript-objects
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    const sortedProjects = Object.keys(projects).sort((a, b) => {
        if (sortType === 'type') {
            return projects[b].date.localeCompare(projects[a].date); // Type sorted projects are sorted later, but date is still important
        } else if (sortType === 'date') {
            return projects[a].date.localeCompare(projects[b].date);
        } else if (sortType === 'location') {
            return projects[a].location.localeCompare(projects[b].location);
        }
    });

    // Debug selection type
    if (sortType == "type") {
        console.log("type again");
        displayTypeSort(sortedProjects);
    } else if (sortType == "date") {
        console.log("date again") ;
        displayDateSort(sortedProjects);
    } else if (sortType == "location") {
        console.log("location again");
        displayLocSort(sortedProjects);
    } else {
        console.log("ERROR: Selection Logic");
    }

    console.log("sort complete")

}

function displayTypeSort(typeSortedProjects) {

    // Remove any existing project display from the "My Work" section to allow for new display
    projectListElement = document.getElementById("projectList");
    projectListElement.innerHTML = '';

    architectureProjects = {};
    hciProjects = {};
    researchProjects = {};

    console.log(typeSortedProjects);

    typeSortedProjects.forEach(projectKey => {
        if (projects[projectKey].type == "Architecture") {
            architectureProjects[projectKey] = projects[projectKey];
        } else if (projects[projectKey].type == "HCI") {
            hciProjects[projectKey] = projects[projectKey];
        } else if (projects[projectKey].type == "Research") {
            researchProjects[projectKey] = projects[projectKey];
        }
    })
    
    architectureHeader = document.createElement('div');
    architectureHeader.classList.add("typeSortHeader");
    architectureHeader.innerHTML = "Architecture";

    hciHeader = document.createElement('div');
    hciHeader.classList.add("typeSortHeader")
    hciHeader.innerHTML = "HCI";

    researchHeader = document.createElement('div');
    researchHeader.classList.add("typeSortHeader")
    researchHeader.innerHTML = "Research";

    projectListElement.appendChild(hciHeader);
    projectListElement.appendChild(addSortedProjectsToDOM(Object.keys(hciProjects)));
    
    projectListElement.appendChild(architectureHeader);
    projectListElement.appendChild(addSortedProjectsToDOM(Object.keys(architectureProjects)));
    
    projectListElement.appendChild(researchHeader);
    projectListElement.appendChild(addSortedProjectsToDOM(Object.keys(researchProjects)));

}

function displayLocSort(dateSortedProjects) {

    // Remove any existing project display from the "My Work" section to allow for new display
    projectListElement = document.getElementById("projectList");
    projectListElement.innerHTML = '';

    const centerMapDiv = document.createElement('div');
    centerMapDiv.classList.add("centerMapDiv");
    centerMapDiv.id = "centerMapDiv"
    projectListElement.appendChild(centerMapDiv);

    console.log("in loc sort");

    const convertedData = [];
    dateSortedProjects.forEach(projectKey => {

        const currProject = projects[projectKey];

        console.log(currProject["date"])
        loopObject = {
            year: currProject["date"],
            title: currProject["title"],
            image: currProject["projectIcon"],
            lat: currProject["lat"],
            lng: currProject["lng"],
            color: "orange",
            size: 7 + Math.random() * 30, 
            info: currProject["info"],
            simpleTitle: currProject["simpleTitle"],
            type: currProject["type"]
        };

        console.log(loopObject);
        convertedData.push(loopObject);
    });

    console.log(convertedData);

    const globeWidth = window.innerWidth*0.40;
    const globeHeight = globeWidth

    const world = Globe()
    .globeImageUrl('assets/globe.png') // Credit: NASA visibleearth.nasa.gov
    .backgroundColor("#FBF8F8")
    .htmlElementsData(convertedData)
    .width(globeWidth)
    .height(globeHeight)
    .htmlLat(convertedData.lat)
    .htmlLng(convertedData.lng)
    .htmlElement(project => {

        // Create a new HTML element (img) that will store the project icon/link 
        const projectImageLink = document.createElement('a'); // Create Image element

        console.log(project) // Debug current project

        if(project.type == "Research") {
            projectImageLink.href = project.info;
            projectImageLink.target="_blank"; // Set the link to open in a new tab
        } else {
            projectImageLink.href="./projectDetail.html?project=" + project.simpleTitle; // Set the link that will be used to display project details
        }

        // Create an image element that will be added to the project links
        const projectElement = document.createElement('div');

        const projectDot = document.createElement('div');
        projectDot.classList.add("projectDot");

        const projectImage = document.createElement('img'); 
        projectImage.src = project.image; // Update image source based on link stored in object
        projectImage.alt= "Access " + project.title + " project clickable"; // Update alt text based on title stored in object
        projectImage.classList.add("projectListImageMap"); // Add a class to the image to assist with CSS styling

        // projectListElement.appendChild(projectImageLink); // Add link to the project list HTML
        projectImageLink.appendChild(projectImage); // Add image to the project list HTML link
        projectImageLink.appendChild(projectDot);

        // https://www.w3schools.com/js/js_htmldom_events.asp
        // https://www.w3schools.com/js/js_htmldom_eventlistener.asp
        projectImageLink.addEventListener('mouseover', () => {
            projectImage.style.display = 'block';
        });

        projectImageLink.addEventListener('mouseout', () => {
            projectImage.style.display = 'none';
        });

        // From library example
        projectImageLink.style['pointer-events'] = 'auto';
        projectImageLink.style.cursor = 'pointer';


    return projectImageLink;
    })
    (document.getElementById('centerMapDiv'));

    world.pointOfView({ lat: 39.6, lng: -98.5, altitude: 2 })
}

function displayDateSort(dateSortedProjects) {

    const timelineElement = document.createElement('div');
    timelineElement.classList.add("timeline");

    const timelineWrapElement = document.createElement('div');
    timelineWrapElement.classList.add("timeline__wrap");

    const timelineItemsElement = document.createElement('div');
    timelineItemsElement.classList.add("timeline__items")

    const sortedProjectsListElement = document.getElementById("projectList");
    sortedProjectsListElement.innerHTML = '';

    dateSortedProjects = dateSortedProjects.reverse();

    dateSortedProjects.forEach(projectKey => {

        // Copy the project object specified by the iteration key (projects is an object of objects)
        const currProject = projects[projectKey];

        const timelineItemElement = document.createElement('div');
        timelineItemElement.classList.add("timeline__item");

        const timelineContentElement = document.createElement('div');
        timelineContentElement.classList.add("timeline__content");
        timelineContentElement.style.backgroundColor = "transparent";
        timelineContentElement.style.border = "none";

        // Create a new HTML element (img) that will store the project icon/link 
        const projectImageLink = document.createElement('a'); // Create Image element
        projectImageLink.classList.add("projectImageLinkTimeline")

        console.log(currProject) // Debug current project

        if(currProject["type"] == "Research") {
            projectImageLink.href = currProject["info"];
            projectImageLink.target="_blank"; // Set the link to open in a new tab
        } else {
            projectImageLink.href="./projectDetail.html?project=" + currProject.simpleTitle; // Set the link that will be used to display project details
            projectImageLink.target="_blank"; // Set the link to open in a new tab
        }

        const projectImage = document.createElement('img'); 
        projectImage.src = currProject.projectIcon; // Update image source based on link stored in object
        projectImage.alt= "Access " + currProject.title + " project clickable"; // Update alt text based on title stored in object
        projectImage.classList.add("projectListImageTimeline"); // Add a class to the image to assist with CSS styling

        const projectTitle = document.createElement('div');
        projectTitle.innerHTML = currProject.title + "<br/><br/>" + convertDateToLegibleString(currProject.date);
        projectTitle.classList.add("timelineProjectItemsHoverTitle")

        // projectListElement.appendChild(projectImageLink); // Add link to the project list HTML
        projectImageLink.appendChild(projectImage); // Add image to the project list HTML link
        projectImageLink.appendChild(projectTitle);

        // https://www.w3schools.com/js/js_htmldom_events.asp
        // https://www.w3schools.com/js/js_htmldom_eventlistener.asp
        projectImageLink.addEventListener('mouseover', () => {
            projectTitle.style.opacity = '1';
            projectImage.style.transform = 'scale(1.2)';
            projectImage.style.opacity = '0.4';
        });

        projectImageLink.addEventListener('mouseout', () => {
            projectTitle.style.opacity = '0';
            projectImage.style.transform = 'scale(1)';
            projectImage.style.opacity = '1';
        });

        // Create the timeline structure expected by the library
        timelineContentElement.appendChild(projectImageLink);
        timelineItemElement.appendChild(timelineContentElement);
        timelineItemsElement.appendChild(timelineItemElement);

    });

    // Finalize the timeline structure expected by the library (timeline -> timeline__wrap -> timeline__items -> timeline__item -> timeline__content)
    timelineWrapElement.appendChild(timelineItemsElement);
    timelineElement.appendChild(timelineWrapElement);
    sortedProjectsListElement.appendChild(timelineElement);

    timeline(document.querySelectorAll('.timeline'), {
        mode: 'horizontal',
        visibleItems: 6,
        forceVerticalMode: 800
    });

}

/*----------------------------------------------------------------------------------------
GENERAL PAGE
----------------------------------------------------------------------------------------*/

function convertDateToLegibleString(inputString) {

    stringArray = inputString.split("_"); 
    returnString = "";
  
    if (stringArray.length == 1) {
      returnString = inputString;
    } else if (stringArray[1] == 1) {
      returnString = "Spring " + stringArray[0];
    } else if (stringArray[1] == 2) {
      returnString = "Fall " + stringArray[0];
    } else {
      returnString = "Undated";
    }
  
    return returnString;
}

function addSortedProjectsToDOM(listOfProjects) {
    // Iterate through each of the projects in the newly sorted list
    // forEach doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    // forEach iterates through each key (projectKey) in the "sortedProjects" object

    const sortedListElement = document.createElement('div');

    listOfProjects.forEach(projectKey => {

        // Copy the project object specified by the iteration key (projects is an object of objects)
        const currProject = projects[projectKey];

        // Create a new HTML element (img) that will store the project icon/link 
        const projectImageLink = document.createElement('a'); // Create Image element
        projectImageLink.classList.add("projectImageLink")

        console.log(currProject) // Debug current project

        if(currProject["type"] == "Research") {
            projectImageLink.href = currProject["info"];
            projectImageLink.target="_blank"; // Set the link to open in a new tab
        } else {
            projectImageLink.href="./projectDetail.html?project=" + currProject.simpleTitle; // Set the link that will be used to display project details
            //projectImageLink.target="_blank"; // Set the link to open in a new tab
        }

        // Create an image element that will be added to the project links
        const projectImage = document.createElement('img'); 
        projectImage.src = currProject.projectIcon; // Update image source based on link stored in object
        projectImage.alt= "Access " + currProject.title + " project clickable"; // Update alt text based on title stored in object
        projectImage.classList.add("projectListImage"); // Add a class to the image to assist with CSS styling

       // const projectTitle = document.createElement('span');
       // projectTitle.innerText = currProject.title;
       // projectTitle.classList.add("overlayTitleOnImage");

        projectImageLink.appendChild(projectImage);
        sortedListElement.appendChild(projectImageLink); 

    });

    return sortedListElement;
}

// check local storage for cart information
if (localStorage.getItem('selectedSection') != null) {
    retrieveFromLocalStorage();
} else {
    console.log("EMPTY");
}


function retrieveFromLocalStorage() {
    const testString = localStorage.getItem('selectedSection');
    console.log(testString)
}

// Create a function that will update the styling of navigation bar links. Selected section will become underlined and bolded
function updateHeaderText(headerElement) {
/*
    // Obtain all navigation bar elements that currently are selected as the current page (should only be one element)
    otherHeaderElements = document.querySelectorAll(".navCurrPage");

    // Remove the current page CSS style (.navCurrPage) for all headers
    otherHeaderElements.forEach(eachElement => {
        eachElement.classList.remove("navCurrPage");
    })

    // Add the current page navigation bar styling to the element that was clicked and triggered this function
    headerElement.classList.add("navCurrPage"); */
}

// The default display is set in currentSortType (by project type) so display as this first
sortProjects(currentSortType);

