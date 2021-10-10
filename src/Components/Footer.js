import "./NavFooter.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <span>Copyright &copy;</span> Ran's Sticky Notes 2021
      </div>
      <div className="footer">
        <div>
          <a
            id="profile-link"
            href="https://github.com/wwren/Sticky-Notes"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github">
              <span> GitHub</span>
            </i>
          </a>
        </div>
        <div>
          <a
            id="profile-link"
            href="https://www.linkedin.com/in/ding-ran/"
            target="_blank>"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin-square">
              <span> Linkedin</span>
            </i>
          </a>
        </div>
      </div>
    </footer>
  );
}
