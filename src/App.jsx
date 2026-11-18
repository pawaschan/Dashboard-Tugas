import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import StatCard from './components/StatCard'
import ProgressBar from './components/ProgressBar'
import TaskForm from './components/TaskForm'
import SearchFilter from './components/SearchFilter'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import { dataAwal, sisaHari } from './data'


const MAHASISWA = { nama: 'Ahmad Riyadh Fawwaz', nim: '1247050106', prodi: 'Teknik Informatika' }

const KUNCI = 'dashboard-tugas-kuliah-v1'
const dataValid = (d) =>
  Array.isArray(d) && d.every((t) => t && typeof t.judul === 'string' && typeof t.matkul === 'string' && typeof t.deadline === 'string')

export default function App() {
  
  const [tugas, setTugas] = useState(() => {
    try {
      const simpan = JSON.parse(localStorage.getItem(KUNCI))
      return dataValid(simpan) ? simpan : dataAwal
    } catch {
      return dataAwal
    }
  })
  const [kata, setKata] = useState('')
  const [filter, setFilter] = useState('semua')

  useEffect(() => {
    try { localStorage.setItem(KUNCI, JSON.stringify(tugas)) } catch {}
  }, [tugas])

  const tambah = (t) => setTugas([...tugas, { ...t, id: Date.now(), selesai: false }])
  const hapus = (id) => setTugas(tugas.filter((t) => t.id !== id))
  const ubahStatus = (id) => setTugas(tugas.map((t) => (t.id === id ? { ...t, selesai: !t.selesai } : t)))

  const tampil = tugas
    .filter((t) => (t.judul + t.matkul).toLowerCase().includes(kata.toLowerCase()))
    .filter((t) => filter === 'semua' || (filter === 'selesai' ? t.selesai : !t.selesai))
    .sort((a, b) => a.selesai - b.selesai || new Date(a.deadline) - new Date(b.deadline))

  const selesai = tugas.filter((t) => t.selesai).length
  const telat = tugas.filter((t) => !t.selesai && sisaHari(t.deadline) < 0).length

  return (
    <>
      <Navbar />
      <main>
        <Header mahasiswa={MAHASISWA} />
        <section id="ringkasan">
          <div className="stats">
            <StatCard label="Total tugas" nilai={tugas.length} />
            <StatCard label="Belum selesai" nilai={tugas.length - selesai} tone="warn" />
            <StatCard label="Terlambat" nilai={telat} tone="bad" />
            <StatCard label="Selesai" nilai={selesai} tone="ok" />
          </div>
          <ProgressBar selesai={selesai} total={tugas.length} />
        </section>
        <section id="tambah">
          <h2>Tambah tugas</h2>
          <TaskForm onTambah={tambah} />
        </section>
        <section id="daftar">
          <h2>Daftar tugas</h2>
          <SearchFilter kata={kata} setKata={setKata} filter={filter} setFilter={setFilter} />
          <TaskList tugas={tampil} onHapus={hapus} onUbahStatus={ubahStatus} />
        </section>
      </main>
      <Footer mahasiswa={MAHASISWA} />
    </>
  )
}