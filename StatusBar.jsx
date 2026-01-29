const StatusBar = ({ online }) => {
  return (
    <div className={`status-bar ${online ? "status-online" : "status-offline"}`}>
      {online ? "Online" : "Offline"}
    </div>
  );
};

export default StatusBar;
