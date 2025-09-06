import "./index.css"
const AddButton = ({ title, icon ,className,onClick}) => {
  return (
    <button className={` add-button ${className}`} onClick={onClick}>
      <i>
        {icon}
      </i>
      <span>{title}</span>
    </button>
  );
};
export { AddButton };
