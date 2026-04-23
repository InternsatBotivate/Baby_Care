export const mockPatients = [
  {
    id: 'P001',
    name: 'Priya Sharma',
    contact: '+91 98765 43210',
    type: 'Pregnant',
    dueDate: '2026-05-15',
    status: 'Enquiry',
    erpId: 'ERP-7782',
    motherDOB: '1995-08-12',
    motherAge: 28,
  },
  {
    id: 'P002',
    name: 'Anjali Gupta',
    contact: '+91 87654 32109',
    type: 'Newborn',
    birthDate: '2026-04-10',
    status: 'Enquiry',
    erpId: 'ERP-8891',
    motherDOB: '1992-03-24',
    motherAge: 32,
  },
  {
    id: 'P003',
    name: 'Meera Reddy',
    contact: '+91 76543 21098',
    type: 'Newborn',
    birthDate: '2026-03-20',
    status: 'Active',
    erpId: 'ERP-6623',
    planId: 'PLAN-0-2YR',
    startDate: '2026-03-22',
    motherDOB: '1998-11-05',
    motherAge: 25,
    babyName: 'Aryan V.',
    gender: 'Male'
  }
];

export const membershipPlan = {
  id: 'PLAN-0-2YR',
  name: 'CarePlus Membership — 0 to 2 years',
  price: 24999,
  durationMonths: 24,
  phases: [
    {
      id: 1,
      name: 'Newborn care',
      range: '0-1 month',
      color: 'phase-1',
      benefits: [
        { name: 'Newborn checkups', count: 4, type: 'count' },
        { name: 'Breastfeeding support', count: Infinity, type: 'unlimited' },
        { name: 'Vaccination guidance', count: Infinity, type: 'unlimited' },
        { name: '24x7 support', count: Infinity, type: 'unlimited' },
        { name: 'Home visit', count: 1, type: 'count' },
      ]
    },
    {
      id: 2,
      name: 'Growth & nutrition',
      range: '1-6 months',
      color: 'phase-2',
      benefits: [
        { name: 'Regular checkups', count: 5, type: 'count' },
        { name: 'Vaccinations', count: 6, type: 'count' },
        { name: 'Nutrition guidance', count: Infinity, type: 'unlimited' },
        { name: 'Dev. tracking', count: Infinity, type: 'unlimited' },
        { name: 'Parent counselling', count: 1, type: 'count' },
      ]
    },
    {
      id: 3,
      name: 'Developmental care',
      range: '6-12 months',
      color: 'phase-3',
      benefits: [
        { name: 'Regular checkups', count: 4, type: 'count' },
        { name: 'Vaccinations', count: 4, type: 'count' },
        { name: 'Milestone assessment', count: 2, type: 'count' },
        { name: 'Diet & nutrition plan', count: Infinity, type: 'unlimited' },
        { name: 'Expert consultations', count: 3, type: 'count' },
      ]
    },
    {
      id: 4,
      name: 'Healthy toddler',
      range: '12-24 months',
      color: 'phase-4',
      benefits: [
        { name: 'Regular checkups', count: 4, type: 'count' },
        { name: 'Vaccinations', count: 4, type: 'count' },
        { name: 'Growth tracking', count: Infinity, type: 'unlimited' },
        { name: 'Behavioural guidance', count: 1, type: 'count' },
        { name: 'Emergency priority', count: Infinity, type: 'unlimited' },
      ]
    }
  ],
  alwaysOn: [
    { name: '24x7 pediatric support', detail: 'Unlimited calls, any time' },
    { name: 'Digital health records', detail: 'Lifetime access via app' },
    { name: 'Lab & pharmacy discounts', detail: '20% lab · 15% pharmacy' },
    { name: 'Loyalty points program', detail: 'Earn on every visit/test' },
    { name: 'Parent app access', detail: 'iOS + Android' },
    { name: 'Family & sibling discount', detail: 'Special rates for family' },
  ]
};

export const mockAppointments = [
  { id: 'A001', patient: 'Meera Reddy', doctor: 'Dr. Sarah Wilson (Pediatrician)', date: '2026-04-24', time: '10:00 AM', status: 'Confirmed', type: 'Physical' },
  { id: 'A002', patient: 'Anjali Gupta', doctor: 'Dr. James Bond (Nutritionist)', date: '2026-04-25', time: '02:30 PM', status: 'Pending', type: 'Video' },
  { id: 'A003', patient: 'Priya Sharma', doctor: 'Dr. Emily Blunt (OB-GYN)', date: '2026-04-26', time: '11:15 AM', status: 'Confirmed', type: 'Physical' },
];

export const healthRecords = [
  { id: 'R001', date: '2026-04-10', title: 'Birth Certificate', type: 'PDF', size: '1.2 MB' },
  { id: 'R002', date: '2026-04-12', title: 'Initial Vaccination Card', type: 'Image', size: '2.4 MB' },
  { id: 'R003', date: '2026-04-15', title: 'Newborn Screening Results', type: 'PDF', size: '0.8 MB' },
];

export const healthTips = [
  { id: 1, title: 'Breastfeeding Basics', category: 'Nutrition', age: '0-1mo', color: 'blue' },
  { id: 2, title: 'Safe Sleeping Positions', category: 'Safety', age: '0-3mo', color: 'green' },
  { id: 3, title: 'Recognizing Baby Cries', category: 'Behavior', age: '0-6mo', color: 'orange' },
];

export const labOrders = [
  { id: 'L001', test: 'Blood Grouping', patient: 'Baby of Meera', date: '2026-04-10', status: 'Ready' },
  { id: 'L002', test: 'Bilirubin Test', patient: 'Baby of Anjali', date: '2026-04-11', status: 'Processing' },
];
