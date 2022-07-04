window.onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  let actors = [
    new Pacman(200, 200, 'yellow'),
    new Pacman(200, 400, 'pink', 200),
    new FPSViewer(0, 60),
  ];

  // Bucle de renderizado _> v1
  // setInterval(() => {
  //   actors.forEach((actor) => actor.update());
  //   ctx.clearRect(0, 0, 1024, 1024);
  //   actors.forEach((actor) => actor.draw(ctx));
  // }, 100);

  // Bucle de renderizado _> v2
  let lastFrame = 0;
  const render = (time) => {
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach((actor) => actor.update(delta));
    ctx.clearRect(0, 0, 1024, 1024);
    actors.forEach((actor) => actor.draw(ctx, delta));
    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);

  document.body.addEventListener('keydown', (e) => {
    actors.forEach((actor) => {
      actor.keyboard_event(e.key);
    });
  });
};
