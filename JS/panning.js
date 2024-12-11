if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (event) => {
      const gamma = event.gamma;
      const beta = event.beta; 

      const positionX = 100 - Math.min(Math.max((gamma + 90) / 180, 0), 1) * 100;

      const positionY = 100 - Math.min(Math.max((beta - 45) / 90, 0), 1) * 100;

      document.querySelector('.background-image').style.backgroundPosition = `${positionX}% ${positionY}%`;
    });
  } else {
    console.warn('DeviceOrientationEvent is not supported on this device.');
  }