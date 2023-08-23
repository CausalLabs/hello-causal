import Link from "next/link";
import { ReactNode } from "react";

import styles from "./LearnAbout.module.css";

function MenuCard({
  svg,
  pos,
  url,
}: {
  svg: string;
  pos: { left: number; top: number };
  url: string;
}) {
  return (
    <Link href={url}>
      <div
        className={styles.card}
        style={{
          position: "absolute",
          left: pos.left + "px",
          top: pos.top + "px",
        }}
      >
        <img
          src={svg}
          style={{
            maxWidth: "none",
            maxHeight: "none",
            width: "auto",
            height: "auto",
          }}
        ></img>
      </div>
    </Link>
  );
}

export function LearnAbout({ title }: { title: ReactNode }) {
  return (
    <div className={styles["menu-box"]}>
      <div className={styles.menu1}>
        <MenuCard
          url="/an-example-feature"
          svg="/cards/define-feature.svg"
          pos={{ left: 61.07, top: 97.85 }}
        />
        <MenuCard
          url="/managing-features-without-code"
          svg="/cards/manage-feature.svg"
          pos={{ left: 60.48, top: 201.22 }}
        />
        <MenuCard
          url="/creating-experiment"
          svg="/cards/set-up-experiment.svg"
          pos={{ left: 60.94, top: 336.82 }}
        />
        <MenuCard
          url="/viewing-the-data-warehouse"
          svg="/cards/view-data-warehouse.svg"
          pos={{ left: 60.34, top: 470.82 }}
        />
      </div>
      <div className={styles.menu2}>
        <MenuCard
          url="/reference-fdl-from-javascript"
          svg="/cards/feature-react.svg"
          pos={{ left: 357.38, top: 102.38 }}
        />
        <MenuCard
          url="/tracking-impressions-and-events"
          svg="/cards/track-events.svg"
          pos={{ left: 360, top: 259.14 }}
        />
        <MenuCard
          url="/running-ml-models"
          svg="/cards/link-sagemaker.svg"
          pos={{ left: 360, top: 407.14 }}
        />
      </div>
      {title}
    </div>
  );
}
