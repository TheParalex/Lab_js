function calculateCircleArea() {
    const radius = document.getElementById('radius').value;
    const area = Math.PI * Math.pow(radius, 2);
    document.getElementById('circle-area').value = area.toFixed(2);
}

function calculateTriangleArea() {
    const base = document.getElementById('base').value;
    const height = document.getElementById('height').value;
    const area = 0.5 * base * height;
    document.getElementById('triangle-area').value = area.toFixed(2);
}

function calculateSquareArea() {
    const side = document.getElementById('side').value;
    const area = Math.pow(side, 2);
    document.getElementById('square-area').value = area.toFixed(2);
}

function calculateRectangleArea() {
    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const area = length * width;
    document.getElementById('rectangle-area').value = area.toFixed(2);
}
