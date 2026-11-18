import { useState } from 'react'
import Button from './Button'
import { sisaHari, labelDeadline, formatTanggal } from '../data'

export default function TaskItem({ tugas, onHapus, onUbahStatus }) {
  const [detail, setDetail] = useState(false)
  const telat = !tugas.selesai && sisaHari(tugas.deadline) < 0
  const mepet = !tugas.selesai && sisaHari(tugas.deadline) >= 0 && sisaHari(tugas.deadline) <= 3
  const status = tugas.selesai ? 'selesai' : telat ? 'telat' : mepet ? 'mepet' : ''

  return (
    <li className={`item ${status}`}>
      <div className="item-atas">
        <input type="checkbox" checked={tugas.selesai} onChange={() => onUbahStatus(tugas.id)} aria-label={`Tandai ${tugas.judul} selesai`} />
        <div className="item-info">
          <strong>{tugas.judul}</strong>
          <small>{tugas.matkul} · {formatTanggal(tugas.deadline)}</small>
        </div>
        <div className="item-badge">
          <span className={`badge prio-${tugas.prioritas}`}>{tugas.prioritas}</span>
          <span className={`badge ${status}`}>{labelDeadline(tugas)}</span>
        </div>
      </div>
      <div className="item-aksi">
        <Button variant="ghost" onClick={() => setDetail(!detail)}>{detail ? 'Sembunyikan detail' : 'Lihat detail'}</Button>
        <Button variant="danger" onClick={() => onHapus(tugas.id)}>Hapus</Button>
      </div>
      {detail && <p className="catatan">{tugas.catatan || 'Tidak ada catatan.'}</p>}
    </li>
  )
}
