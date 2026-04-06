export function PageShell({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="page-shell">
      <div className="page-shell__orb page-shell__orb--one" />
      <div className="page-shell__orb page-shell__orb--two" />
      {children}
    </div>
  );
}
