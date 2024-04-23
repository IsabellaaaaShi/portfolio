// Update the detail page dynamically using the projects object, and methods of lab 4

// Obtain the query string from the url, passed from the main page
const queryString = window.location.search; // Get the string
const params = new URLSearchParams(queryString); // Parse the string for all url search parameters
const chosenProject = params.get('project'); // Use the 'project' parameter to obtain the selected project from the URL

// Call the updateDetailPage() function to display the selected project
updateDetailPage(chosenProject);

// Function to display the selected project and add relevant info and media
function updateDetailPage(chosenProject) { 

    // Set the HTML of the header using the object key value data for the selected project
    const headerElement = document.querySelector("#projectDetailHeader"); // Create the header element by selecting unique ID
    headerElement.innerText = projects[chosenProject]["title"]; // Access title and set HTML with it

    // Set the HTML of the project description using the info attribute of the selected project object
    const infoElement = document.querySelector("#projectDescription"); // Create the info element by selecting unique ID
    infoElement.innerHTML = projects[chosenProject]["info"]; // Access info and set HTML with it


    const typeElement = document.querySelector("#projectInfoBoxType");
    typeElement.innerText = projects[chosenProject]["type"];

    const locationElement = document.querySelector("#projectInfoBoxLocation");
    locationElement.innerHTML = projects[chosenProject]["location"];

    const dateElement = document.querySelector("#projectInfoBoxDate");
    dateElement.innerHTML = convertDateToLegibleString(projects[chosenProject]["date"]);

    // Select and Clear the image container, so it is ready to populate with all project images
    projectImageContainer = document.getElementById("projectDetailImages"); // Access the image container element using unique ID
    projectImageContainer.innerHTML = ''; // Clear the container for new instance of the page

    // Error check to ensure that listen number of media content files matches those listed in the project object
    if (projects[chosenProject]["numContent"] == projects[chosenProject]["projectImages"].length) {

      // Expected length and actual length match. Proceed

      // Create flags to track the situations where multiple images are shown on a single row
      let thirdSplitFlag = 1; // Flag to track images splitting page into thirds. (1 when 1/3, 2 when 2/3, 3 when 3/3, increments until 3, then returns to 1)
      let twoSplitFlag = false; // Flag to track images splitting page into two. Set from true to false for second image, set from false to true on first of set

      // Iterate through each file in the list of expected media files
      projects[chosenProject]["projectImages"].forEach((imgObject) => {

        console.log(imgObject);
        const imgLnk = imgObject.fileName;
        const altText = imgObject.altText;

        console.log(altText);
        console.log(imgLnk);

        // If the flag indicates that this file is the second of a set of two intented to split the row, skip and update flag.
        // Skip second of set of two becuase both are displayed when the first is encountered
        if (twoSplitFlag == true) {

            twoSplitFlag = false; // Set flag to false indicating that both media files have been displayed, and next time a split is encountered it is new

        // If the flag indicates that this file is the second of a set of three intented to split the row, skip and update flag.
        // Skip second of set of three becuase all are displayed when the first is encountered
        } else if (thirdSplitFlag == 2) {

            thirdSplitFlag = 3; // Increment flag to 3, so on next iteration of the forEach function, the third of three condition is encountered

        // If the flag indicates that this file is the third of a set of three intented to split the row, skip and update flag.
        // Skip third of set of three becuase all are displayed when the first is encountered
        } else if (thirdSplitFlag == 3) {

            thirdSplitFlag = 1; // Increment flag to 1, so next time a thirds image is encountered, it is treated as the first of three, and all three are plotted

        } else {

          // Call the function that breaks down the image filename into each component: project title, media type, content number, display type
          let parsedLink = parseLink(imgLnk);
          console.log(parsedLink);

          // Check the current link and its display type (splitType), if it is "f" then the image is displayed with the full width
          if(parsedLink["splitType"] == "f") {

            // Create new div to hold the image
            const fullImageDiv = document.createElement('div'); // Create the element

            if (parsedLink["mediaType"] == "vid") {
              // Create a video element to add to the document
              const genVideo = document.createElement('video'); // Create the element
              genVideo.id = parsedLink["project"] + parsedLink["mediaType"] + parsedLink["index"]; // Give the image element an id
              genVideo.src = projects[chosenProject]["imageFileDirectory"] + "/" + imgLnk; // Set the image source link
              genVideo.alt = altText;
              genVideo.classList.add("projectImageStyle", "projectVideoFull"); // Add classes to the images, to assist in CSS styling
              genVideo.setAttribute("controls","controls");

              // Add video to the existing div
              fullImageDiv.appendChild(genVideo);

            } else if (parsedLink["mediaType"] == "img") {
              // Create an image element to add to the document
              const genImage = document.createElement('img'); // Create the element
              genImage.id = parsedLink["project"] + parsedLink["mediaType"] + parsedLink["index"]; // Give the image element an id
              genImage.src = projects[chosenProject]["imageFileDirectory"] + "/" + imgLnk; // Set the image source link
              genImage.alt = altText;
              genImage.classList.add("projectImageStyle", "projectImageFull"); // Add classes to the images, to assist in CSS styling

              // Add image to the existing div
              fullImageDiv.appendChild(genImage);
            }

            projectImageContainer.appendChild(fullImageDiv); // Add the full image container to the page

          // Check the current link and its display type (splitType), if it is "s" then the next two images are split across the width of the page, with same height
          } else if (parsedLink["splitType"] == "s") {

            // Check if the previous image was also the first of the two split images, if so the condition should have been caught above. Error state.
            if (twoSplitFlag == true) {

              console.log("ERROR: Invalid Image Split Display State") // Provide error message: this state already caught above.

            // This is the first of the set of two images that will be displayed spilt across the screen, proceed in displaying both
            } else {

              // Create new div to hold the two images
              const splitImageDiv = document.createElement('div'); // Create the element
        
              // Create the first image element to add to the document
              const genImage1 = document.createElement('img'); // Create the element
              genImage1.id = parsedLink["project"] + parsedLink["mediaType"] + parsedLink["index"]; // Give the image element an id
              genImage1.src = projects[chosenProject]["imageFileDirectory"] + "/" + imgLnk; // Set the image source link
              genImage1.alt = altText;
              genImage1.classList.add("projectImageStyle", "projectImageSplit"); // Add clases to the images, to assist in CSS styling

              // Create the second image element to add to the document
              nextIndex = projects[chosenProject]["projectImages"].indexOf(imgObject) + 1; // Get the next image link in the array, will be skipped in the forEach loop

              let parsedLink2 = parseLink(projects[chosenProject]["projectImages"][nextIndex].fileName); // Obtain the image attributes by parsing the filename using the parseLink function

              const genImage2 = document.createElement('img'); // Create the element
              genImage2.id = parsedLink2["project"] + parsedLink2["mediaType"] + parsedLink2["index"]; // Give the image element an id
              genImage2.src = projects[chosenProject]["imageFileDirectory"] + "/" + projects[chosenProject]["projectImages"][nextIndex].fileName; // Set the image source link
              genImage2.alt = projects[chosenProject]["projectImages"][nextIndex].altText; 
              genImage2.classList.add("projectImageStyle", "projectImageSplit"); // Add classes to the images, to assist in CSS styling


              splitImageDiv.appendChild(genImage1); // Add the first image to the image container
              splitImageDiv.appendChild(genImage2); // Add the second image to the image container
              projectImageContainer.appendChild(splitImageDiv); // Add the split image container to the page

              twoSplitFlag = true; // The first of the two split elements has been encountered, and both have been displayed. Set flag to true to skip the next element in the forEach loop
            }

          // Check the current link and its display type (splitType), if it is "t" then the next three images are split across the width of the page, with same height
          } else if (parsedLink["splitType"] == "t") {

            // Check if the previous image was also the first or second of the three split images, if so the condition should have been caught above. Error state.
            if (thirdSplitFlag == 2 || thirdSplitFlag == 3) {

              console.log("ERROR: Invalid Image Thirds Display State") // Provide error message: this state already caught above.

            // This is the first of the set of three images that will be displayed spilt across the screen, proceed in displaying all three
            } else if (thirdSplitFlag == 1) {

              // Create new div to hold the two images
              const splitImageDiv = document.createElement('div'); // Create the element

              // Create the first image element to add to the document
              const genImage1 = document.createElement('img'); // Create the element
              genImage1.id = parsedLink["project"] + parsedLink["mediaType"] + parsedLink["index"]; // Give the image element an id
              genImage1.src = projects[chosenProject]["imageFileDirectory"] + "/" + imgLnk; // Set the image source link
              genImage1.alt = altText;
              genImage1.classList.add("projectImageStyle", "projectImageThird"); // Add classes to the images, to assist in CSS styling

              // Create the second image element to add to the document
              nextIndex = projects[chosenProject]["projectImages"].indexOf(imgObject) + 1; // Get the next image link in the array, will be skipped in the forEach loop
              let parsedLink2 = parseLink(projects[chosenProject]["projectImages"][nextIndex].fileName); // Obtain the image attributes by parsing the filename using the parseLink function
              const genImage2 = document.createElement('img'); // Create the element
              genImage2.id = parsedLink2["project"] + parsedLink2["mediaType"] + parsedLink2["index"]; // Give the image element an id
              genImage2.src = projects[chosenProject]["imageFileDirectory"] + "/" + projects[chosenProject]["projectImages"][nextIndex].fileName; // Set the image source link
              genImage2.alt = projects[chosenProject]["projectImages"][nextIndex].altText;
              genImage2.classList.add("projectImageStyle", "projectImageThird"); // Add classes to the images, to assist in CSS styling

              // Create the third image element to add to the document
              nextIndex++; // Get the next image link in the array, will be skipped in the forEach loop
              let parsedLink3 = parseLink(projects[chosenProject]["projectImages"][nextIndex].fileName); // Obtain the image attributes by parsing the filename using the parseLink function
              const genImage3 = document.createElement('img'); // Create the element
              genImage3.id = parsedLink3["project"] + parsedLink3["mediaType"] + parsedLink3["index"]; // Give the image element an id
              genImage3.src = projects[chosenProject]["imageFileDirectory"] + "/" + projects[chosenProject]["projectImages"][nextIndex].fileName; // Set the image source link
              genImage3.alt = projects[chosenProject]["projectImages"][nextIndex].altText;
              genImage3.classList.add("projectImageStyle", "projectImageThird"); // Add classes to the images, to assist in CSS styling

              splitImageDiv.appendChild(genImage1); // Add the first image to the image container
              splitImageDiv.appendChild(genImage2); // Add the second image to the image container
              splitImageDiv.appendChild(genImage3); // Add the third image to the image container
              projectImageContainer.appendChild(splitImageDiv); // Add the split image container to the page

              thirdSplitFlag = 2; // The first of the three split elements has been encountered, and all three have been displayed. Set flag to true to skip the next two elements in the forEach loop
            }

          } else {

            console.log("ERROR: Invalid Image Sort Type"); // The "sortType" of the link was not the expected "full", "third", or "split"

          }
        }
      });

    } else {
      
      console.log("ERROR: Expected Number of Files Not Found"); // Expected length and actual length do not match.

    }
}

// Image filenames have the format [project title]_[media type]_[index]_[display type].[extension]. Parse this information
function parseLink(imgFilename) {

  // Split the image link based on delimiters
  imgLnkArray = imgFilename.split("_");
  imgSplitExt = imgLnkArray[imgLnkArray.length-1].split("."); // Split [display type].[extension] based on "." delimiter
  
  return {
    "project": imgLnkArray[0], // First element is project title
    "mediaType": imgLnkArray[1], // Second element is the media type (img = image; vid = video)
    "index": imgLnkArray[2], // Third element is the index (image number for project)
    "splitType": imgSplitExt[0], // Fourth element is the display method ("full", "split", "third")
    "extension": imgSplitExt[1] // Fifth and final element is the file extension (.png, .jpg, .mp4, etc. )
  }
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

      localStorage.setItem('selectedSection', "TEST");
      console.log(localStorage.getItem('storedCart')); 
  }
  

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