import { SimulateRequest } from "../types/simulate";

export const simulateChoices = [
  "CrossSellFeature",
  "SneakerCard",
  "Store_Hero",
] as const;

export type SimulateChoice = (typeof simulateChoices)[number];

export function getSimulateJSON(
  featureName: SimulateChoice,
  controlWeight: number,
  variantWeight: number
): SimulateRequest {
  switch (featureName) {
    case "SneakerCard":
      return {
        action: "simulate",
        features: [
          {
            name: featureName,
            impressions: 1000,
            clicks: [
              {
                name: "AddToCart",
                controlWeight,
                variantWeight,
              },
            ],
          },
        ],
      };
    case "CrossSellFeature":
      return {
        action: "simulate",
        features: [
          {
            name: "CrossSellFeature",
            impressions: 1000,
            args: [
              {
                name: "productName",
                values: ["bananas", "milk", "bread"],
                weights: [1, 1, 1],
              },
              {
                name: "dayOfWeek",
                values: [0, 1, 2, 3, 4, 5, 6],
                weights: [1, 1, 1, 1, 1, 1, 1],
              },
            ],
            clicks: [
              {
                name: "CrossSellItemClick",
                args: [
                  {
                    name: "productName",
                    from: "outputArray",
                    fromName: "results",
                    controlWeights: [3, 2, 1],
                    variantWeights: [5, 1, 0],
                  },
                ],
                controlWeight,
                variantWeight,
              },
            ],
          },
        ],
      };
    case "Store_Hero":
      return {
        action: "simulate",
        features: [
          {
            name: "Store_Hero",
            impressions: 1000,
            clicks: [
              {
                name: "heroClicked",
                controlWeight,
                variantWeight,
              },
            ],
          },
        ],
      };
  }
}
