var nariz_x = 0;
var nariz_y = 0;
var nariz = "";
var lentes = "";
var ojo_izq_x = 0;
var ojo_izq_y = 0;
var sombrero = "";
function preload(){
    nariz = loadImage("imageedit_3_6041973883.png");
    lentes = loadImage("https://cdn-icons-png.flaticon.com/512/17/17336.png")
    sombrero = loadImage("copa.png")
}

function setup(){
    canvas = createCanvas(340,330);
    canvas.position(430,450)
    video = createCapture(VIDEO);
    video.size(340,330);
    video.hide();
    poses = ml5.poseNet(video, listo);
    poses.on("pose", respuesta);
}

function draw(){
    background("white");
    image(video,0,0,340,330);
    circle(nariz_x, nariz_y, 20);
    image(nariz, nariz_x -15, nariz_y -15, 30, 30);
    image(lentes, nariz_x -75, ojo_izq_y -75, 150, 150);
    image(sombrero, nariz_x -75, ojo_izq_y -150, 150, 150);
}

function tomarfoto(){
    save("filtros.png")
}

function listo(){
    console.log("el modelo esta listo")
}
function respuesta(resultado){
    if(resultado.length > 0){
        console.log(resultado);
        nariz_x = resultado[0].pose.nose.x;
        nariz_y = resultado[0].pose.nose.y;
        ojo_izq_x = resultado[0].pose.leftEye.x;
        ojo_izq_y = resultado[0].pose.leftEye.y;
    }
}