const canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    drawLine1 = (x1, y1, x2, y2, width, color) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineWidth = width
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color
        ctx.stroke();
    },
    colors = ["white", "black", "red", "orange", "yellow", "green", "blue", "pink", "purple"],
    drawCurveLine = (a, b, c, y, line, color, color2) => {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.stroke();
        let f = a,
            startPos = [(canvas.width / 2), y],
            startPosNeg = [(canvas.width / 2), y];
        for (i = 0; i < canvas.width; i += (16 / 9) * 10) {
            drawLine1(i, 0, i, canvas.height, 0.3, "grey")
        }
        for (i = 0; i < canvas.height; i += 20) {
            drawLine1(0, i, canvas.width, i, 0.3, "grey")
        }
        for (i = 0; i < 15000; i++) {
            let yurrent = ((f * ((startPos[0] - (canvas.width / 2)) ** 2)) + (b * (startPos[0] - (canvas.width / 2))) + c) / 1000;
            drawLine1(startPos[0], (canvas.height / 2) - startPos[1],
                    startPos[0], (canvas.height / 2) - yurrent, line, `rgb(${color}, 0, 0)` /*colors[ /*getRandomInt(0, 8) 1]*/ ),
                drawLine1(startPosNeg[0], (canvas.height / 2) + startPosNeg[1],
                    startPosNeg[0], (canvas.height / 2) - yurrent, line, `rgb(${color2}, 0, 0)` /* colors[ /*getRandomInt(0, 8) 2]*/ ),
                startPos[0] += 0.05,
                startPosNeg[0] -= 0.05,
                startPos[1] = yurrent,
                startPosNeg[1] = -1 * yurrent;
        }
    }
let j = 100,
    color = 0,
    colorAdd = true,
    color2 = 255,
    colorAdd2 = true,
    first, second, adding = true;
ctx.imageSmoothingEnabled = false, hello = setInterval(() => {
    drawCurveLine(j, 10, j, 0, 50, color, color2);
    j < -100 ? adding = true : j > 100 ? adding = false : null,
        adding == true ? j += 2 : j -= 2;

    if (color > 255) {
        colorAdd = false
    }
    if (color < 0) {
        colorAdd = true
    }
    if (colorAdd == true) {
        color += 4
    }
    if (colorAdd == false) {
        color -= 4
    }
    if (color2 >= 255) {
        colorAdd2 = false
    }
    if (color2 <= 0) {
        colorAdd2 = true
    }
    if (colorAdd2 == true) {
        color2 += 4
    }
    if (colorAdd2 == false) {
        color2 -= 4
    }
})
