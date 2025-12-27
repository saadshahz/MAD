import { Redirect } from "expo-router";
import { useContext } from "react";
import Toast from "react-native-toast-message";

import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";

export default function Index(): JSX.Element {
  const { token, loading } = useContext(AuthContext);

  // Show loader while checking auth
  if (loading) {
    return <Loader />;
  }

  // If user is not logged in
  if (!token) {
    return <Redirect href="/login" />;
  }

  // If user is logged in
  return (
    <>
      <Toast />
      <Redirect href="/(tabs)" />
    </>
  );
}
