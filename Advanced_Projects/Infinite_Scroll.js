window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        let newElement = document.createElement("p");
        newElement.textContent = "Loaded more content!";
        document.body.appendChild(newElement);
    }
});
