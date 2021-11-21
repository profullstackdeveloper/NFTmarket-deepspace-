import lunasphere from "../assets/img/search01/bumblebee.png";
import CardButton from "./Button/CardButton";
const Card = () => {
  return (
    <div className="custom_card">
      <div class="card__preview">
        <span class="img-placeholder">Hexomorphic Fiber</span>
        <img src={lunasphere} alt="Card preview" />
        <div class="card-info">
          <div class="card-info-col">
            <div class="card-info-desc">top bid</div>
            <div class="card-info-item">2.72 DXO</div>
          </div>
          <div class="card-info-col">
            <div class="card-info-desc">End In</div>
            <div class="card-info-item">03:25</div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="col">
          <span>Creator</span>
          <a href="" class="card-link">
            @lunasphere
          </a>
        </div>
        <div class="col">
            <CardButton name="start Bid"/>
        </div>
      </div>
    </div>
  );
};

export default Card;
