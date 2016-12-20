
var gameScreen = 0;
var racketimg
var soundping

  function setup() {
  createCanvas(1000,1000);
  background(255,0,255);
    size(500, 500);
  }

  void draw() {
    if (gameScreen == 0) {
      initScreen();
    } else if (gameScreen == 1) {
      gameScreen();
    } else if (gameScreen == 2) {
      gameOverScreen();
    }
  }

  void initScreen() {
  }
  void gameScreen() {
  }
  void gameOverScreen() {
  }

  public void mousePressed() {
    if (gameScreen==0) {
      startGame();
    }
  }
  void startGame() {
    gameScreen=1;
  }
  void initScreen() {
    background(0);
    textAlign(CENTER);
    text("Click to start", height/2, width/2);
  }
  void gameScreen() {
    background(255);
  }
  int ballX, ballY;
  int ballSize = 20;
  int ballColor = color(0);
  
  void setup() {
    ballX=width/4;
    ballY=height/5;
  }
  void gameScreen() {
    drawBall();
  }
  void drawBall() {
    fill(ballColor);
    ellipse(ballX, ballY, ballSize, ballSize);
  float gravity = 1;
  float ballSpeedVert = 0;
  void gameScreen() {
    applyGravity();
    keepInScreen();
  }
  void applyGravity() {
    ballSpeedVert += gravity;
    ballY += ballSpeedVert;
  }
  void makeBounceBottom(float surface) {
    ballY = surface-(ballSize/2);
    ballSpeedVert*=-1;
  }
  void makeBounceTop(float surface) {
    ballY = surface+(ballSize/2);
    ballSpeedVert*=-1;
  }

  void keepInScreen() {

    if (ballY+(ballSize/2) > height) { 
      makeBounceBottom(height);
    }

    if (ballY-(ballSize/2) < 0) {
      makeBounceTop(0);
  color racketColor = color(0);
  float racketWidth = 100;
  float racketHeight = 10;
  void gameScreen() {
    
    function mouseClicked(){
  var soundping;
  if (mouseX>= 275 && mouseX<= 475);{
    instrument= 0;
  console.log(keylist[ping])
  }
  if (mouseX>= 500 && mouseX<= 475);{
    instrument= 1;
    console.log(keylist[ping])
  }
  if (mouseX>= 750 && mouseX<= 475);{
    instrument= 2;
    console.log(keylist[ping])
  }

}
  }
  void drawRacket(){
    fill(racketColor);
    rectMode(CENTER);
    rect(mouseX, mouseY, racketWidth, racketHeight);
  }
  int racketBounceRate = 20;
  
  void gameScreen() {
    watchRacketBounce();

  }
  void watchRacketBounce() {
    float overhead = mouseY - pmouseY;
    if ((ballX+(ballSize/2) > mouseX-(racketWidth/2)) && (ballX-(ballSize/2) < mouseX+(racketWidth/2))) {
      if (dist(ballX, ballY, ballX, mouseY)<=(ballSize/2)+abs(overhead)) {
        makeBounceBottom(mouseY);
        if (overhead<0) {
          ballY+=overhead;
          ballSpeedVert+=overhead;
        }
      }
    }
  }