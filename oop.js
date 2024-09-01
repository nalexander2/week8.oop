/// Card betting Menu App




class Card{
    constructor(name){
        this.name = name;
       
    }
}

class Purchase{
    constructor(name){
        this.name = name;
    }
}

class Menu{
    constructor(){
        this.selectedPurchase = [];
    }
    start() // when 0 is pressed it will use the alert to say until next time!
    {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.showMenu();
                    break;
                case '2' :
                    this.createNewPurchase();
                    break;
                case '3' : 
                    this.displayPurchase();
                    break;
                case '4' :
                    this.deleteACard();
                    break;
                default: 
                    selection = 0;
            }
            selection = this.showMainMenuOptions();    
        }
        alert ('Until next time!');
    }
    showMainMenuOptions() // this is what is displayed on the front of the app to enable you to choose an option
    {
        let index = prompt(`
            Welcome place your bet!
            Choose an option:
            ----------------
                0) Not in the mood to bet
                1) Show Menu
                2) Create New Card
                3) View Card
                4) Delete Card
        `);
        return index.toString();
    }

    displayPurchase() // this is associated with option 3 view card/ then alerts which purchase would you like to view?
    {
        let index = prompt('Which purchase would you like to view?');
        console.log("Index is: ", index.toString());
        index = parseInt(index);
        if (index < -1)
        {
            console.error("Index is less then one")
            return;
        }
        if (index > this.selectedPurchase.length)
        {
            console.error("Index is too big")
        }

        let description = 'Purchase Name: ' + this.selectedPurchase[index].name + '\n';

        for ( let i = 0; i < this.selectedPurchase.length;) 
        {
            description += i + ' # - ' + this.selectedPurchase[i].name + '\n';
        }
        let selection = this.showPurchaseMenuOptions(description);/// this option sets up the prompt below that gives the option to go back, add a card, delete a card.
        switch (selection) {
            case '1':
                this.addACard();
                break;
            case '2':
                this.deleteACard();
                break;    
        }
    }

    showPurchaseMenuOptions(purchaseInfo) 
    {
        let index = prompt(`
            0) Go Back
            1) Add a card
            2) Delete a card
            ----------------
            ${purchaseInfo}
            `);
        if (index != null)
        {
            return index.toString();
        }
    }

    showMenu() // This is what will show up after pressing 1 on the application. 
    {
    alert(`
                Pick A Catagory 
    ----------------------------------------  
        ---Basketball---  ---Football---              
        --- Ufc ---       --- Soccor---
        --- Rugby---      ---Horses---
        `)
    }

    displayPurchases() 
    {
        let purchaseString = '';
        for (let i =0; i < this.purchase.length; i++){
            purchaseString += i + ' # - ' + this.purchase[i].name + '\n';
        }
        alert(purchaseString);
    }


    addACard() /// This is where you choose which sport you would like to bet on// you simply type the sport you wish to play. /// option 2
    { /// this is what is pushed into the array.
        let name = prompt(`Pick A Catagory
            ------------------------------------------------------
                        Card Catagories
            ------------------------------------------------------
                    ---Basketball---  ---Football---              
                    --- Ufc ---       --- Soccor---
                    --- Rugby---      ---Horses---`);
                    console.log(this.selectedPurchase.length);
                    this.selectedPurchase[this.selectedPurchase.length + 1] = new Card(name);
        alert('Thanks for your puchase! Good Luck');
    }

    deleteACard() /// this will show the prompt after pressing 4
    {
        let index = prompt('which card would you like to delete from this purchase?')
        if(index > -1 && index < this.selectedPurchase.length) {
            this.selectedPurchase.splice(index, 1);
        }
    }

    createNewPurchase() /// this will show a prompt after option 2 which allows you to enter your name
    {
        let name = prompt('Who will be purchasing the card?');
        this.selectedPurchase.push(new Purchase(name));
        this.selectedPurchase = this.selectedPurchase[this.selectedPurchase.length-1]
        this.addACard();
        this.start();
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    console.log("Its ready!");
    let menu = new Menu();
    menu.start();
});





