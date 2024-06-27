export default function Nav({ children }) {
  return (
    <a className="navigation__link" href="#home">
      {children}
    </a>
  );
}
