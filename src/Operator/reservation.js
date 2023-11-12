// Function to load scripts dynamically
function loadScript(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    document.body.appendChild(script);
}

// Create container div
const container = document.createElement('div');
container.style.maxWidth = '600px';
container.style.margin = 'auto';
container.style.padding = '20px';
container.style.border = '1px solid #ccc';
container.style.borderRadius = '5px';
container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

// Create heading
const heading = document.createElement('h1');
heading.style.fontSize = '24px';
heading.textContent = 'Parking Reservation Management';

// Create form
const form = document.createElement('form');
form.style.marginTop = '20px';

// Create input for name
const nameLabel = document.createElement('label');
nameLabel.textContent = 'Name:';
nameLabel.style.display = 'block';
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'name';
nameInput.style.width = '100%';
nameInput.style.marginBottom = '10px';
nameInput.required = true;

// Create input for plate number
const plateLabel = document.createElement('label');
plateLabel.textContent = 'Plate Number:';
plateLabel.style.display = 'block';
const plateInput = document.createElement('input');
plateInput.type = 'text';
plateInput.id = 'plateNumber';
plateInput.style.width = '100%';
plateInput.style.marginBottom = '10px';
plateInput.required = true;

// Create input for floor number
const floorLabel = document.createElement('label');
floorLabel.textContent = 'Floor Number:';
floorLabel.style.display = 'block';
const floorInput = document.createElement('input');
floorInput.type = 'number';
floorInput.id = 'floor';
floorInput.style.width = '100%';
floorInput.style.marginBottom = '10px';
floorInput.required = true;

// Create input for slot number
const slotLabel = document.createElement('label');
slotLabel.textContent = 'Slot Number:';
slotLabel.style.display = 'block';
const slotInput = document.createElement('input');
slotInput.type = 'number';
slotInput.id = 'slot';
slotInput.style.width = '100%';
slotInput.style.marginBottom = '10px';
slotInput.required = true;

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

// Function to handle reservation (accept or decline)
function handleReservation(accepted) {
    const name = document.getElementById('name').value;
    const plateNumber = document.getElementById('plateNumber').value;
    const floor = document.getElementById('floor').value;
    const slot = document.getElementById('slot').value;
    const status = accepted ? 'Accepted' : 'Declined';

    alert(`Reservation ${status}:\n\nName: ${name}\nPlate Number: ${plateNumber}\nFloor: ${floor}\nSlot: ${slot}`);
}

// Append elements to form
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(plateLabel);
form.appendChild(plateInput);
form.appendChild(floorLabel);
form.appendChild(floorInput);
form.appendChild(slotLabel);
form.appendChild(slotInput);
form.appendChild(acceptButton);
form.appendChild(declineButton);

// Append elements to container
container.appendChild(heading);
container.appendChild(form);

// Append container to body
document.body.appendChild(container);