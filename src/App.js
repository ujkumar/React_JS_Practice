import Expenses from './ExpensesComponent/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Green Vegetable',
      amount: 194.12,
      date: new Date(2022, 7, 14),
    },
    { id: 'e2', title: 'OATs', amount: 799.49, date: new Date(2022, 2, 12) },
    {
      id: 'e3',
      title: 'Oils',
      amount: 298.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'Electricity bill',
      amount: 490.86,
      date: new Date(2022, 5, 12),
    },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;