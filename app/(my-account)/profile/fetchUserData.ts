export async function fetchUserData() {
  const response = await fetch(`/api/user/get`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  console.log("Response from fetchUserData.ts is", response);

  if (!response.ok) {
    const status = response.status;
    console.error(`Failed to fetch user data. Status ${status}`);
    return {
      status,
      data: null,
      error: `Request failed with status ${status}`,
    };
  }

  const data = await response.json();
  console.log("Data from fetchUserData:", data);
  return data;
}
