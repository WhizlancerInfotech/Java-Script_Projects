<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Slider</title>
</head>
<body>
    <div>
        <img id="slider" src="https://via.placeholder.com/400" width="400">
        <button onclick="prev()">Prev</button>
        <button onclick="next()">Next</button>
    </div>

    <script>
        let images = [
            "https://via.placeholder.com/400/FF0000",
            "https://via.placeholder.com/400/00FF00",
            "https://via.placeholder.com/400/0000FF"
        ];
        let index = 0;

        function showImage() {
            document.getElementById("slider").src = images[index];
        }

        function next() {
            index = (index + 1) % images.length;
            showImage();
        }

        function prev() {
            index = (index - 1 + images.length) % images.length;
            showImage();
        }
    </script>
</body>
</html>
