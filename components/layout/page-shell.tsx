export function PageShell({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div style={{ paddingBottom: "3rem" }}>{children}</div>;
}
