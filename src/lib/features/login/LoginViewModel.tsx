import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

const useLoginVM = () => {
  const router = useRouter();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => success(tokenResponse),
    onError: () => console.log("Login Failed"),
  });

  const success = (
    tokenResponse: Omit<
      TokenResponse,
      "error" | "error_description" | "error_uri"
    >
  ) => {
    const tk = tokenResponse.access_token;
    sessionStorage.setItem("tk", tk);
    router.push("/home");
  };

  return {
    login,
  };
};

export default useLoginVM;
