(function () {
    'use strict';

    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.09584720509516, lng: -74.22222707431865 },
        zoom: 10
    });

    const drawingOptions = {
        markerOptions: {
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            draggable: true
        },
        circleOptions: {
            fillColor: "#ffff00",
            fillOpacity: 0.2,
            strokeWeight: 5,
            editable: true
        }
    };

    const drawingManager = new google.maps.drawing.DrawingManager(drawingOptions);
    drawingManager.setMap(map);

    function handleMarkerDrag(marker, markerData) {
        marker.addListener('dragend', () => {
            markerData.position = marker.getPosition();
            localStorage.setItem('drawings', JSON.stringify(drawings));
        });
    }

    let drawings = JSON.parse(localStorage.getItem('drawings')) || [];
    drawings.forEach(drawing => {
      switch (drawing.type) {
        case 'marker':
          const marker = new google.maps.Marker({
            position: drawing.position,
            icon: drawingOptions.markerOptions.icon,
            map: map,
            draggable: true
          });
          handleMarkerDrag(marker, drawing);
          break;
        case 'circle':
          new google.maps.Circle({
            radius: drawing.radius,
            center: drawing.center,
            fillColor: drawingOptions.circleOptions.fillColor,
            fillOpacity: drawingOptions.circleOptions.fillOpacity,
            strokeWeight: drawingOptions.circleOptions.strokeWeight,
            editable: true
          }).setMap(map);
          break;
        case 'rectangle':
          new google.maps.Rectangle(drawing).setMap(map);
          break;
        case 'polyline':
          new google.maps.Polyline(drawing).setMap(map);
          break;
        case 'polygon':
          new google.maps.Polygon(drawing).setMap(map);
          break;
      }
    });
  
    drawingManager.addListener('markercomplete', marker => {
      const markerData = { type: 'marker', position: marker.getPosition() };
      drawings.push(markerData);
      localStorage.setItem('drawings', JSON.stringify(drawings));
  
      handleMarkerDrag(marker, markerData);
    });
  
    drawingManager.addListener('circlecomplete', e => {
      drawings.push({ type: 'circle', center: e.getCenter(), radius: e.getRadius() });
      localStorage.setItem('drawings', JSON.stringify(drawings));
    });
  
    drawingManager.addListener('rectanglecomplete', e => {
      drawings.push({ type: 'rectangle', bounds: e.getBounds() });
      localStorage.setItem('drawings', JSON.stringify(drawings));
    });
  
    drawingManager.addListener('polylinecomplete', e => {
      drawings.push({ type: 'polyline', path: e.getPath().getArray() });
      localStorage.setItem('drawings', JSON.stringify(drawings));
    });
  
    drawingManager.addListener('polygoncomplete', e => {
      drawings.push({ type: 'polygon', path: e.getPath().getArray() });
      localStorage.setItem('drawings', JSON.stringify(drawings));
    });

})();