class FPSViewer {
  constructor(x, y) {
    this.position = { x: x, y: y };
  }

  update() {}
  keyboard_event() {}
  draw(ctx, delta) {
    const fps = (1 / delta).toFixed(2);
    ctx.font = '50px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`FPS: ${fps}`, this.position.x, this.position.y);
  }
}
