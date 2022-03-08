import ChevronDownIcon from "../../../icons/Chevron/Chevron";
import listIcon from "../../../../assets/images/list-icon.svg";

const Dropdown = ({ title, items, showContent, handleTitleClick }: any) => {
  return (
    <div className="dropdown" onClick={() => handleTitleClick("who")}>
      <div className="dropdown-title">
        {title}
        <ChevronDownIcon />
      </div>

      <div
        className={`dropdown-container ${
          showContent ? "dropdown-is-shown" : ""
        }`}
      >
        {items.map((item: any, index: number) => {
          const key: string = `dropdown-item-${title}-${index}`;
          if (item.isDivider) {
            return <div key={key} className="dropdown-divider"></div>;
          }

          return (
            <a key={key} href={item.href} className="dropdown-content-item">
              {item.icon && (
                <img src={listIcon} alt="list-icon" className="dropdown-icon" />
              )}
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
