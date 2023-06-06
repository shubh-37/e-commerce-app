import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-heading">Connect With Us </div>
      <ul className="footer list-non-bullet">
        <li className="list-item-inline">
          <a href="https://github.com/shubh-37" className="link">
            GitHub
          </a>
        </li>
        <li className="list-item-inline">
          <a href="https://twitter.com/shubh_37" className="link">
            Twitter
          </a>
        </li>
        <li className="list-item-inline">
          <a
            href="https://www.linkedin.com/in/shubh-arya-08b54b200/"
            className="link"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}
