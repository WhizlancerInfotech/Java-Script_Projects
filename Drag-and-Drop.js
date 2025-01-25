// Drag-and-Drop API
const containers = document.querySelectorAll('.container');
let draggedItem = null;

containers.forEach(container => {
    container.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
        setTimeout(() => e.target.style.display = 'none', 0);
    });
    container.addEventListener('dragend', (e) => {
        setTimeout(() => {
            e.target.style.display = 'block';
            draggedItem = null;
        }, 0);
    });
    container.addEventListener('dragover', (e) => e.preventDefault());
    container.addEventListener('drop', (e) => {
        if (draggedItem) container.appendChild(draggedItem);
    });
});
