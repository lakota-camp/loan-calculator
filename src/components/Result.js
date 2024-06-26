import { Stack, Typography } from '@mui/material';
import { React } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);


export const Result = ({ data }) => {
  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;
  const totalLoanMonths = loanTerm * 12; // 60 months = 5 years
  const interestPerMonth = interestRate / 100 / 12;

  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = (monthlyPayment * totalLoanMonths) - loanAmount;

  const pieChartData = {
    labels: ['Principle', 'Interest'],
    datasets: [
      {
        label: 'Ratio of Principle and Interest',
        data: [homeValue, totalInterestGenerated],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
  <Stack gap={3}>
    <Typography textAlign='center' variant='h5'>
    Monthly Payment: {monthlyPayment.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </Typography>
    <Stack direction='row' justifyContent='center'>
      <div>
        <Pie data={pieChartData}></Pie>
      </div>
    </Stack>
  </Stack>

  )
};
