import React, { useState, useEffect } from 'react';

const ReservationInterface = () => {
  // Load reservationRequests from localStorage on component mount
  const storedReservationRequests = JSON.parse(localStorage.getItem('reservationRequests')) || [
    { name: 'John Doe', plateNumber: 'ABC123', floor: '2', slot: 'A3', timeOfRequest: '10:30 AM' },
    { name: 'Jane Smith', plateNumber: 'XYZ456', floor: '3', slot: 'B1', timeOfRequest: '11:45 AM' },
    { name: 'Alice Johnson', plateNumber: 'DEF789', floor: '1', slot: 'C2', timeOfRequest: '01:15 PM' },
  ];

  const [reservationRequests, setReservationRequests] = useState(storedReservationRequests);
  const [historyLog, setHistoryLog] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);

  useEffect(() => {
    // Save reservationRequests to localStorage whenever it changes
    localStorage.setItem('reservationRequests', JSON.stringify(reservationRequests));
  }, [reservationRequests]);

  useEffect(() => {
    // Load history log from localStorage on component mount
    const storedHistoryLog = JSON.parse(localStorage.getItem('historyLog'));
    if (storedHistoryLog) {
      setHistoryLog(storedHistoryLog);
    }
  }, []);
  const handleReservation = (accepted, name, plateNumber, floor, slot, timeOfRequest, index) => {
    const status = accepted ? 'Accepted' : 'Declined';

    // Update history log
    const logEntry = {
      status,
      name,
      plateNumber,
      floor,
      slot,
      timeOfRequest,
    };

    setHistoryLog([logEntry, ...historyLog]);

    // Save history log to localStorage
    localStorage.setItem('historyLog', JSON.stringify([logEntry, ...historyLog]));

    // Remove the request from reservationRequests
    const updatedRequests = [...reservationRequests];
    updatedRequests.splice(index, 1);
    setReservationRequests(updatedRequests);

    // Set selected reservation for details display
    setSelectedReservation({
      status,
      name,
      plateNumber,
      floor,
      slot,
      timeOfRequest,
    });
  };

  const HistoryLog = () => (
    <div className="history-log mt-4" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
      {historyLog.map((logEntry, index) => (
        <div className={`alert ${logEntry.status === 'Accepted' ? 'alert-success' : 'alert-danger'} mt-2`} key={index}>
          <strong>{logEntry.status}:</strong> {logEntry.name} requested a reservation on {logEntry.timeOfRequest}. Plate Number: {logEntry.plateNumber}, Floor: {logEntry.floor}, Slot: {logEntry.slot}
        </div>
      ))}
    </div>
  );

  const ReservationRequest = ({ request, index }) => (
    <div className="reservation-request mb-4 border p-3 rounded bg-light" key={request.plateNumber}>
      <h4 className="mb-0">Name: {request.name}</h4>
      <p className="text-muted mb-2">Time of Request: {request.timeOfRequest}</p>
      <p>Plate Number: {request.plateNumber}</p>
      <p>Floor Number: {request.floor}</p>
      <p>Slot Number: {request.slot}</p>
      <div className="d-flex flex-column align-items-center mt-2">
        <button className="btn btn-success" onClick={() => handleReservation(true, request.name, request.plateNumber, request.floor, request.slot, request.timeOfRequest, index)}>Accept Reservation</button>
        <button className="btn btn-danger mt-2" onClick={() => handleReservation(false, request.name, request.plateNumber, request.floor, request.slot, request.timeOfRequest, index)}>Decline Reservation</button>
      </div>
    </div>
  );

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="ViewSpace">
            SpotWise Parking Management System
          </a>
        </div>
      </nav>
      <div className="container mt-5 d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-center mb-4">Parking Reservation Management</h2>
        <div className="reservation-requests d-flex flex-column align-items-center mb-4" style={{ width: '300px', height: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px', background: 'white' }}>
          {reservationRequests.length === 0 ? (
            <p>No reservation</p>
          ) : (
            reservationRequests.map((request, index) => (
              <ReservationRequest request={request} index={index} key={request.plateNumber} />
            ))
          )}
        </div>
        <h3 className="mb-3 mt-4 text-center">Accepted/Declined Reservations</h3>
        <HistoryLog />
      </div>
    </div>
  );
};

export default ReservationInterface;