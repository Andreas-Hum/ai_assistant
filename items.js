window.ITEMS = [
{
"id": "h001",
"situation": "The user is in a meeting with a client discussing proposals. The client has requested a proposal by next week.",
"persona": "Consultant",
"tool": "add_to_agenda",
"description": "Add an event to the user's agenda.",
"reference": {
"event": "Proposal deadline",
"time": "next week"
},
"predicted": {
"event": "Prepare proposal for client",
"time": "next week"
}
},
{
"id": "h002",
"situation": "Visual information shows the user on a video call discussing preparations for a client meeting. Audio indicates the need to prepare a presentation.",
"persona": "The user is responsible for client presentations and communications.",
"tool": "add_to_agenda",
"description": "Add an event to the user's agenda.",
"reference": {
"event": "Prepare client presentation",
"time": "before next Wednesday"
},
"predicted": {
"event": "Prepare presentation",
"time": "until the meeting starts"
}
},
{
"id": "h003",
"situation": "The user is in a work meeting reviewing project timelines with urgent tasks that need to be completed before a client presentation on Monday.",
"persona": "",
"tool": "add_to_agenda",
"description": "Add an event to the user's agenda.",
"reference": {
"event": "Complete urgent project tasks",
"time": "Multiple blocks before Monday"
},
"predicted": {
"event": "Complete urgent tasks before client presentation",
"time": "before Monday"
}
},
{
"id": "h004",
"situation": "The user is stargazing, looking at what appears to be a specific constellation in the night sky.",
"persona": "A casual stargazer who enjoys learning about astronomy but doesn't have specialized knowledge",
"tool": "vllm",
"description": "Visual Large Language Model (VLM) that can answer the user's questions based on the given image.",
"reference": {
"prompt": "Identify the constellation in this night sky image",
"image_path": ""
},
"predicted": {
"prompt": "Identify the constellation the user is looking at",
"image_path": ""
}
},
{
"id": "h005",
"situation": "The user is engaged in a casual conversation with a friend at a coffee shop. The user is discussing feeling tired despite adequate sleep.",
"persona": "",
"tool": "get_medical_knowledge",
"description": "Get medical expert knowledge from the up-to-date medical knowledge database.",
"reference": {
"query": "tips for improving energy levels and sleep quality"
},
"predicted": {
"query": "tiredness sleep quality"
}
},
{
"id": "h006",
"situation": "Visual information indicates the user is interested in running shoes. Multiple color options and the displayed price of $120 are clearly visible.",
"persona": "Fitness enthusiast. Frequently engages in running activities",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay",
"reference": {
"product_name": "running shoes"
},
"predicted": {
"product_name": "running shoes"
}
},
{
"id": "h007",
"situation": "The user is browsing wireless earbuds in the electronics section. A store announcement suggests potential discounts.",
"persona": "",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay",
"reference": {
"product_name": "wireless earbuds"
},
"predicted": {
"product_name": "wireless earbuds"
}
},
{
"id": "h008",
"situation": "The user is in a historical museum, observing an exhibit labeled 'Ancient Egypt Artifacts.'",
"persona": "History enthusiast",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "Ancient Egyptian artifacts and cultural significance"
},
"predicted": {
"query": "Ancient Egypt Artifacts"
}
},
{
"id": "h009",
"situation": "The user is in a furniture store shopping for sofas, specifically showing interest in a grey sectional by measuring it and recording dimensions, indicating serious purchase consideration.",
"persona": "A home decorator who carefully considers measurements and style before making furniture purchases.",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay.",
"reference": {
"product_name": "grey sectional sofa"
},
"predicted": {
"product_name": "grey sectional sofa similar to in-store model"
}
},
{
"id": "h010",
"situation": "The user is in a grocery store aisle, examining pasta sauces and possibly having trouble reading the labels, which might indicate a need for assistance with nutritional information or price comparison.",
"persona": "A health-conscious shopper who carefully reads nutrition labels.",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay.",
"reference": {
"product_name": "pasta sauce"
},
"predicted": {
"product_name": "pasta sauce"
}
},
{
"id": "h011",
"situation": "The user is browsing the menu at a Mexican restaurant exploring various food.",
"persona": "The user enjoys flavorful food but has a low tolerance for spicy dishes.",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "Mild but flavorful taco fillings at this Mexican restaurant"
},
"predicted": {
"query": "mild options at this Mexican restaurant"
}
},
{
"id": "h012",
"situation": "The user is shopping for a sectional sofa priced at $2,499. They're taking measurements and photos, suggesting serious purchase consideration.",
"persona": "",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "sectional sofa durability comfort reviews"
},
"predicted": {
"query": "sectional sofa reviews"
}
},
{
"id": "h013",
"situation": "Visual information shows the user in a kitchen with fresh vegetables and spices, possibly looking to try a new recipe with the cookbook open.",
"persona": "User enjoys experimenting with new recipes and flavors.",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "stir-fry recipe with fresh vegetables and spices"
},
"predicted": {
"query": "recipe suggestions for fresh vegetables"
}
},
{
"id": "h014",
"situation": "The user is in a botanical garden, observing a rose garden.",
"persona": "Gardening enthusiast",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "rose care and popular varieties"
},
"predicted": {
"query": "rose blooming times and details"
}
},
{
"id": "h015",
"situation": "Visual information shows the user is in a diner, browsing a breakfast menu with options such as pancakes, scrambled eggs, and bacon.",
"persona": "The user is interested in starting their day with a balanced and healthy meal.",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "calorie counts and heating information for pancakes, scrambled eggs, and bacon"
},
"predicted": {
"query": "calorie counts and health information for pancakes, scrambled eggs, bacon, and whole-grain toast"
}
},
{
"id": "h016",
"situation": "The user is scanning the dessert menu at a café. The menue inclues sugar-free or low-sugar alternatives, including fruit-based desserts and sugar substitutes.",
"persona": "The user monitors their sugar levels carefully and prefers healthier dessert choices.",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "Best low-sugar dessert cafés nearby"
},
"predicted": {
"query": "calorie counts and ingredient breakdowns for the desserts at this café"
}
},
{
"id": "h017",
"situation": "Visual information shows the user is inspecting various smartphones at an electronics store, specifically focused on two brands, labeled Model X at $899 and Model Y at $799.",
"persona": "",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "feature comparison of Model X and Model Y smartphones"
},
"predicted": {
"query": "smartphone reviews and recommendations Model X Model Y"
}
},
{
"id": "h018",
"situation": "Visual information suggests the person is packing winter layers—sweaters, scarves, and a jacket—into a suitcase. The agenda indicates that the user is departing for Canada this weekend.",
"persona": "",
"tool": "get_city_weather",
"description": "Get the weather for a specified city at a given time.",
"reference": {
"city": "Canada",
"time": "this weekend"
},
"predicted": {
"city": "Canada",
"time": "this weekend"
}
},
{
"id": "h019",
"situation": "The visual information shows the user is walking through a botanical garden, admiring various flowers and plants.",
"persona": "The user is a nature enthusiast and enjoys learning about different plants.",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "Ghost Orchid"
},
"predicted": {
"query": "Hibiscus plant"
}
},
{
"id": "h020",
"situation": "Visual information indicates the user is interested in running shoes. Multiple color options and the displayed price of $120 are clearly visible.",
"persona": "Fitness enthusiast. Frequently engages in running activities",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay",
"reference": {
"product_name": "running shoes"
},
"predicted": {
"product_name": "running shoes"
}
},
{
"id": "h021",
"situation": "The user is viewing a trailer for an upcoming blockbuster movie on their smartphone. The trailer announces the movie will be in theaters next month and encourages pre-booking tickets.",
"persona": "The user is a film enthusiast who enjoys watching new releases on opening weekends.",
"tool": "add_to_agenda",
"description": "Add an event to the user's agenda.",
"reference": {
"event": "Movie Release: [Movie Title]",
"time": "next month"
},
"predicted": {
"event": "Pre-book tickets for new movie",
"time": "next month"
}
},
{
"id": "h022",
"situation": "The user is examining what appears to be an antique Roman coin with Latin text and the profile of a figure wearing a laurel wreath.",
"persona": "A casual collector who has recently developed an interest in numismatics and ancient artifacts",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "Roman imperial coinage denarius identification laurel wreath symbolism"
},
"predicted": {
"query": "Roman coin Roman god laurel wreath significance"
}
},
{
"id": "h023",
"situation": "Visual information shows the user browsing through a clothing store, looking at various shirts.",
"persona": "",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay",
"reference": {
"product_name": "shirt"
},
"predicted": {
"product_name": "shirts"
}
},
{
"id": "h024",
"situation": "Visual information shows the user is walking in the park and talking to a friend. Audio information shows there is a conversation between the user and the friend. The friend says: 'Did you hear about the big soccer game this weekend?'",
"persona": "",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "big soccer game, including its showtimes or ticket price"
},
"predicted": {
"query": "big soccer game this weekend"
}
},
{
"id": "h025",
"situation": "The user is considering purchasing vitamin D supplements, potentially to improve bone health.",
"persona": "",
"tool": "get_medical_knowledge",
"description": "Get medical expert knowledge from the up-to-date medical knowledge database.",
"reference": {
"query": "benefits and recommended dosages of vitamin D"
},
"predicted": {}
},
{
"id": "h026",
"situation": "The user is shopping for a sectional sofa priced at $2,499. They're taking measurements and photos, suggesting serious purchase consideration.",
"persona": "",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "sectional sofa durability comfort reviews"
},
"predicted": {
"query": "sectional sofa reviews"
}
},
{
"id": "h027",
"situation": "Visual information shows the user is standing at a bus stop, looking at the bus station.",
"persona": "",
"tool": "check_bus_schedule",
"description": "Check the bus schedule for a specific bus stop.",
"reference": {
"bus_stop": "$RESULT(get_current_gps_coordinates.address)"
},
"predicted": {
"bus_stop": "current bus stop"
}
},
{
"id": "h028",
"situation": "The user is checking the sushi menu at a Japanese restaurant, focusing on sushi rolls and sashimi options.",
"persona": "The user is a cautious eater who wants to avoid any health risks from raw fish.",
"tool": "get_medical_knowledge",
"description": " Get medical expert knowledge from the up-to-date medical knowledge database.",
"reference": {
"query": "Safety guidelines for consuming raw fish"
},
"predicted": {
"query": "sushi safety precautions"
}
},
{
"id": "h029",
"situation": "The user is at a street corner in what appears to be Japan, looking confused while examining Japanese street signs. Their mobile data shows they have a dinner reservation at Sushi Matsumoto at 7:00 PM.",
"persona": "",
"tool": "google_map",
"description": "Get the route and distance from the current location to the destination using Google Maps API.",
"reference": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "Sushi Matsumoto restaurant"
},
"predicted": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "Sushi Matsumoto"
}
},
{
"id": "h030",
"situation": "The user is standing at a bus stop in the rain. Several other people are also waiting.",
"persona": "The user used to take the 87K bus to work every day during commute hours.. User's accommodation is in Kowloon Tong, Hong Kong.",
"tool": "check_bus_schedule",
"description": "Check the bus schedule for a specific bus stop.",
"reference": {
"bus_stop": "$RESULT(get_current_gps_coordinates.address)",
"route": "87K"
},
"predicted": {
"bus_stop": "$RESULT(get_current_gps_coordinates.address)"
}
},
{
"id": "h031",
"situation": "Visual information shows the user is having difficulty falling asleep, frequently checking their smartwatch.",
"persona": "",
"tool": "get_medical_knowledge",
"description": "Get medical expert knowledge from the up-to-date medical knowledge database.",
"reference": {
"query": "techniques for improving sleep quality and managing stress-related insomnia"
},
"predicted": {
"query": "sleep tips"
}
},
{
"id": "h032",
"situation": "The user is at a car dealership examining an SUV, checking features and price. Their browser history shows research on family SUVs and safety ratings, and they have noted a maximum budget of $35,000.",
"persona": "A safety-conscious parent who prioritizes vehicle reliability and safety features when making major purchases",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "2023 Honda CR-V safety ratings reliability reports"
},
"predicted": {
"query": "suv safety ratings"
}
},
{
"id": "h033",
"situation": "Visual information shows the user is at a hobby shop examining a high-end drone kit with a controller and accessories.",
"persona": "",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "drone kit reviews specifications flight time camera quality"
},
"predicted": {
"query": "high-end drone kit X500 assembly instructions"
}
},
{
"id": "h034",
"situation": "Visual information shows the user is at a Chinese restaurant, browsing a menu with options such as dumplings, fried rice, and sweet and sour chicken.",
"persona": "The user likes Chinese food but wants to make healthier choices.",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "calorie counts and health information for dumplings, fried rice, and sweet and sour chicken"
},
"predicted": {
"query": "calorie counts and health information for popular Chinese dishes"
}
},
{
"id": "h035",
"situation": "The user is at a museum, intrigued by a contemporary art piece and curious about the artist.",
"persona": "",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "artist reviews and feature comparisons"
},
"predicted": {
"query": "artist of the contemporary art piece"
}
},
{
"id": "h036",
"situation": "The user is at a library looking at a poster for a free financial planning for retirement workshop happening next Tuesday at 6 PM.",
"persona": "A mid-career professional interested in planning for the future",
"tool": "add_to_agenda",
"description": "Add an event to the user's agenda.",
"reference": {
"event": "Financial Planning for Retirement Workshop",
"time": "next Tuesday 6 PM"
},
"predicted": {
"event": "Free financial planning for retirement workshop",
"time": "next Tuesday at 6 PM"
}
},
{
"id": "h037",
"situation": "Visual information shows the user is standing at a bus stop, looking at the bus station.",
"persona": "",
"tool": "book_uber",
"description": "Book an Uber from the current location to the destination.",
"reference": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "user's destination"
},
"predicted": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "None"
}
},
{
"id": "h038",
"situation": "Visual information shows the user is at a café, browsing a menu with options such as sandwiches, soups, and salads.",
"persona": "The user wants to have a quick but healthy meal.",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "calorie counts and health information for sandwiches, soups, and salads"
},
"predicted": {
"query": "healthiest options on a café menu"
}
},
{
"id": "h039",
"situation": "The user is walking on a road surrounded by trees, looking at the sky. The clouds are moving quickly. There is a conversation where a persona said: \"Look, why are the clouds in the sky moving so fast? Is it going to rain soon?\".",
"persona": "",
"tool": "get_city_weather",
"description": "Get the weather for a specified city at a given time",
"reference": {
"city": "$RESULT(get_current_gps_coordinates.city)",
"time": "now"
},
"predicted": {
"city": "$RESULT(get_current_gps_coordinates.city)",
"time": "now"
}
},
{
"id": "h040",
"situation": "Visual information suggests that the user is walking near a busy street and looking at a bus stop named 'University'.",
"persona": "Users take bus No. 45 to and from work and home on weekdays.",
"tool": "check_bus_schedule",
"description": "Check the bus schedule for a specific bus stop.",
"reference": {
"bus_stop": "'University'"
},
"predicted": {
"bus_stop": {
"name": "University"
}
}
},
{
"id": "h041",
"situation": "Visual information shows the user is at a coworking space, talking with a colleague. Audio information indicates the colleague is asking the user for lunch recommendations nearby. The colleague says: 'Do you know if there’s a good place nearby to grab lunch?'",
"persona": "",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "find nearby lunch spots"
},
"predicted": {
"query": "lunch recommendations in this area"
}
},
{
"id": "h042",
"situation": "Visual information shows the user is sitting on the sofa and holding his stomach, appears to be experiencing some stomach discomfort.",
"persona": "The user has a history of digestive issues and prefers low-acidic foods.",
"tool": "get_medical_knowledge",
"description": "Get medical expert knowledge from the up-to-date medical knowledge database.",
"reference": {
"query": "digestive issues"
},
"predicted": {
"query": "dietary suggestions for stomach discomfort"
}
},
{
"id": "h043",
"situation": "The user is at a trailhead examining hiking options on a map board. Someone in their group has suggested doing an 8-mile loop trail next Saturday. The user's phone has a weather alert indicating rain is forecasted for next Saturday.",
"persona": "A hiking enthusiast who tracks outdoor activities and fitness goals",
"tool": "get_city_weather",
"description": "Get the weather for a specified city at a given time.",
"reference": {
"city": "$RESULT(get_current_gps_coordinates.city)",
"time": "next Saturday"
},
"predicted": {
"city": "$USER.Location",
"time": "next Saturday"
}
},
{
"id": "h044",
"situation": "The user is in a meeting room, discussing a project timeline with a colleague. The colleague requests setting up a meeting with the team for the project kickoff.",
"persona": "",
"tool": "add_meeting",
"description": "This API allows users to make a reservation for a meeting and store the meeting information (e.g., topic, time, location, attendees) in the database.",
"reference": {
"meeting_topic": "Project Kickoff",
"start_time": "as soon as possible",
"meeting_location": "meeting room"
},
"predicted": {
"meeting_topic": "Project Kickoff",
"start_time": "as soon as possible",
"meeting_location": "meeting room"
}
},
{
"id": "h045",
"situation": "Visual information shows the user on a video call discussing preparations for a client meeting. Audio indicates the need to prepare a presentation.",
"persona": "The user is responsible for client presentations and communications.",
"tool": "add_to_agenda",
"description": "Add an event to the user's agenda.",
"reference": {
"event": "Prepare client presentation",
"time": "before next Wednesday"
},
"predicted": {
"event": "Prepare presentation for client meeting",
"time": "as per availability"
}
},
{
"id": "h046",
"situation": "The visual information shows the user is walking through a botanical garden, admiring various flowers and plants.",
"persona": "The user is a nature enthusiast and enjoys learning about different plants.",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "Ghost Orchid"
},
"predicted": {
"query": "plants at botanical garden"
}
},
{
"id": "h047",
"situation": "Visual information shows the user is at a fast-food restaurant, browsing a menu with options such as cheeseburgers, fries, and soda.",
"persona": "The user is aware of their diet and is looking to make healthier choices even in a fast-food setting.",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "calorie counts and health information for cheeseburgers, fries, and soda"
},
"predicted": {
"query": "calorie counts and heating information for cheeseburgers, fries, and soda"
}
},
{
"id": "h048",
"situation": "The user is preparing to cook a vegetable stir-fry. They have fresh vegetables ready on a cutting board, and a pot of water is starting to boil on the stove. They're following a recipe displayed on a tablet.",
"persona": "A health-conscious cook who likes to prepare nutritious meals but often gets timing wrong when cooking multiple ingredients",
"tool": "set_timer",
"description": "Set a timer for a specific duration.",
"reference": {
"duration": "vegetable blanching time"
},
"predicted": {
"duration": "15 minutes"
}
},
{
"id": "h049",
"situation": "Visual information shows the user is standing at a bus stop, looking at the bus station.",
"persona": "",
"tool": "book_uber",
"description": "Book an Uber from the current location to the destination.",
"reference": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "user's destination"
},
"predicted": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "None"
}
},
{
"id": "h050",
"situation": "The user's friend has had too much to drink and needs to go home to rest.",
"persona": "A responsible individual who looks out for friends' wellbeing and safety",
"tool": "book_uber",
"description": "Book an Uber ride from the current location to the destination",
"reference": {
"current_location": "Skyline Nightclub",
"destination": "Friend's home address"
},
"predicted": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "None"
}
},
{
"id": "h051",
"situation": "Visual information shows the user is in a living room with friends, standing around a table with board games. Audio captures a conversation where someone suggests having a game night next Saturday.",
"persona": "",
"tool": "google_search",
"description": "Search for popular board games and their rules.",
"reference": {
"query": "popular board games for game night"
},
"predicted": {
"query": "popular board game themes for game night"
}
},
{
"id": "h052",
"situation": "The user is at a crossroads in a park and seems unsure about which direction to take to reach the Grass Island.",
"persona": "",
"tool": "google_map",
"description": "Get the route and distance from the current location to the destination using Google Maps API.",
"reference": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "Grass Island"
},
"predicted": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "Grass Island"
}
},
{
"id": "h053",
"situation": "The user is in a pharmacy examining skincare products, specifically comparing Vitamin C serums while reading ingredient lists, suggesting they are making a purchasing decision about skincare.",
"persona": "",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay.",
"reference": {
"product_name": "Vitamin C serum"
},
"predicted": {
"product_name": "Vitamin C serum"
}
},
{
"id": "h054",
"situation": "The user's friend has had too much to drink and needs to go home to rest.",
"persona": "A responsible individual who looks out for friends' wellbeing and safety",
"tool": "book_uber",
"description": "Book an Uber ride from the current location to the destination",
"reference": {
"current_location": "Skyline Nightclub",
"destination": "Friend's home address"
},
"predicted": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "None"
}
},
{
"id": "h055",
"situation": "The user is browsing the menu at a Mexican restaurant exploring various food.",
"persona": "The user enjoys flavorful food but has a low tolerance for spicy dishes.",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "Techniques to reduce spicy heat in Mexican food"
},
"predicted": {
"query": "spiciness information for the dishes at this restaurant"
}
},
{
"id": "h056",
"situation": "The user is viewing a trailer for an upcoming blockbuster movie on their smartphone. The trailer announces the movie will be in theaters next month and encourages pre-booking tickets.",
"persona": "The user is a film enthusiast who enjoys watching new releases on opening weekends.",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "[Movie Title] pre-booking tickets"
},
"predicted": {
"query": "exclusive movie ticket promotions"
}
},
{
"id": "h057",
"situation": "Visual information shows the user and a friend compare bags of dog food—one marked grain-free, another labeled for sensitive stomachs—checking protein percentages and price tags on a promo endcap. Conversation: 'I'm not sure which brand to choose for my dog. What do you think?'.",
"persona": "The user is a dog owner who is conscientious about dog nutrition.",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay.",
"reference": {
"product_name": "dog food"
},
"predicted": {}
},
{
"id": "h058",
"situation": "The user is at an aquarium, observing jellyfish in a tank.",
"persona": "Marine life enthusiast",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "Jellyfish species and biology"
},
"predicted": {
"query": "Jellyfish species in the aquarium tank"
}
},
{
"id": "h059",
"situation": "The user is at a book club discussion about a historical novel set during the French Revolution, with specific mention of Robespierre's portrayal and historical accuracy.",
"persona": "The user enjoys reading but isn't a history expert.",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "Maximilien Robespierre French Revolution historical role Reign of Terror"
},
"predicted": {
"query": "Robespierre's life and influence during the French Revolution"
}
},
{
"id": "h060",
"situation": "Visual information shows the user considering food choices in their kitchen.",
"persona": "An individual trying to make healthier dietary choices to manage their blood sugar levels",
"tool": "get_medical_knowledge",
"description": "Get medical expert knowledge from the up-to-date medical knowledge database.",
"reference": {
"query": "low-sugar meal options for blood sugar management"
},
"predicted": {
"query": "low-sugar food options and their impact on blood sugar levels"
}
},
{
"id": "h061",
"situation": "The user is in a public library and is seeking recommendations for a good mystery novel.",
"persona": "",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "top-rated mystery novels"
},
"predicted": {
"query": "best mystery novels recommendations"
}
},
{
"id": "h062",
"situation": "Visual information shows the user is at an American diner, browsing a menu with options like a turkey burger (no bun), a grilled chicken salad, and a steak with steamed vegetable.",
"persona": "The user wants to ensure their meal is both healthy and satisfying.",
"tool": "get_medical_knowledge",
"description": "Get medical expert knowledge from the up-to-date medical knowledge database.",
"reference": {
"query": "health tips for balancing fiber and healthy fats in a low-carb diet"
},
"predicted": {
"query": "health-related insights and balanced meal suggestions for healthy and satisfying meals"
}
},
{
"id": "h063",
"situation": "The user is in a camera store looking at a DSLR camera with multiple lenses in a display case. The price tag shows $1,299 for the camera body and basic lens kit.",
"persona": "",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay.",
"reference": {
"product_name": "DSLR camera kit with basic lens"
},
"predicted": {
"product_name": "DSLR camera with multiple lenses"
}
},
{
"id": "h064",
"situation": "Visual information shows the user is at a Chinese restaurant, browsing a menu with options such as dumplings, fried rice, and sweet and sour chicken.",
"persona": "The user likes Chinese food but wants to make healthier choices.",
"tool": "get_medical_knowledge",
"description": "Get medical expert knowledge from the up-to-date medical knowledge database.",
"reference": {
"query": "health-related insights, calorie counts, and health information for dumplings, fried rice, and sweet and sour chicken"
},
"predicted": {
"query": "health-related insights, calorie counts, and health information for dumplings, fried rice, and sweet and sour chicken"
}
},
{
"id": "h065",
"situation": "Contextual information suggests that the user is on the street, waiting at a taxi stand. Agenda suggests that the user has booked a hotel room at The Ritz-Carlton, Hong Kong for tonight.",
"persona": "",
"tool": "book_uber",
"description": "Book an Uber from the current location to the destination.",
"reference": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "The Ritz-Carlton, Hong Kong"
},
"predicted": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "The Ritz-Carlton, Hong Kong"
}
},
{
"id": "h066",
"situation": "The user is in a furniture store shopping for sofas, specifically showing interest in a grey sectional by measuring it and recording dimensions, indicating serious purchase consideration.",
"persona": "A home decorator who carefully considers measurements and style before making furniture purchases.",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay.",
"reference": {
"product_name": "grey sectional sofa"
},
"predicted": {
"product_name": "grey sectional sofa"
}
},
{
"id": "h067",
"situation": "The user is watching TV with family and discussing the release date of a new season of the show 'Stellar Voyages'.",
"persona": "A science fiction enthusiast who follows TV show release schedules",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page",
"reference": {
"query": "Stellar Voyages new season release date spring"
},
"predicted": {
"query": "Stellar Voyages new season premiere date"
}
},
{
"id": "h068",
"situation": "Visual information suggests the user is packing a suitcase and is packing some winter clothes, which look like down jackets or cotton coats. The schedule shows that the user is about to leave for Irvine, USA.",
"persona": "",
"tool": "get_city_weather",
"description": "Get the weather for a specified city at a given time.",
"reference": {
"city": "Irvine, USA",
"time": "now"
},
"predicted": {
"city": "Irvine, USA",
"time": "now"
}
},
{
"id": "h069",
"situation": "The user is walking in a park with a friend. The wind is getting stronger, and the sky is gray. There is a conversation: \"Hey, can you feel that breeze picking up? Do you think it's going to turn into a storm soon?\"",
"persona": "",
"tool": "get_city_weather",
"description": "Get the weather for a specified city at a given time",
"reference": {
"city": "$RESULT(get_current_gps_coordinates.city)",
"time": "now"
},
"predicted": {}
},
{
"id": "h070",
"situation": "The user is outside a large shopping mall, looking at a directory board. They are unsure about the location of the electronics store.",
"persona": "",
"tool": "google_map",
"description": "Get the route and distance from the current location to the destination using Google Maps API.",
"reference": {
"current_location": "shopping mall entrance",
"destination": "electronics store"
},
"predicted": {
"current_location": "the location of the mall",
"destination": "the electronics store"
}
},
{
"id": "h071",
"situation": "The user is in a specialty food store looking at an expensive bottle of imported Italian olive oil called 'Olio Supremo' priced at $45.99.",
"persona": "",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay.",
"reference": {
"product_name": "Olio Supremo olive oil"
},
"predicted": {
"product_name": "Olio Supremo Italian Olive Oil"
}
},
{
"id": "h072",
"situation": "Visual information shows the user is at a fast-food restaurant, browsing a menu with options such as cheeseburgers, fries, and soda.",
"persona": "The user is aware of their diet and is looking to make healthier choices even in a fast-food setting.",
"tool": "get_medical_knowledge",
"description": "Get medical expert knowledge from the up-to-date medical knowledge database.",
"reference": {
"query": "health-related insights, calorie counts, and health information for cheeseburgers, fries, and soda"
},
"predicted": {
"query": "health-related insights, calorie counts, and health information for cheeseburgers, fries, and soda"
}
},
{
"id": "h073",
"situation": "Visual information shows the user in a kitchen with fresh vegetables and spices, possibly looking to try a new recipe with the cookbook open.",
"persona": "User enjoys experimenting with new recipes and flavors.",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "stir-fry recipe with fresh vegetables and spices"
},
"predicted": {
"query": "new recipe with fresh vegetables and spices"
}
},
{
"id": "h074",
"situation": "The user is examining a red hardshell suitcase priced at $199.99 in a store window. They have an international flight to Tokyo scheduled in 2 days.",
"persona": "",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay.",
"reference": {
"product_name": "red hardshell suitcase"
},
"predicted": {
"product_name": "red hardshell suitcase"
}
},
{
"id": "h075",
"situation": "Visual information shows the user is sitting on the sofa and holding his stomach, appears to be experiencing some stomach discomfort.",
"persona": "The user has a history of digestive issues and prefers low-acidic foods.",
"tool": "get_medical_knowledge",
"description": "Get medical expert knowledge from the up-to-date medical knowledge database.",
"reference": {
"query": "digestive issues"
},
"predicted": {
"query": "low-acidic food suggestions and digestive remedies"
}
},
{
"id": "h076",
"situation": "The user is scanning the dessert menu at a café. The menue inclues sugar-free or low-sugar alternatives, including fruit-based desserts and sugar substitutes.",
"persona": "The user monitors their sugar levels carefully and prefers healthier dessert choices.",
"tool": "get_medical_knowledge",
"description": " Get medical expert knowledge from the up-to-date medical knowledge database.",
"reference": {
"query": "Recommended sugar substitutes for low-sugar diets"
},
"predicted": {
"query": "sugar substitutes and low-sugar alternatives for desserts"
}
},
{
"id": "h077",
"situation": "Visual context shows the user is standing on a bathroom scale in the morning.",
"persona": "Elderly with chronic heart failure. Weight changes may indicate fluid retention",
"tool": "get_medical_knowledge",
"description": "CHF guideline lookup",
"reference": {
"query": "weight gain threshold for CHF patients"
},
"predicted": {
"query": "heart failure fluid retention weight gain blood pressure"
}
},
{
"id": "h078",
"situation": "Visual information shows the user is browsing the meat and seafood section in a large supermarket.",
"persona": "User often struggles with deciding what to cook.. The user prefers quick and easy recipes due to their busy schedule.",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "healthy recipes with chicken or seafood"
},
"predicted": {
"query": "quick recipes for beef chicken salmon"
}
},
{
"id": "h079",
"situation": "Visual information shows the user is in a diner, browsing a breakfast menu with options such as pancakes, scrambled eggs, and bacon.",
"persona": "The user is interested in starting their day with a balanced and healthy meal.",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "calorie counts and heating information for pancakes, scrambled eggs, and bacon"
},
"predicted": {
"query": "balanced and nutritious breakfast meals with pancakes, scrambled eggs, and bacon"
}
},
{
"id": "h080",
"situation": "Visual information shows the user is at a café, browsing a menu with options such as sandwiches, soups, and salads.",
"persona": "The user wants to have a quick but healthy meal.",
"tool": "get_medical_knowledge",
"description": "Get medical expert knowledge from the up-to-date medical knowledge database.",
"reference": {
"query": "health-related insights, calorie counts, and health information for sandwiches, soups, and salads"
},
"predicted": {
"query": "nutritional insights for sandwiches, soups, and salads"
}
},
{
"id": "h081",
"situation": "The user is shopping and is interested in purchasing a bag seen in a store but wants to compare prices online to get the best deal.",
"persona": "",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay",
"reference": {
"product_name": "bag"
},
"predicted": {
"product_name": "bag"
}
},
{
"id": "h082",
"situation": "Visual information shows the user is at a café, browsing a menu with options such as sandwiches, soups, and salads.",
"persona": "The user wants to have a quick but healthy meal.",
"tool": "get_medical_knowledge",
"description": "Get medical expert knowledge from the up-to-date medical knowledge database.",
"reference": {
"query": "health-related insights, calorie counts, and health information for sandwiches, soups, and salads"
},
"predicted": {
"query": "health-related insights and calorie counts for sandwiches, soups, and salads"
}
},
{
"id": "h083",
"situation": "The user is standing in a bookstore, looking at a hardcover copy of a recently released novel. They pick it up, examine the cover, and check the price tag on the back.",
"persona": "",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay",
"reference": {
"product_name": "The Crystal Prophecy e-book and audiobook"
},
"predicted": {
"product_name": "recently released novel"
}
},
{
"id": "h084",
"situation": "Contextual information suggests that the user is on the street, waiting at a taxi stand. Agenda suggests that the user has booked a hotel room at The Ritz-Carlton, Hong Kong for tonight.",
"persona": "",
"tool": "book_uber",
"description": "Book an Uber from the current location to the destination.",
"reference": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "The Ritz-Carlton, Hong Kong"
},
"predicted": {}
},
{
"id": "h085",
"situation": "Visual information suggests that the user is walking near a busy street and looking at a bus stop named 'University'.",
"persona": "Users take bus No. 45 to and from work and home on weekdays.",
"tool": "check_bus_schedule",
"description": "Check the bus schedule for a specific bus stop.",
"reference": {
"bus_stop": "'University'"
},
"predicted": {
"bus_stop": "University"
}
},
{
"id": "h086",
"situation": "The user is hiking on a mountain trail with worsening weather conditions. Dark clouds are gathering and there's information from another hiker about an approaching severe storm.",
"persona": "",
"tool": "get_city_weather",
"description": "Get the weather for a specified city at a given time.",
"reference": {
"city": "$RESULT(get_current_gps_coordinates.city)",
"time": "now"
},
"predicted": {
"city": "current location",
"time": "current time"
}
},
{
"id": "h087",
"situation": "Visual information suggests the user is eating lunch but has not touched the water glass for a long time. Wearable data shows mild dehydration risk (elevated heart rate).",
"persona": "The user is recovering from cardiac surgery.. The user tends to forget drinking water during meals.",
"tool": "get_medical_knowledge",
"description": "Get medical knowledge based on guideline databases.",
"reference": {
"query": "daily hydration needs in cardiac rehabilitation"
},
"predicted": {
"query": "cardiac surgery hydration risk"
}
},
{
"id": "h088",
"situation": "Visual information suggests that the user is walking near a busy street and looking at a bus stop named 'University'.",
"persona": "Users take bus No. 45 to and from work and home on weekdays.",
"tool": "check_bus_schedule",
"description": "Check the bus schedule for a specific bus stop.",
"reference": {
"bus_stop": "'University'"
},
"predicted": {
"bus_stop": "University"
}
},
{
"id": "h089",
"situation": "The user is at a library looking at a poster for a free financial planning for retirement workshop happening next Tuesday at 6 PM.",
"persona": "A mid-career professional interested in planning for the future",
"tool": "add_to_agenda",
"description": "Add an event to the user's agenda.",
"reference": {
"event": "Financial Planning for Retirement Workshop",
"time": "next Tuesday 6 PM"
},
"predicted": {
"event": "free financial planning for retirement workshop",
"time": "next Tuesday at 6 PM"
}
},
{
"id": "h090",
"situation": "Visual information shows the user is inspecting various smartphones at an electronics store, specifically focused on two brands, labeled Model X at $899 and Model Y at $799.",
"persona": "",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "feature comparison of Model X and Model Y smartphones"
},
"predicted": {
"query": "smartphone reviews and comparisons"
}
},
{
"id": "h091",
"situation": "The user is exploring a botanical garden and examining plants, particularly a distinctive flowering plant that lacks identification information.",
"persona": "An amateur botanist who enjoys identifying and learning about unique plant species during outdoor excursions",
"tool": "vllm",
"description": "Visual Large Language Model (VLM) that can answer the user's questions based on the given image",
"reference": {
"prompt": "Identify this flowering plant and provide basic information about it",
"image_path": "current_view"
},
"predicted": {
"prompt": "Identify this flowering plant species.",
"image_path": ""
}
},
{
"id": "h092",
"situation": "The user is multitasking, managing several project documents and has a deadline to send an updated project plan by noon.",
"persona": "The user is a project coordinator.",
"tool": "add_to_agenda",
"description": "Add an event to the user's agenda.",
"reference": {
"event": "Finalize and send project plan",
"time": "noon"
},
"predicted": {
"event": "Update project plan",
"time": "before noon"
}
},
{
"id": "h093",
"situation": "Visual information suggests the person is packing winter layers—sweaters, scarves, and a jacket—into a suitcase. The agenda indicates that the user is departing for Canada this weekend.",
"persona": "",
"tool": "get_city_weather",
"description": "Get the weather for a specified city at a given time.",
"reference": {
"city": "Canada",
"time": "this weekend"
},
"predicted": {
"city": "Canada",
"time": "this weekend"
}
},
{
"id": "h094",
"situation": "Visual information shows the user at their workstation, engaged in coding with technical diagrams around. Audio captures a conversation. A colleague saying: 'We need to push the new software update by Friday.'",
"persona": "The user is a software developer responsible for coding and testing.",
"tool": "add_to_agenda",
"description": "Add an event to the user's agenda.",
"reference": {
"event": "Focus on software update",
"time": "Friday"
},
"predicted": {
"event": "Software update deadline",
"time": "Friday"
}
},
{
"id": "h095",
"situation": "The user is in a camera store looking at a DSLR camera with multiple lenses in a display case. The price tag shows $1,299 for the camera body and basic lens kit.",
"persona": "",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay.",
"reference": {
"product_name": "DSLR camera kit with basic lens"
},
"predicted": {
"product_name": "DSLR camera with basic kit"
}
},
{
"id": "h096",
"situation": "The user is in a historical museum, observing an exhibit labeled 'Ancient Egypt Artifacts.'",
"persona": "History enthusiast",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "Ancient Egyptian artifacts and cultural significance"
},
"predicted": {
"query": "Ancient Egypt Artifacts"
}
},
{
"id": "h097",
"situation": "Visual information indicates the user is in a conference room with colleagues, viewing a presentation titled 'Quarterly Financial Report'. Conversation content: 'We need to prepare for the next meeting with the investors scheduled for next week.'",
"persona": "The user is a financial analyst responsible for preparing financial reports.",
"tool": "add_to_agenda",
"description": "Add an event to the user's agenda.",
"reference": {
"event": "Investor meeting",
"time": "next week"
},
"predicted": {
"event": "Prepare for investor meeting",
"time": "next week"
}
},
{
"id": "h098",
"situation": "The user is in a wine shop comparing two bottles of Cabernet Sauvignon from the same vineyard but different vintages - a 2018 bottle for $75 and a 2015 bottle for $95.",
"persona": "A wine enthusiast who enjoys learning about vintage variations and collecting special bottles for important occasions",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "Napa Valley Cabernet Sauvignon 2015 2018 vintage ratings comparison"
},
"predicted": {
"query": "2015 vs 2018 Cabernet Sauvignon vintage comparison"
}
},
{
"id": "h099",
"situation": "The user is standing at a bus stop near a technology park, holding a bottle of water and looking at the schedule board. They have a conference call scheduled at 10:00 AM.",
"persona": "",
"tool": "check_bus_schedule",
"description": "Check the bus schedule for a specific bus stop.",
"reference": {
"bus_stop": "$RESULT(get_current_gps_coordinates.address)"
},
"predicted": {
"bus_stop": "$RESULT(get_current_gps_coordinates.address)"
}
},
{
"id": "h100",
"situation": "The user is at a car dealership examining an SUV, checking features and price. Their browser history shows research on family SUVs and safety ratings, and they have noted a maximum budget of $35,000.",
"persona": "A safety-conscious parent who prioritizes vehicle reliability and safety features when making major purchases",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "2023 Honda CR-V safety ratings reliability reports"
},
"predicted": {
"query": "SUV models under $35,000 with top safety ratings"
}
},
{
"id": "h101",
"situation": "Visuals show the user at the seaside with friends under a sun umbrella. The audio captures a friend proposing a bonfire at this spot next Saturday.",
"persona": "",
"tool": "get_city_weather",
"description": "Get the weather for a specified city at a given time.",
"reference": {
"city": "$RESULT(get_current_gps_coordinates.city)",
"time": "next Saturday"
},
"predicted": {
"city": "Seaside location",
"time": "next Saturday"
}
},
{
"id": "h102",
"situation": "The user is in an electronics store, comparing headphones, potentially interested in making a purchase.",
"persona": "The user is a music enthusiast who values sound quality and comfort in headphones.",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay.",
"reference": {
"product_name": "headphones"
},
"predicted": {
"product_name": "headphones"
}
},
{
"id": "h103",
"situation": "The user is in a public library and is seeking recommendations for a good mystery novel.",
"persona": "",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "mystery novels reviews and recommendations"
},
"predicted": {
"query": "mystery novel recommendations"
}
},
{
"id": "h104",
"situation": "Visual information shows the user walking in a shopping mall with a friend. Audio information shows they are having a conversation. The friend says: \"I need a pair of running shoes. Do you know where the best sports stores are around there?\".",
"persona": "",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "sports stores near me"
},
"predicted": {
"query": "best sports stores near me"
}
},
{
"id": "h105",
"situation": "The user is at a party where people are deciding which board game to play. Someone has asked about a particular new game, wondering if it's good, and another person has mentioned it's supposedly complicated but fun once learned.",
"persona": "A social gamer who enjoys group activities and helping facilitate fun experiences at gatherings",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "board game [name] rules setup instructions play time reviews how difficult"
},
"predicted": {
"query": "new board game reviews and information"
}
},
{
"id": "h106",
"situation": "Visual information shows the user browsing through a clothing store, looking at various shirts.",
"persona": "",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "shirt reviews and comments"
},
"predicted": {
"query": "shirt styles and recommendations"
}
},
{
"id": "h107",
"situation": "Visual information shows the user is walking in the park and talking to a friend. Audio information shows there is a conversation between the user and the friend. The friend says: 'Did you hear about the big soccer game this weekend?'",
"persona": "",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "big soccer game, including its showtimes or ticket price"
},
"predicted": {
"query": "big soccer game this weekend"
}
},
{
"id": "h108",
"situation": "The user is in an electronics store, comparing headphones, potentially interested in making a purchase.",
"persona": "The user is a music enthusiast who values sound quality and comfort in headphones.",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "reviews or feature comparisons for headphones"
},
"predicted": {
"query": "headphone sound quality and comfort"
}
},
{
"id": "h109",
"situation": "The user is in an electronics store, comparing headphones, potentially interested in making a purchase.",
"persona": "The user is a music enthusiast who values sound quality and comfort in headphones.",
"tool": "vllm",
"description": "Visual Large Language Model (VLM) that can identify electronic devices based on the given image.",
"reference": {
"prompt": "Identify the headphone models the user is comparing.",
"image_path": ""
},
"predicted": {
"prompt": "Analyze the headphones image and provide expert reviews of the sound quality.",
"image_path": ""
}
},
{
"id": "h110",
"situation": "The user is participating in meeting and they plan to meet again in a month to discuss the paper.",
"persona": "",
"tool": "add_to_agenda",
"description": "Add an event to the user's agenda.",
"reference": {
"event": "Meeting to discuss the paper",
"time": "in a month"
},
"predicted": {
"event": "Follow-up meeting to discuss paper",
"time": "in a month"
}
},
{
"id": "h111",
"situation": "The user is scanning the dessert menu at a café. The menue inclues sugar-free or low-sugar alternatives, including fruit-based desserts and sugar substitutes.",
"persona": "The user monitors their sugar levels carefully and prefers healthier dessert choices.",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "Best low-sugar dessert cafés nearby"
},
"predicted": {
"query": "low-sugar dessert options"
}
},
{
"id": "h112",
"situation": "The user is examining an unfamiliar purple flowering plant while hiking on a forest trail, and appears to be reaching out to touch it.",
"persona": "A nature enthusiast who enjoys identifying plants and wildlife during outdoor excursions",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "Digitalis purpurea toxicity"
},
"predicted": {
"query": "purple flowering plant in forest trail"
}
},
{
"id": "h113",
"situation": "Visual information shows the user is at a beach with friends, sitting under a beach umbrella. Audio captures a conversation. A friend says, 'Let's plan a bonfire night here next Saturday!'",
"persona": "",
"tool": "get_city_weather",
"description": "Get the weather for a specified city at a given time.",
"reference": {
"city": "$RESULT(get_current_gps_coordinates.city)",
"time": "next Saturday"
},
"predicted": {
"city": "user_location",
"time": "next Saturday"
}
},
{
"id": "h114",
"situation": "Visual information shows the user in a meeting room with colleagues, discussing a project timeline displayed on a whiteboard. The conversation involves ensuring project tasks are completed by the end of the quarter.",
"persona": "The user is a project coordinator responsible for task management.",
"tool": "add_to_agenda",
"description": "Add an event to the user's agenda.",
"reference": {
"event": "Monitor project milestones",
"time": "end of the quarter"
},
"predicted": {
"event": "Complete tasks by end of quarter",
"time": "end of quarter"
}
},
{
"id": "h115",
"situation": "The user is at a car dealership examining an SUV, checking features and price. Their browser history shows research on family SUVs and safety ratings, and they have noted a maximum budget of $35,000.",
"persona": "A safety-conscious parent who prioritizes vehicle reliability and safety features when making major purchases",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "Honda CR-V owner experiences maintenance costs"
},
"predicted": {
"query": "this SUV model safety features reliability review"
}
},
{
"id": "h116",
"situation": "Visual information shows the user and a friend compare bags of dog food—one marked grain-free, another labeled for sensitive stomachs—checking protein percentages and price tags on a promo endcap. Conversation: 'I'm not sure which brand to choose for my dog. What do you think?'.",
"persona": "The user is a dog owner who is conscientious about dog nutrition.",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "nutritional information on pet food"
},
"predicted": {
"query": "best protein sources for dogs"
}
},
{
"id": "h117",
"situation": "Visual information suggests that the user is in an office room where many people are seated together, appearing to be gathered for a meeting. They are discussing novel techniques. The content of conversation is: \"Can we use techniques such as federated learning to address these challenges?.\"",
"persona": "The user is responsible for the company's marketing.. Not familiar with advanced AI terminology.",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "simplified explanation of federated learning."
},
"predicted": {
"query": "federated learning in marketing"
}
},
{
"id": "h118",
"situation": "The user is in a furniture store shopping for sofas, specifically showing interest in a grey sectional by measuring it and recording dimensions, indicating serious purchase consideration.",
"persona": "A home decorator who carefully considers measurements and style before making furniture purchases.",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay.",
"reference": {
"product_name": "grey sectional sofa"
},
"predicted": {
"product_name": "grey sectional sofa"
}
},
{
"id": "h119",
"situation": "The user is at a local farmer's market, looking at fresh produce such as tomatoes, avocados, and leafy greens. They might be planning to buy ingredients for cooking.",
"persona": "The user enjoys cooking with fresh ingredients.",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "recipes with tomatoes, avocados, and leafy greens"
},
"predicted": {
"query": "recipe ideas with tomatoes"
}
},
{
"id": "h120",
"situation": "The user is in an electronics store, comparing headphones, potentially interested in making a purchase.",
"persona": "The user is a music enthusiast who values sound quality and comfort in headphones.",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "headphones reviews and performance"
},
"predicted": {
"query": "headphones for recording or gaming reviews and recommendations"
}
},
{
"id": "h121",
"situation": "Visual information shows the user is at an American diner, browsing a menu with options like a turkey burger (no bun), a grilled chicken salad, and a steak with steamed vegetable.",
"persona": "The user wants to ensure their meal is both healthy and satisfying.",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "carb counts for turkey burger, grilled chicken salad, and steak with steamed vegetables"
},
"predicted": {
"query": "healthy and satisfying meal options"
}
},
{
"id": "h122",
"situation": "The user is standing at a bus stop in the rain. Several other people are also waiting.",
"persona": "The user used to take the 87K bus to work every day during commute hours.. User's accommodation is in Kowloon Tong, Hong Kong.",
"tool": "check_bus_schedule",
"description": "Check the bus schedule for a specific bus stop.",
"reference": {
"bus_stop": "$RESULT(get_current_gps_coordinates.address)",
"route": "87K"
},
"predicted": {
"bus_stop": "$RESULT(get_current_gps_coordinates.address)"
}
},
{
"id": "h123",
"situation": "Visual information shows the user is walking through the mall atrium, shopping bags in hand. The user is talking to a partner. Audio information shows there is a conversation between the user and others. The partner says: \"I want to buy a pair of glasses. Do you know where the best glasses stores are around here?\".",
"persona": "",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "glasses stores near me"
},
"predicted": {
"query": "best glasses stores in the mall"
}
},
{
"id": "h124",
"situation": "The user is in a marketing strategy meeting where they've been asked to provide last quarter's performance metrics by tomorrow to help with budget allocation decisions.",
"persona": "A marketing analyst responsible for tracking campaign performance and providing data-driven insights",
"tool": "add_to_agenda",
"description": "Add an event to the user's agenda.",
"reference": {
"event": "Prepare Q2 marketing performance metrics for budget meeting",
"time": "Today"
},
"predicted": {
"event": "Finalize performance metrics for budget meeting",
"time": "tomorrow"
}
},
{
"id": "h125",
"situation": "The user is in a botanical garden, observing a rose garden.",
"persona": "Gardening enthusiast",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "Rose varieties and gardening tips"
},
"predicted": {
"query": "Rose varieties and their meanings"
}
},
{
"id": "h126",
"situation": "Visual information shows the user is browsing the meat and seafood section in a large supermarket.",
"persona": "User often struggles with deciding what to cook.. The user prefers quick and easy recipes due to their busy schedule.",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "healthy recipes with chicken or seafood"
},
"predicted": {}
},
{
"id": "h127",
"situation": "The user expresses a desire to improve their diet.",
"persona": "Recent health checkup showed high cholesterol",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "healthy recipes for patients with high cholesterol"
},
"predicted": {
"query": "low cholesterol recipes"
}
},
{
"id": "h128",
"situation": "Visual information suggests that the user is in an office room where many people are seated together, appearing to be gathered for a meeting. They are discussing novel techniques. The content of conversation is: \"Can we use techniques such as federated learning to address these challenges?.\"",
"persona": "The user is responsible for the company's marketing.. Not familiar with advanced AI terminology.",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "simplified explanation of federated learning."
},
"predicted": {
"query": "federated learning and marketing application"
}
},
{
"id": "h129",
"situation": "The user is viewing a dinosaur skeleton exhibit in a natural history museum.",
"persona": "A science enthusiast who enjoys learning about prehistoric life and evolution",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API for information about subjects.",
"reference": {
"query": "Tyrannosaurus Rex characteristics and behavior"
},
"predicted": {
"query": "Tyrannosaurus Rex"
}
},
{
"id": "h130",
"situation": "The user is having coffee with a friend who is inviting them to a housewarming party on Saturday at 6 PM at 742 Maple Street, apartment 3B.",
"persona": "",
"tool": "add_to_agenda",
"description": "Add an event to the user's agenda.",
"reference": {
"event": "Housewarming party at 742 Maple Street, apt 3B",
"time": "Saturday 6 PM"
},
"predicted": {
"event": "Housewarming Party at 742 Maple Street, apartment 3B on Saturday at 6 PM",
"time": "Saturday, 6 PM"
}
},
{
"id": "h131",
"situation": "The user is in a furniture store shopping for sofas, specifically showing interest in a grey sectional by measuring it and recording dimensions, indicating serious purchase consideration.",
"persona": "A home decorator who carefully considers measurements and style before making furniture purchases.",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "grey sectional sofa reviews styling tips durability comfort"
},
"predicted": {
"query": "grey sectional sofa reviews"
}
},
{
"id": "h132",
"situation": "Visual information shows the user is browsing the meat and seafood section in a large supermarket.",
"persona": "User often struggles with deciding what to cook.. The user prefers quick and easy recipes due to their busy schedule.",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "healthy recipes with chicken or seafood"
},
"predicted": {
"query": "quick and easy seafood recipes"
}
},
{
"id": "h133",
"situation": "The user is at a car dealership examining an SUV, checking features and price. Their browser history shows research on family SUVs and safety ratings, and they have noted a maximum budget of $35,000.",
"persona": "A safety-conscious parent who prioritizes vehicle reliability and safety features when making major purchases",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "2023 Honda CR-V specifications features"
},
"predicted": {
"query": "SUV safety ratings and reliability"
}
},
{
"id": "h134",
"situation": "The user is leaving a shopping mall with purchases and appears to be planning to take public transportation, suggesting they may be waiting for a bus.",
"persona": "",
"tool": "check_bus_schedule",
"description": "Check the bus schedule for a specific bus stop.",
"reference": {
"bus_stop": "$RESULT(get_current_gps_coordinates.address)"
},
"predicted": {
"bus_stop": "user's current location"
}
},
{
"id": "h135",
"situation": "Visual information shows the user and a friend compare bags of dog food—one marked grain-free, another labeled for sensitive stomachs—checking protein percentages and price tags on a promo endcap. Conversation: 'I'm not sure which brand to choose for my dog. What do you think?'.",
"persona": "The user is a dog owner who is conscientious about dog nutrition.",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay.",
"reference": {
"product_name": "dog food"
},
"predicted": {
"product_name": "grain-free dog food"
}
},
{
"id": "h136",
"situation": "Visual information shows the user is walking through the mall atrium, shopping bags in hand. The user is talking to a partner. Audio information shows there is a conversation between the user and others. The partner says: \"I want to buy a pair of glasses. Do you know where the best glasses stores are around here?\".",
"persona": "",
"tool": "google_map",
"description": "Get the route and distance from the current location to the destination using Google Maps API.",
"reference": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "glasses stores"
},
"predicted": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "nearest glasses stores in the mall area"
}
},
{
"id": "h137",
"situation": "The user is in a grocery store aisle, examining pasta sauces and possibly having trouble reading the labels, which might indicate a need for assistance with nutritional information or price comparison.",
"persona": "A health-conscious shopper who carefully reads nutrition labels.",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "pasta sauce nutritional information health ratings"
},
"predicted": {
"query": "health-related tips for pasta sauces"
}
},
{
"id": "h138",
"situation": "The user is standing at a bus stop in the rain. Several other people are also waiting.",
"persona": "The user used to take the 87K bus to work every day during commute hours.. User's accommodation is in Kowloon Tong, Hong Kong.",
"tool": "book_uber",
"description": "Book an Uber ride from the current location to the destination.",
"reference": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "Kowloon Tong, Hong Kong"
},
"predicted": {
"current_location": "$RESULT(get_current_gps_coordinates.address)",
"destination": "Kowloon Tong"
}
},
{
"id": "h139",
"situation": "The user is in a camera store looking at a DSLR camera with multiple lenses in a display case. The price tag shows $1,299 for the camera body and basic lens kit.",
"persona": "",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "DSLR camera beginner smartphone photographer transition reviews"
},
"predicted": {
"query": "DSLR camera bundle reviews and recommendations"
}
},
{
"id": "h140",
"situation": "The user is at a theme park with a child, consulting a map showing the bus depot location. The conversation contains: 'Mom, can we go on one more ride before we leave?'",
"persona": "A parent.",
"tool": "check_bus_schedule",
"description": "Check the bus schedule for a specific bus stop.",
"reference": {
"bus_stop": "Theme Park Bus Depot"
},
"predicted": {
"bus_stop": "$RESULT(get_current_gps_coordinates.address)"
}
},
{
"id": "h141",
"situation": "Visual information shows the user in a meeting room with colleagues, discussing a project timeline displayed on a whiteboard. The conversation involves ensuring project tasks are completed by the end of the quarter.",
"persona": "The user is a project coordinator responsible for task management.",
"tool": "add_to_agenda",
"description": "Add an event to the user's agenda.",
"reference": {
"event": "Monitor project milestones",
"time": "end of the quarter"
},
"predicted": {
"event": "Review project tasks and adjust timeline as needed",
"time": "next quarter"
}
},
{
"id": "h142",
"situation": "The user is in a public library and is seeking recommendations for a good mystery novel.",
"persona": "",
"tool": "search_rednote",
"description": "A platform where people share tips on travel, fitness, cooking, and more. You can use it to search for relevant strategies there.",
"reference": {
"query": "mystery novels reviews and recommendations"
},
"predicted": {
"query": "best mystery novels recommendations"
}
},
{
"id": "h143",
"situation": "The user is in a specialty food store looking at an expensive bottle of imported Italian olive oil called 'Olio Supremo' priced at $45.99.",
"persona": "",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay.",
"reference": {
"product_name": "Olio Supremo olive oil"
},
"predicted": {
"product_name": "Olio Supremo olive oil"
}
},
{
"id": "h144",
"situation": "The user is engaged in a casual conversation with a friend at a coffee shop. The user is discussing feeling tired despite adequate sleep.",
"persona": "",
"tool": "get_medical_knowledge",
"description": "Get medical expert knowledge from the up-to-date medical knowledge database.",
"reference": {
"query": "tips for improving energy levels and sleep quality"
},
"predicted": {}
},
{
"id": "h145",
"situation": "The user is looking at a brochure for an outdoor music festival happening next weekend in July. The festival appears to include camping options and multiple outdoor stages.",
"persona": "",
"tool": "get_city_weather",
"description": "Get the weather for a specified city at a given time",
"reference": {
"city": "$RESULT(get_current_gps_coordinates.city)",
"time": "next weekend"
},
"predicted": {
"city": "$RESULT(get_current_gps_coordinates.city)",
"time": "next weekend"
}
},
{
"id": "h146",
"situation": "Visual information shows the user is at a fast-food restaurant, browsing a menu with options such as cheeseburgers, fries, and soda.",
"persona": "The user is aware of their diet and is looking to make healthier choices even in a fast-food setting.",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "calorie counts and health information for cheeseburgers, fries, and soda"
},
"predicted": {
"query": "healthier fast-food menu options"
}
},
{
"id": "h147",
"situation": "The user is in a wine shop comparing two bottles of Cabernet Sauvignon from the same vineyard but different vintages - a 2018 bottle for $75 and a 2015 bottle for $95.",
"persona": "A wine enthusiast who enjoys learning about vintage variations and collecting special bottles for important occasions",
"tool": "google_search",
"description": "Performs a Google search for the given query, retrieves the top search result URLs and description from the page.",
"reference": {
"query": "Napa Valley Cabernet Sauvignon 2015 2018 vintage ratings comparison"
},
"predicted": {
"query": "2015 and 2018 Cabernet Sauvignon characteristics comparison"
}
},
{
"id": "h148",
"situation": "Visual information shows the user and a friend compare bags of dog food—one marked grain-free, another labeled for sensitive stomachs—checking protein percentages and price tags on a promo endcap. Conversation: 'I'm not sure which brand to choose for my dog. What do you think?'.",
"persona": "The user is a dog owner who is conscientious about dog nutrition.",
"tool": "wikipedia_search",
"description": "Tool that searches the Wikipedia API. Useful for when you need to answer general questions about people, places, companies, facts, historical events, or other subjects.",
"reference": {
"query": "nutritional information on pet food"
},
"predicted": {
"query": "grain-free vs sensitive stomachs dog food nutritional benefits"
}
},
{
"id": "h149",
"situation": "Visual information shows the user is at a community center with a group of people, looking at a bulletin board filled with flyers. Audio captures a conversation. Someone says, 'We should join that pottery class next week.'",
"persona": "",
"tool": "google_search",
"description": "Search for details about the pottery class schedule and registration process",
"reference": {
"query": "pottery class schedule and registration"
},
"predicted": {
"query": "pottery class community center next week"
}
},
{
"id": "h150",
"situation": "The user is in a camera store looking at a DSLR camera with multiple lenses in a display case. The price tag shows $1,299 for the camera body and basic lens kit.",
"persona": "",
"tool": "get_online_product_price",
"description": "Get the price of a product from an online store such as Amazon or eBay.",
"reference": {
"product_name": "DSLR camera kit with basic lens"
},
"predicted": {
"product_name": "DSLR camera body and basic lens kit"
}
}
];
