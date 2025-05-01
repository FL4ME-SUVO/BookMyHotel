import React, { useState, useEffect } from 'react';
import './DashboardOverview.css';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ComposedChart, Scatter
} from 'recharts';
import { FiRefreshCw, FiCalendar, FiUsers, FiHome, FiBookmark, 
         FiArrowUp, FiArrowDown, FiChevronRight, FiActivity, FiAlertCircle } from 'react-icons/fi';
import { BiRupee } from 'react-icons/bi'; // Added Rupee icon import
import { motion } from 'framer-motion';

// Mock data
const bookingData = [
  { name: 'Mon', bookings: 120, prevWeek: 90 },
  { name: 'Tue', bookings: 200, prevWeek: 170 },
  { name: 'Wed', bookings: 150, prevWeek: 130 },
  { name: 'Thu', bookings: 278, prevWeek: 240 },
  { name: 'Fri', bookings: 189, prevWeek: 160 },
  { name: 'Sat', bookings: 239, prevWeek: 210 },
  { name: 'Sun', bookings: 349, prevWeek: 300 },
];

const revenueData = [
  { name: 'Credit Card', value: 50000 },
  { name: 'Cash', value: 25000 },
  { name: 'UPI', value: 15000 },
  { name: 'PayPal', value: 10000 },
];

const performanceData = [
  { subject: 'Occupancy', A: 85, B: 65 },
  { subject: 'Revenue', A: 92, B: 59 },
  { subject: 'Satisfaction', A: 88, B: 70 },
  { subject: 'Cleanliness', A: 95, B: 80 },
  { subject: 'Service', A: 90, B: 75 },
];

const COLORS = ['#6366F1', '#10B981', '#F59E0B', '#EF4444'];

function DashboardOverview() {
  const [isLoading, setIsLoading] = useState(false);
  const [timeRange, setTimeRange] = useState('week');
  const [activeTab, setActiveTab] = useState('bookings');
  const [notifications, setNotifications] = useState(3);

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setNotifications(0);
    }, 1000);
  };

  // Auto-refresh every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      refreshData();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { icon: <FiUsers className="metric-icon" />, title: 'Total Users', value: '1,234', change: '+15%', trend: 'up' },
    { icon: <FiBookmark className="metric-icon" />, title: 'Total Bookings', value: '567', change: '+8%', trend: 'up' },
    { icon: <FiHome className="metric-icon" />, title: 'Total Hotels', value: '89', change: '+3%', trend: 'up' },
    { icon: <BiRupee className="metric-icon" />, title: 'Total Revenue', value: '₹123,456', change: '+22%', trend: 'up' },
  ];

  const activities = [
    { type: 'booking', time: '10:30 AM', user: 'John', action: 'booked Hotel ABC', unread: true },
    { type: 'check-in', time: '11:00 AM', user: 'Jane', action: 'checked in at Hotel XYZ', unread: true },
    { type: 'cancel', time: '11:15 AM', user: 'Mike', action: 'canceled booking at Hotel DEF', unread: false },
    { type: 'payment', time: '12:45 PM', user: 'Sarah', action: 'completed payment for Hotel GHI', unread: false },
    { type: 'review', time: '2:30 PM', user: 'David', action: 'left a review for Hotel JKL', unread: false },
  ];

  return (
    <div className="dashboard-overview">
      {/* Header with breadcrumbs and actions */}
      <div className="dashboard-header">
        <div className="breadcrumbs">
          <span>Dashboard</span>
          <FiChevronRight className="chevron" />
          <span className="active">Overview</span>
        </div>
        <div className="header-actions">
          <div className="time-range-selector">
            <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
              <option value="day">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <motion.button 
            className={`refresh-btn ${isLoading ? 'loading' : ''}`}
            onClick={refreshData}
            whileTap={{ scale: 0.95 }}
          >
            <FiRefreshCw className={isLoading ? 'spin' : ''} />
            {isLoading ? 'Refreshing...' : 'Refresh Data'}
          </motion.button>
          {notifications > 0 && (
            <motion.div 
              className="notification-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring' }}
            >
              {notifications}
            </motion.div>
          )}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <motion.div 
            className={`metric-card card-${index}`}
            key={index}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="metric-icon-container">{metric.icon}</div>
            <div className="metric-content">
              <div className="metric-title">{metric.title}</div>
              <div className="metric-value">{metric.value}</div>
              <div className={`metric-change ${metric.trend}`}>
                {metric.change}
                {metric.trend === 'up' ? <FiArrowUp /> : <FiArrowDown />}
              </div>
            </div>
            <div className="metric-sparkline">
              <ResponsiveContainer width="100%" height={40}>
                <AreaChart data={bookingData.slice(0, 5)}>
                  <Area 
                    type="monotone" 
                    dataKey="bookings" 
                    stroke={index === 0 ? '#6366F1' : index === 1 ? '#10B981' : index === 2 ? '#F59E0B' : '#EF4444'} 
                    fill={index === 0 ? '#6366F1' : index === 1 ? '#10B981' : index === 2 ? '#F59E0B' : '#EF4444'}
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Charts Section */}
      <div className="main-chart-section">
        <div className="chart-tabs">
          <button 
            className={activeTab === 'bookings' ? 'active' : ''}
            onClick={() => setActiveTab('bookings')}
          >
            Bookings
          </button>
          <button 
            className={activeTab === 'revenue' ? 'active' : ''}
            onClick={() => setActiveTab('revenue')}
          >
            Revenue
          </button>
          <button 
            className={activeTab === 'performance' ? 'active' : ''}
            onClick={() => setActiveTab('performance')}
          >
            Performance
          </button>
        </div>

        <div className="chart-container">
          {activeTab === 'bookings' && (
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart data={bookingData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6B7280' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6B7280' }}
                />
                <Tooltip 
                  contentStyle={{
                    background: 'rgba(255, 255, 255, 0.96)',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
                    backdropFilter: 'blur(4px)',
                    padding: '12px 16px'
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="prevWeek" 
                  name="Last Week" 
                  fill="#E5E7EB" 
                  radius={[4, 4, 0, 0]}
                  barSize={20}
                />
                <Bar 
                  dataKey="bookings" 
                  name="This Week" 
                  fill="#6366F1" 
                  radius={[4, 4, 0, 0]}
                  barSize={20}
                />
                <Line 
                  type="monotone" 
                  dataKey="bookings" 
                  stroke="#4F46E5" 
                  strokeWidth={3} 
                  dot={false}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          )}

          {activeTab === 'revenue' && (
            <div className="revenue-chart-container">
              <ResponsiveContainer width="60%" height={350}>
                <PieChart>
                  <Pie
                    data={revenueData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {revenueData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']}
                    contentStyle={{
                      background: 'rgba(255, 255, 255, 0.96)',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
                      backdropFilter: 'blur(4px)',
                      padding: '12px 16px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="revenue-legend">
                {revenueData.map((entry, index) => (
                  <div className="legend-item" key={index}>
                    <span className="legend-color" style={{backgroundColor: COLORS[index]}}></span>
                    <div className="legend-details">
                      <span className="legend-name">{entry.name}</span>
                      <span className="legend-value">₹{entry.value.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performanceData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar 
                  name="Your Hotel" 
                  dataKey="A" 
                  stroke="#4F46E5" 
                  fill="#4F46E5" 
                  fillOpacity={0.2} 
                />
                <Radar 
                  name="Competitor Avg" 
                  dataKey="B" 
                  stroke="#9CA3AF" 
                  fill="#9CA3AF" 
                  fillOpacity={0.2} 
                />
                <Legend />
                <Tooltip 
                  contentStyle={{
                    background: 'rgba(255, 255, 255, 0.96)',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
                    backdropFilter: 'blur(4px)',
                    padding: '12px 16px'
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        {/* Real-time Stats */}
        <div className="real-time-stats">
          <div className="section-header">
            <h2>
              <FiActivity className="section-icon" />
              Real-time Statistics
            </h2>
            <div className="live-indicator">
              <span className="pulse-dot"></span>
              <span>LIVE UPDATES</span>
            </div>
          </div>
          <div className="stats-grid">
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <div className="stat-icon">
                <FiUsers />
              </div>
              <div className="stat-content">
                <div className="stat-title">New Signups Today</div>
                <div className="stat-value">12</div>
                <div className="stat-change up">
                  <FiArrowUp /> 15% from yesterday
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <div className="stat-icon">
                <FiBookmark />
              </div>
              <div className="stat-content">
                <div className="stat-title">Today's Check-ins</div>
                <div className="stat-value">34</div>
                <div className="stat-change up">
                  <FiArrowUp /> 8% from yesterday
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <div className="stat-icon">
                <FiHome />
              </div>
              <div className="stat-content">
                <div className="stat-title">Today's Check-outs</div>
                <div className="stat-value">28</div>
                <div className="stat-change down">
                  <FiArrowDown /> 5% from yesterday
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <div className="section-header">
            <h2>
              <FiAlertCircle className="section-icon" />
              Recent Activity Logs
            </h2>
            <button className="view-all-btn">
              View All <FiChevronRight />
            </button>
          </div>
          <div className="activity-list">
            {activities.map((activity, index) => (
              <motion.div 
                className={`activity-item ${activity.type} ${activity.unread ? 'unread' : ''}`}
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="activity-icon">
                  {activity.type === 'booking' && <FiBookmark />}
                  {activity.type === 'check-in' && <FiHome />}
                  {activity.type === 'cancel' && <FiAlertCircle />}
                  {activity.type === 'payment' && <BiRupee />}
                  {activity.type === 'review' && '⭐'}
                </div>
                <div className="activity-content">
                  <div className="activity-time">{activity.time}</div>
                  <div className="activity-text">
                    <span className="user">{activity.user}</span> {activity.action}
                  </div>
                </div>
                {activity.unread && <div className="unread-badge"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;