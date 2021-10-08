import "./NavFooter.css";

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <a onClick={() => props.setShowCalender(true)}>
          <span className="iconify" data-icon="uil:calender"></span>
          <span className="text">View History</span>
        </a>
        <a onClick={() => props.setShowNew(true)}>
          <span
            className="iconify"
            data-icon="ant-design:file-add-outlined"
          ></span>
          <span className="text">Add New</span>
        </a>
      </ul>
    </nav>
  );
}
