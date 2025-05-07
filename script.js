let draggedElement = null;

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");

  images.forEach(image => {
    // When dragging starts
    image.addEventListener("dragstart", (e) => {
      draggedElement = e.target;
      draggedElement.classList.add('selected'); // Optional: highlight element being dragged
    });

    // Allow dropping
    image.addEventListener("dragover", (e) => {
      e.preventDefault(); // Needed to allow drop
    });

    // Swap content on drop
    image.addEventListener("drop", (e) => {
      e.preventDefault();
      if (draggedElement && draggedElement !== e.target) {
        // Swap the HTML content
        const temp = draggedElement.innerHTML;
        draggedElement.innerHTML = e.target.innerHTML;
        e.target.innerHTML = temp;

        // Swap background images as well
        const draggedBg = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = e.target.style.backgroundImage;
        e.target.style.backgroundImage = draggedBg;
      }
      draggedElement.classList.remove('selected');
    });
  });
});
