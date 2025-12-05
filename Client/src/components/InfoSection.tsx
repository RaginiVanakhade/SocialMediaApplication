import { FaStar, FaBolt, FaShieldAlt, FaUsers } from "react-icons/fa";
import "../Style/Info.css"

const InfoSection = () => {
  const infoList = [
    {
      icon: <FaStar />,
      title: "Featured",
      description: "Highlighting the most important features."
    },
    {
      icon: <FaBolt />,
      title: "Fast Performance",
      description: "Experience lightning-fast speed and efficiency."
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure",
      description: "Your data is protected with top-level security."
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description: "Built and supported by a strong community."
    }
  ];

  return (
    <div className="sidebar-container">
      <div className="info-list">
        {infoList.map((item, index) => (
          <div className="info-item" key={index}>
            <div className="info-icon">{item.icon}</div>
            <div>
              <h4 className="info-title">{item.title}</h4>
              <p className="info-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
