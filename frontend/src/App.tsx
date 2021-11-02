import Datatable from "components/DataTable";
import Footer from "components/Footer";
import Navbar from "components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <div className="container" >
        <h1 className="text-primary">Olá mundo</h1>
        <Datatable />
      </div>
      <Footer />

      </>
  );
}

export default App;
