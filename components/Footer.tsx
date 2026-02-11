export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Elite Cafe</h3>
        <p>Luxury Coffee Experience in Los Angeles</p>

        <div className="footer-links">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Elite Cafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
