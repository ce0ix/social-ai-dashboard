import { useState } from 'react'
import axios from 'axios'
import TrendChart from '../components/TrendChart'

export default function Home() {
  const [hashtags, setHashtags] = useState('#AI,#Tech,#News')
  const [trends, setTrends] = useState([])

  const fetchTrends = async () => {
    const res = await axios.post('http://localhost:8000/api/trends', {
      hashtags: hashtags.split(',')
    })
    setTrends(res.data.trends)
  }

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', fontFamily:'sans-serif' }}>
      <h1>AI Social Media Trend Dashboard</h1>
      <input value={hashtags} onChange={e => setHashtags(e.target.value)} style={{ width:'100%', padding:'0.5rem' }} />
      <button onClick={fetchTrends} style={{ margin:'1rem 0', padding:'0.5rem 1rem' }}>Get Trends</button>
      <TrendChart trends={trends} />
    </div>
  )
}
