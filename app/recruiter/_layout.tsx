import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import useUserStore from "../../services/context";

const RecruiterLayout = () => {
  // const { user } = useUserStore();
  // const router = useRouter();
  // useEffect(() => {
  //   if (user) {
  //     router.replace("/recruiter/home/");
  //   }
  // }, []);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default RecruiterLayout;
