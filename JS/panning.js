const background = document.querySelector('.background-image');

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (event) => {
        const gamma = event.gamma; // Left-right tilt (-90 to 90)
        const beta = event.beta;  // Front-back tilt (0 to 180)

        // Reverse horizontal (X-axis) panning
        const positionX = 100 - Math.min(Math.max((gamma + 90) / 180, 0), 1) * 100;

        // Reverse vertical (Y-axis) panning
        const positionY = 100 - Math.min(Math.max((beta - 45) / 90, 0), 1) * 100;

        // Update background position
        background.style.backgroundPosition = `${positionX}% ${positionY}%`;
      });
    } else {
      console.warn('DeviceOrientationEvent is not supported on this device.');
    }

    // Ensure background is centered by default on desktop
    window.addEventListener('resize', () => {
      background.style.backgroundPosition = 'center';
    });