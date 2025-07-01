import React, { useState, useEffect } from 'react';
import './Announcements.css';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: 'Holiday Schedule',
      date: '2025-07-01',
      content: 'All students will break for mid-term on July 15th and return on July 29th.',
      priority: 'high',
      read: false
    },
    {
      id: 2,
      title: 'Parents Meeting',
      date: '2025-06-25',
      content: 'All parents are invited to a general meeting on July 3rd at 10am in the school hall.',
      priority: 'medium',
      read: false
    },
    {
      id: 3,
      title: 'New Science Lab Opening',
      date: '2025-06-20',
      content: 'Our new state-of-the-art science lab will be inaugurated on July 5th.',
      priority: 'low',
      read: false
    }
  ]);

  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  // Mark announcement as read
  const markAsRead = (id) => {
    setAnnouncements(announcements.map(ann => 
      ann.id === id ? {...ann, read: true} : ann
    ));
  };

  // Filter announcements based on active tab and search term
  const filteredAnnouncements = announcements.filter(ann => {
    const matchesSearch = ann.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         ann.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'unread') return !ann.read && matchesSearch;
    return ann.priority === activeTab && matchesSearch;
  });

  // Sort by date (newest first)
  const sortedAnnouncements = [...filteredAnnouncements].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  // Surprise confetti effect when all announcements are read
  useEffect(() => {
    if (announcements.length > 0 && announcements.every(ann => ann.read)) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [announcements]);

  return (
    <div className="announcements-container">
      {/* Confetti surprise */}
      {showConfetti && (
        <div className="confetti-container">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="confetti" style={{
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }} />
          ))}
          <div className="confetti-message">All announcements read! 🎉</div>
        </div>
      )}

      <h2 className="announcements-header">Latest Announcements</h2>
      
      {/* Search and filter controls */}
      <div className="announcements-controls">
        <input
          type="text"
          placeholder="Search announcements..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="filter-tabs">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`tab-btn ${activeTab === 'unread' ? 'active' : ''}`}
            onClick={() => setActiveTab('unread')}
          >
            Unread
          </button>
          <button 
            className={`tab-btn ${activeTab === 'high' ? 'active' : ''}`}
            onClick={() => setActiveTab('high')}
          >
            High Priority
          </button>
          <button 
            className={`tab-btn ${activeTab === 'medium' ? 'active' : ''}`}
            onClick={() => setActiveTab('medium')}
          >
            Medium
          </button>
        </div>
      </div>

      {/* Announcements list */}
      <div className="announcements-list">
        {sortedAnnouncements.length > 0 ? (
          sortedAnnouncements.map(item => (
            <div 
              key={item.id} 
              className={`announcement-card ${item.read ? 'read' : ''} priority-${item.priority}`}
              onClick={() => markAsRead(item.id)}
            >
              <div className="announcement-header">
                <h3 className="announcement-title">
                  {item.title}
                  {!item.read && <span className="unread-badge">NEW</span>}
                  {item.priority === 'high' && <span className="priority-badge">❗ High Priority</span>}
                </h3>
                <span className="announcement-date">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <p className="announcement-content">{item.content}</p>
              <div className="announcement-footer">
                <span className={`priority-indicator ${item.priority}`}>
                  Priority: {item.priority}
                </span>
                <button 
                  className="mark-read-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    markAsRead(item.id);
                  }}
                >
                  {item.read ? '✓ Read' : 'Mark as Read'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No announcements found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Surprise feature - Add new announcement (admin only) */}
      <div className="add-announcement">
        <button 
          className="add-btn"
          onClick={() => {
            const surpriseMessages = [
              "You're doing great!",
              "Have a wonderful day!",
              "Stay curious!",
              "Learning is a journey!",
              "You're awesome!"
            ];
            alert(surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)]);
          }}
        >
          ✨ Have a Good Time ✨
        </button>
      </div>
    </div>
  );
};

export default Announcements;