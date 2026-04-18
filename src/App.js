import "./App.css";
import AddContact from "./Components/AddContacts/AddContact";
import Filter from "./Components/Filter/Filter";
import ContactsList from "./Components/ContactsList/ContactsList";

const App = () => {
  return (
    <div className="app">
      <AddContact />
      
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
