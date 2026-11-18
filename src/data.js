export const dataAwal = [
  { id: 1, judul: 'Quiz Pemrograman Web', matkul: 'Pemrograman Web', deadline: '2026-11-10', prioritas: 'Tinggi', catatan: 'Materi React: props dan state.', selesai: false },
  { id: 2, judul: 'Laporan Praktikum Basis Data', matkul: 'Basis Data', deadline: '2026-11-14', prioritas: 'Sedang', catatan: 'Buat ERD dan 5 query JOIN.', selesai: false },
  { id: 3, judul: 'Presentasi Rekayasa Perangkat Lunak', matkul: 'RPL', deadline: '2026-11-20', prioritas: 'Sedang', catatan: 'Maksimal 10 slide, bahas use case diagram.', selesai: false },
  { id: 4, judul: 'Makalah Etika Profesi', matkul: 'Etika Profesi', deadline: '2026-11-05', prioritas: 'Rendah', catatan: 'Minimal 8 halaman, format APA.', selesai: true },
]


export const sisaHari = (deadline) => {
  const hariIni = new Date(new Date().toDateString())
  return Math.round((new Date(deadline) - hariIni) / 86400000)
}
export const labelDeadline = (t) => {
  if (t.selesai) return 'Selesai'
  const s = sisaHari(t.deadline)
  if (s < 0) return `Terlambat ${-s} hari`
  if (s === 0) return 'Hari ini!'
  return `${s} hari lagi`
}

export const BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']


export const formatTanggal = (s) => {
  const [t, b, h] = s.split('-').map(Number)
  return `${h} ${BULAN[b - 1]} ${t}`
}

export const hariIniStr = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
