export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" container mx-auto my-5 text-center">
      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
        Rick and Morty API{" "}
      </h1>
      {children}
    </main>
  );
};
