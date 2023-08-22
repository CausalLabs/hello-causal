import { qb, useFeature } from "../causal";
import { Grid } from "../Grid/Grid";
import s from "./Card.module.css";

export function Card() {
  const card = useFeature(qb().getSneakerCard());

  if (card == "OFF") return <></>;

  return (
    <div className="flex justify-center items-center">
      <div className={s.card}>
        <div className={s.headline}>{card?.headline}</div>

        {/* Hardcoded description */}
        <div className={s.description}>
          Bright, red sneakers for your dynamic, elegant dash.
        </div>

        {/* Causal enabled description */}
        {/* 
            <div className={s.description}>{card?.productDescription} </div> 
        */}

        <div className={s.image}>
          <img className={s.image} alt="Sneaker" src="/sneaker.png" />
        </div>
        <div className={s.wrap}>
          <div className={s.price}>$129</div>
          <button
            className={s.button}
            style={{
              color: card?.buttonTextColor,
              background: card?.buttonBackgroundColor,
            }}
            onClick={() => card?.signalAddToCart()}
          >
            {card?.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export function CardWithGrid(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Grid {...props}>
      <Card />
    </Grid>
  );
}
