// Function to create a button
const createButton = (text, clickHandler) => {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-primary', 'mt-2');
  button.textContent = text;
  button.addEventListener('click', clickHandler);
  return button;
};

// Function to handle reservation (accept or decline) and update history log
const handleReservation = (accepted, name, plateNumber, floor, slot) => {
  const status = accepted ? 'Accepted' : 'Declined';

  // Update history log
  const logEntry = document.createElement('div');
  logEntry.textContent = `${status} - Name: ${name}, Plate Number: ${plateNumber}, Floor: ${floor}, Slot: ${slot}`;
  historyLog.appendChild(logEntry);

  alert(`Reservation ${status}:\n\nName: ${name}\nPlate Number: ${plateNumber}\nFloor Number: ${floor}\nSlot Number: ${slot}`);
};

// Function to create a reservation request
const createReservationRequest = (request) => {
  const requestContainer = document.createElement('div');
  requestContainer.classList.add('reservation-request', 'mb-4');

  const nameLabel = document.createElement('h4');
  nameLabel.textContent = `Name: ${request.name}`;
  
  const plateLabel = document.createElement('p');
  plateLabel.textContent = `Plate Number: ${request.plateNumber}`;
  
  const floorLabel = document.createElement('p');
  floorLabel.textContent = `Floor Number: ${request.floor}`;
  
  const slotLabel = document.createElement('p');
  slotLabel.textContent = `Slot Number: ${request.slot}`;

  requestContainer.appendChild(nameLabel);
  requestContainer.appendChild(plateLabel);
  requestContainer.appendChild(floorLabel);
  requestContainer.appendChild(slotLabel);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('d-flex', 'flex-column', 'align-items-center', 'mt-2');

  const acceptButton = createButton('Accept Reservation', () => handleReservation(true, request.name, request.plateNumber, request.floor, request.slot));
  const declineButton = createButton('Decline Reservation', () => handleReservation(false, request.name, request.plateNumber, request.floor, request.slot));

  buttonContainer.appendChild(acceptButton);
  buttonContainer.appendChild(declineButton);

  requestContainer.appendChild(buttonContainer);

  // Add a line to separate each user's reservation request
  const line = document.createElement('hr');
  line.classList.add('my-2');
  requestContainer.appendChild(line);

  return requestContainer;
};

// Create history log container
const historyLog = document.createElement('div');
historyLog.classList.add('history-log', 'mt-4');

// Function to create reservation interface
const createReservationInterface = () => {
  // Create heading for Parking Reservation Management
  const headingManagement = document.createElement('h2');
  headingManagement.classList.add('card-title', 'mb-4');
  headingManagement.textContent = 'Parking Reservation Management';

  // Create container div
  const container = document.createElement('div');
  container.classList.add('container', 'mt-5', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center');

  // Create card div
  const card = document.createElement('div');
  card.classList.add('card', 'shadow', 'bg-white', 'rounded');

  // Create card body
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'align-items-center');

  // Append Parking Reservation Management heading to card body
  cardBody.appendChild(headingManagement);

  // Add sample reservation requests
  const reservationRequests = [
    { name: 'John Doe', plateNumber: 'ABC123', floor: '2', slot: 'A3' },
    { name: 'Jane Smith', plateNumber: 'XYZ456', floor: '3', slot: 'B1' },
    // Add more reservation requests as needed
  ];

  // Create elements for each reservation request
  reservationRequests.forEach((request) => {
    const requestContainer = createReservationRequest(request);
    cardBody.appendChild(requestContainer);
  });

  // Create heading for Parking Reservation Details
  const headingDetails = document.createElement('h3');
  headingDetails.classList.add('card-title', 'mb-4');
  headingDetails.textContent = 'Parking Reservation Details';

  // Append elements to container
  cardBody.appendChild(headingDetails);
  cardBody.appendChild(historyLog);

  card.appendChild(cardBody);
  container.appendChild(card);

  // Append container to body
  document.body.appendChild(container);

};

// Call the function to create the reservation interface
createReservationInterface();
