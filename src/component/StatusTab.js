import React from 'react';

function StatusTab() {
  return (
    <div className="tab">
      <h2>Status</h2>
      <div className="detail-item">
        <label>Status Tracking:</label>
        <input type="text" />
      </div>
      <div className="detail-item">
        <label>Comments and Updates:</label>
        <textarea rows="4"></textarea>
      </div>
    </div>
  );
}

export default StatusTab;
