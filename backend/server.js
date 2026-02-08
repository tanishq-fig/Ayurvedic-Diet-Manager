const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ayurusers', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}));

const Patient = mongoose.model('Patient', new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  phone: String,
  email: String,
  address: String,
  medicalHistory: String,
  currentMedications: String,
  allergies: String,
  dietaryHabits: [String],
  bowelMovements: String,
  waterIntake: String,
  sleepPattern: String,
  stressLevel: String,
  exerciseFrequency: String,
  smoking: String,
  alcohol: String,
  pregnancyStatus: String,
  bloodPressure: String,
  bloodSugar: Number,
  weight: Number,
  height: Number,
  bmi: String,
  chiefComplaint: String,
  symptoms: String,
  treatmentGoal: String
}));


// Add new patient
app.post('/api/patients', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ message: 'Patient added successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add patient.' });
  }
});

// Get all patients
app.get('/api/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch patients.' });
  }
});

// User registration
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register user.' });
  }
});

// User login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    res.json({ message: 'Login successful.', user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: 'Failed to login.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
