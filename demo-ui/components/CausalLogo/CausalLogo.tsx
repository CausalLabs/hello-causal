export function CausalLogo(props: React.HTMLAttributes<HTMLImageElement>) {
  const imgProps = { ...props };
  return <img src="/causal-logo.svg" alt="Causal Icon" {...imgProps} />;
}
