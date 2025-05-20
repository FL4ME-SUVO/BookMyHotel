import React, { useState, useEffect } from 'react';
import './CheckInOut.css';

function CheckInOut() {
  // Sample data for logs
  const [logs, setLogs] = useState([
    { id: 1, name: 'John Doe', time: '2025-05-16 08:15 AM', type: 'Check-in' },
    { id: 2, name: 'Jane Smith', time: '2025-05-16 08:20 AM', type: 'Check-in' },
    { id: 3, name: 'Alice Johnson', time: '2025-05-16 05:00 PM', type: 'Check-out' },
  ]);

  // Simulate live tracker time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="check-in-out">
      <h1>Check-in / Check-out Monitoring</h1>
      <p>Monitor facial recognition logs and live check-in/out tracker here.</p>

      <section className="check-in-out__live-tracker">
        <h2>Live Tracker</h2>
        <div className="check-in-out__live-time">{currentTime.toLocaleTimeString()}</div>
        <div className="check-in-out__live-date">{currentTime.toLocaleDateString()}</div>
        <div className="check-in-out__current-status">
          <span className="status-label">Currently Checked In:</span>
          <span className="status-count">{logs.filter(log => log.type === 'Check-in').length}</span>
        </div>
      </section>

      <section className="check-in-out__logs">
        <h2>Recent Facial Recognition Logs</h2>
        <div className="check-in-out__table-wrapper">
          <table className="check-in-out__table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Time</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {logs.map(log => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.name}</td>
                  <td>{log.time}</td>
                  <td className={`check-in-out__type--${log.type.toLowerCase().replace('-', '')}`}>
                    {log.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default CheckInOut;
