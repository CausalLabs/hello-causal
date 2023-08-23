export function Video({
  href,
  className,
  ...attr
}: { href: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={"shadow-md " + (className ?? "")} {...attr}>
      <video controls poster="/video-player.svg" className="w-full">
        <source src={href} type="video/mp4" />
        Your browser does not support the video tag. Please use a recent version
        of Chrome, Firefox or Safari.
      </video>
    </div>
  );
}
