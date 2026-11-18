export default function Header({ mahasiswa }) {
  return (
    <header className="hero">
      <h1>Dashboard Tugas Kuliah</h1>
      <p>{mahasiswa.nama} · NIM {mahasiswa.nim} · {mahasiswa.prodi}</p>
    </header>
  )
}
