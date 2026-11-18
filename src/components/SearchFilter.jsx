export default function SearchFilter({ kata, setKata, filter, setFilter }) {
  const pilihan = [
    { nilai: 'semua', label: 'Semua' },
    { nilai: 'belum', label: 'Belum selesai' },
    { nilai: 'selesai', label: 'Selesai' },
  ]
  return (
    <div className="filter">
      <input placeholder="Cari judul atau mata kuliah..." value={kata} onChange={(e) => setKata(e.target.value)} />
      <div className="chips">
        {pilihan.map((p) => (
          <button key={p.nilai} className={filter === p.nilai ? 'chip aktif' : 'chip'} onClick={() => setFilter(p.nilai)}>
            {p.label}
          </button>
        ))}
      </div>
    </div>
  )
}
