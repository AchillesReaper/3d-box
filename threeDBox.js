let spiningSpeed = 3;
let spinAngle = 0;
let pause = 0;
let layer1B = 0;
let layer2B = 0;
let layer3B = 0;
let layer1Color;
let layer2Color;
let layer3Color;


setup = () => {
    createCanvas(600, 600, WEBGL);
};

draw = () => {
    background(0, 0, 0);
    translate(mouseX - width / 2, mouseY - height / 2, 0);

    layer1Color = color(255, 0, 0);
    layer2Color = color(0, 255, 0);
    layer3Color = color(0, 0, 255);

    if (layer1B % 2 === 0) {
        drawLayer1(spinAngle);
    }
    if (layer2B % 2 === 0) {
        drawLayer2(spinAngle);
    }
    if (layer3B % 2 === 0) {
        drawLayer3(spinAngle);
    }

    if (pause % 2 === 0) {
        spinAngle += 1;
    }
};

mousePressed = () => {
    pause++;
    if (pause % 2 === 0) {
        console.log("Rotation resumed");
    } else {
        console.log("Rotation stopped");
    }
};

keyPressed = () => {
    switch (key) {
        case '1':
            layer1B++;
            if (layer1B % 2 === 0) {
                console.log("Layer 1 built");
            } else {
                console.log("Layer 1 removed");
            }
            break;
        case '2':
            layer2B++;
            if (layer2B % 2 === 0) {
                console.log("Layer 2 built");
            } else {
                console.log("Layer 2 removed");
            }
            break;
        case '3':
            layer3B++;
            if (layer3B % 2 === 0) {
                console.log("Layer 3 built");
            } else {
                console.log("Layer 3 removed");
            }
            break;
    }
};

function drawLayer1(spinAngle) {
    stroke(layer1Color);
    strokeWeight(2);
    rotateY(radians(spinAngle * spiningSpeed));
    noFill();
    box(100);
}

function drawLayer2(spinAngle) {
    stroke(layer2Color);
    strokeWeight(2);
    rotateX(radians(spinAngle * spiningSpeed));
    noFill();
    box(60);
}

function drawLayer3(spinAngle) {
    stroke(layer3Color);
    strokeWeight(2);
    rotateY(radians(spinAngle * spiningSpeed));
    noFill();
    box(20);
}