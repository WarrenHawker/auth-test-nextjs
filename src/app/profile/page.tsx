import { headers } from "next/headers";

const ProfilePage = () => {
  const headersList = headers();
  const authError = headersList.get("x-auth-error");

  if (authError) {
    return (
      <main>
        <h1>Sorry, you have to be signed in to view this page</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>Profile page - shows details of signed in user</h1>
    </main>
  );
};

export default ProfilePage;
