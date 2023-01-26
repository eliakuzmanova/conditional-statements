function test(input) {
    index = 0;
    let hours = Number(input[index]);
    index++;
    let day = input[index];

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday") {

        if (hours >= 10 && hours <= 18) {
            console.log("open")
        } else {
            console.log("closed");
        }
    } else {

        console.log("closed");
    }
}
test(["18", "Sunday"]);