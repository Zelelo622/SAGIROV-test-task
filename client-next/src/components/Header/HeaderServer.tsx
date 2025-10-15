import HeaderClient from "./HeaderClient";
import { MenuItem } from "./types";

async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menuitem`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Failed to fetch menu items:", res.statusText);
      return [];
    }

    return await res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
}

export default async function HeaderServer() {
  const menuItems = await getMenuItems();

  return <HeaderClient menuItems={menuItems} />;
}
