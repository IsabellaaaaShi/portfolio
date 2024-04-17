// Define an object defining each project. Each project is itself an object that contains attributes about the project.
// Each Project object contains standardized key:value pairs:
/*
    "projectTitle": {
        "title": "",
        "simpleTitle": "",
        "info": "",
        "type": "",  architecture, hci, or research
        "date": "",  _1 for spring, _2 for fall
        "location": "",
        "numContent": ,
        "imageFileDirectory": "./assets/",
        "projectIcon": "./assets/",
        "projectImages": []
    },
*/
const projects = {

    "project1": {
        "title": "Project 1 Title",
        "simpleTitle": "project1",
        "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor libero ac efficitur aliquet. Duis efficitur sed dui nec suscipit. Suspendisse id fringilla nunc, vel imperdiet risus. Donec quis dapibus sapien, sed viverra risus. Nunc a finibus erat. Sed condimentum nibh elit, in condimentum nunc mattis quis. Aliquam ut urna nunc. Suspendisse pellentesque turpis et augue dignissim euismod.\
                    Nam tincidunt suscipit elementum. Donec sed suscipit enim, et elementum orci. Nunc porta, magna vitae varius faucibus, eros nisl porta massa, sed maximus purus tellus in tortor. Nullam vel orci volutpat, pulvinar magna sit amet, gravida tellus. Suspendisse vestibulum neque sed justo hendrerit aliquet. Aenean cursus odio eu nisi malesuada, ut mattis elit tristique. \
                    Nulla in nisl et arcu malesuada vehicula. Fusce at nibh ut arcu aliquet facilisis maximus vitae odio. Cras eu nisl eu metus ultricies sodales id a massa. Vivamus feugiat gravida libero, nec condimentum sapien luctus in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec lacinia gravida quam eu semper.",
        "type": "arch",
        "date": "2023",
        "location": "Pittsburgh",
        "numContent": 3,
        "imageFileDirectory": "./assets/project1",
        "projectIcon": "./assets/project1.png",
        "projectImages": []
    },

    "project2": {
        "title": "Project 2 Title",
        "simpleTitle": "project2",
        "info": "",
        "type": "arch",
        "date": "2024",
        "location": "New York",
        "numContent": 22,
        "imageFileDirectory": "./assets/project2",
        "projectIcon": "./assets/project2.png",
        "projectImages": ["project2_img_0_f.PNG",
            "project2_img_1_s.PNG",
            "project2_img_2_s.PNG",
            "project2_img_3_t.PNG",
            "project2_img_4_t.PNG",
            "project2_img_5_t.PNG",
            "project2_img_6_s.PNG",
            "project2_img_7_s.PNG",
            "project2_img_8_t.PNG",
            "project2_img_9_t.PNG",
            "project2_img_10_t.PNG",
            "project2_img_11_f.PNG",
            "project2_img_12_t.PNG",
            "project2_img_13_t.PNG",
            "project2_img_14_t.PNG",
            "project2_img_15_s.PNG",
            "project2_img_16_s.PNG",
            "project2_img_17_s.PNG",
            "project2_img_18_s.PNG",
            "project2_img_19_s.jpg",
            "project2_img_20_s.jpg",
            "project2_img_21_f.PNG"]
    },

    "project3": {
        "title": "Project 3 Title",
        "simpleTitle": "project3",
        "info": "",
        "type": "hci",
        "date": "2019",
        "location": "NA",
        "numContent": 6,
        "imageFileDirectory": "./assets/project3",
        "projectIcon": "./assets/project3.png",
        "projectImages": ["project3_img_0_f.png", 
            "project3_img_1_t.png",
            "project3_img_2_t.png",
            "project3_img_3_t.png",
            "project3_img_4_s.png",
            "project3_img_5_s.png"]
    },
 
    //-----------------------------------------------------------
    // ACTUAL PROJECTS
    //-----------------------------------------------------------

    "arch_culinary": {
        "title": "The Culinary Axis",
        "simpleTitle": "arch_culinary",
        "info": "",
        "type": "architecture",
        "date": "2022_2",
        "location": "Pittsburgh, PA",
        "numContent": 0,
        "imageFileDirectory": "./assets/arch_culinary",
        "projectIcon": "./assets/",
        "projectImages": []
    },

    "arch_disasterHaven": {
        "title": "Disaster Haven",
        "simpleTitle": "arch_disasterHaven",
        "info": "",
        "type": "Architecture",
        "date": "2023_1",
        "location": "Los Angeles, CA",
        "numContent": 0,
        "imageFileDirectory": "./assets/arch_disasterHaven",
        "projectIcon": "./assets/",
        "projectImages": []
    },

    "arch_drawing": {
        "title": "Drawing Work",
        "simpleTitle": "arch_drawing",
        "info": "",
        "type": "architecture",
        "date": "2019",
        "location": "Pittsburgh, PA",
        "numContent": 0,
        "imageFileDirectory": "./assets/arch_drawing",
        "projectIcon": "./assets/",
        "projectImages": []
    },

    "arch_ripple": {
        "title": "The Ripple Effect",
        "simpleTitle": "arch_ripple",
        "info": "",
        "type": "architecture",
        "date": "2023_2",
        "location": "Xinjiang, China",
        "numContent": 0,
        "imageFileDirectory": "./assets/arch_ripple",
        "projectIcon": "./assets/",
        "projectImages": []
    },

    "arch_shelterInWall": {
        "title": "Shelterin Wall",
        "simpleTitle": "arch_shelterInWall",
        "info": "",
        "type": "architecture",
        "date": "2022_2",
        "location": "Indochina Subtropical Rainforest",
        "numContent": 0,
        "imageFileDirectory": "./assetsshelterInWall",
        "projectIcon": "./assets/",
        "projectImages": []
    },

    "arch_steelNecklace": {
        "title": "The Steel Necklace",
        "simpleTitle": "arch_steelNecklace",
        "info": "",
        "type": "architecture",
        "date": "2023_2",
        "location": "Pittsburgh, PA",
        "numContent": 0,
        "imageFileDirectory": "./assets/arch_steelNecklace",
        "projectIcon": "./assets/",
        "projectImages": []
    },

    "hc_bunBun": {
        "title": "Bun Bun Bake Shop",
        "simpleTitle": "hc_bunBun",
        "info": "",
        "type": "hci",
        "date": "2024_1",
        "location": "Online",
        "numContent": 0,
        "imageFileDirectory": "./assets/hci_bunBun",
        "projectIcon": "./assets/",
        "projectImages": []
    },

    "hci_childrenMuseum": {
        "title": "Pittsburgh Children's Museum Website Mockup",
        "simpleTitle": "hci_childrenMuseum",
        "info": "",
        "type": "hci",
        "date": "2023_2",
        "location": "Online",
        "numContent": 0,
        "imageFileDirectory": "./assets/hci_childrenMuseum",
        "projectIcon": "./assets/",
        "projectImages": []
    },

    "hci_flappyBird": {
        "title": "Recreate Flappy Bird",
        "simpleTitle": "hci_flappyBird",
        "info": "",
        "type": "hci",
        "date": "2023_1",
        "location": "Online",
        "numContent": 0,
        "imageFileDirectory": "./assets/hci_flappyBird",
        "projectIcon": "./assets/",
        "projectImages": []
    },

    "hci_moped": {
        "title": "Semi-Autonomous Moped Mockup",
        "simpleTitle": "hci_moped",
        "info": "",
        "type": "hci",
        "date": "2023_2",
        "location": "Online",
        "numContent": 0,
        "imageFileDirectory": "./assets/hci_moped",
        "projectIcon": "./assets/",
        "projectImages": []
    },

    "hci_musicFestival": {
        "title": "Music Festival Website Mockup",
        "simpleTitle": "hci_musicFestival",
        "info": "",
        "type": "hci",
        "date": "2023_2",
        "location": "Online",
        "numContent": 0,
        "imageFileDirectory": "./assets/hci_musicFestival",
        "projectIcon": "./assets/",
        "projectImages": []
    },

    "research_arch": {
        "title": "Architecture Research",
        "simpleTitle": "research_arch",
        "info": "",
        "type": "research",
        "date": "",
        "location": "",
        "numContent": 0,
        "imageFileDirectory": "./assets/research_arch",
        "projectIcon": "./assets/",
        "projectImages": []
    },

    "research_paleo": {
        "title": "Paleontology Research",
        "simpleTitle": "research_paleo",
        "info": "",
        "type": "research",
        "date": "2021",
        "location": "Claremont, CA",
        "numContent": 0,
        "imageFileDirectory": "./assets/research_paleo",
        "projectIcon": "./assets/",
        "projectImages": []
    },

};