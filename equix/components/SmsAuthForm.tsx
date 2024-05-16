import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { Box } from "./Box";
import { Input } from "./Input";

interface Props {
  codeLength: number;
  postPhoneNumber: (phoneNumber: string) => Promise<Response>;
  postConfirmationCode: (code: string) => Promise<Response>;
}

export const SmsAuthForm: FC<Props> = (props) => {
  const { codeLength, postPhoneNumber, postConfirmationCode } = props;
  const [phone, setPhone] = useState("");
  const [isSmsSent, setIsSmsSent] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleGetCode = () => {
    postPhoneNumber(phone).then((res) => res.ok && setIsSmsSent(true));
  };

  const handlePhoneChange = () => (value: string) => setPhone(value.slice(1));

  const handleConfirmNumber = () => {
    postConfirmationCode(code)
      .then((res) => (res.ok ? res.json() : null))
      .then((res) => {
        if (res.data.accessToken && res.data.refreshToken) {
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          router.push("/");
        }
      });
  };

  return (
    <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-2">
      {isSmsSent ? (
        <>
          <Input type="text" label="SMS code" value={code} onChange={setCode} />
          {code.length === codeLength ? (
            <Box
              className="text-white bg-black flex justify-center"
              onClick={handleConfirmNumber}
            >
              Confirm phone number
            </Box>
          ) : null}
        </>
      ) : (
        <>
          <Input
            type="tel"
            label="Phone number"
            value={`+${phone}`}
            onChange={handlePhoneChange}
          />
          {phone.length > 10 ? (
            <Box
              className="text-white bg-black flex justify-center"
              onClick={handleGetCode}
            >
              Get code via SMS
            </Box>
          ) : null}
        </>
      )}
    </div>
  );
};
