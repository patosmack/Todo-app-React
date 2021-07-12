export default function Loader() {
  return (
    <div className="empty-list empty-list--loading"> 
      <p className="t-empty">Todo list is loading, please wait 🚶...</p>   
      <div className="gooey">
        <span className="dot"></span>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}
