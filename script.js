const pages = document.querySelectorAll(".page");
const translateAmount = 100; 
let translate = 0;

function slide (direction)
{
    console.log("hey")
    translate = -(translateAmount * direction - 100);
    pages.forEach(
    pages => (pages.style.transform = `translateX(${translate}%)`));


    const buttons = document.querySelectorAll(".pages-section nav button");
    buttons.forEach(button => {
        button.classList.remove("active");
    });
    const activeButton = buttons[direction - 1];
    activeButton.classList.add("active");
}
