import TaskItem from './TaskItem'

export default function TaskList({ tugas, onHapus, onUbahStatus }) {
  if (tugas.length === 0) {
    return <p className="kosong">Tidak ada tugas yang cocok. Tambahkan tugas baru atau ubah pencarian.</p>
  }
  return (
    <ul className="list">
      {tugas.map((t) => (
        <TaskItem key={t.id} tugas={t} onHapus={onHapus} onUbahStatus={onUbahStatus} />
      ))}
    </ul>
  )
}
