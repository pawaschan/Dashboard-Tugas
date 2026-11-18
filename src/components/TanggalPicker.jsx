import { BULAN } from '../data'


export default function TanggalPicker({ value, onChange }) {
  const [th, bl, tg] = value.split('-').map(Number)
  const tahunMulai = new Date().getFullYear()
  const daftarTahun = [tahunMulai, tahunMulai + 1, tahunMulai + 2, tahunMulai + 3]
  const jumlahHari = new Date(th, bl, 0).getDate()

  const kirim = (t, b, h) => {
    const hari = Math.min(h, new Date(t, b, 0).getDate())
    onChange(`${t}-${String(b).padStart(2, '0')}-${String(hari).padStart(2, '0')}`)
  }

  return (
    <div className="tanggal">
      <select value={tg} onChange={(e) => kirim(th, bl, Number(e.target.value))} aria-label="Tanggal">
        {Array.from({ length: jumlahHari }, (_, i) => i + 1).map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
      <select value={bl} onChange={(e) => kirim(th, Number(e.target.value), tg)} aria-label="Bulan">
        {BULAN.map((nama, i) => (
          <option key={nama} value={i + 1}>{nama}</option>
        ))}
      </select>
      <select value={th} onChange={(e) => kirim(Number(e.target.value), bl, tg)} aria-label="Tahun">
        {daftarTahun.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
    </div>
  )
}
