// Function to create elements and append them to the document
function createReservationInterface() {
    // Create container div
    const container = document.createElement('div');
    container.style.maxWidth = '400px';
    container.style.margin = 'auto';
    container.style.padding = '20px';
    container.style.border = '1px solid #ccc';
    container.style.borderRadius = '5px';
    container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  
    // Create heading
    const heading = document.createElement('h1');
    heading.style.fontSize = '20px';
    heading.textContent = 'Parking Reservation Management';
  
    // Create labels for displaying details
    const nameLabelDisplay = document.createElement('label');
    nameLabelDisplay.style.display = 'block';
  
    const plateLabelDisplay = document.createElement('label');
    plateLabelDisplay.style.display = 'block';
  
    const floorLabelDisplay = document.createElement('label');
    floorLabelDisplay.style.display = 'block';
  
    const slotLabelDisplay = document.createElement('label');
    slotLabelDisplay.style.display = 'block';
  
    // Create history log container
    const historyLog = document.createElement('div');
    historyLog.style.marginTop = '20px';
  
    // Create buttons for accept and decline
    const acceptButton = document.createElement('button');
    acceptButton.textContent = 'Accept Reservation';
    acceptButton.style.marginRight = '10px';
    acceptButton.addEventListener('click', function () {
      handleReservation(true);
    });
  
    const declineButton = document.createElement('button');
    declineButton.textContent = 'Decline Reservation';
    declineButton.addEventListener('click', function () {
      handleReservation(false);
    });
  
    // Function to handle reservation (accept or decline) and update labels and history log
    function handleReservation(accepted) {
      // Simulate data or fetch data from a backend
      const name = 'John Doe';
      const plateNumber = 'ABC123';
      const floor = '2';
      const slot = 'A3';
      const status = accepted ? 'Accepted' : 'Declined';
  
      // Update details in labels
      nameLabelDisplay.textContent = `Name: ${name}`;
      plateLabelDisplay.textContent = `Plate Number: ${plateNumber}`;
      floorLabelDisplay.textContent = `Floor Number: ${floor}`;
      slotLabelDisplay.textContent = `Slot Number: ${slot}`;
  
      // Update history log
      const logEntry = document.createElement('div');
      logEntry.textContent = `${status} - Name: ${name}, Plate Number: ${plateNumber}, Floor: ${floor}, Slot: ${slot}`;
      historyLog.appendChild(logEntry);
  
      alert(`Reservation ${status}:\n\n${nameLabelDisplay.textContent}\n${plateLabelDisplay.textContent}\n${floorLabelDisplay.textContent}\n${slotLabelDisplay.textContent}`);
    }
  
    // Append elements to container
    container.appendChild(heading);
    container.appendChild(nameLabelDisplay);
    container.appendChild(plateLabelDisplay);
    container.appendChild(floorLabelDisplay);
    container.appendChild(slotLabelDisplay);
    container.appendChild(acceptButton);
    container.appendChild(declineButton);
    container.appendChild(historyLog);
  
    // Append container to body
    document.body.appendChild(container);
  }
  
  // Call the function to create the reservation interface
  createReservationInterface();