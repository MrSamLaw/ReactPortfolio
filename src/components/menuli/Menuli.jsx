export default function Menuli({ menuOpen, setMenuOpen, children }) {
  return <li onClick={() => setMenuOpen(!menuOpen)}>{children}</li>;
}
