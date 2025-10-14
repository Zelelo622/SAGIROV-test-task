import HeaderClient from "./HeaderClient";
import { MenuItem } from "./types";

async function getMenuItems(): Promise<MenuItem[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menuitem`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.error("Failed to fetch menu items");
    return [];
  }

  return res.json();
}

export default async function HeaderServer() {
  const menuItems = await getMenuItems();

  return <HeaderClient menuItems={menuItems} />;
}
