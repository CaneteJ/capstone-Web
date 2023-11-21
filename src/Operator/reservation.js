// Function to create a button
const createButton = (text, clickHandler) => {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-primary', 'mt-2');
  button.textContent = text;
  button.addEventListener('click', clickHandler);
  return button;
};

// Function to handle reservation (accept or decline) and update history log
const handleReservation = (accepted, name, plateNumber, floor, slot, requestContainer, timeOfRequest) => {
  const status = accepted ? 'Accepted' : 'Declined';

  // Update history log
  const logEntry = document.createElement('div');
  logEntry.classList.add('alert', 'alert-primary', 'mt-2');
  logEntry.innerHTML = `<strong>${status}:</strong> ${name} requested a reservation on ${timeOfRequest}. Plate Number: ${plateNumber}, Floor: ${floor}, Slot: ${slot}`;
  historyLog.appendChild(logEntry);

  // Remove details and buttons group
  requestContainer.style.display = 'none';

  alert(`Reservation ${status}:\n\nName: ${name}\nPlate Number: ${plateNumber}\nFloor Number: ${floor}\nSlot Number: ${slot}`);
};

// Function to create a reservation request
const createReservationRequest = (request) => {
  const requestContainer = document.createElement('div');
  requestContainer.classList.add('reservation-request', 'mb-4', 'border', 'p-3', 'rounded');

  const nameLabel = document.createElement('h4');
  nameLabel.classList.add('mb-0');
  nameLabel.textContent = `Name: ${request.name}`;

  const timeLabel = document.createElement('p');
  timeLabel.classList.add('text-muted', 'mb-2');
  timeLabel.textContent = `Time of Request: ${request.timeOfRequest}`;

  const plateLabel = document.createElement('p');
  plateLabel.textContent = `Plate Number: ${request.plateNumber}`;

  const floorLabel = document.createElement('p');
  floorLabel.textContent = `Floor Number: ${request.floor}`;

  const slotLabel = document.createElement('p');
  slotLabel.textContent = `Slot Number: ${request.slot}`;

  requestContainer.appendChild(nameLabel);
  requestContainer.appendChild(timeLabel);
  requestContainer.appendChild(plateLabel);
  requestContainer.appendChild(floorLabel);
  requestContainer.appendChild(slotLabel);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('d-flex', 'flex-column', 'align-items-center', 'mt-2');

  const acceptButton = createButton('Accept Reservation', () => handleReservation(true, request.name, request.plateNumber, request.floor, request.slot, requestContainer, request.timeOfRequest));
  const declineButton = createButton('Decline Reservation', () => handleReservation(false, request.name, request.plateNumber, request.floor, request.slot, requestContainer, request.timeOfRequest));

  buttonContainer.appendChild(acceptButton);
  buttonContainer.appendChild(declineButton);

  requestContainer.appendChild(buttonContainer);

  // Add a line to separate each user's reservation request
  const line = document.createElement('hr');
  line.classList.add('my-2');
  requestContainer.appendChild(line);

  return requestContainer;
};

// Function to create navigation bar
const createNavBar = () => {
  const navBar = document.createElement('nav');
  navBar.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark');

 // Brand logo or name
 const homeLink = document.createElement('a');
 homeLink.classList.add('navbar-brand');
 homeLink.href = 'ViewSpace';
 homeLink.textContent = 'Parking Reservations';

 const navList = document.createElement('ul');
 navList.classList.add('navbar-nav', 'ml-auto');

 // Home link
 const homeItem = document.createElement('li');
 homeItem.classList.add('nav-item');
 homeItem.appendChild(homeLink);
 navList.appendChild(homeItem);

 navBar.appendChild(navList);

 return navBar;
};


// Create history log container
const historyLog = document.createElement('div');
historyLog.classList.add('history-log', 'mt-4', 'border', 'p-3', 'rounded');

// Function to create enhanced reservation interface
const createReservationInterface = () => {
  // Create heading for Parking Reservation Management
  const headingManagement = document.createElement('h2');
  headingManagement.classList.add('card-title', 'mb-4', 'text-center');
  headingManagement.textContent = 'Parking Reservation Management';

  // Create container div
  const container = document.createElement('div');
  container.classList.add('container', 'mt-5', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center');

// Create navigation bar using Bootstrap
const navBar = createNavBar();
document.head.innerHTML += `
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
`;
document.body.appendChild(navBar);

  // Create card div
  const card = document.createElement('div');
  card.classList.add('card', 'shadow', 'bg-white', 'rounded');

  // Create card body
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'align-items-center', 'overflow-auto');
  // Set a fixed height for the container and make it scrollable
  cardBody.style.height = '500px'; // Adjust the height as needed
  cardBody.classList.add('overflow-auto');

  // Append Parking Reservation Management heading to card body
  cardBody.appendChild(headingManagement);

  // Add sample reservation requests
  const reservationRequests = [
    { name: 'John Doe', plateNumber: 'ABC123', floor: '2', slot: 'A3', timeOfRequest: '10:30 AM' },
    { name: 'Jane Smith', plateNumber: 'XYZ456', floor: '3', slot: 'B1', timeOfRequest: '11:45 AM' },
    { name: 'Alice Johnson', plateNumber: 'DEF789', floor: '1', slot: 'C2', timeOfRequest: '01:15 PM' },
    // Add more reservation requests as needed
  ];

  // Create elements for each reservation request
  reservationRequests.forEach((request) => {
    const requestContainer = createReservationRequest(request);
    cardBody.appendChild(requestContainer);
  });

  // Create heading for Parking Reservation Details
  const headingDetails = document.createElement('h3');
  headingDetails.classList.add('card-title', 'mb-4', 'text-center');
  headingDetails.textContent = 'Parking Reservation Details';

  // Append elements to container
  card.appendChild(cardBody);
  container.appendChild(card);
  container.appendChild(headingDetails);
  container.appendChild(historyLog);

  // Append container to body
  document.body.appendChild(container);
};

// Call the function to create the enhanced reservation interface
createReservationInterface();