export default function Navbar() {
  const menu = [
    { label: 'Ringkasan', href: '#ringkasan' },
    { label: 'Tambah', href: '#tambah' },
    { label: 'Daftar', href: '#daftar' },
  ]
  return (
    <nav className="navbar">
      <strong>TugasKu</strong>
      <ul>
        {menu.map((m) => (
          <li key={m.href}><a href={m.href}>{m.label}</a></li>
        ))}
      </ul>
    </nav>
  )
}
