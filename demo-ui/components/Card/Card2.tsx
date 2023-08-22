import { SneakerCard } from "../causal";
import s from "./Card.module.css";

// This is the same as Card, but we pass the card data in
export function Card2({ card }: { card: SneakerCard | undefined }) {
  return (
    <div className="flex justify-center items-center">
      <div className={s.card}>
        <div className={s.headline}>{card?.headline}</div>
        <div className={s.description}>{card?.productDescription}</div>
        <div className={s.image}>
          <img alt="Sneaker" src="/sneaker.png" />
        </div>
        <div className={s.wrap}>
          <div className={s.price}>$129</div>
          <button
            className={s.button}
            style={{
              color: card?.buttonTextColor,
              background: card?.buttonBackgroundColor,
            }}
          >
            {card?.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
