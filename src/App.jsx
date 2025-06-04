import React from 'react';
import Header from './components/Header.jsx';
import Invest from './components/Invest.jsx';
import Rewards from './components/Rewards.jsx';
import Referral from './components/Referral.jsx';
import History from './components/History.jsx';

export default function App() {
  const [page, setPage] = React.useState('invest');

  return (
    <div className="app-container">
      <Header page={page} onNavigate={setPage} />
      <main className="main-container">
        {page === 'invest' && <Invest />}
        {page === 'rewards' && <Rewards />}
        {page === 'referral' && <Referral />}
        {page === 'history' && <History />}
      </main>
    </div>
  );
}
