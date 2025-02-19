const text = "The quick brown fox jumps over the lazy dog.";
const input = document.getElementById("typingInput");

input.addEventListener("input", () => {
    if (input.value === text) alert("You typed it correctly!");
});
