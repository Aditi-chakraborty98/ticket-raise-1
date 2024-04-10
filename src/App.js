import React from 'react';
import TicketDetailsTab from './component/TicketDetailsTab';
import AssignmentTab from './component/AssignmentTab';
import StatusTab from './component/StatusTab';
import ResolutionTab from './component/ResolutionTab';
import SearchFilterTab from './component/SearchFilterTab';
import HistoryTab from './component/HistoryTab';
import NotificationTab from './component/NotificationTab';

function App() {
  return (
    <div className="App" id='Body'>
      <h1>hello</h1>
      <TicketDetailsTab />
      <AssignmentTab />
      <StatusTab />
      <NotificationTab />
      <SearchFilterTab />
      <HistoryTab />
      <ResolutionTab />
    </div>
  );
}

export default App;
