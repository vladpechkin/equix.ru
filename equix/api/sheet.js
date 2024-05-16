const handler = async (req, res) => {
  const body = JSON.parse(req.body);

  await fetch(
    "https://script.google.com/macros/s/AKfycbwHFmLkJHbA3xFhK0iJBgMyC55Mx3-oQg6JebFSijqHIUqamxTDv9j81uOX8C7sp8R-/exec",
    { method: "POST", body: JSON.stringify(body) }
  );

  res.status(200).json("Executed");
};

export default handler;
