import { useState } from "react";


export default function useToggleMenu() {
  const [isToggleMenu, setIsToggleMenu] = useState(false)

  const handleToggleMenu = () => isToggleMenu ? setIsToggleMenu(false) : setIsToggleMenu(true)

  return { isToggleMenu, handleToggleMenu }
}