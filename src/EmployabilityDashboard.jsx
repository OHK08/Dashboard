import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import styled from "styled-components";

const data = {
  university_vs_industry_perception: [
    { category: "Universities", percentage: 70 },
    { category: "Companies", percentage: 16 }
  ],
  student_opinions: [
    { name: "CGPA is Insufficient", value: 71 },
    { name: "Prioritize Technical Skills", value: 71 }
  ],
  engineering_employability: {
    not_fit: 94,
    employable: 4.77
  }
};

const COLORS = ["#3498db", "#2980b9", "#1b263b"]; // Shades of blue
const BACKGROUND_COLOR = "#f5f7fa";
const CARD_SHADOW = "0 4px 6px rgba(0,0,0,0.1)";

// Styled Components
const DashboardContainer = styled.div`
  padding: 2rem;
  background: ${BACKGROUND_COLOR};
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2.5rem;
  font-size: 2.5rem;
  font-weight: 600;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: ${CARD_SHADOW};
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h5`
  color: #34495e;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
`;

const StatValue = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  color: ${props => props.color};
`;

const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ChartCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: ${CARD_SHADOW};
`;

const ChartTitle = styled.h5`
  color: #34495e;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
`;

const EmployabilityDashboard = () => {
  return (
    <DashboardContainer>
      <Title>📊 Employability Dashboard</Title>

      {/* Stats Cards */}
      <StatsGrid>
        <StatCard>
          <CardTitle>University Perception</CardTitle>
          <StatValue color="#3498db">70%</StatValue>
        </StatCard>
        <StatCard>
          <CardTitle>Industry Perception</CardTitle>
          <StatValue color="#2980b9">16%</StatValue>
        </StatCard>
        <StatCard>
          <CardTitle>Engineers Fit for Top Jobs</CardTitle>
          <StatValue color="#1b263b">4.77%</StatValue>
        </StatCard>
      </StatsGrid>

      {/* Three Charts Side by Side */}
      <ChartsContainer>
        {/* University vs Industry Perception - Bar Chart */}
        <ChartCard>
          <ChartTitle>University vs. Industry Perception</ChartTitle>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data.university_vs_industry_perception}>
              <XAxis dataKey="category" tick={{ fill: '#7f8c8d' }} />
              <YAxis tick={{ fill: '#7f8c8d' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', boxShadow: CARD_SHADOW }}
                cursor={{ fill: 'rgba(52, 152, 219, 0.1)' }}
              />
              <Bar dataKey="percentage" fill="#3498db" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Students' Opinion - Pie Chart */}
        <ChartCard>
          <ChartTitle>Students' Opinion</ChartTitle>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie 
                data={data.student_opinions} 
                dataKey="value" 
                cx="50%" 
                cy="50%" 
                outerRadius={60}
                label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                labelLine={{ stroke: '#7f8c8d' }}
              >
                {data.student_opinions.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: '8px', boxShadow: CARD_SHADOW }} />
              <Legend verticalAlign="bottom" height={30} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Engineers Employability - Gauge Chart */}
        <ChartCard>
          <ChartTitle>Engineers Employability</ChartTitle>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={[
                  { name: "Not Fit", value: data.engineering_employability.not_fit },
                  { name: "Employable", value: data.engineering_employability.employable }
                ]}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                startAngle={180}
                endAngle={0}
                dataKey="value"
                label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                labelLine={{ stroke: '#7f8c8d' }}
              >
                <Cell fill="#2980b9" />
                <Cell fill="#1b263b" />
              </Pie>
              <Tooltip contentStyle={{ borderRadius: '8px', boxShadow: CARD_SHADOW }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </ChartsContainer>
    </DashboardContainer>
  );
};

export default EmployabilityDashboard;