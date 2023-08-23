import { qb, useFeature } from "../causal";

import styles from "./CardData.module.css";

export function CardData(props: React.HTMLAttributes<HTMLDivElement>) {
  const card = useFeature(qb().getSneakerCard());
  if (card == "OFF") return <></>;

  return (
    <div {...props}>
      <table className={styles.table} cellSpacing="10px">
        <thead>
          <tr>
            <th>OUTPUT</th>
            <th>VALUE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>Headline</span>
            </td>
            <td data-testid="headlineCell">{card?.headline}</td>
          </tr>
          <tr>
            <td>
              <span>Product Description</span>
            </td>
            <td data-testid="descriptionCell">{card?.productDescription}</td>
          </tr>
          <tr>
            <td>
              <span>Button Text</span>
            </td>
            <td data-testid="buttonTextCell">{card?.buttonText}</td>
          </tr>
          <tr>
            <td>
              <span>Button Text Color</span>
            </td>
            <td data-testid="fontColorCell">{card?.buttonTextColor}</td>
          </tr>
          <tr>
            <td>
              <span>Button Background Color</span>
            </td>
            <td data-testid="backgroundColorCell">
              {card?.buttonBackgroundColor}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
