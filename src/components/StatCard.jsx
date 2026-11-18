export default function StatCard({ label, nilai, tone = 'default' }) {
  return (
    <div className={`stat stat-${tone}`}>
      <span className="stat-nilai">{nilai}</span>
      <span>{label}</span>
    </div>
  )
}
