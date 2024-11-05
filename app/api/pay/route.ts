export const GET = async () => {
  const response = await fetch("https://api.yookassa.ru/v3/payments", {
    body: JSON.stringify({
      amount: {
        value: "999.00",
        currency: "RUB",
      },
      confirmation: {
        type: "redirect",
        return_url: "https://equix.ru/profile/guide",
      },
      capture: true,
      description: "EQUIX",
      receipt: {
        customer: {
          email: "user@example.com",
        },
        items: [
          {
            description: "equix",
            quantity: 1,
            amount: {
              value: "999.00",
              currency: "RUB",
            },
            vat_code: 1,
            payment_mode: "full_prepayment",
            payment_subject: "commodity",
          },
        ],
      },
    }),
    headers: {
      Authorization:
        "Basic NDU3Nzg3OmxpdmVfa2E1Yklrcm5DNkltZl9NdnhIVDA3MGxJbVFRN1lSM3RlTFdHZE9iZkVCTQ==",
      "Content-Type": "application/json",
      "Idempotence-Key": Date.now(),
      "457787": "live_ka5bIkrnC6Imf_MvxHT070lImQQ7YR3teLWGdObfEBM",
    },
    method: "POST",
  });

  const json = await response.json();

  return Response.json(json);
};
