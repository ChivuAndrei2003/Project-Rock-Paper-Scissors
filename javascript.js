function getComputerChoice() {
    let optiune1 = "paper";
    let optiune2 = "scissors";
    let optiune3 = "rock";
    let value = Math.random();
    
    if (value <= 1/3) {
        value = optiune1;
    } else if (value > 1/3 && value < 2/3) {
        value = optiune2;
    } else {
        value = optiune3;
    }

    return value; 
}

getComputerChoice();              


   


