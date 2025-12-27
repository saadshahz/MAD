import { Redirect } from "expo-router";
import { useContext } from "react";
import Loader from "../components/Loader";
import { AuthContext } from "../context/AuthContext";


export default function Index() {
  const { token, loading } = useContext(AuthContext);

  if (loading) return <Loader />;

  return token ? <Redirect href="/(tabs)" /> : <Redirect href="/login" />;
}
