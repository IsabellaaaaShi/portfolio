// Update the detail page dynamically using the projects object, and methods of lab 4

// Obtain the query string from the url, passed from the main page
const queryString = window.location.search; // Get the string
const params = new URLSearchParams(queryString); // Parse the string for all url search parameters
const chosenProject = params.get('project'); // Use the 'project' parameter to obtain the selected project from the URL

// Call the updateDetailPage() function to display the selected project
updateDetailPage(chosenProject);

// Function to display the selected project and add relevant info and media
function updateDetailPage(project) {

    // Access the header element by id
    const headerElement = document.querySelector("#projectDetailHeader");

    console.log(chosenProject); // debug selected project
    console.log(projects[chosenProject]["title"]) // debug selected project attributes (object key values)

    // Set the HTML of the header using the object key value data for the selected project
    headerElement.innerText = projects[chosenProject]["title"];

    // Access the image container element by id
    projectImageContainer = document.getElementById("projectDetailImages");
    projectImageContainer.innerHTML = ''; // Clear the container for new instance of the page

    // Iterate through each piece of media in the chosen project (set by numContent attribute)
    for (let i = 0; i < projects[chosenProject]["numContent"]; i++) {
        
        // Create an image element to add to the document
        const genImage = document.createElement('img'); // Create the element
        genImage.id = projects[chosenProject]["simpleTitle"] + "-image-" + i; // Set a unique id for the image element

        // Naming convention for project images is simpleTitle-image-n, where n is the nth image in the set
        const imgSrc = projects[chosenProject]["imageFileDirectory"] + "/" + projects[chosenProject]["simpleTitle"] + "-image-" + i + ".png";
        
        console.log(imgSrc); // Debug the image source link

        genImage.src = imgSrc; // Set the image source link
        genImage.classList.add("projectImageStyle"); // Add a class to the images, to assist in CSS styling
        projectImageContainer.appendChild(genImage); // Add the image to the image container div element, so each iteration of for loop adds a new media content
      }
}
