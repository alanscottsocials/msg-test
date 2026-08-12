function App() {
  return (
    <main className="w-full min-h-screen">
      <img
        src="/mbbs-mobile.jpg"
        alt="Mobile image"
        className="block w-full md:hidden"
      />
      <img
        src="/mbbs-desktop.jpg"
        alt="Desktop image"
        className="hidden w-full md:block"
      />
    </main>
  );
}

export default App;
