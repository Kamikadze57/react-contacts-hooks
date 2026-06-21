import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/operations";
import AuthForm from "./Components/AuthForm/AuthForm";
import AddContact from "./Components/AddContacts/AddContact";
import Filter from "./Components/Filter/Filter";
import ContactsList from "./Components/ContactsList/ContactsList";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className="app">
      {!isLoggedIn ? (
        <AuthForm />
      ) : (
        <>
          <AddContact />
          <Filter />
          {isLoading && !error && <p className="loading__text">Loading contacts...</p>}
          {error && <p>Error: {error}</p>}
          <ContactsList />
        </>
      )}
    </div>
  );
};

export default App;
