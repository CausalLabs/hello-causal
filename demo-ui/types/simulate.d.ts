export type SimulateRequest = {
  action: "simulate";
  features: [
    {
      impressions: number;
      name: string;
      args?: { name: string; values: unknown[]; weights: number[] }[];
      clicks: [
        {
          name: string;
          controlWeight: number;
          variantWeight: number;
          args?: {
            name: string;
            from: "outputArray";
            fromName: string;
            controlWeights: number[];
            variantWeights: number[];
          }[];
        }
      ];
    }
  ];
};
