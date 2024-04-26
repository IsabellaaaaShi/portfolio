/* Define an object defining each project. Each project is itself an object that contains attributes about the project.
    Each Project object contains standardized key:value pairs:
    
const projects = {
    "projectTitle": {
        "title": "",                                        // The full project title that should be displayed
        "simpleTitle": "",                                  // Simple title no spaces, camelCase
        "info": "",                                         // Description text for project, formatted with breakline (<br/>) elements 
        "type": "",                                         // architecture, hci, or research         
        "date": "",                                         // YYYY appended with _1 for spring, _2 for fall, nothing for just the year
        "location": "",                                     // Location that should be displayed
        "lat": "",                                          // Project latitude that is used by the globe.gl library (decimal degrees)
        "lng": "",                                          // Project longitude that is used by the globe.gl library (decimal degrees)
        "numContent": ,                                     // The number of media files included in the project assets folder (vid + img)
        "imageFileDirectory": "./assets/",                  // The filepath to the project assets folder
        "projectIcon": "./assets/icons/",                   // The filepath to the project icon file
        "projectImages": [                                  // Array of objects representing the media files
            {"fileName": "", "altText": ""},                // Provide filename including extension, alt text string
            {"fileName": "", "altText": ""},
            ... MORE MEDIA FILES HERE                           
        ]
    },

    ... MORE PROJECTS HERE                                  // Repeat the structure for all projects
} */
const projects = {

    "culinary": {
        "title": "The Culinary Axis",
        "simpleTitle": "culinary",
        "info": "The Culinary Axes is a proposed culinary institute project situated in Frick Park of Squirrel Hill, Pittsburgh, Pennsylvania. It is a three-person group project dedicated to the Kaiseki chef Niki Nakayama.\
        Niki Nakayama’s cooking philosophy lies heavily in the idea of nature. <br /><br /> After deriving an abstracted and orthogonal field system from the chef’s philosophies, a linear arrangement of space that flows according to the terrain was concluded.\
        The central axis brings the entire design together, focusing on public space and circulation while allowing maximum sunlight and capitalizing on the hillside view.\
        The secondary axis counters yet complements the main axis by dividing space into 4 quadrants while focusing on education. \
        <br /><br />Overall, the Culinary Axes incorporates elements from Kaiseki cuisine, the importance of linear forms and hierarchy, and influences from the natural biome to shape the structure and landscape. This space acts as a community node for gathering, interaction, and excellent cuisine as an ample addition to Squirrel Hill and the greater Pittsburgh region. ",
        "type": "Architecture",
        "date": "2022_2",
        "location": "Pittsburgh, PA",
        "lat": 40.39254602251845,  // 40.43472633275039, 
        "lng": -79.78642899497409, // -79.90363960294778,
        "numContent": 18,
        "imageFileDirectory": "./assets/culinary",
        "projectIcon": "./assets/icons/culinary.jpg",
        "projectImages": [
            {"fileName": "culinary_img_1_f.jpg", "altText": "Culinary Axis axonometric render"},
            {"fileName": "culinary_img_2_f.jpg", "altText": "Physical Model of interior view of broad stairs"},
            {"fileName": "culinary_img_3_s.jpg", "altText": "Physical Model of all floor levels including roof"},
            {"fileName": "culinary_img_4_s.jpg", "altText": "Physical model of all floor levels without roof"},
            {"fileName": "culinary_img_5_s.jpg", "altText": "Physical model of two floor levels"},
            {"fileName": "culinary_img_6_s.jpg", "altText": "Physical model of basement floor"},
            {"fileName": "culinary_img_7_t.jpg", "altText": "Vignette of exterior garden and farmers market"},
            {"fileName": "culinary_img_8_t.jpg", "altText": "Vignette of exterior terrace"},
            {"fileName": "culinary_img_9_t.jpg", "altText": "Vignette of exterior pathway"},
            {"fileName": "culinary_img_10_t.jpg", "altText": "Vignette of building back"},
            {"fileName": "culinary_img_11_t.jpg", "altText": "Vignette of building landscape"},
            {"fileName": "culinary_img_12_t.jpg", "altText": "Vignette, looking outwards into courtyard from building"},
            {"fileName": "culinary_img_13_s.jpg", "altText": "Floor plans of all levels"},
            {"fileName": "culinary_img_14_s.jpg", "altText": "Section of culinary axis building"},
            {"fileName": "culinary_img_15_f.jpg", "altText": "Exploded axonometric view of building structure and program"},
            {"fileName": "culinary_img_16_f.jpg", "altText": "Conceptual collage"},
            {"fileName": "culinary_img_17_s.jpg", "altText": "Conceptual model top view"},
            {"fileName": "culinary_img_18_s.jpg", "altText": "Conceptual model perspective view"}]
    },

    "disasterHaven": {
        "title": "Disaster Haven",
        "simpleTitle": "disasterHaven",
        "info": "The “Disaster Haven” mobile home is designed for quick and efficient evacuation during Los Angeles natural disasters such as wildfires.\
            Its compact size and mobility make it ideal for fast and easy deployment, providing a safe and secure shelter for those in need. The home is constructed to be quickly deconstructible, ensuring that it can be quickly and safely removed from an area if necessary, reducing the risk of further threat of disaster. Despite its small size, Disaster Haven is designed to be a comfortable and functional living space equipped with all the basic amenities for those who may be displaced for an extended period.<br /><br />\
            Disaster Haven serves as a temporary shelter that can be swiftly distributed by the government to those in need when a fire occurs. The Whittier Narrow Recreational Area in El Monte, located in Los Angeles County, is designated as the temporary campsite where families will be able to settle with their loved ones. The site is designed to create a community, supportive environment, and relaxing view during a challenging time. Once the fire has been extinguished and the affected areas are deemed safe, the residents will return to where their homes once stood. As they watch their new houses being built, a sense of hope and resilience is instilled within the community, symbolizing a fresh start and moving forward. This mobile home design aims to not only provide practicality and functionality in times of crisis but also evoke a sense of unity and the power of rebuilding together.<br /><br />\
            The mobile home exhibits remarkable flexibility and functionalities to cater to various needs. With a single unit, the door can be propped open, along with half of the slanted wall, creating an exterior space that can be utilized for dining or simply enjoying the outdoors. Additionally, the back of the mobile home next to the bed can be propped out, forming a small, raised mini balcony that offers an elevated view of the surroundings. The windows are designed with flexible shades, allowing for privacy and controlling the amount of natural light entering the space. Moreover, the inclusion of skylights enables ample sunlight during the day and breathtaking views of the night sky. For larger families, multiple units can be joined together in various configurations to create more spacious living areas that accommodate the needs of each household. The versatility and adaptability of this mobile home design aim to enhance comfort and livability, ensuring that individuals and families can make the most of their temporary shelter during challenging times.",
        "type": "Architecture",
        "date": "2023_1",
        "location": "Los Angeles, CA",
        "lat": 34.08007088675968,  //34.03549910932504,
        "lng": -118.24335909884819, //-118.05706707631032,
        "numContent": 16,
        "imageFileDirectory": "./assets/disasterHaven",
        "projectIcon": "./assets/icons/disasterHaven.jpg",
        "projectImages": [
            {"fileName":"disasterHaven_img_1_f.jpg", "altText": "Triptych of disaster haven narrative"},
            {"fileName":"disasterHaven_img_2_s.jpg", "altText": "Physical model of two units assembled"},
            {"fileName":"disasterHaven_img_3_s.jpg", "altText": "Physical model of three units assembled"},
            {"fileName":"disasterHaven_img_4_f.jpg", "altText": "Site map of Whittier Narrows Recreational Area"},
            {"fileName":"disasterHaven_img_5_f.jpg", "altText": "Site plan of campground"},
            {"fileName":"disasterHaven_img_6_s.jpg", "altText": "Floor plan of three units assembled"},
            {"fileName":"disasterHaven_img_7_s.gif", "altText": "GIF of assembly process for three units"},
            {"fileName":"disasterHaven_img_8_f.jpg", "altText": "Section perspective of disaster haven interior"},
            {"fileName":"disasterHaven_img_9_f.jpg", "altText": "Elevation of all sides of disaster haven"},
            {"fileName":"disasterHaven_img_10_s.jpg", "altText": "Physical model of car towing disaster haven"},
            {"fileName":"disasterHaven_img_11_s.jpg", "altText": "Physical model of one unit interior, perspective"},
            {"fileName":"disasterHaven_img_12_s.jpg", "altText": "Physical model of one unit interior, front"},
            {"fileName":"disasterHaven_img_13_s.jpg", "altText": "Physical model of one unit interior, back and bedroom"},
            {"fileName":"disasterHaven_img_14_t.jpg", "altText": "Physical model of one unit interior, storage"},
            {"fileName":"disasterHaven_img_15_t.jpg", "altText": "Physical model of one unit interior, kitchen"},
            {"fileName":"disasterHaven_img_16_t.jpg", "altText": "Physical model of one unit interior, from skylight"}]
    },

    "drawing": {
        "title": "Drawing Work",
        "simpleTitle": "drawing",
        "info": "Below are some drawings and paintings I have completed since 2019. ",
        "type": "Architecture",
        "date": "2019",
        "location": "Pittsburgh, PA",
        "lat": 40.412332277578955, //40.442034143293185, 
        "lng": -79.96369010115116, // -79.94290588957995,
        "numContent": 13,
        "imageFileDirectory": "./assets/drawing",
        "projectIcon": "./assets/icons/drawing.jpg",
        "projectImages": [
            {"fileName":"drawing_img_1_f.jpg", "altText": "CFA hall, black and white, colored pencil"},
            {"fileName":"drawing_img_2_s.jpg", "altText": "Stairs in color, pastel"},
            {"fileName":"drawing_img_3_s.jpg", "altText": "Stairs in color, pastel"},
            {"fileName":"drawing_img_4_s.jpg", "altText": "Charcoal drawing of columns"},
            {"fileName":"drawing_img_5_s.jpg", "altText": "Charcoal drawing of building facadee"},
            {"fileName":"drawing_img_6_t.jpg", "altText": "Pen line drawing of building detail"},
            {"fileName":"drawing_img_7_t.jpg", "altText": "Pen line drawing of chinese pavillion"},
            {"fileName":"drawing_img_8_t.jpg", "altText": "Pen line drawing of chinese bridge"},
            {"fileName":"drawing_img_9_s.jpg", "altText": "Watercolor drawing of windmill and street"},
            {"fileName":"drawing_img_10_s.jpg", "altText": "Watercolor drawing of street side"},
            {"fileName":"drawing_img_11_s.jpg", "altText": "Colored pencil drawing of succulents in planter"},
            {"fileName":"drawing_img_12_s.jpg", "altText": "Pencil drawing still life of artist's desk, emphasizing shadows"},
            {"fileName":"drawing_img_13_f.jpg", "altText": "Perspective pencil drawing of saw"}]
    },

    "ripple": {
        "title": "The Ripple Effect",
        "simpleTitle": "ripple",
        "info": "The project is a submission to Buildner’s 3rd annual Last Nuclear Bomb Memorial competition.<br /><br />\
        The competition is organized each year in support of a universal ban on nuclear weapons. The goal is to create a conceptual memorial project to be located on any known decommissioned nuclear weapon testing site. As the submission to a ‘silent’ competition, the project does not include text and annotation of any kind and is meant to express the architectural experience through the imagery.",
        "type": "Architecture",
        "date": "2023_2",
        "location": "Xinjiang, China",
        "lat": 41.66800583079816, 
        "lng": 89.99320323276339,
        "numContent": 1,
        "imageFileDirectory": "./assets/ripple",
        "projectIcon": "./assets/icons/ripple.jpg",
        "projectImages": [
            {"fileName":"ripple_img_1_f.jpg", "altText": "Competition story board, visitor places rock in pool, ripples form and contribute to pile of rocks on bottom of pool"}]
    },

    "shelterInWall": {
        "title": "Shelter-In Wall",
        "simpleTitle": "shelterInWall",
        "info": "The project aims to create a semi-enclosed structure located in the Indochina subtropical forest. The goal of this project is to shelter people from the rain and sun while allowing wind to pass through and providing access to the natural environment.<br /><br />\
            During the design process, several key aspects were considered. The first is climate. The site has heavy precipitation, low altitude, and heat. Here, stilt structures reference the precedent study to avoid flooding. The structure’s roof mimics the slanted rooftops of Thai houses to shelter from the rain, drain water, and allow hot air to rise to the top and circulate.<br /><br />\
            The second consideration is material and form. Referencing the precedents’ utilization of locally available bamboo and wood, the Shelter-In Wall plays with the arrangement of wood structures. The material ensures the simplicity of construction and deconstruction.<br /><br />\
            The notion of wood is interesting: it was a former part of the natural environment. However, now, it not only functions as a barrier for people from unpleasant aspects, but also works as a linked connection with the surroundings. Thai and Lao architecture also avoid the use of nails but rather focus on joints to lock structure together, which is also a structural aspect this shelter decided to take on.<br /><br />\
            Lastly, Thai and Lao villages contain family compounds rather than stand alone structure. Thus, this design incorporates multiple structures to create variations. ",
        "type": "Architecture",
        "date": "2022_2",
        "location": "Indochina Subtropical Rainforest",
        "lat": 20.317730810939555, 
        "lng": 105.6085589386335,
        "numContent": 19,
        "imageFileDirectory": "./assets/shelterInWall",
        "projectIcon": "./assets/icons/shelterInWall.jpg",
        "projectImages": [
            {"fileName":"shelterInWall_img_1_f.jpg", "altText": "Physical model perspective view, wood shelter structure on concrete foundation and base"},
            {"fileName":"shelterInWall_img_2_s.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_3_s.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_4_t.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_5_t.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_6_t.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_7_f.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_8_s.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_9_s.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_10_s.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_11_s.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_12_t.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_13_t.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_14_t.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_15_s.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_16_s.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_17_t.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_18_t.jpg", "altText": "The"},
            {"fileName":"shelterInWall_img_19_t.jpg", "altText": "The"}]
    },

    "steelNecklace": {
        "title": "The Steel Necklace",
        "simpleTitle": "steelNecklace",
        "info": "The Steel Necklace is a group project involving three architectural complexes that utilize different architectural interventions to address the cultural, social, and ecological issues of Pittsburgh. Our overarching goal is to create community engagement at different scales, from neighborhood to regional to city, and empower less-privileged and marginalized groups in Pittsburgh. The three sub-projects include a worker’s activism hub in the Strip District, a community center in the Hill District, and a co-living affordable housing complex with agricultural elements in Herr’s Island.<br /><br />\
                The Strip District site was chosen for its proximity to downtown Pittsburgh and its history as an industrial zone, allowing it to be a generator and catalyst for labor movements. It is designed based on the existing old warehouse’s frame and divided into private and public spaces with flexible components such as mobile walls and accordion roof. Assembly space,  performance theater, gallery, public kitchen, workshop, art studio, print shop, and more are included to allow unionizing workers, allies, labor activists, and workers to feel a sense of community with working-class people. Temporary housing also facilitates striking workers for organizing events.<br /><br />\
                The Hill District community center was designed with the goal of creating a catered, multi-use space for the neighborhood, run by the people of the community. The design expands from a node and connects to the community, both physically and figuratively. The project is built on a physical slope based on a grid system. Wide terrace stairs are adopted as the main circulation gesture across the site. Starting from the lowest point of the project, the center includes a library, a daycare, a clinic, and an urban kitchen that makes and distributes food in the city. Ascending to the second floor, the library, office, and multi-use spaces connect the occupiable roofs that function as dining, a basketball court, and a small skate park. The connection to the community is physically represented by the scaffolding system that surrounds the building and provides flexible connections between spaces.<br /><br />\
                The Herr’s Island site provides affordable housing for Pittsburgh residents who are facing gentrification and rising housing costs. It is a co-op neighborhood where the housing is collectively owned and managed. The neighborhood is composed of housing clusters with modular units connected by communal spaces. The clusters sit on top of the slope of the river bank, creating a terraced landscape  In order to help residents sustain themselves and alleviate food security concerns, the terraced platforms are turned into community gardens and used for cultivating crops. The neighborhood becomes an experimental ground and educational center for organic farming practices and connects to the Hill District community center by providing produce for the urban kitchen. The abandoned railroad bridge on Herr’s Island thus transformed into a pedestrian bridge that connects the neighborhood to the Strip District on the other side of the Allegheny River and further serves as a farmer’s market for local Pittsburgh farmers to gather and engage.<br /><br /> ",
        "type": "Architecture",
        "date": "2023_2",
        "location": "Pittsburgh, PA",
        "lat": 40.492595262421695,   // 40.460329691039526, 
        "lng": -79.86645874329953, //-79.97362101502108,
        "numContent": 29,
        "imageFileDirectory": "./assets/steelNecklace",
        "projectIcon": "./assets/icons/steelNecklace.jpg",
        "projectImages": [
            {"fileName":"steelNecklace_img_1_f.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_2_t.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_3_t.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_4_t.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_5_s.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_6_s.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_7_s.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_8_s.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_9_f.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_10_t.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_11_t.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_12_t.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_13_f.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_14_f.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_15_s.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_16_s.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_17_s.jpg", "altText": "The"},            
            {"fileName":"steelNecklace_img_18_s.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_19_s.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_20_s.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_21_s.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_22_f.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_23_f.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_24_s.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_25_s.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_26_s.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_27_s.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_28_f.jpg", "altText": "The"},
            {"fileName":"steelNecklace_img_29_f.jpg", "altText": "The"}]
    },

    "bunBun": {
        "title": "Bun Bun Bake Shop",
        "simpleTitle": "bunBun",
        "info": "Bun Bun Bake Shop is a mockup of a online store for cinnamon rolls. The webpage was written from the start with HTML, CSS, and JavaScript.<br /><br />\
                The store includes three sub-pages: the main product page, the product detail page, and the cart page. Through a step-by-step process of implementing layout\
                and individual webpage functions, users can browse the cinnamon rolls, select different cinnamon roll types, change the glazing of each cinnamon roll,\
                and add them to the cart with different configurations. The webpage is dynamic and gives real time response. ",
        "type": "HCI",
        "date": "2024_1",
        "location": "Online",
        "lat": 40.34723559524871,  //40.44157535033542,
        "lng": -79.98101203335086, // -79.9442101300613,
        "numContent": 1,
        "imageFileDirectory": "./assets/bunBun",
        "projectIcon": "./assets/icons/bunBun.jpg",
        "projectImages": [
            {"fileName":"bunBun_img_1_f.jpg", "altText": "cinnamon roll shop webpage mockup, including product images, prices, and navigation bar to get to product detail pages or cart"}]
    },

    "childrenMuseum": {
        "title": "Pittsburgh Children's Museum Website Mockup",
        "simpleTitle": "childrenMuseum",
        "info": "Based on knowledge on Information Architecture, this project aims to redesign the website for the Children’s Museum of Pittsburgh to better meet the needs\
                of key user archetypes - the planning parent, the engaged educator, the curious kid, the supporting members, and the new-in-town parent. My goal is to enhance\
                the museum’s online presence and improve the overall user experience. <br /><br />The redesign process focused on applying information architecture principles to effectively\
                re-organize content and visual elements based on user goals. Through an iterative prototyping process, the new homepage design highlights key actions and priorities\
                for core user groups for readability. The museum information becomes easy to find and engage with for all users. ",
        "type": "HCI",
        "date": "2023_2",
        "location": "Online",
        "lat": 40.597017164339164,   // 40.452990387331305, 
        "lng": -80.03589901669375, // -80.00637288773174,
        "numContent": 2,
        "imageFileDirectory": "./assets/childrenMuseum",
        "projectIcon": "./assets/icons/childrenMuseum.jpg",
        "projectImages": [
            {"fileName":"childrenMuseum_img_1_f.jpg", "altText": "Pittsburgh children's museum webpage mockup emphasizing current events, workshops, and navigation bar to learn more about museum"},
            {"fileName":"childrenMuseum_img_2_f.jpg", "altText": "Concept map used to plan museum webpage mockup"}]
    },

    "flappyBird": {
        "title": "Recreate Flappy Bird",
        "simpleTitle": "flappyBird",
        "info": "This project recreates the Flappy Bird Game with some twists using Python. The game includes a bird that must navigate through pipes by flapping its wings to stay in the air, while avoiding collisions with the pipes and the ground. The game has a simple scoring system: the player earns points for passing through pipes.\
                In addition to the classical Flappy Bird, I created a couple interesting features to the game.<br /><br />\
                Firstly, I made the game with my own aesthetics, which involved creating images and GIFs through drawing digitally and the use of Midjourney. The overall theme adopts Chinese caligraphy drawing style and the background wraps around as the game continues on.<br /><br />\
                Secondly, although as time passes, the game gets harder as the bird travels faster, there are powerups that players can collect during the gameplay to aim for a higher score. The blue shield icon allows players to be crashproof for 6 seconds while displaying a countdown. The pink icon temporarily enlargens the gap size between pipes. The coins allow players to purchase additional background themes. Once the player finishes a round, they are prompted to enter a nickname to be recorded on the scoreboard. <br /><br />\
                Thirdly, I created an algorithm for a shadow bird. The player can activate the shadow bird on the upper right corner of the game start screen whose pathway is generated by code to navigate the ideal path. <br /><br />\
                Lastly, upon clicking the upper rightmost button, a menu appears with 'About', 'Scoreboard', 'Game Store', and 'Create Your Own'. 'Scoreboard' tracks the top three scores. The 'Game Store' is where players can obtain new themes with coins they were awarded during the gameplay. Lastly, 'Create Your Own' is a sandbox where players can customize their own backgrounds. The player chooses a theme that is available to them, through purchase in the Game Store. Then, a customization page appears and allows users to place elements wherever they want in the background. After returning to the main page, users can play using the custom background.",
        "type": "HCI",
        "date": "2023_1",
        "location": "Online",
        "lat": 40.44925105863072, //40.44360393671111, 
        "lng": -79.87477084919263, // -79.94477022214181,
        "numContent": 1,
        "imageFileDirectory": "./assets/flappyBird",
        "projectIcon": "./assets/icons/flappyBird.jpg",
        "projectImages": [
            {"fileName":"flappyBird_vid_1_f.mp4", "altText": "Video describing the the project and explaining functionalities of  the code"}]
    },

    "moped": {
        "title": "Semi-Autonomous Moped Mockup",
        "simpleTitle": "moped",
        "info": "The project is a collaboration within a team of four to design the physical and digital interfaces of an imaginary semiautonomous moped.\
                The design of the moped involved an iterative process of research, task analysis, physical prototyping, and digital mockup at various fidelity levels to test design feasibility.<br /><br />\
                For the research phase, we conducted Guerrilla Research with people who owned mopeds to better understand what people liked/disliked/feared about moped and help us address any pain points. We also read secondary sources about four main aspects of mopeds: history, technical, user desirability, and use cases. During task analysis, we prioritized and sequentially diagramed 20 major actions and flows the users have to take in sequence to operate their EV moped. The goal was to understand each small steps users need to take in order to interact with the semi-autonomous moped.<br /><br />\
                For the iterative prototyping phase, the physical model was made through digital modeling and laser cutting. The dimensions were carefully decided based on human anatomy. The buttons and controlls were chosen based on human intuition and level of importance and access. The digital prototype went through a few fidelity phases: from paper sketches to mid-fidelity wireframes to high-fidelity mockup.<br /><br />\
                The videos below demonstrate the process of using the semi-autonomous moped. ",
        "type": "HCI",
        "date": "2023_2",
        "location": "Online",
        "lat": 40.45837842538329,// 40.45659963295312, 
        "lng": -79.97826713290905, //-79.9812513,
        "numContent": 9,
        "imageFileDirectory": "./assets/moped",
        "projectIcon": "./assets/icons/moped.jpg",
        "projectImages": [
            {"fileName":"moped_img_1_f.jpg", "altText": "Moped physical mockup"},
            {"fileName":"moped_vid_2_f.MOV", "altText": "Video describing moped mobile application"},
            {"fileName":"moped_vid_3_f.MOV", "altText": "Video describing unlocking the moped"},
            {"fileName":"moped_vid_4_f.MOV", "altText": "Video describing manual driving"},
            {"fileName":"moped_vid_5_f.MOV", "altText": "Video describing changing from manual driving to autonomous driving"},
            {"fileName":"moped_vid_6_f.MOV", "altText": "Video describing autonomous driving"},
            {"fileName":"moped_vid_7_f.MOV", "altText": "Video communicating system decisions"},
            {"fileName":"moped_vid_8_f.MOV", "altText": "Video displaying emergency messages"},
            {"fileName":"moped_vid_9_f.MOV", "altText": "Video explaining how to park moped"}]
    },

    "musicFestival": {
        "title": "Music Festival Website Mockup",
        "simpleTitle": "musicFestival",
        "info": "For this mockup, I was tasked with designing 2 artifacts for an imaginary Pittsburgh Music Festival: 1. A 1-page website and 2. 3 Social Media Posts. The website include the content provided so that concert goers can easily understand which bands are playing, when, and know how to get tickets. The social media posts highlight the lineups for each day of the festival such that users can easily know which bands are playing and where each day.<br /><br />\
            The goal of this mockup is to practice core visual and communication design skills in organizing large amounts of content while designing a poster that inspires excitement in its user.",
        "type": "HCI",
        "date": "2023_2",
        "location": "Online",
        "lat": 40.40272514982419, // 40.441882528457064, 
        "lng": -80.1762470685726, // -80.01093049488524,
        "numContent": 4,
        "imageFileDirectory": "./assets/musicFestival",
        "projectIcon": "./assets/icons/musicFestival.jpg",
        "projectImages": [
            {"fileName":"musicFestival_img_1_f.jpg", "altText": "Full webpage mockup for each day of festival"},
            {"fileName":"musicFestival_img_2_t.jpg", "altText": "Day one of festival, social media post mockup"},
            {"fileName":"musicFestival_img_3_t.jpg", "altText": "Day two of festival, social media post mockup"},
            {"fileName":"musicFestival_img_4_t.jpg", "altText": "Day three of festival, social media post mockup"}]
    },

    "archResearch": {
        "title": "Architecture Research",
        "simpleTitle": "archResearch",
        "info": "https://doi.org/10.2991/assehr.k.201215.482",
        "type": "Research",
        "date": "2020",
        "location": "China",
        "lat": 39.91762719411705, 
        "lng": 116.39731444729433,
        "numContent": 0,
        "imageFileDirectory": "./assets/archResearch",
        "projectIcon": "./assets/icons/archResearch.jpg",
        "projectImages": []
    },

    "paleoResearch": {
        "title": "Paleontology Research",
        "simpleTitle": "paleoResearch",
        "info": "https://doi.org/10.5070/P9381052921",
        "type": "Research",
        "date": "2021",
        "location": "Claremont, CA",
        "lat": 34.12947085530299, // 34.12429444176874, 
        "lng": -117.73960887447255, // -117.73906695734141, 
        "numContent": 0,
        "imageFileDirectory": "./assets/paleoResearch",
        "projectIcon": "./assets/icons/paleoResearch.jpg",
        "projectImages": []
    },

};