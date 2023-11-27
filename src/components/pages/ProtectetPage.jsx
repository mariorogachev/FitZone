import { UserButton } from "@clerk/clerk-react";

function ProtectedPage() {
  return (
    <>
      <h1>Protected page</h1>
      <UserButton />
    </>
  );
}

export default ProtectedPage;