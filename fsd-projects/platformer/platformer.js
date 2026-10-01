$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform
createPlatform(1350, 600, 50, 20, "blue");
createPlatform(1350, 500, 50, 20, "blue");
createPlatform(1150, 480, 20, 20, "blue");
createPlatform(1000, 440, 20, 20, "blue");
createPlatform(850, 400, 20, 20, "blue");
createPlatform(700, 375, 20, 20, "blue");
createPlatform(550, 315, 20, 20, "blue");
createPlatform(400, 280, 20, 20, "blue");
createPlatform(250, 240, 20, 20, "blue");
    // TODO 3 - Create Collectables
createCollectable("diamond", 200, 170, 0.5, 0.7);
createPlatform(200, 170, 20, 20, "blue");
    // TODO 4 - Create Cannons
createCannon("left", 300, 5000);
createCannon("left", 550, 6000);
createCannon("left", 250, 7000);
createCannon("left", 100, 8000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
