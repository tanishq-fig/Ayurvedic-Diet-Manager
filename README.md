# 🌿 Ayurvedic Diet Manager

A comprehensive healthcare management system designed specifically for Ayurvedic practitioners, doctors, and dietitians to manage patient records, create personalized diet charts, and track treatment outcomes.

## ✨ Features

### 🔐 Authentication & User Management
- **Role-based Login**: Separate interfaces for Doctors and Dietitians
- **Secure Authentication**: Modern login system with user type selection
- **User Profile Management**: Personalized dashboard with user information

### 📊 Dashboard & Analytics
- **Real-time Statistics**: Patient counts, active charts, completed sessions
- **Interactive Charts**: Patient growth trends, status distribution
- **Quick Actions**: Easy access to all major functions
- **Recent Activity**: Latest patient updates and appointments

### 👥 Patient Management
- **Comprehensive Patient Forms**: Multi-step form with 5 detailed sections
  - Personal Information
  - Medical History
  - Lifestyle & Dietary Habits
  - Vital Signs & Measurements
  - Current Condition & Goals
- **Patient Records**: Searchable database with detailed patient profiles
- **Medical History Tracking**: Complete health records and treatment history
- **Status Management**: Active, completed, and pending patient tracking

### 🍽️ Food Database
- **Ayurvedic Food Properties**: Detailed information on Rasa, Virya, Vipaka, Guna
- **Nutritional Information**: Calories, macronutrients, and health benefits
- **Advanced Filtering**: Filter by cooling/heating, taste, digestibility
- **Search Functionality**: Find foods by name, category, or properties
- **Grid/List Views**: Flexible viewing options for different preferences

### 📋 Diet Chart Generator
- **Personalized Meal Plans**: AI-driven diet recommendations based on patient data
- **Goal-oriented Planning**: Weight loss, gain, digestion, energy, detox, immunity
- **Editable Charts**: Modify meal plans with real-time updates
- **PDF Export**: Professional diet charts for patient handouts
- **Print Support**: High-quality printing for physical copies

### 📈 Reports & Analytics
- **Comprehensive Reports**: Overview, patient analytics, treatment outcomes, revenue
- **Interactive Visualizations**: Charts, graphs, and statistical analysis
- **Performance Metrics**: Success rates, patient satisfaction, revenue tracking
- **Export Capabilities**: Download reports in various formats
- **Time Period Analysis**: Weekly, monthly, quarterly, and yearly reports

## 🎨 Design Philosophy

### Ayurvedic Theme
- **Natural Color Palette**: Green shades (#4CAF50, #2E7D32) representing health and nature
- **Earthy Accents**: Brown, beige, saffron, and light orange tones
- **Soft Backgrounds**: Off-white and pale green for calming effect
- **Traditional Typography**: Playfair Display for headings with Poppins for body text

### User Experience
- **Smooth Animations**: Framer Motion for fluid transitions and micro-interactions
- **Hover Effects**: Interactive elements with visual feedback
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: High contrast ratios and keyboard navigation support

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ayurvedic-diet-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Demo Credentials
- **Email**: Use any valid email format
- **Password**: Use any password
- **User Type**: Select Doctor or Dietitian

## 🛠️ Technology Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing and navigation
- **Framer Motion**: Advanced animations and transitions
- **React Hook Form**: Form management and validation
- **Recharts**: Interactive charts and data visualization

### Styling
- **CSS3**: Custom CSS with CSS variables for theming
- **Responsive Design**: Mobile-first approach with flexible layouts
- **CSS Grid & Flexbox**: Modern layout techniques
- **Custom Animations**: Smooth transitions and hover effects

### Utilities
- **date-fns**: Date manipulation and formatting
- **jsPDF**: PDF generation for diet charts
- **html2canvas**: Screenshot capture for PDF export
- **Lucide React**: Beautiful, customizable icons

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layouts with touch-friendly interactions
- **Mobile**: Collapsible sidebar and optimized forms

## 🎯 Key Components

### Core Components
- **Login**: Authentication with role selection
- **Sidebar**: Navigation with user profile and menu items
- **Dashboard**: Overview with statistics and recent activity
- **PatientForm**: Multi-step patient registration form
- **PatientRecords**: Searchable patient database with detailed views
- **FoodDatabase**: Comprehensive food information system
- **DietChartGenerator**: AI-powered meal plan creation
- **Reports**: Analytics and performance tracking

### Interactive Features
- **Real-time Search**: Instant filtering and search results
- **Drag & Drop**: Intuitive file uploads and organization
- **Modal Dialogs**: Detailed views without page navigation
- **Form Validation**: Real-time error checking and user feedback
- **Progress Indicators**: Visual feedback for long-running operations

## 🔧 Customization

### Theming
The application uses CSS custom properties for easy theming:
```css
:root {
  --primary-green: #4CAF50;
  --primary-green-dark: #2E7D32;
  --accent-brown: #8D6E63;
  --accent-saffron: #FFB74D;
  /* ... more variables */
}
```

### Adding New Features
1. Create new components in the `src/components/` directory
2. Add routes in `App.js`
3. Update the sidebar navigation
4. Follow the existing design patterns and styling conventions

## 📊 Data Management

### Mock Data
The application includes comprehensive mock data for:
- Patient records with medical history
- Food database with Ayurvedic properties
- Treatment outcomes and analytics
- User profiles and authentication

### State Management
- **Local State**: React hooks for component-level state
- **Form State**: React Hook Form for complex form management
- **Global State**: Context API for user authentication and preferences

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The built files in the `build/` directory can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Ayurvedic Principles**: Based on traditional Ayurvedic medicine and dietary guidelines
- **Modern UI/UX**: Inspired by contemporary healthcare applications
- **Accessibility**: Following WCAG guidelines for inclusive design
- **Performance**: Optimized for fast loading and smooth interactions


**Built with ❤️ for the Ayurvedic healthcare community**
