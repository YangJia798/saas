function Header({ page, onNavigate }) {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <span>\u272A</span>
          <span>RWA IDO</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#" className={page === 'invest' ? 'active' : ''} onClick={() => onNavigate('invest')}>投资</a></li>
            <li><a href="#" className={page === 'rewards' ? 'active' : ''} onClick={() => onNavigate('rewards')}>收益</a></li>
            <li><a href="#" className={page === 'referral' ? 'active' : ''} onClick={() => onNavigate('referral')}>推荐</a></li>
            <li><a href="#" className={page === 'history' ? 'active' : ''} onClick={() => onNavigate('history')}>历史</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
