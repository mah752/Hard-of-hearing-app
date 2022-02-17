function getBotResponse(input) {
    //emergency responses
    if (input == "fire") {
        return "How big is the fire?";
    } else if (input == "help") {
        return "Do you need police, fire service or ambulance?";
    } else if (input == "police") {
        return "What is your name and location?";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Thank you for using our service!";
    } else {
        return "Try asking something else!";
    }
}