import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { Box } from "./Box";
import { Input } from "./Input";
import { VALID_PHONE_NUMBER_LENGTH } from "../consts";

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

  const handleGetCode = async () => {
    const res = await postPhoneNumber(phone);

    if (res.ok) setIsSmsSent(true);
  };

  const handlePhoneChange = (value: string) => setPhone(value.slice(1));

  const handleConfirmNumber = async () => {
    const res = await postConfirmationCode(code);

    if (res.ok) {
      const json = await res.json();

      if (json.data.accessToken && json.data.refreshToken) {
        localStorage.setItem("accessToken", json.data.accessToken);
        localStorage.setItem("refreshToken", json.data.refreshToken);
        router.push("/");
      }
    }
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
          ) : undefined}
        </>
      ) : (
        <>
          <Input
            type="tel"
            label="Phone number"
            value={`+${phone}`}
            onChange={handlePhoneChange}
          />
          {phone.length > VALID_PHONE_NUMBER_LENGTH ? (
            <Box
              className="text-white bg-black flex justify-center"
              onClick={handleGetCode}
            >
              Get code via SMS
            </Box>
          ) : undefined}
        </>
      )}
    </div>
  );
};
