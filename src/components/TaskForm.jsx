import { useState } from 'react'
import Button from './Button'
import TanggalPicker from './TanggalPicker'
import { hariIniStr } from '../data'

const buatKosong = () => ({ judul: '', matkul: '', deadline: hariIniStr(), prioritas: 'Sedang', catatan: '' })

export default function TaskForm({ onTambah }) {
  const [form, setForm] = useState(buatKosong)
  const [error, setError] = useState('')
  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const kirim = (e) => {
    e.preventDefault()
    if (!form.judul.trim() || !form.matkul.trim()) {
      setError('Judul dan mata kuliah wajib diisi.')
      return
    }
    onTambah(form)
    setForm(buatKosong())
    setError('')
  }

  return (
    <form className="form" onSubmit={kirim}>
      <input className="dua" name="judul" placeholder="Judul tugas" value={form.judul} onChange={ubah} />
      <input className="dua" name="matkul" placeholder="Mata kuliah" value={form.matkul} onChange={ubah} />
      <div className="tiga">
        <small className="label">Deadline</small>
        <TanggalPicker value={form.deadline} onChange={(d) => setForm({ ...form, deadline: d })} />
      </div>
      <select name="prioritas" value={form.prioritas} onChange={ubah} aria-label="Prioritas">
        <option>Tinggi</option>
        <option>Sedang</option>
        <option>Rendah</option>
      </select>
      <input className="tiga" name="catatan" placeholder="Catatan (opsional)" value={form.catatan} onChange={ubah} />
      <Button type="submit">Simpan tugas</Button>
      {error && <p className="error">{error}</p>}
    </form>
  )
}
