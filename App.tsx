import React, { useState } from 'react';
import { 
  Users, 
  LayoutDashboard, 
  BarChart3, 
  Settings as SettingsIcon, 
  ArrowLeft,
  ChevronRight,
  Search,
  Bell,
  Shield,
  Key,
  User,
  MoreVertical,
  TrendingUp,
  Eye,
  MousePointer2
} from 'lucide-react';

// --- Types ---
type ViewState = 'landing' | 'menu' | 'users' | 'admin' | 'analytics' | 'settings';

// --- Shared Components ---

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="flex items-center text-slate-400 hover:text-brand-300 transition-colors mb-6 group"
  >
    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
    Back to Menu
  </button>
);

const PageHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-slate-100">{title}</h2>
    {subtitle && <p className="text-slate-400 mt-2">{subtitle}</p>}
  </div>
);

const TrendChart = () => (
  <div className="relative w-full h-full p-4 overflow-hidden">
    <svg className="w-full h-full text-brand-500" viewBox="0 0 100 40" preserveAspectRatio="none">
      <defs>
        <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path 
        d="M0 35 L10 30 L20 32 L30 20 L40 25 L50 15 L60 18 L70 10 L80 12 L90 5 L100 2 V 40 H 0 Z"
        fill="url(#trendGradient)" 
        stroke="none"
      />
      <path 
        d="M0 35 L10 30 L20 32 L30 20 L40 25 L50 15 L60 18 L70 10 L80 12 L90 5 L100 2"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </div>
);

// --- Views ---

const LandingView = ({ onEnter }: { onEnter: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100 selection:bg-brand-500 selection:text-white">
    <div className="w-full max-w-lg px-4 text-center select-none">
      <h1 className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
        repository
      </h1>
      <p 
        onClick={onEnter}
        className="mt-4 text-lg text-slate-400 font-medium tracking-wide cursor-pointer hover:text-slate-100 transition-all duration-300 hover:[text-shadow:0_0_1px_currentColor]"
      >
        startup002
      </p>
    </div>
  </div>
);

const MenuView = ({ onNavigate }: { onNavigate: (view: ViewState) => void }) => {
  const menuItems = [
    { id: 'users', label: 'User Management', icon: Users, desc: 'Manage access and profiles' },
    { id: 'admin', label: 'Admin Dashboard', icon: LayoutDashboard, desc: 'System overview and controls' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, desc: 'Data insights and reporting' },
    { id: 'settings', label: 'Settings', icon: SettingsIcon, desc: 'App configuration' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">Main Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as ViewState)}
              className="flex items-start p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-900 hover:border-brand-500/50 transition-all duration-200 text-left group"
            >
              <div className="p-3 rounded-lg bg-slate-800 text-brand-400 group-hover:bg-brand-500/10 group-hover:text-brand-300 transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-brand-200 transition-colors">
                  {item.label}
                </h3>
                <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-brand-400 group-hover:translate-x-1 transition-all mt-1" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const UserManagementView = ({ onBack }: { onBack: () => void }) => {
  const users = [
    { id: 1, name: 'Alex Rivera', email: 'alex@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Sarah Chen', email: 'sarah@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Viewer', status: 'Offline' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'David Kim', email: 'david@example.com', role: 'Viewer', status: 'Active' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-6xl mx-auto">
        <BackButton onClick={onBack} />
        <div className="flex justify-between items-center mb-8">
          <PageHeader title="User Management" subtitle="Manage system access and permissions" />
          <button className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-brand-500/20">
            Add User
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-slate-800 flex items-center gap-4">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search users..." 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-950/50 text-slate-400 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-semibold">User</th>
                  <th className="px-6 py-4 font-semibold">Role</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-800/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center font-bold text-sm mr-3 border border-slate-700 group-hover:border-brand-500/50 group-hover:text-brand-400 transition-colors">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-slate-200">{user.name}</div>
                          <div className="text-slate-500 text-sm">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === 'Active' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                          : 'bg-slate-700/50 text-slate-400 border border-slate-600'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${user.status === 'Active' ? 'bg-emerald-400' : 'bg-slate-400'}`}></div>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-500 hover:text-slate-300 transition-colors p-1 hover:bg-slate-800 rounded">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminDashboardView = ({ onBack }: { onBack: () => void }) => {
  const stats = [
    { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', trend: 'up' },
    { label: 'Active Users', value: '2,350', change: '+180.1%', trend: 'up' },
    { label: 'Bounce Rate', value: '12.23%', change: '-4.5%', trend: 'down' },
    { label: 'Active Sessions', value: '573', change: '+19%', trend: 'up' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-6xl mx-auto">
        <BackButton onClick={onBack} />
        <PageHeader title="Admin Dashboard" subtitle="System overview and performance metrics" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors">
              <p className="text-sm font-medium text-slate-400">{stat.label}</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-100">{stat.value}</span>
                <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                  stat.trend === 'up' || stat.trend === 'down' ? 'text-emerald-400 bg-emerald-400/10' : 'text-slate-400'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl h-96 flex flex-col">
            <div className="p-6 border-b border-slate-800">
              <h3 className="text-lg font-semibold text-slate-100">Revenue Overview</h3>
            </div>
            <div className="flex-grow p-4">
              <TrendChart />
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-96 flex flex-col">
            <h3 className="text-lg font-semibold text-slate-100 mb-4">Recent Activity</h3>
            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-800">
                  <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                  <div className="flex-grow">
                    <p className="text-sm text-slate-200">New user registration <span className="text-brand-400 font-medium">@user_{i}</span></p>
                    <p className="text-xs text-slate-500">2 minutes ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnalyticsView = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-6xl mx-auto">
        <BackButton onClick={onBack} />
        <PageHeader title="Analytics" subtitle="Deep dive into your data" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
              <Eye className="w-24 h-24 text-brand-500" />
            </div>
            <h3 className="text-slate-400 font-medium mb-1">Total Views</h3>
            <p className="text-3xl font-bold text-slate-100">1.2M</p>
            <div className="mt-4 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-brand-500 w-3/4"></div>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
              <MousePointer2 className="w-24 h-24 text-purple-500" />
            </div>
            <h3 className="text-slate-400 font-medium mb-1">Click Rate</h3>
            <p className="text-3xl font-bold text-slate-100">3.45%</p>
            <div className="mt-4 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-1/2"></div>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
              <TrendingUp className="w-24 h-24 text-emerald-500" />
            </div>
            <h3 className="text-slate-400 font-medium mb-1">Conversion</h3>
            <p className="text-3xl font-bold text-slate-100">2.1%</p>
            <div className="mt-4 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-1/4"></div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
          <h3 className="text-lg font-semibold text-slate-100 mb-6">Traffic Sources (Last 7 Days)</h3>
          <div className="h-64 flex items-end justify-between gap-4">
            {[45, 70, 30, 85, 55, 60, 90].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end group cursor-pointer h-full">
                <div 
                  className="w-full bg-slate-800 rounded-t-sm hover:bg-brand-500 transition-all duration-300 relative"
                  style={{ height: `${h}%` }}
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap border border-slate-700 shadow-xl pointer-events-none translate-y-2 group-hover:translate-y-0">
                    {h * 100} Visits
                  </div>
                </div>
                <div className="text-center text-xs text-slate-500 mt-3 font-mono">Day {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsView = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-4xl mx-auto">
        <BackButton onClick={onBack} />
        <PageHeader title="Settings" subtitle="Configure your application preferences" />

        <div className="flex flex-col gap-6">
          {/* Profile Section */}
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <User className="w-5 h-5 text-brand-400" />
              <h3 className="text-lg font-medium text-slate-100">Profile Settings</h3>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">First Name</label>
                  <input type="text" defaultValue="Admin" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-200 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Last Name</label>
                  <input type="text" defaultValue="User" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-200 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Email Address</label>
                <input type="email" defaultValue="admin@startup002.com" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-200 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all" />
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <Shield className="w-5 h-5 text-brand-400" />
              <h3 className="text-lg font-medium text-slate-100">Security & Privacy</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800">
                <div>
                  <div className="text-slate-200 font-medium">Two-Factor Authentication</div>
                  <div className="text-slate-500 text-sm">Add an extra layer of security</div>
                </div>
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer translate-x-6 border-brand-500"/>
                  <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-brand-500 cursor-pointer"></label>
                </div>
              </div>
              <button className="flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 font-medium mt-2 transition-colors">
                <Key className="w-4 h-4" /> Change Password
              </button>
            </div>
          </section>

          {/* Notifications Section */}
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <Bell className="w-5 h-5 text-brand-400" />
              <h3 className="text-lg font-medium text-slate-100">Notifications</h3>
            </div>
            <div className="space-y-3">
              {['Email Alerts', 'Push Notifications', 'Weekly Reports'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border border-slate-600 bg-slate-950 flex items-center justify-center group-hover:border-brand-500 transition-colors">
                    <input type="checkbox" className="appearance-none checked:bg-brand-500 w-3 h-3 rounded-sm transition-colors" defaultChecked />
                  </div>
                  <span className="text-slate-300 group-hover:text-slate-100 transition-colors">{item}</span>
                </label>
              ))}
            </div>
          </section>
        </div>
        
        <div className="mt-8 flex justify-end gap-4">
          <button className="px-6 py-2 rounded-lg text-slate-400 hover:bg-slate-900 transition-colors">Cancel</button>
          <button className="px-6 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-500 transition-colors font-medium shadow-lg shadow-brand-500/20">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

// --- Main App Controller ---

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingView onEnter={() => setCurrentView('menu')} />;
      case 'menu':
        return <MenuView onNavigate={setCurrentView} />;
      case 'users':
        return <UserManagementView onBack={() => setCurrentView('menu')} />;
      case 'admin':
        return <AdminDashboardView onBack={() => setCurrentView('menu')} />;
      case 'analytics':
        return <AnalyticsView onBack={() => setCurrentView('menu')} />;
      case 'settings':
        return <SettingsView onBack={() => setCurrentView('menu')} />;
      default:
        return <LandingView onEnter={() => setCurrentView('menu')} />;
    }
  };

  return (
    <div className="font-sans antialiased text-slate-100 bg-slate-950">
      {renderView()}
    </div>
  );
};

export default App;