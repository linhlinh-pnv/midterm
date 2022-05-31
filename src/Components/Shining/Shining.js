import './Shining.css'
function Shining(props) {
  return (
    <div class="Card">
      <div class="img">
        <img src={props.image} className = 'shining_img'></img>
      </div>
      <div className = 'shining_img'>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}
export default Shining;
