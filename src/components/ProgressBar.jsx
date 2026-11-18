export default function ProgressBar({ selesai, total }) {
  const persen = total === 0 ? 0 : Math.round((selesai / total) * 100)
  return (
    <div className="progress">
      <div className="progress-info"><span>Progres semester ini</span><strong>{persen}%</strong></div>
      <div className="progress-track"><div className="progress-isi" style={{ width: `${persen}%` }} /></div>
    </div>
  )
}
