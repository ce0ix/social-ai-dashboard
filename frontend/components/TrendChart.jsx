import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

export default function TrendChart({ trends }) {
  return (
    <BarChart width={700} height={300} data={trends}>
      <XAxis dataKey="hashtag" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="score" fill="#0b74de" />
    </BarChart>
  )
}
