function App() {
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
