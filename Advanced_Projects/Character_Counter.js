const input = document.getElementById("message");
const count = document.getElementById("charCount");

input.addEventListener("input", () => {
    count.textContent = `Characters: ${input.value.length}`;
});
