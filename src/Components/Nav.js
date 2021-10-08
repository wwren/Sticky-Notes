import "./NavFooter.css";

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <a onClick={() => props.setShowCalender(true)}>
          <span className="iconify" data-icon="uil:calender"></span>
          <span>View History</span>
        </a>
        <a onClick={() => props.setShowNew(true)}>
          <span
            className="iconify"
            data-icon="ant-design:file-add-outlined"
          ></span>
          <span>Add New</span>
        </a>
      </ul>
    </nav>
  );
}
