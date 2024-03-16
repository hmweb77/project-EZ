canvas.addEventListener("touchstart", function (e) {
    const touchX = e.touches[0].clientX;
    player.isMoving = true;
    player.startX = touchX;
  });
  
  canvas.addEventListener("touchmove", function (e) {
    if (player.isMoving) {
      const touchX = e.touches[0].clientX;
      const deltaX = touchX - player.startX;
      player.x += deltaX;
      player.startX = touchX;
      player.update(canvas);
    }
  });
  
  canvas.addEventListener("touchend", function () {
    player.isMoving = false;
  });
  