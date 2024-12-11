if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (event) => {
      const gamma = event.gamma;

      const positionX = Math.min(Math.max((gamma + 90) / 180, 0), 1) * 100;

      document.querySelector('.background-image').style.backgroundPosition = `${positionX}% center`;
    });
  } else {
    console.warn('DeviceOrientationEvent is not supported on this device.');
  }