const names = ["Charlie", "Samip", "Ali"];
 const eventName = "birthday"
function writeCards(names, eventName) {
    let cardMessages = [];
    for (let i = 0; i < names.length; i++) {
        cardMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        debugger;
    }
    return (cardMessages);
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
        debugger;
    };
}